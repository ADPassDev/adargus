---
title: "Daktronics Controller Firmware Flaws Allow Unauthenticated Root via Hard-coded Credentials"
date: 2026-06-25
category: advisory
summary: "CISA warns of path traversal, unrestricted file upload, and hard-coded credential flaws in Daktronics Controller Firmware enabling unauthenticated root-level takeover."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-176-04"
cves: ["CVE-2026-28701"]
---
CISA has published an ICS advisory for Daktronics Controller Firmware (VFC-DMP-5000, DMP-5000, and DMP-8000 models) covering multiple vulnerabilities, including a path traversal issue (CVE-2026-28701), unrestricted upload of dangerous file types, and—most notably from an identity perspective—use of hard-coded credentials. Successful chaining of these flaws could grant an unauthenticated remote attacker complete root-level access and control of the affected systems, with a CVSS v3 base score of 8.1.

The hard-coded credentials weakness is the key identity-related concern: baked-in accounts cannot be rotated or disabled by operators, giving attackers a reliable foothold that bypasses normal authentication. These display controllers are deployed worldwide across commercial facilities, healthcare, emergency services, and IT sectors.

What to take away: Hard-coded credentials remain a recurring root cause in OT/ICS gear. Organizations running affected Daktronics firmware should apply vendor-fixed versions, isolate these devices from internet exposure, and segment them away from broader networks to limit credential-based compromise.
