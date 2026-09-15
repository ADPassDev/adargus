---
title: "CISA warns of critical auth flaws in Digital Watchdog VMAX DVR/NVR devices"
date: 2026-09-15
category: advisory
summary: "Hard-coded credentials and missing authentication in Digital Watchdog VMAX recorders (CVSS 9.6) could grant attackers full admin control."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-01"
cves: ["CVE-2026-68953", "CVE-2026-66890", "CVE-2026-68070", "CVE-2026-68950", "CVE-2026-66887", "CVE-2026-66372"]
---
CISA has issued an ICS advisory covering multiple vulnerabilities across the Digital Watchdog VMAX DVR and NVR product lineups, including VMAX A1 G4, IP G4, A1 PLUS, VA1G4, and VG4 recorders (all versions). The flaws include missing authentication for critical functions, use of hard-coded credentials, missing authorization, and a predictable seed in a pseudo-random number generator. The most severe issue carries a CVSS v3 score of 9.6.

Successful exploitation would let an attacker gain full administrative control of the device, view live and recorded surveillance, change configurations, and use the recorder as a pivot point deeper into the network. The hard-coded credentials and authentication-bypass issues are especially concerning from an identity standpoint, since they defeat access controls entirely without requiring valid user credentials.

What to take away: Surveillance recorders are often overlooked network-connected devices that can serve as an initial foothold. Organizations should inventory affected VMAX devices, restrict them from internet exposure, segment them from AD and core networks, and apply vendor mitigations to prevent them becoming a lateral-movement launchpad.
