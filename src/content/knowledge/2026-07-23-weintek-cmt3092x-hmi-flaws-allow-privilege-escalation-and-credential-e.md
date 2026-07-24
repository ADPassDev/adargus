---
title: "Weintek cMT3092X HMI Flaws Allow Privilege Escalation and Credential Exposure"
date: 2026-07-23
category: advisory
summary: "CISA advisory details vulnerabilities in Weintek cMT3092X HMI that let low-privileged users escalate privileges and view other users' credentials."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-204-03"
cves: ["CVE-2026-60134"]
---
CISA published an ICS advisory covering multiple vulnerabilities in Weintek's cMT3092X HMI (firmware <20210218, EasyWeb <v2.1.20). The most notable, CVE-2026-60134 (CVSS 8.8), stems from reliance on cookies without proper validation and integrity checking, letting a non-privileged user modify cookies to gain elevated privileges. Additional weaknesses include incorrect permission assignment, plaintext storage of passwords, and improper user management.

Collectively, these flaws mean an attacker with limited access could escalate to higher privileges or read the credentials of other users — a direct identity and access-control risk in a critical manufacturing environment. Weintek has released a patch (cmt_typeB_20260316_007.patch) delivering EasyWeb 2.3.17-typeb.

What to take away: HMI and OT devices often embed weak session and credential handling that mirror the identity-security failures seen in IT systems. Plaintext password storage and cookie-based privilege checks are especially dangerous; organizations running these devices should apply the vendor patch and audit accounts for signs of privilege misuse.
