---
title: "Hard-coded Credentials and Auth Flaws in Tycon TPDIN-Monitor-WEB3 Devices"
date: 2026-09-03
category: advisory
summary: "CISA warns Tycon Systems TPDIN-Monitor-WEB3 (<=2.2.9) contains hard-coded credentials, CSRF, and missing authorization flaws that can expose credentials and enable MitM attacks."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-246-08"
cves: ["CVE-2026-77847", "CVE-2026-82712", "CVE-2026-82684"]
---
CISA published an ICS advisory covering three vulnerabilities in Tycon Systems TPDIN-Monitor-WEB3 devices running version 2.2.9 and earlier. The most identity-relevant issue (CVE-2026-77847) is a use of hard-coded credentials, which could let an attacker intercept sensitive information or credentials. The advisory also flags a CSRF weakness (CVE-2026-82712) and a missing authorization flaw (CVE-2026-82684), carrying a CVSS v3 score up to 8.8.

Successful exploitation could enable man-in-the-middle attacks, forced factory resets, credential wiping, or retrieval of sensitive data. These devices are deployed worldwide in critical manufacturing and energy sectors, raising the stakes for operational environments.

What to take away: Hard-coded credentials remain a persistent identity risk in OT/ICS gear because they cannot be rotated by users and often provide standing access. Organizations running affected Tycon devices should apply the vendor fix and audit any network paths and credential exposure tied to these monitors.
