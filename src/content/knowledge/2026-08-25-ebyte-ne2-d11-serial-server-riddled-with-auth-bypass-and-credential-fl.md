---
title: "Ebyte NE2-D11 Serial Server Riddled with Auth Bypass and Credential Flaws"
date: 2026-08-25
category: advisory
summary: "CISA warns Ebyte NE2-D11 devices carry critical auth-bypass and credential-exposure flaws (CVSS 9.8) enabling unauthenticated admin access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-237-06"
cves: ["CVE-2026-73125"]
---
CISA has published an ICS advisory for the Ebyte NE2-D11 (firmware FW-9167-0-11), detailing a cluster of authentication and access-control weaknesses. The most severe, CVE-2026-73125, stems from the web management interface failing to consistently enforce authentication, letting an unauthenticated remote attacker reach administrative functions. Additional issues include cleartext transmission of sensitive data, insufficiently protected credentials, client-side authentication, session hijacking via CSRF, and missing brute-force protections \v3 score reaching 9.8.

For identity-focused defenders, the combination is notable: attackers can obtain admin access, harvest stored or in-transit credentials, and modify device configuration without valid authentication. Because these serial-to-Ethernet gateways are deployed worldwide in critical manufacturing and energy environments, compromised devices can serve as a foothold or credential source that feeds into broader network and identity attacks.

What to take away: treat exposed NE2-D11 units as untrusted—segment them off the network, block internet-facing management, rotate any credentials that may have traversed these devices, and apply vendor fixes or mitigations as soon as available.
