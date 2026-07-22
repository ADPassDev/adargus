---
title: "Rockwell FactoryTalk Flaw Lets Attackers Forge JWTs to Impersonate Users"
date: 2026-07-21
category: advisory
summary: "CVE-2026-10714 in FactoryTalk Services Platform allows JWT signature bypass, enabling low-privilege users to impersonate authorized accounts."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-202-07"
cves: ["CVE-2026-10714"]
---
CISA has published an ICS advisory for Rockwell Automation's FactoryTalk Services Platform (FTSP), specifically FactoryTalk Directory 6.60. The flaw, tracked as CVE-2026-10714, is a weak-authentication issue in the Okta Web Authentication flow. Because the application fails to enforce that JWTs use the RSA algorithm, an attacker can set the algorithm to "none" and craft forged tokens that bypass signature validation entirely.

The practical impact is significant for identity security: an already-authenticated low-privilege user can forge tokens to impersonate any authorized user on the FTSP server. That grants unauthorized access to system configurations and the ability to assign permissions to other accounts, effectively enabling privilege escalation within the platform. The vendor-scored CVSS v3 rating is 7.8, and the platform is deployed worldwide across critical manufacturing environments.

What to take away: classic JWT "alg:none" bypasses remain a real risk in identity-dependent OT/ICS platforms. Organizations running FTSP should apply Rockwell's mitigations promptly and treat any authentication-token validation gaps as a lateral-movement and impersonation vector.
