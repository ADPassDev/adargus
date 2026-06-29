---
title: "Snowflake customer breaches: infostealer-stolen passwords, no MFA, ~165 victims"
date: 2024-06-10
category: breach
summary: "UNC5537 used credentials harvested by infostealer malware — some years old and never rotated — to loot 100+ Snowflake customer databases, including AT&T and Ticketmaster."
sourceName: "Mandiant / Google Threat Intelligence"
sourceUrl: "https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion"
cves: []
---

In 2024 a financially motivated actor Mandiant tracks as **UNC5537** ran a
sweeping data-theft and extortion campaign against customers of the cloud data
platform **Snowflake**. There was no flaw in Snowflake itself — every intrusion
traced back to **compromised customer credentials**, the majority harvested by
**infostealer malware** from non-Snowflake systems, some dating back to 2020.

The targeted customer instances **did not require MFA**, and in many cases the
credentials had **not been rotated for as long as four years**. Roughly **165
organizations** were affected. Among the largest losses: **AT&T** call and text
metadata for ~110 million customers, and **Ticketmaster** data for ~560 million
individuals. The actor then extorted victims and sold data on criminal forums.

**Why it matters for identity teams.** Passwords alone are not a control. An
infostealer infection on a contractor's laptop became a doorway into enterprise
data warehouses — because MFA wasn't enforced and stale credentials were never
retired.

**What to take away:**

- Enforce MFA on data platforms and SaaS, not just user endpoints.
- Rotate credentials regularly and kill ones that go unused.
- Treat infostealer-harvested credentials as a primary initial-access vector;
  monitor for their reuse.
