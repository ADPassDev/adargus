---
title: "Cleartext Transmission Flaw in Johnson Controls EasyIO Neo Controllers Exposes Credentials"
date: 2026-10-01
category: advisory
summary: "CVE-2026-64893 lets attackers intercept credentials and session data sent in cleartext by EasyIO Neo EC/CW controllers."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-05"
cves: ["CVE-2026-64893"]
---
CISA published an ICS advisory for Johnson Controls EasyIO Neo Series EC and CW Controllers covering CVE-2026-64893, a cleartext transmission of sensitive information weakness. Because credentials and session data traverse the network unencrypted, an attacker positioned to observe traffic can intercept and read them. Affected versions include EC Controllers V3.3b62/b63 and CW Controllers V3.3b24/b25, with a CVSS v3 base score of 5.4.

From an identity perspective, the real risk is credential and session exposure. Captured credentials or session tokens can be replayed to gain unauthorized access to the controllers and potentially pivot into broader operational or enterprise environments, especially where these building-automation systems share accounts or network segments with IT resources.

What to take away: these devices span critical infrastructure sectors worldwide, so operators should isolate controllers on segmented networks, enforce encrypted transport where possible, and rotate any credentials that may have traversed untrusted links.
