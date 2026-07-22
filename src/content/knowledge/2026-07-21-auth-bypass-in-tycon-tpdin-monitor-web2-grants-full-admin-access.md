---
title: "Auth Bypass in Tycon TPDIN-Monitor-WEB2 Grants Full Admin Access"
date: 2026-07-21
category: advisory
summary: "CISA advisory warns a CVSS 9.8 auth bypass lets unauthenticated attackers gain admin sessions and access stored credentials on Tycon monitoring devices."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-202-01"
cves: ["CVE-2026-61884"]
---
CISA has published an ICS advisory for Tycon Systems TPDIN-Monitor-WEB2 (version 2.3.9), flagging critical flaws that let attackers take full administrative control. The headline issue, CVE-2026-61884, is an authentication bypass: the web management interface never validates credentials server-side, so submitting empty username and password values yields a valid admin session. A second issue involves cleartext storage of sensitive information, exposing credentials on the device.

Once authenticated, an attacker gains control over power relay management, device reboots, remote access configuration, and network settings — impacting devices deployed worldwide in critical manufacturing environments. Beyond disrupting infrastructure, exposed cleartext credentials could be reused to pivot into connected systems and broader identity infrastructure.

What to take away: trivial auth-bypass flaws on internet-reachable OT/IoT management interfaces remain a real risk. Restrict network exposure of these devices, rotate any credentials they store or manage, and monitor for unexpected admin sessions until vendor mitigations are applied.
