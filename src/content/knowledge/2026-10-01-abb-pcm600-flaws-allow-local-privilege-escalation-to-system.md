---
title: "ABB PCM600 Flaws Allow Local Privilege Escalation to SYSTEM"
date: 2026-10-01
category: advisory
summary: "CISA advisory details two ABB PCM600 vulnerabilities, including a Scheduler Service flaw letting authenticated local users escalate to LocalSystem."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-03"
cves: ["CVE-2026-15952", "CVE-2026-15953"]
---
CISA published an ICS advisory for ABB's Protection and Control IED Manager PCM600 (versions 2.14 and earlier), covering two vulnerabilities carrying a CVSS v3 score of 6.4. The most notable, CVE-2026-15952, stems from incorrect permission assignment in the Scheduler Service: the service runs under the LocalSystem account, yet standard PCM600 users—via the local users group—hold permissions that let an attacker with local access and valid credentials elevate privileges and take control of the host. A second issue, CVE-2026-15953, is a path traversal flaw enabling file overwrite.

From an identity and access perspective, CVE-2026-15952 is a classic privilege-escalation pivot: an attacker who already holds low-privilege credentials on an engineering workstation can jump to full system control. In energy-sector environments where PCM600 manages protection relays, that SYSTEM-level foothold could be used to harvest cached credentials, move laterally into connected Active Directory, or tamper with critical OT configurations.

What to take away: treat ICS engineering hosts as high-value identity targets—restrict local logon rights, monitor for abuse of service accounts running as LocalSystem, and prioritize patching PCM600 past 2.14 where exploitation only requires existing low-level access.
