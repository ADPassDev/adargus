---
title: "Hitachi Energy Asset Suite: Unauthenticated Servlet Access Flaws (CVSS 8.1)"
date: 2026-10-06
category: advisory
summary: "CISA advisory warns of missing-authentication vulnerabilities in Hitachi Energy Asset Suite allowing unauthenticated access to critical servlets."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-279-03"
cves: ["CVE-2026-7395", "CVE-2026-11796"]
---
CISA has published an ICS advisory covering two vulnerabilities (CVE-2026-7395 and CVE-2026-11796) in Hitachi Energy Asset Suite versions 9.9.0 and prior, rated CVSS 8.1. The core issue is missing authentication for critical functions: unauthenticated users can reach exposed servlets such as the HTTPPublishAdapterTestServlet, which can be abused for configuration file upload leading to information disclosure and integrity compromise.

The affected product is deployed worldwide in the energy sector, making these flaws significant for critical infrastructure operators. Because the vulnerabilities bypass authentication entirely, an attacker needs no valid credentials to interact with sensitive functionality, raising the risk of unauthorized configuration changes and data exposure.

What to take away: Operators should apply Hitachi Energy's recommended mitigations promptly, ensure test-only servlets are not exposed in production, and restrict network access to Asset Suite components. From an identity standpoint, this is a reminder that unauthenticated endpoints are an access-control failure that can undermine otherwise strong credential controls.
