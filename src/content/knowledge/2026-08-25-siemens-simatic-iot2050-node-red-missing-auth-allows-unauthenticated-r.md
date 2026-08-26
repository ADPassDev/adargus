---
title: "Siemens SIMATIC IoT2050 Node-RED Missing Auth Allows Unauthenticated RCE (CVSS 10)"
date: 2026-08-25
category: advisory
summary: "A missing authentication flaw in the Node-RED HTTP interface on Siemens SIMATIC IoT2050 Advanced lets unauthenticated remote attackers run arbitrary code with max privileges."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-237-03"
cves: ["CVE-2026-58115"]
---
CISA published an advisory for Siemens SIMATIC IoT2050 Advanced devices running Industrial OS with Node-RED installed. The flaw, tracked as CVE-2026-58115 and rated a maximum CVSS score of 10, stems from the Node-RED HTTP interface failing to enforce authentication. This exposes programming nodes capable of executing system commands, allowing an unauthenticated remote attacker to create malicious flows and execute arbitrary code with the highest privileges on the underlying server. Devices before version 4.3.4.1 are affected, and Siemens urges upgrading to the latest release.

Though this is an OT/ICS device rather than a Windows/AD asset, the underlying issue is a classic identity/access failure: a critical function exposed without any authentication. Full RCE at maximum privileges on an internet- or network-reachable device can provide attackers an initial foothold or pivot point into broader enterprise and identity infrastructure, especially in the chemical, manufacturing, energy, and transportation sectors where these devices are deployed worldwide.

What to take away: patch to 4.3.4.1 or later immediately, and treat unauthenticated management interfaces on any device—OT or IT—as a priority risk, restricting network access and enforcing authentication wherever exposed.
