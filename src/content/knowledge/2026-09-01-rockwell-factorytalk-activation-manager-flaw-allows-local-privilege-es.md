---
title: "Rockwell FactoryTalk Activation Manager Flaw Allows Local Privilege Escalation to SYSTEM"
date: 2026-09-01
category: advisory
summary: "A vulnerability in FactoryTalk Activation Manager (V5.02 and below) lets an authenticated user hijack installer console windows to gain SYSTEM-level access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-244-04"
cves: ["CVE-2026-16675"]
---
CISA published an ICS advisory for Rockwell Automation FactoryTalk Activation Manager (V5.02 and below) covering CVE-2026-16675, a privilege escalation issue rated CVSS 7.8. The flaw arises because the installer's custom actions spawn visible console windows running with SYSTEM privileges during install or repair operations. An authenticated attacker holding valid Windows credentials could hijack these windows to open a SYSTEM-level command prompt, gaining full access to files, processes, and system resources.

Although tracked as improper restriction of excessive authentication attempts, the practical impact is local privilege escalation from a standard authenticated user to SYSTEM. On critical-manufacturing endpoints this is significant: SYSTEM control lets an attacker dump credentials, disable defenses, and pivot deeper into the environment, potentially harvesting domain credentials cached on the host.

What to take away: any local-to-SYSTEM escalation is an identity risk because it hands attackers the keys to cached and network credentials. Prioritize patching affected FactoryTalk installations, restrict who can trigger installer/repair operations, and monitor endpoints for unexpected SYSTEM-level console activity.
