---
title: "Reflected XSS in Siemens Teamcenter Auth Flow Enables Session Hijacking"
date: 2026-09-15
category: advisory
summary: "An unauthenticated XSS flaw in Teamcenter's /auth/ redirect lets attackers hijack authenticated user sessions via a crafted URL."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-07"
cves: ["CVE-2026-58113"]
---
Siemens has disclosed a reflected cross-site scripting vulnerability (CVE-2026-58113, CVSS 6.1) in the authentication redirect flow (/auth/) of its Teamcenter product lifecycle management platform. Because affected versions fail to properly encode user-supplied input, an unauthenticated remote attacker can craft a malicious URL that injects JavaScript into a victim's authenticated session.

The identity risk here is session-oriented: successful exploitation allows an attacker to read data or perform actions within the victim's Teamcenter session, effectively riding the user's authenticated context without needing their credentials. This is particularly relevant for critical manufacturing and IT environments where Teamcenter holds sensitive engineering and product data. Fixed versions are available across V2412, V2506, V2512, and V2606 branches.

What to take away: XSS in authentication flows is a classic vector for session-based account takeover. Organizations running Teamcenter should update to the patched versions promptly and encourage users to be cautious of untrusted links pointing at Teamcenter instances.
