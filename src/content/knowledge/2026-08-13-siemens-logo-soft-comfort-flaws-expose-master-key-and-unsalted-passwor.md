---
title: "Siemens LOGO! Soft Comfort flaws expose master key and unsalted password hashes"
date: 2026-08-13
category: advisory
summary: "Hardcoded AES key and unsalted hashing in Siemens LOGO! Soft Comfort let local attackers decrypt project data and crack passwords."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-225-13"
cves: ["CVE-2026-57262", "CVE-2026-57263"]
---
CISA published an advisory covering two vulnerabilities in Siemens LOGO! Soft Comfort versions prior to 9. The software uses a static, hardcoded AES master key to encrypt project files (CVE-2026-57262), meaning a local attacker who extracts the key can decrypt protected project data or strip project passwords entirely. A second issue (CVE-2026-57263) stems from password hashes being stored without salting, opening the door to offline dictionary and brute-force attacks against those credentials.

While this targets engineering/project-file protection rather than a directory service, it is fundamentally a credential and cryptographic key handling failure. Successful exploitation grants unauthorized access to or modification of sensitive project logic and configurations in commercial facilities and transportation environments worldwide. Both flaws carry a CVSS v3 score of 6.8.

What to take away: hardcoded keys and unsalted password hashes remain recurring weaknesses even in OT tooling. Update to the latest version, restrict local access to engineering workstations, and treat any exposed project files as compromised credentials.
