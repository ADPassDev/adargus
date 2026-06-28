// Fetch identity-related CVEs from authoritative primary sources:
//   - CISA Known Exploited Vulnerabilities (KEV) catalog  → "actively exploited"
//   - NVD CVE 2.0 API                                     → recent + CVSS severity
//
// Used both to seed src/data/cves.json and by the daily generator.
// Run directly to refresh the file:  node scripts/lib/cves.mjs

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const KEV_URL =
  'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';
const NVD_URL = 'https://services.nvd.nist.gov/rest/json/cves/2.0';

// Identity / access / directory keywords. A CVE matches if any appears in its
// title/description (case-insensitive, word-ish boundaries where it matters).
const IDENTITY_KEYWORDS = [
  'active directory',
  'kerberos',
  'ldap',
  'saml',
  'oauth',
  'openid',
  'single sign-on',
  'sso',
  'ntlm',
  'netlogon',
  'adfs',
  'entra',
  'azure ad',
  'okta',
  'authentication',
  'credential',
  'identity provider',
  'session token',
  'password',
  'domain controller',
];

const KEYWORD_RE = new RegExp(
  '\\b(' + IDENTITY_KEYWORDS.map((k) => k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|') + ')\\b',
  'i'
);

const MAX_ITEMS = 14;

function isIdentityRelated(text) {
  return KEYWORD_RE.test(text || '');
}

async function fetchKev() {
  try {
    const res = await fetch(KEV_URL, { headers: { 'User-Agent': 'adargus-knowledge-center' } });
    if (!res.ok) throw new Error(`KEV HTTP ${res.status}`);
    const data = await res.json();
    return (data.vulnerabilities || [])
      // Match on the vulnerability name / product only (not the free-text
      // shortDescription) — keeps precision high and avoids pulling in
      // unrelated bugs that merely mention "credential" in passing.
      .filter((v) =>
        isIdentityRelated(`${v.vulnerabilityName} ${v.product} ${v.vendorProject}`)
      )
      .map((v) => ({
        id: v.cveID,
        title: v.vulnerabilityName || `${v.vendorProject} ${v.product}`,
        vendor: v.vendorProject,
        severity: 'EXPLOITED',
        score: null,
        kev: true,
        date: v.dateAdded,
        url: `https://nvd.nist.gov/vuln/detail/${v.cveID}`,
      }));
  } catch (err) {
    console.warn('[cves] KEV fetch failed:', err.message);
    return [];
  }
}

function isoDaysAgo(days) {
  const d = new Date(Date.now() - days * 86400000);
  return d.toISOString().split('.')[0] + '.000';
}

async function fetchNvdFor(keyword) {
  const params = new URLSearchParams({
    keywordSearch: keyword,
    pubStartDate: isoDaysAgo(120),
    pubEndDate: new Date().toISOString().split('.')[0] + '.000',
    resultsPerPage: '20',
  });
  const headers = { 'User-Agent': 'adargus-knowledge-center' };
  if (process.env.NVD_API_KEY) headers.apiKey = process.env.NVD_API_KEY;

  const res = await fetch(`${NVD_URL}?${params}`, { headers });
  if (!res.ok) throw new Error(`NVD HTTP ${res.status} for "${keyword}"`);
  const data = await res.json();
  return (data.vulnerabilities || []).map((entry) => {
    const cve = entry.cve;
    const desc =
      (cve.descriptions || []).find((d) => d.lang === 'en')?.value || cve.id;
    const metric =
      cve.metrics?.cvssMetricV31?.[0] ||
      cve.metrics?.cvssMetricV30?.[0] ||
      cve.metrics?.cvssMetricV2?.[0];
    return {
      id: cve.id,
      title: desc.length > 140 ? desc.slice(0, 137) + '…' : desc,
      vendor: cve.sourceIdentifier || '',
      severity: metric?.cvssData?.baseSeverity || metric?.baseSeverity || 'UNRATED',
      score: metric?.cvssData?.baseScore ?? null,
      kev: false,
      date: cve.published,
      url: `https://nvd.nist.gov/vuln/detail/${cve.id}`,
    };
  });
}

async function fetchNvd() {
  // A few high-signal phrases. Sequential with a delay to respect the NVD
  // unauthenticated rate limit (5 requests / 30s).
  const phrases = ['Active Directory', 'Kerberos', 'SAML', 'authentication bypass'];
  const out = [];
  for (const p of phrases) {
    try {
      out.push(...(await fetchNvdFor(p)));
    } catch (err) {
      console.warn('[cves] NVD fetch failed:', err.message);
    }
    await new Promise((r) => setTimeout(r, process.env.NVD_API_KEY ? 700 : 6500));
  }
  return out;
}

export async function fetchIdentityCves() {
  const [kev, nvd] = await Promise.all([fetchKev(), fetchNvd()]);

  // Merge, deduping by CVE id. KEV wins the "exploited" flag; prefer an NVD
  // CVSS severity when we have one.
  const byId = new Map();
  for (const item of [...kev, ...nvd]) {
    const existing = byId.get(item.id);
    if (!existing) {
      byId.set(item.id, item);
      continue;
    }
    byId.set(item.id, {
      ...existing,
      kev: existing.kev || item.kev,
      severity:
        existing.severity !== 'EXPLOITED' && existing.severity !== 'UNRATED'
          ? existing.severity
          : item.severity !== 'EXPLOITED' && item.severity !== 'UNRATED'
            ? item.severity
            : existing.severity,
      score: existing.score ?? item.score,
      title: existing.title.length >= item.title.length ? existing.title : item.title,
    });
  }

  const severityRank = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3, UNRATED: 4 };
  const items = [...byId.values()].sort((a, b) => {
    // Actively-exploited first, then by recency.
    if (a.kev !== b.kev) return a.kev ? -1 : 1;
    const sa = severityRank[a.severity] ?? 4;
    const sb = severityRank[b.severity] ?? 4;
    if (sa !== sb && (a.kev === b.kev)) {
      // within same exploited-tier, harder severity first
    }
    return new Date(b.date) - new Date(a.date);
  });

  return items.slice(0, MAX_ITEMS);
}

// CLI: refresh src/data/cves.json
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('cves.mjs')) {
  const here = dirname(fileURLToPath(import.meta.url));
  const outPath = resolve(here, '../../src/data/cves.json');
  const items = await fetchIdentityCves();
  const payload = { updated: new Date().toISOString(), items };
  await writeFile(outPath, JSON.stringify(payload, null, 2) + '\n');
  console.log(`[cves] wrote ${items.length} CVEs to ${outPath}`);
}
