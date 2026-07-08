---
title: "Hitachi Energy PROMOD V Uses Insecure HTTP, Enabling Credential Theft"
date: 2026-07-07
category: advisory
summary: "A cleartext HTTP transmission flaw (CVE-2026-10763) in PROMOD V could let attackers intercept credentials, hijack sessions, or gain unauthorized access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-188-02"
cves: ["CVE-2026-10763"]
---
CISA published an ICS advisory for Hitachi Energy's PROMOD V (versions 1.0.10 and prior), affected by CVE-2026-10763. The product relies on insecure HTTP rather than HTTPS due to the third-party Digipede server lacking HTTPS support, allowing an attacker positioned on the network to intercept or tamper with data in transit. CISA rates it CVSS v3 7.1.

For identity security, the concern is direct: cleartext transmission exposes credentials and session tokens, opening the door to credential theft, session hijacking, and subsequent unauthorized access into an energy-sector environment. Harvested credentials can serve as an entry point for wider lateral movement and potential domain compromise.

What to take away: organizations running PROMOD V should upgrade to version 1.0.11 and explicitly enable HTTPS on the Digipede server, and treat any credentials that may have traversed HTTP as potentially exposed.
