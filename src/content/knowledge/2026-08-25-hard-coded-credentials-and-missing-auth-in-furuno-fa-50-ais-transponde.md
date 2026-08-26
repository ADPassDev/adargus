---
title: "Hard-coded Credentials and Missing Auth in FURUNO FA-50 AIS Transponder"
date: 2026-08-25
category: advisory
summary: "CISA advisory warns FURUNO FA-50 AIS transponders contain hard-coded credentials and missing authentication, allowing attackers to alter device settings."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-237-07"
cves: ["CVE-2026-59769"]
---
CISA has published an ICS advisory for the FURUNO FA-50 Class B AIS Transponder, used worldwide in maritime transportation. The device suffers from use of hard-coded credentials and missing authentication for a critical function (CVE-2026-59769, CVSS v3 9.1). An attacker who knows the credentials and has access to the in-vessel network can reach the settings screen and alter device configuration.

From an identity/access perspective, this is a classic authentication-weakness case: static, non-rotatable credentials baked into firmware effectively remove any meaningful access control once an attacker gains network reach. Because production of the product ended in October 2020, FURUNO will not release software fixes, leaving network segmentation and access restriction as the only practical defenses.

What to take away: hard-coded credentials remain a persistent identity risk in embedded and legacy OT/ICS devices. Where patches are impossible, isolate affected equipment on restricted networks and tightly control who can reach management interfaces.
