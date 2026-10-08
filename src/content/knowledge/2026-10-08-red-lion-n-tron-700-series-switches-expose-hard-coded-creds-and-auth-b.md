---
title: "Red Lion N-Tron 700 Series Switches Expose Hard-coded Creds and Auth Bypass Flaws"
date: 2026-10-08
category: advisory
summary: "CISA advisory details seven vulnerabilities in Red Lion N-Tron 700 switches including hard-coded credentials and authentication bypass granting admin access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-281-01"
cves: ["CVE-2026-32645", "CVE-2026-39460", "CVE-2026-28745", "CVE-2026-33367", "CVE-2026-29797", "CVE-2026-39453", "CVE-2026-33272"]
---
CISA published an ICS advisory covering seven vulnerabilities in Red Lion Controls N-Tron 700 Series industrial switches (firmware <=3.11.0 and bootloader <=2.0.6.1). The flaws include use of hard-coded credentials, insufficiently protected credentials, storing passwords in a recoverable format, missing authentication for critical functions, and authentication bypass via an alternate path. Successful exploitation can let an attacker gain full administrative access to view, edit, and upload configuration files, or trigger continuous reboots to cause denial of service.

From an identity and access perspective, the hard-coded and recoverable credential issues are the standout concerns, since they undermine the device's authentication model entirely and could give adversaries persistent admin control over critical infrastructure network gear. The highest CVSS v3 score cited is 8.3.

What to take away: organizations running N-Tron 700 switches should apply vendor mitigations, segment these devices off accessible networks, rotate any shared or default credentials, and restrict management interface exposure to trusted hosts.
