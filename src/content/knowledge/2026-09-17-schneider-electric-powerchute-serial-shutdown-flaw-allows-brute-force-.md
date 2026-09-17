---
title: "Schneider Electric PowerChute Serial Shutdown Flaw Allows Brute-Force Account Access"
date: 2026-09-17
category: advisory
summary: "CVE-2026-13348 in PowerChute Serial Shutdown lets attackers brute-force user accounts due to missing lockout controls, risking unauthorized access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-260-07"
cves: ["CVE-2026-13348"]
---
Schneider Electric disclosed a vulnerability (CVE-2026-13348) in its PowerChute Serial Shutdown UPS management software, affecting versions 1.5 and earlier as well as 1.6. The flaw stems from improper restriction of excessive authentication attempts (CWE-307), meaning the product lacks adequate lockout protections against repeated login tries. This allows an attacker to perform brute-force or dictionary attacks to gain unauthorized access to a user account, potentially leading to disruption of operations and exposure of system data. The issue carries a CVSS v3 base score of 5.3.

While PowerChute is UPS management software rather than a directory service, the vulnerability is squarely an authentication/credential issue relevant to identity security. Weak brute-force protections on any account-based system expand an attacker's foothold, and compromised operational software in critical infrastructure environments can serve as a stepping stone toward broader network and identity compromise.

What to take away: Apply Schneider Electric's remediation promptly, and treat missing rate-limiting/lockout controls as a genuine identity risk—enforce account lockout, monitor for repeated failed logins, and segment management software from sensitive identity infrastructure.
