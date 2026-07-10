---
title: "Schneider Electric PowerChute Serial Shutdown flaws enable credential resets and account access"
date: 2026-07-09
category: advisory
summary: "CISA advisory flags multiple vulnerabilities in Schneider PowerChute Serial Shutdown <=1.4 that could allow unauthorized account access and credential resets."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-190-02"
cves: []
---
CISA has published an ICS advisory covering several vulnerabilities in Schneider Electric's PowerChute Serial Shutdown software (versions 1.4 and earlier). The flaws span path traversal, CRLF injection, improper output encoding, uncontrolled resource consumption, and weak protection against excessive authentication attempts. Notably from an identity perspective, successful exploitation could allow attackers to gain unauthorized account access, reset user credentials, and expose or forge log data.

The missing rate-limiting on authentication attempts opens the door to brute-force and credential-stuffing style attacks, while the ability to reset user credentials and overwrite critical files could give an attacker a foothold to escalate or persist. The software is deployed worldwide across critical infrastructure sectors including energy, healthcare, manufacturing, and communications.

What to take away: Organizations running PowerChute Serial Shutdown should apply vendor mitigations promptly, restrict network access to the management interface, and monitor for anomalous authentication and credential-reset activity, since these systems often sit adjacent to broader identity and infrastructure environments.
