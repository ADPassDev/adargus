---
title: "CISA: ST Engineering iDirect iQ-Series Terminals Expose Unauthenticated API Endpoints"
date: 2026-07-02
category: advisory
summary: "Satellite terminals expose REST API endpoints without authentication, letting remote attackers pull sensitive device identity data or trigger DoS."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-183-01"
cves: ["CVE-2026-38059", "CVE-2026-38057"]
---
CISA published an ICS advisory covering ST Engineering iDirect iQ-Series satellite terminals (Evolution iQ-Series, 3315-Series, and 9-Series, versions <=4.5.2.1). The most notable flaw, CVE-2026-38059, stems from missing authentication on the `/api/identity` and other REST API endpoints. An unauthenticated attacker with network access can retrieve sensitive device information such as the serial number, Device ID (DID), and Terminal Private Key identifier. A second issue, CVE-2026-38057, involves cross-site request forgery (CSRF), and the advisory carries a CVSS v3 score of 8.1.

From an identity perspective, exposing device identity attributes and private key identifiers without authentication weakens the trust foundation these terminals rely on. Leaked identity material can support device impersonation or targeted follow-on attacks, and the affected equipment is deployed worldwide across communications, defense, energy, government, and transportation sectors.

What to take away: treat any device that leaks identity or key material via unauthenticated APIs as a credential exposure risk. Restrict network access to management interfaces, segment these terminals, and apply vendor fixes to close the authentication gap.
