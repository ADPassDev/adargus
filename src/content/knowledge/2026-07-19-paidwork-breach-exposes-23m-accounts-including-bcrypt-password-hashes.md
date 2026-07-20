---
title: "Paidwork Breach Exposes 23M Accounts Including bcrypt Password Hashes"
date: 2026-07-19
category: breach
summary: "A gig economy platform breach leaked over 23M email addresses along with bcrypt password hashes, banking data, and payout history."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#Paidwork"
cves: []
---
The gig economy platform Paidwork suffered a data breach that surfaced publicly in July 2026, after attackers claimed in March 2026 to have obtained and listed the data for sale. The nearly 11GB dataset contained more than 23 million unique email addresses along with user profile data, banking information, worker payout history, and passwords stored as bcrypt hashes.

While bcrypt is a strong, salted hashing algorithm that resists mass cracking, exposure of the underlying credentials still poses real risk—weak or reused passwords remain vulnerable to targeted cracking, and the combination with email addresses fuels credential-stuffing campaigns against other services. The inclusion of banking and financial data also raises the stakes for phishing and fraud.

What to take away: Any organization whose users may have reused Paidwork credentials should monitor for credential-stuffing attempts and encourage password resets. This breach is a reminder that even properly hashed passwords, once exposed alongside identity and financial data, expand an attacker's toolkit for account takeover.
