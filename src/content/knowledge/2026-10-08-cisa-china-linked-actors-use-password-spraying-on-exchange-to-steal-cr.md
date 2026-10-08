---
title: "CISA: China-linked Actors Use Password Spraying on Exchange to Steal Credentials"
date: 2026-10-08
category: advisory
summary: "CISA warns Chinese state-linked actors combine botnets and hands-on hacking, including password spraying on Exchange servers, to steal emails and credentials."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-281a"
cves: ["CVE-2014-6278", "CVE-2015-3306", "CVE-2015-5477", "CVE-2016-3081", "CVE-2019-11510", "CVE-2021-22205", "CVE-2021-3199", "CVE-2023-22894"]
---
CISA has issued an advisory detailing activity by Chinese government-linked threat actors, enabled by the Integrity Technology Group, who blend automated scanning, large-scale botnets, and manual exploitation to breach organizations worldwide, including US critical infrastructure. From an identity perspective, the standout tactics are password spraying against Microsoft Exchange servers and the exfiltration of emails and credentials via scripts, with persistence established through VPN software.

The campaign exploits a range of older, unpatched vulnerabilities (including CVEs dating back to 2014) and uses cross-site scripting and injection attacks to gain footholds. Once inside, credential theft fuels lateral movement and continued access, underscoring how exposed authentication surfaces remain a primary target for state-sponsored actors.

What to take away: enforce MFA across all services (especially Exchange and VPN), monitor for password spraying patterns, disable unused services and ports, and apply patches promptly to shrink the attack surface these actors rely on.
