---
title: "Swann SWIFI-SE2KIC Cameras Allow Unauthenticated Video Feed Access"
date: 2026-10-13
category: advisory
summary: "CISA advisory warns Swann SWIFI-SE2KIC cameras (firmware <=2.0.22) have missing authentication flaws exposing live video feeds on local networks."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-286-02"
cves: ["CVE-2026-107605", "CVE-2026-107606", "CVE-2026-107607"]
---
CISA published an ICS advisory covering three missing-authentication vulnerabilities (CVE-2026-107605, CVE-2026-107606, CVE-2026-107607) in Swann Communications SWIFI-SE2KIC cameras running firmware 2.0.22 and earlier. The core issue is a Missing Authentication for Critical Function flaw that lets an attacker on the local network view live video feeds without providing any credentials, carrying a CVSS v3 score of 6.2.

While this is primarily an IoT/physical surveillance exposure rather than a directory-services flaw, it fits the broader identity and access pattern of broken authentication: critical functions reachable with no credential check. For organizations, exposed camera feeds can leak sensitive physical and operational information and may aid reconnaissance for further intrusions.

What to take away: treat IP cameras as untrusted endpoints — segment them behind firewalls, avoid direct network exposure, and apply vendor mitigations. Missing-authentication bugs remain a reminder to enforce auth on every critical function, not just perimeter systems.
