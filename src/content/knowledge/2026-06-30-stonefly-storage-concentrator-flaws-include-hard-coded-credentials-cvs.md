---
title: "StoneFly Storage Concentrator flaws include hard-coded credentials, CVSS 10"
date: 2026-06-30
category: advisory
summary: "CISA warns of critical StoneFly Storage Concentrator vulnerabilities, including hard-coded credentials enabling root-level unauthorized access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-181-06"
cves: ["CVE-2026-56415", "CVE-2026-55721", "CVE-2026-50040", "CVE-2026-50110", "CVE-2026-56413"]
---
CISA published an ICS advisory for StoneFly Storage Concentrator and its virtual machine variant, covering multiple vulnerabilities rated up to CVSS 10. The most identity-relevant issue is the use of hard-coded credentials, which can grant attackers broad unauthorized access without legitimate authentication. Additional flaws include OS command injection, SQL injection, and cross-site scripting.

Successful exploitation could let attackers execute arbitrary commands with root privileges, exfiltrate sensitive data, and act on behalf of legitimate users across interconnected systems. Affected versions span several fix thresholds (8.0.4.22, 8.0.4.26, and 8.0.4.29), and the products are deployed in critical infrastructure sectors including the Defense Industrial Base and Energy.

What to take away: Hard-coded credentials are a classic identity weakness that bypasses access controls entirely; organizations running these appliances should patch to the fixed builds and audit for any signs of unauthorized root access or credential abuse.
