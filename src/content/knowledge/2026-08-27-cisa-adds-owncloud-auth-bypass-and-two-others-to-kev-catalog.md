---
title: "CISA Adds ownCloud Auth Bypass and Two Others to KEV Catalog"
date: 2026-08-27
category: advisory
summary: "CISA flags active exploitation of an ownCloud improper authentication flaw among three new KEV entries requiring rapid federal remediation."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/alerts/2026/08/27/cisa-adds-three-known-exploited-vulnerabilities-catalog"
cves: ["CVE-2023-49105", "CVE-2026-53362", "CVE-2026-66384"]
---
CISA has added three vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog based on evidence of active exploitation. Of primary identity relevance is CVE-2023-49105, an improper authentication vulnerability in ownCloud that can allow attackers to bypass authentication controls and access data without valid credentials. The list also includes a Linux Kernel flaw (CVE-2026-53362) and a JFrog Artifactory path traversal issue (CVE-2026-66384).

Authentication bypass flaws like the ownCloud issue are especially dangerous because they let attackers sidestep credential checks entirely, potentially exposing user data and providing a foothold for lateral movement into connected identity systems. Under BOD 26-04, federal agencies must prioritize rapid remediation of KEV-listed vulnerabilities on publicly exposed assets, particularly those granting total control post-exploitation.

What to take away: Even if you're not a federal agency, treat KEV additions as a priority patch signal. Inventory any ownCloud, Linux, or JFrog Artifactory deployments and confirm they are patched, and review logs for signs of prior unauthorized access via the ownCloud auth bypass.
