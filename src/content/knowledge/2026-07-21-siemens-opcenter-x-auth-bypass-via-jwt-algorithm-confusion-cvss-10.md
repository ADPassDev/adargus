---
title: "Siemens Opcenter X Auth Bypass via JWT Algorithm Confusion (CVSS 10)"
date: 2026-07-21
category: advisory
summary: "A critical flaw in Siemens Opcenter X before V2604 lets unauthenticated attackers forge JWTs and impersonate any user, including admins."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-202-03"
cves: ["CVE-2026-56451"]
---
Siemens has disclosed a maximum-severity (CVSS 10) authentication bypass in Opcenter X versions prior to V2604, tracked as CVE-2026-56451. The root cause is improper validation of the algorithm specified in the JSON Web Token (JWT) header, a classic JWT algorithm-confusion weakness. Because the application trusts the attacker-controllable `alg` field, a remote unauthenticated attacker can forge arbitrary tokens and impersonate any account.

The practical impact is total: an attacker can assume administrative identities and gain full unauthorized access to the application without any credentials. Opcenter X is deployed worldwide in critical manufacturing environments, raising the stakes for both identity integrity and operational technology exposure.

What to take away: JWT trust decisions must never rely on the token's self-declared algorithm—servers should enforce an expected signing algorithm and reject mismatches. Organizations running Opcenter X should update to V2604 or later immediately and review authentication logs for anomalous or unexpected privileged access.
