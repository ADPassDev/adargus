---
title: "Eclipse Milo OPC UA Flaws Allow Credential Recovery and User Impersonation"
date: 2026-10-15
category: advisory
summary: "CISA advisory details multiple Eclipse Milo vulnerabilities enabling attackers to recover credentials, impersonate users, and bypass authorization."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-288-01"
cves: ["CVE-2026-63252", "CVE-2026-63248", "CVE-2026-60007", "CVE-2026-62927", "CVE-2026-58080", "CVE-2026-61387"]
---
CISA published an ICS advisory covering five vulnerabilities in Eclipse Foundation's Eclipse Milo, an open-source OPC UA implementation used across critical infrastructure sectors including energy, water, and manufacturing. The flaws (CVE-2026-62927, CVE-2026-63252, CVE-2026-63248, CVE-2026-60007, CVE-2026-58080, CVE-2026-61387) include incorrect authorization, missing authorization, and observable response discrepancy weaknesses, with a CVSS v3 score up to 8.2.

From an identity standpoint, the most notable risks are credential recovery and user impersonation, meaning an attacker could obtain legitimate user credentials and act as a trusted user. Authorization bypass issues also let anonymous or low-privileged clients execute denied methods by exploiting batched Call service requests, undermining access controls. Additional flaws permit deletion of protected data or denial of service.

What to take away: Organizations running Eclipse Milo (versions 0.6.0 through 1.1.4) in OT environments should upgrade promptly, since credential exposure and impersonation in industrial control systems can cascade into broader identity compromise.
