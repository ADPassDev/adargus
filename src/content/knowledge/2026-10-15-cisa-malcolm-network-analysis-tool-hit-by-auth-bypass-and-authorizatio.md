---
title: "CISA Malcolm Network Analysis Tool Hit by Auth Bypass and Authorization Flaws"
date: 2026-10-15
category: advisory
summary: "Multiple vulnerabilities in CISA's Malcolm tool (<=v26.08.0) allow authentication bypass and improper authorization, risking unauthorized access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-280-01"
cves: ["CVE-2026-107336", "CVE-2026-107333", "CVE-2026-107362", "CVE-2026-107361", "CVE-2026-107337", "CVE-2026-107335", "CVE-2026-107334"]
---
CISA has issued an ICS advisory for its own Malcolm network traffic analysis platform, disclosing five vulnerability classes affecting versions up to v26.08.0, with a top CVSS v3 score of 8.1. The issues include Authentication Bypass by Spoofing, Incorrect Authorization, Authentication Bypass Using an Alternate Path or Channel, SSRF, and CSRF. One flaw (CVE-2026-107336) stems from an nginx reverse proxy misconfiguration where a case-insensitive location matcher paired with a case-sensitive rewrite lets crafted path requests reach the Arkime backend while skipping authentication controls.

For identity and access security, the authentication bypass and incorrect authorization issues are the core concern: they can let an attacker reach protected backend services without valid credentials, undermining access controls on a tool deployed across Energy, IT, and Water/Wastewater critical infrastructure worldwide.

What to take away: organizations running Malcolm should upgrade to a patched release and review reverse-proxy auth enforcement, since case-sensitivity mismatches between matchers and rewrites are a recurring way auth gates get silently bypassed.
