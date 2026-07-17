---
title: "SALTO ProAccess Space Flaw Lets Authenticated Operators Escalate Privileges Across Partitions"
date: 2026-07-16
category: advisory
summary: "CVE-2026-11889 allows an authenticated operator to bypass partition boundaries and access spaces outside their assigned tenancy in SALTO ProAccess Space <6.13."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-197-07"
cves: ["CVE-2026-11889"]
---
CISA published an ICS advisory for SALTO ProAccess Space, an access-control platform used across commercial facilities and critical manufacturing worldwide. The flaw, tracked as CVE-2026-11889 (CVSS v3 6.5), is an authorization bypass through a user-controlled key that lets an authenticated operator escalate privileges and reach spaces outside their assigned logical partition within the same installation.

Exploitation requires valid operator credentials and depends on the multi-tenancy/partition feature being enabled — installations without partitioning are not affected. Versions prior to 6.13 are impacted, and upgrading to 6.13 or later addresses the issue.

What to take away: partition/tenancy boundaries in physical access-control systems are an identity control, and a broken authorization check effectively grants an insider lateral access across tenants. Organizations relying on partitioning for segregation should patch to 6.13+ and review operator credential hygiene and privilege assignments.
