---
title: "Dorsett Controls InfoScan Flaws Expose Stored Credentials and Allow Auth Bypass"
date: 2026-11-17
category: advisory
summary: "CISA advisory details multiple InfoScan vulnerabilities allowing credential recovery, unauthorized data access, and interception of network traffic."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-01"
cves: ["CVE-2026-117659", "CVE-2026-120157", "CVE-2026-120255", "CVE-2026-120260", "CVE-2026-120271", "CVE-2026-120298"]
---
CISA published an ICS advisory for Dorsett Controls InfoScan (versions <=1.45.0), used in Water and Wastewater Systems worldwide. The six vulnerabilities include improper certificate validation, a hard-coded cryptographic key, missing authentication for a critical function, and exposure of sensitive system information. Together they could let an attacker recover stored credentials, access application data without authorization, and intercept or manipulate network communications (CVSS v3 8.1).

From an identity and access standpoint, the combination is notable: improper TLS validation and hard-coded keys undermine credential confidentiality, while missing authentication on a critical function removes a key access control. The Electron client reportedly accepts untrusted certificates and runs with nodeIntegration enabled and contextIsolation disabled, broadening the attack surface for credential theft and man-in-the-middle attacks.

What to take away: recovered credentials from one system are frequently reused to pivot into broader environments. Organizations running InfoScan should upgrade, rotate any potentially exposed credentials, and monitor for credential reuse against directory and remote-access systems.
