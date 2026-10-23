---
title: "Siemens RUGGEDCOM APE1808 Affected by Authorization and CSRF Flaws"
date: 2026-10-22
category: advisory
summary: "CISA advisory lists multiple vulnerabilities in Siemens RUGGEDCOM APE1808 devices, including incorrect authorization and CSRF issues."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-295-18"
cves: ["CVE-2026-33387", "CVE-2026-33388", "CVE-2026-33389", "CVE-2026-33391", "CVE-2026-33920"]
---
CISA has published an advisory covering several vulnerabilities in Siemens RUGGEDCOM APE1808 devices, stemming from flaws in the embedded Nozomi Guardian/CMC software. The issues include template injection (CVE-2026-33387), incorrect authorization (CVE-2026-33388), lack of administrator control over security (CVE-2026-33389, CVE-2026-33391), and cross-site request forgery (CVE-2026-33920), with a CVSS v3 score up to 7.5. Siemens advises affected customers to contact support for patches.

From an identity and access perspective, the incorrect authorization and insufficient administrator control weaknesses are the most relevant, as they can allow users to exceed intended privilege boundaries, while CSRF can let attackers force authenticated sessions to perform unwanted actions. These devices are deployed across critical infrastructure sectors including energy, healthcare, and transportation.

What to take away: Organizations running RUGGEDCOM APE1808 should contact Siemens for updates, review access controls and privilege assignments on these devices, and ensure administrative interfaces are not exposed to untrusted networks.
