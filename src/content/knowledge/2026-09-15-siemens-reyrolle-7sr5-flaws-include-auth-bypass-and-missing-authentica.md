---
title: "Siemens Reyrolle 7SR5 flaws include auth bypass and missing authentication"
date: 2026-09-15
category: advisory
summary: "CISA advisory flags multiple vulnerabilities in Siemens Reyrolle 7SR5 protection relays, including authentication bypass and missing authentication for critical functions."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-05"
cves: ["CVE-2024-42384", "CVE-2024-42385", "CVE-2024-42386", "CVE-2024-42391", "CVE-2024-42392", "CVE-2026-62645", "CVE-2026-62646", "CVE-2026-62647", "CVE-2026-62648", "CVE-2026-62649", "CVE-2026-62650", "CVE-2026-62652", "CVE-2026-62653", "CVE-2026-62654"]
---
CISA has published an ICS advisory for Siemens Reyrolle 7SR5 protection devices used in the energy sector worldwide. Versions before V2.70 are affected by numerous vulnerabilities, several of which are directly identity- and access-related: Missing Authentication for Critical Function, Authentication Bypass Using an Alternate Path or Channel, and Insufficient Entropy. The highest-rated issue carries a CVSS v3 score of 9.8.

For operators, the authentication-related weaknesses are particularly concerning because they could let an attacker interact with critical device functions without valid credentials, undermining access controls on grid protection equipment. Siemens has released an updated version and recommends upgrading to the latest firmware.

What to take away: While this is OT/ICS gear rather than Active Directory, the auth-bypass and missing-authentication themes mirror common identity failures — treat these relays as high-value assets, patch to V2.70+, and enforce network segmentation and access restrictions around them.
