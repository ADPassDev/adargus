---
title: "Digi PortServer TS and Digi One SP IA Flaws Allow Auth Bypass, Credential Theft"
date: 2026-07-07
category: advisory
summary: "CISA advisory warns of authentication bypass and XSS flaws in Digi International serial device servers that could expose credentials."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-188-07"
cves: ["CVE-2026-12352"]
---
CISA has published an ICS advisory covering vulnerabilities in Digi International's PortServer TS and Digi One SP IA serial device servers. The key issue (CVE-2026-12352) is an incorrect authorization flaw that lets an unauthenticated attacker bypass authentication and reach restricted resources on the device. A separate cross-site scripting weakness allows injection of malicious scripts, and the advisory notes that exploitation could enable an attacker to obtain credentials.

For identity teams, the authentication-bypass and credential-exposure angle is the concern: these devices sit in critical manufacturing, communications, IT, and transportation environments, and captured credentials could be reused to pivot deeper into networks or feed lateral movement toward identity infrastructure.

What to take away: inventory affected Digi devices, apply the 2025 firmware updates, and treat any credentials stored or transmitted through these device servers as potentially exposed—rotate them and restrict management interface access.
