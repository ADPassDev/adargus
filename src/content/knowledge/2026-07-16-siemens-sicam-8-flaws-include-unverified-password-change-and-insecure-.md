---
title: "Siemens SICAM 8 flaws include unverified password change and insecure defaults"
date: 2026-07-16
category: advisory
summary: "CISA advisory covers multiple SICAM 8 vulnerabilities, including an unverified password change weakness and insecure default initialization affecting ICS devices."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-197-05"
cves: ["CVE-2026-54798", "CVE-2026-54799", "CVE-2026-54800", "CVE-2026-54801"]
---
CISA has published an ICS advisory for Siemens SICAM 8 products (including CPCI85 and SICORE base systems used in energy and critical manufacturing). The flaws (CVE-2026-54798 through CVE-2026-54801) span active debug code exposed via HTTP endpoints, initialization of a resource with an insecure default, and — notably from an identity perspective — an unverified password change weakness. These could enable authenticated attackers to disrupt operation or manipulate credential controls.

While the primary impact described is denial of service, the unverified password change and insecure default initialization issues touch directly on access-control integrity in OT environments. Siemens has released fixed versions (26.20 and later) and recommends updating.

What to take away: even in industrial systems, weaknesses in password-change verification and default credential handling can undermine identity assurance; organizations running SICAM 8 should patch and audit access controls promptly.
