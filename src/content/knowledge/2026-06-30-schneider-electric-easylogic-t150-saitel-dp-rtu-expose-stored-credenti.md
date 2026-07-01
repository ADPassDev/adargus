---
title: "Schneider Electric EasyLogic T150 & Saitel DP RTU expose stored credentials"
date: 2026-06-30
category: advisory
summary: "CISA advisory warns unauthenticated attackers can access credentials stored in firmware or system files of Schneider Electric RTUs."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-181-04"
cves: ["CVE-2026-9650", "CVE-2026-9651"]
---
CISA has issued an ICS advisory covering two vulnerabilities in Schneider Electric's EasyLogic T150 (formerly Saitel DR) and Saitel DP Remote Terminal Units. CVE-2026-9650 (Insufficiently Protected Credentials, CWE-522) and CVE-2026-9651 (Incorrect Permission Assignment for a Critical Resource) both carry a CVSS v3 score of 7.5. The flaws allow an unauthenticated attacker to access credentials stored within device firmware or system files, leading to unauthorized access and exposure of sensitive information.

Affected versions include EasyLogic T150 up to 11.06.30/11.06.31 and Saitel DP up to 11.06.35/11.06.37. These devices are deployed worldwide across the critical manufacturing and energy sectors, making credential exposure a meaningful risk for operational technology environments.

From an identity perspective, hardcoded or poorly protected credentials in ICS hardware remain a persistent weak point—harvested credentials can be reused to pivot deeper into OT and connected IT networks. What to take away: inventory affected RTUs, apply vendor mitigations, rotate any exposed credentials, and restrict network access to these devices.
