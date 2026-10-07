---
title: "Double Counter breach exposes 275K Discord-linked accounts via Metabase flaw"
date: 2026-10-07
category: breach
summary: "A vulnerability in the Metabase analytics tool led to a breach of Discord protection service Double Counter, exposing ~275K emails and usernames."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#DoubleCounter"
cves: []
---
In October 2026, Double Counter, a Discord server protection service, disclosed a breach stemming from a vulnerability in its Metabase analytics tool. Attackers accessed a subset of data that was later published publicly, exposing roughly 275,000 unique email addresses alongside Discord usernames. A smaller set of records tied to paying subscribers processed through Stripe also included names, countries, and postcodes.

While this is not an Active Directory incident, the exposure of email addresses linked to identities is directly relevant to credential-based threats. Leaked emails fuel phishing, credential-stuffing, and account-takeover campaigns, particularly where users reuse passwords across services.

What to take away: Third-party analytics and reporting tools remain a common weak link. Organizations should inventory such tools, patch promptly, and treat exposed email corpora as inputs to future targeted attacks against their users and staff.
