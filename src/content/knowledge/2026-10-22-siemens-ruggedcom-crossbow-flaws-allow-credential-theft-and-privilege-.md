---
title: "Siemens RUGGEDCOM CROSSBOW Flaws Allow Credential Theft and Privilege Escalation"
date: 2026-10-22
category: advisory
summary: "Multiple vulnerabilities in Siemens RUGGEDCOM CROSSBOW could let attackers retrieve admin credentials, escalate privileges, and run arbitrary SQL commands."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-295-12"
cves: ["CVE-2026-89196", "CVE-2026-89197", "CVE-2026-89198", "CVE-2026-89199", "CVE-2026-89200", "CVE-2026-89201", "CVE-2026-89202", "CVE-2026-89203", "CVE-2026-89204", "CVE-2026-89205", "CVE-2026-89206"]
---
CISA and Siemens have disclosed a set of vulnerabilities (CVE-2026-89196 through CVE-2026-89206) in RUGGEDCOM CROSSBOW versions prior to 6.0. The flaws include SQL injection, authorization bypass through user-controlled keys, insertion of sensitive information into sent data, and client-side enforcement of server-side security. Together they could allow an attacker to execute arbitrary SQL commands, retrieve sensitive administrative credentials, escalate privileges, and modify system configurations or trigger denial of service. The highest-rated issue carries a CVSS v3 score of 8.8.

The identity angle is significant: RUGGEDCOM CROSSBOW is an access-management platform used to control privileged access to field devices across critical infrastructure sectors such as energy, transportation, and manufacturing. Theft of administrative credentials from such a system could give attackers a foothold to pivot into sensitive OT environments and operate as trusted administrators.

What to take away: Organizations running CROSSBOW should upgrade to version 6.0 or later promptly and treat any exposed instance as a high-value credential target, rotating administrative secrets and auditing access after patching.
