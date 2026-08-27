---
title: "Rockwell OTTO Fleet Manager Uses Weak Bcrypt Work Factor, Easing Hash Cracking"
date: 2026-08-27
category: advisory
summary: "CISA advisory warns that OTTO Fleet Manager \u2264V2.36.2 stores password hashes with insufficient computational effort, aiding offline brute-force attacks."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-239-03"
cves: ["CVE-2026-75112"]
---
CISA has published an ICS advisory (CVE-2026-75112) for Rockwell Automation's OTTO Fleet Manager, affecting versions V2.36.2 and earlier. The flaw stems from an insufficient work factor in the product's bcrypt password hashing implementation. This weakness lowers the computational cost required for an attacker to run offline brute-force attacks against stored credential hashes.

The practical risk arises if an attacker obtains an unencrypted system backup: weakly hashed passwords could be recovered far more quickly than a properly tuned bcrypt configuration would allow. With a CVSS v3 score of 6.8, the issue is credential-focused rather than a remote-execution threat, but recovered credentials could be reused to gain access to fleet management systems in critical manufacturing and transportation environments.

What to take away: password hash strength matters as much as storage security. Organizations should protect and encrypt backups, apply vendor updates that increase the bcrypt work factor, and force credential rotation where compromise of backups is plausible.
