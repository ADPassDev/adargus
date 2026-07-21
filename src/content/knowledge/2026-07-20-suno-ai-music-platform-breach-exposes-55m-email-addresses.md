---
title: "Suno AI music platform breach exposes 55M email addresses"
date: 2026-07-20
category: breach
summary: "A November 2025 breach at AI music tool Suno leaked over 55M unique emails, phone numbers, and tens of thousands of partial Stripe payment records."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#Suno"
cves: []
---
AI music generation service Suno suffered a data breach in November 2025 that surfaced publicly in July 2026. The exposed dataset includes more than 55 million unique email addresses, along with phone numbers where used as a sign-up method. A smaller subset contained tens of thousands of Stripe purchase records with names, physical addresses, purchase amounts, and partial card data (card type, expiry, and last four digits). Suno stated it does not hold full credit card numbers.

For identity teams, the primary risk here is the massive volume of exposed email addresses, which fuel credential-stuffing and targeted phishing campaigns. Because many users reuse credentials across services, harvested emails can be pivoted against corporate accounts and directory services, particularly where the same address doubles as a workplace login.

What to take away: monitor for affected employee emails appearing in this corpus, enforce MFA, and watch for phishing that references Suno purchases or partial payment details to add legitimacy.
