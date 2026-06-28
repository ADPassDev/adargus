import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Knowledge Center — one Markdown file per report, generated daily by the
// roll-up agent (scripts/update-knowledge.mjs) or authored by hand.
const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    title: z.string(),
    // ISO date the report/source was published.
    date: z.coerce.date(),
    category: z.enum(['zero-day', 'breach', 'advisory']),
    // Short one-line teaser shown on cards.
    summary: z.string(),
    // Primary source attribution.
    sourceName: z.string(),
    sourceUrl: z.string().url(),
    // Optional: CVE IDs referenced by this report.
    cves: z.array(z.string()).default([]),
    // Hide without deleting.
    draft: z.boolean().default(false),
  }),
});

export const collections = { knowledge };
