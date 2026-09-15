---
title: "mySCADA myPRO Manager Auth Flaws Allow Unauthenticated Access to Privileged Functions"
date: 2026-09-15
category: advisory
summary: "CISA advisory warns of missing authentication/authorization flaws (CVSS 9.8) in mySCADA myPRO Manager <=2.1 exposing privileged management functions."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-03"
cves: ["CVE-2026-73807", "CVE-2026-82567"]
---
CISA published an ICS advisory covering two critical vulnerabilities (CVE-2026-73807, CVE-2026-82567) in mySCADA myPRO Manager versions 2.1 and earlier. The core issue is broken access control: the command API fails to enforce authentication and authorization for privileged functions, meaning an unauthenticated attacker with network access could invoke management operations or send arbitrary SMS messages via a connected GSM modem. Both flaws carry a CVSS v3 score of 9.8.

While mySCADA is an OT/SCADA product rather than a traditional identity platform, the vulnerabilities are fundamentally identity and access failures — missing authentication and missing authorization for critical functions. Systems like this are deployed across critical manufacturing, energy, water, food, and transportation sectors worldwide, raising the operational stakes of an access bypass.

What to take away: any internet- or network-exposed instance of myPRO Manager <=2.1 should be treated as reachable by unauthenticated attackers. Organizations should apply vendor mitigations, restrict network access to the management API, and segment OT environments to reduce exposure.
