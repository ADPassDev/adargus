---
title: "CISA Warns of Auth Bypass and Weak Credential Flaws in Botslab G980H Dashcams"
date: 2026-09-24
category: advisory
summary: "Multiple vulnerabilities in Botslab G980H dashcams let attackers bypass authentication, use hard-coded/weak credentials, and access privileged functions."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-267-01"
cves: ["CVE-2026-84399", "CVE-2026-82566", "CVE-2026-85496", "CVE-2026-77967", "CVE-2026-88761", "CVE-2026-82716", "CVE-2026-84403", "CVE-2026-75558", "CVE-2026-81630", "CVE-2026-87118", "CVE-2026-82708", "CVE-2026-79959", "CVE-2026-82585", "CVE-2026-88956"]
---
CISA published an ICS advisory covering a large set of vulnerabilities in Botslab G980H dashcam firmware. The flaws span classic identity and access weaknesses: incorrect authorization, insufficient session expiration, predictable identifier generation, authentication bypass via capture-replay, use of weak and hard-coded credentials, and missing authentication for critical functions. Successful exploitation could let an attacker skip authentication controls, reach sensitive data and privileged device functionality, alter configuration, and disrupt operation, with a top CVSS v3 score of 8.8.

While dashcams are consumer/IoT devices rather than enterprise directory infrastructure, the underlying issues are core credential and session-management failures that mirror the same authentication weaknesses defenders fight in identity systems. Hard-coded and weak credentials plus replay-able authentication are exactly the primitives that enable device takeover and lateral movement.

What to take away: This is an IoT firmware advisory, but it reinforces a universal identity lesson
inventory devices for hard-coded/weak credentials, enforce session expiration, and treat any authentication-bypass flaw as a priority for patching or network isolation.
