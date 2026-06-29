---
title: "23andMe credential-stuffing breach exposed 6.9 million users' data"
date: 2023-12-01
category: breach
summary: "Attackers reused passwords leaked on other sites to break into ~14,000 23andMe accounts, then scraped the DNA Relatives feature to reach 6.9 million users."
sourceName: "23andMe"
sourceUrl: "https://blog.23andme.com/articles/addressing-data-security-concerns"
cves: []
---

Over roughly five months in 2023, a threat actor ran a **credential-stuffing**
campaign against 23andMe — replaying username/password pairs leaked in *other*
companies' breaches against the 23andMe login page until they matched. At the
time, 23andMe did not require two-factor authentication and enforced only a weak
password policy, and its monitoring did not flag the sustained login attempts.

About **14,000 accounts** were accessed directly. Because many users had opted
into the **DNA Relatives** feature, the attacker then scraped relative-profile
data connected to those accounts — ultimately exposing personal and ancestry
information for roughly **6.9 million people**. 23andMe confirmed the scope in a
December 1, 2023 SEC filing, and UK and Canadian privacy regulators later issued
a joint investigation.

**Why it matters for identity teams.** This is the textbook case for two
controls: **breached-password screening** (so credentials exposed elsewhere can't
be reused) and **mandatory MFA**. Neither was in place, and one feature turned
14,000 compromised logins into a 6.9-million-person incident.

**What to take away:**

- Screen new and existing passwords against known-breached corpora.
- Make MFA the default, not an opt-in.
- Treat credential-stuffing volume as a first-class detection signal.
