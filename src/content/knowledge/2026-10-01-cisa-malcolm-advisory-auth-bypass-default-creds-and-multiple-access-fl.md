---
title: "CISA Malcolm Advisory: Auth Bypass, Default Creds and Multiple Access Flaws"
date: 2026-10-01
category: advisory
summary: "CISA's Malcolm network analysis tool has multiple vulnerabilities including authentication bypass, missing auth, and use of default credentials (CVSS 8.8)."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-254-01"
cves: ["CVE-2026-90443"]
---
CISA published an ICS advisory for its own Malcolm network traffic analysis platform, disclosing a cluster of vulnerabilities carrying a CVSS score of 8.8. Several of these are directly identity- and access-related: Authentication Bypass by Spoofing, Missing Authentication for Critical Function, Missing Authorization, Incorrect Authorization, Use of Default Credentials, and Use of a Password Hash with Insufficient Computational Effort. The advisory also lists web-layer flaws such as XSS, OS command injection, path traversal, SSRF, improper certificate validation, and open redirect.

The mix of broken authentication, weak authorization, and default credentials means an attacker could potentially reach sensitive functions without valid credentials or escalate access on affected deployments. Because Malcolm is deployed worldwide across Energy, IT, and Water/Wastewater sectors, exposed or internet-reachable instances present a meaningful risk to the environments monitoring those networks.

What to take away: audit any Malcolm deployments, rotate and eliminate default credentials, restrict network exposure, and apply vendor-provided fixes. Weak authentication and default-credential findings like these are classic footholds for lateral movement into the broader identity infrastructure.
