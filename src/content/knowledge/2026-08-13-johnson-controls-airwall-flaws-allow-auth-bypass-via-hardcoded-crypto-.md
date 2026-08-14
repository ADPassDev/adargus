---
title: "Johnson Controls Airwall Flaws Allow Auth Bypass via Hardcoded Crypto Key"
date: 2026-08-13
category: advisory
summary: "CISA advisory warns Airwall <=4.0.4 contains a hardcoded cryptographic key and path traversal flaw enabling authentication bypass and data decryption."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-225-03"
cves: ["CVE-2026-64887", "CVE-2026-34492"]
---
CISA published an ICS advisory for Johnson Controls Airwall (versions 4.0.4 and earlier) covering two vulnerabilities. CVE-2026-64887 stems from a hardcoded cryptographic key/password embedded in the application, which is identical across deployments and represents a serious authentication failure that is hard for administrators to detect and remediate. CVE-2026-34492 involves external control of a file name or path, enabling unauthorized reading of arbitrary files.

Together these flaws could let an attacker decrypt sensitive data, bypass authentication controls, and gain unauthorized access to protected system resources — a meaningful concern given Airwall's deployment across critical infrastructure sectors including energy, transportation, and government facilities worldwide.

What to take away: hardcoded credentials undermine any identity and access model built on top of them, since the secret cannot be rotated per-deployment. Organizations running Airwall should apply vendor updates and treat any device on the affected versions as potentially compromised at the authentication layer.
