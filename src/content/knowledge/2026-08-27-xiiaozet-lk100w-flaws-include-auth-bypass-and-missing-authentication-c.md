---
title: "Xiiaozet LK100W flaws include auth bypass and missing authentication (CVSS 9.8)"
date: 2026-08-27
category: advisory
summary: "CISA warns of critical vulnerabilities in Xiiaozet LK100W devices, including authentication bypass and missing auth for critical functions, enabling full device takeover."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-239-01"
cves: ["CVE-2026-78037", "CVE-2026-78239", "CVE-2026-76943"]
---
CISA published an ICS advisory for the Xiiaozet LK100W device covering three vulnerabilities in versions prior to 2.1.240. Two of them are directly identity/access-relevant: a missing authentication for critical function (CVE-2026-78239) and an authentication bypass using an alternate path or channel (CVE-2026-76943). A third issue is an OS command injection (CVE-2026-78037) exploitable via the web management interface, which requires authentication but can grant elevated command execution. The highest rated flaw carries a CVSS v3 score of 9.8.

The combination is dangerous: the authentication bypass and missing-authentication weaknesses can let an attacker reach privileged functionality without valid credentials, and chaining into command injection can lead to complete device compromise. The vendor recommends updating to version 2.1.240 or later.

What to take away: Any device exposing management interfaces with weak or bypassable authentication becomes an entry point into a broader environment. Patch affected LK100W units and restrict network exposure of management interfaces.
