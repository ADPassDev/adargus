---
title: "French pension fund Assurance Retraite breach exposes 70k emails via compromised partner account"
date: 2026-10-20
category: breach
summary: "A 2024 breach at France's Assurance Retraite hit ~370k beneficiaries, leaking PII and social security numbers after a partner account was compromised."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#AssuranceRetraite"
cves: []
---
France's national pension fund Assurance Retraite disclosed a September 2024 breach affecting roughly 370,000 assistance beneficiaries, with about 70,000 unique email addresses now indexed in Have I Been Pwned. The exposed data is highly sensitive, including full names, dates of birth, physical addresses, phone numbers, income levels, marital status, French social security numbers (NIR), and the contact details of relatives or nominated contacts.

Notably, the organization attributed the incident to a compromised partner account — a classic third-party/supply-chain identity failure where a single trusted credential provides an attacker access to large volumes of data. This underscores how extended access granted to partners, vendors, and integrators dramatically widens the identity attack surface beyond an organization's own employees.

What to take away: Treat partner and third-party accounts with the same rigor as internal privileged accounts — enforce MFA, least privilege, session monitoring, and prompt deprovisioning. A single compromised external credential can result in large-scale exposure of regulated personal data.
