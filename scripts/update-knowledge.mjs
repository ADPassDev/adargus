// Daily Knowledge Center roll-up agent.
//
//  1. Refreshes the identity CVE ticker (src/data/cves.json) from CISA KEV + NVD.
//  2. Pulls recent items from primary identity-security sources (RSS + JSON),
//     filters to identity-related EXPLOIT / BREACH news, dedupes against what
//     we've already published, and asks Claude to write an original summary for
//     each genuinely-relevant item, with attribution + a link to the source.
//
// Run:  ANTHROPIC_API_KEY=... node scripts/update-knowledge.mjs
//
// The CVE refresh needs no API key; article generation is skipped (with a
// warning) when ANTHROPIC_API_KEY is absent.

import { writeFile, readdir, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import Parser from 'rss-parser';
import Anthropic from '@anthropic-ai/sdk';
import { fetchIdentityCves } from './lib/cves.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, '..');
const KNOWLEDGE_DIR = resolve(ROOT, 'src/content/knowledge');
const CVES_PATH = resolve(ROOT, 'src/data/cves.json');

const RECENCY_DAYS = 4; // only consider items published within this window
const MAX_NEW_PER_RUN = 8; // cost guard
const MODEL = 'claude-opus-4-8';

// --- Primary sources -------------------------------------------------------
// RSS/Atom feeds. Each is best-effort: a failing feed is logged and skipped.
const RSS_SOURCES = [
  { name: 'Microsoft Security Response Center', url: 'https://msrc.microsoft.com/blog/feed/' },
  { name: 'Google Project Zero', url: 'https://googleprojectzero.blogspot.com/feeds/posts/default' },
  { name: 'Mandiant / Google Threat Intelligence', url: 'https://cloud.google.com/blog/topics/threat-intelligence/rss' },
  { name: 'The DFIR Report', url: 'https://thedfirreport.com/feed/' },
  { name: 'SpecterOps', url: 'https://posts.specterops.io/feed' },
  { name: 'CISA Cybersecurity Advisories', url: 'https://www.cisa.gov/cybersecurity-advisories/all.xml' },
  { name: 'Okta Security', url: 'https://sec.okta.com/rss.xml' },
];

// Identity / access / credential relevance — broad prefilter to cut API calls.
const IDENTITY_RE =
  /\b(active directory|kerberos|ldap|saml|oauth|openid|single sign-?on|sso|ntlm|netlogon|ad ?cs|adfs|entra|azure ad|okta|identity|credential|authentication|password|session token|mfa|2fa|domain controller|privilege escalation|account takeover)\b/i;
// Exploit / breach signal.
const THREAT_RE =
  /\b(zero[- ]?day|0[- ]?day|exploit|exploited|vulnerab|cve-|breach|leak|exposed|stolen|compromis|dump|infostealer|ransomware|attack|backdoor|rce|bypass)\b/i;

function withinRecency(dateStr) {
  if (!dateStr) return false;
  const t = new Date(dateStr).getTime();
  if (Number.isNaN(t)) return false;
  return Date.now() - t <= RECENCY_DAYS * 86400000;
}

async function gatherRss() {
  const parser = new Parser({ timeout: 20000, headers: { 'User-Agent': 'adargus-knowledge-center' } });
  const candidates = [];
  for (const src of RSS_SOURCES) {
    try {
      const feed = await parser.parseURL(src.url);
      for (const item of feed.items || []) {
        const date = item.isoDate || item.pubDate;
        if (!withinRecency(date)) continue;
        const text = `${item.title || ''} ${item.contentSnippet || item.content || ''}`;
        if (!IDENTITY_RE.test(text) || !THREAT_RE.test(text)) continue;
        candidates.push({
          sourceName: src.name,
          sourceUrl: item.link,
          title: (item.title || '').trim(),
          snippet: (item.contentSnippet || item.content || '').replace(/\s+/g, ' ').slice(0, 1200),
          date,
        });
      }
    } catch (err) {
      console.warn(`[knowledge] feed failed (${src.name}): ${err.message}`);
    }
  }
  return candidates;
}

async function gatherHibp() {
  // Have I Been Pwned — recent breaches (no auth needed for the breach list).
  try {
    const res = await fetch('https://haveibeenpwned.com/api/v3/breaches', {
      headers: { 'User-Agent': 'adargus-knowledge-center' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const breaches = await res.json();
    return (breaches || [])
      .filter((b) => withinRecency(b.AddedDate))
      .map((b) => ({
        sourceName: 'Have I Been Pwned',
        sourceUrl: `https://haveibeenpwned.com/PwnedWebsites#${b.Name}`,
        title: `${b.Title} breach — ${(b.PwnCount || 0).toLocaleString()} accounts exposed`,
        snippet: (b.Description || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 1200),
        date: b.AddedDate,
      }));
  } catch (err) {
    console.warn(`[knowledge] HIBP failed: ${err.message}`);
    return [];
  }
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

async function existingSourceUrls() {
  if (!existsSync(KNOWLEDGE_DIR)) return new Set();
  const files = (await readdir(KNOWLEDGE_DIR)).filter((f) => f.endsWith('.md'));
  const urls = new Set();
  for (const f of files) {
    const text = await readFile(resolve(KNOWLEDGE_DIR, f), 'utf8');
    const m = text.match(/^sourceUrl:\s*["']?([^"'\n]+)["']?\s*$/m);
    if (m) urls.add(m[1].trim());
  }
  return urls;
}

const SUMMARY_SCHEMA = {
  type: 'object',
  properties: {
    relevant: {
      type: 'boolean',
      description:
        'True ONLY if this is genuinely about an identity/access/credential-related exploit, vulnerability, or data breach (e.g. a new 0-day, an actively-exploited auth flaw, or an exposed credential/data dump). False for generic security news, marketing, or unrelated bugs.',
    },
    category: { type: 'string', enum: ['zero-day', 'breach', 'advisory', 'none'] },
    title: { type: 'string', description: 'A concise, factual headline in your own words (max ~90 chars).' },
    summary: { type: 'string', description: 'One-sentence teaser (max ~160 chars).' },
    body: {
      type: 'string',
      description:
        'A 2–3 short paragraph original summary in Markdown. Explain what happened and why it matters for identity/AD security. Do NOT copy the source text. End with a short "What to take away" angle if useful. No title heading.',
    },
    cves: { type: 'array', items: { type: 'string' }, description: 'Any CVE IDs referenced, e.g. CVE-2026-1234.' },
  },
  required: ['relevant', 'category', 'title', 'summary', 'body', 'cves'],
  additionalProperties: false,
};

async function summarize(client, item) {
  const prompt = `You are an analyst for AD Argus, a cybersecurity firm focused on identity and Active Directory security. Below is an item from a primary source. Decide whether it is genuinely identity/access/credential-related EXPLOIT or BREACH news, and if so write an ORIGINAL summary (never copy the source wording). Always be accurate and measured; do not invent details not supported by the source text.

SOURCE: ${item.sourceName}
URL: ${item.sourceUrl}
TITLE: ${item.title}
EXCERPT: ${item.snippet}`;

  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: 1500,
    output_config: { format: { type: 'json_schema', schema: SUMMARY_SCHEMA } },
    messages: [{ role: 'user', content: prompt }],
  });
  const text = resp.content.find((b) => b.type === 'text')?.text;
  if (!text) throw new Error('no text block in response');
  return JSON.parse(text);
}

function frontmatter(obj) {
  const esc = (s) => String(s).replace(/"/g, '\\"');
  return [
    '---',
    `title: "${esc(obj.title)}"`,
    `date: ${obj.date}`,
    `category: ${obj.category}`,
    `summary: "${esc(obj.summary)}"`,
    `sourceName: "${esc(obj.sourceName)}"`,
    `sourceUrl: "${esc(obj.sourceUrl)}"`,
    `cves: [${(obj.cves || []).map((c) => `"${esc(c)}"`).join(', ')}]`,
    '---',
    '',
  ].join('\n');
}

async function generateArticles() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('[knowledge] ANTHROPIC_API_KEY not set — skipping article generation.');
    return 0;
  }
  await mkdir(KNOWLEDGE_DIR, { recursive: true });

  const [rss, hibp] = await Promise.all([gatherRss(), gatherHibp()]);
  const seen = await existingSourceUrls();

  // Dedupe candidates by URL, drop already-published, newest first.
  const byUrl = new Map();
  for (const c of [...rss, ...hibp]) {
    if (!c.sourceUrl || seen.has(c.sourceUrl)) continue;
    if (!byUrl.has(c.sourceUrl)) byUrl.set(c.sourceUrl, c);
  }
  const candidates = [...byUrl.values()]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, MAX_NEW_PER_RUN);

  console.log(`[knowledge] ${candidates.length} new candidate(s) to evaluate.`);

  const client = new Anthropic();
  let written = 0;
  for (const item of candidates) {
    try {
      const r = await summarize(client, item);
      if (!r.relevant || r.category === 'none') {
        console.log(`[knowledge] skipped (not relevant): ${item.title}`);
        continue;
      }
      const isoDate = new Date(item.date).toISOString().split('T')[0];
      const file = `${isoDate}-${slugify(r.title || item.title)}.md`;
      const md =
        frontmatter({
          title: r.title,
          date: isoDate,
          category: r.category,
          summary: r.summary,
          sourceName: item.sourceName,
          sourceUrl: item.sourceUrl,
          cves: r.cves,
        }) + r.body.trim() + '\n';
      await writeFile(resolve(KNOWLEDGE_DIR, file), md);
      written++;
      console.log(`[knowledge] wrote ${file}`);
    } catch (err) {
      console.warn(`[knowledge] failed to summarize "${item.title}": ${err.message}`);
    }
  }
  return written;
}

async function refreshCves() {
  try {
    const items = await fetchIdentityCves();
    await writeFile(CVES_PATH, JSON.stringify({ updated: new Date().toISOString(), items }, null, 2) + '\n');
    console.log(`[knowledge] refreshed ${items.length} CVEs.`);
  } catch (err) {
    console.warn(`[knowledge] CVE refresh failed: ${err.message}`);
  }
}

async function main() {
  await refreshCves();
  const written = await generateArticles();
  console.log(`[knowledge] done. ${written} new article(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
