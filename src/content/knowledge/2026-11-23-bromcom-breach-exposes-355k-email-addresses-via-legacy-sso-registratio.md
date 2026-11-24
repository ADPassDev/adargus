---
title: "Bromcom breach exposes 355K email addresses via legacy SSO registration system"
date: 2026-11-23
category: breach
summary: "UK education software firm Bromcom suffered a breach exposing 355K email addresses and SSO registration references, though no passwords or tokens were leaked."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#Bromcom"
cves: []
---
In September 2026, UK education software provider Bromcom disclosed a data breach stemming from a legacy single sign-on (SSO) registration system. The incident exposed roughly 355,000 unique email addresses belonging to staff and pupils at UK schools, along with SSO registration reference numbers. Bromcom stated that no passwords or authentication tokens were compromised, and that the breach did not grant access to linked Microsoft or Google accounts or to its school management platform.

While the absence of exposed credentials limits the immediate account-takeover risk, the leaked email addresses—many belonging to minors in a school context—create a meaningful phishing and social engineering surface. SSO registration references, though not directly usable for authentication, could aid attackers in crafting convincing, targeted lures against school staff and families.

What to take away: Legacy identity and SSO registration systems remain a recurring breach vector. Organizations should inventory and decommission outdated SSO components, and treat exposed identity metadata (emails, reference IDs) as fuel for downstream phishing even when passwords stay safe.
