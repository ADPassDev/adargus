---
title: "SplitVPN breach exposes 865K accounts including emails and partial card data"
date: 2026-08-01
category: breach
summary: "Russian VPN service SplitVPN (formerly NotVPN) suffered a July 2026 breach exposing 865K email addresses, IPs, and partial payment card details."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#SplitVPN"
cves: []
---
The Russian VPN provider SplitVPN, previously operating as NotVPN, was breached in July 2026, exposing millions of customer records. The leaked data includes 865,336 unique email addresses, IP addresses, user country data, and partial payment card information (first six and last four digits plus expiry dates).

While the card data is only partial and the passwords do not appear to be included, the exposure of email addresses tied to a VPN service is notable. VPN users specifically seek privacy, so the linkage of their identity to VPN usage—along with IP addresses—creates targeted phishing and de-anonymization risks. Exposed email addresses also feed credential-stuffing lists that threaten reused credentials across other services.

What to take away: Breached email addresses are the raw material for account-takeover attempts against corporate identities. Organizations should monitor whether employee addresses appear in dumps like this and enforce MFA and unique passwords to blunt downstream credential-stuffing.
