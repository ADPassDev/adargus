---
title: "Too Lost breach exposes 724K accounts with bcrypt hashes and ID data"
date: 2026-11-20
category: breach
summary: "Music distributor Too Lost suffered a breach exposing 724K emails, bcrypt password hashes, partial card data and government ID numbers."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#TooLost"
cves: []
---
Music distribution platform Too Lost was breached in November 2026, with an unauthorised party claiming access to data covering 724,323 unique email addresses belonging to artists, collaborators and fans. Beyond emails, some records included bcrypt password hashes, partial credit card details (last four digits and card type), and in certain cases sensitive identity verification data such as passport, driver's licence or national ID numbers, along with artist payout information.

From an identity-security standpoint, the exposure of bcrypt hashes—while more resistant to cracking than weaker schemes—still warrants mandatory password resets, especially given credential reuse risks that can cascade into other accounts and corporate environments. The inclusion of government-issued ID numbers raises the stakes considerably, enabling identity theft and sophisticated social-engineering attacks against affected individuals.

Too Lost says its investigation is ongoing with external forensic specialists engaged and systems and credentials secured. What to take away: organisations and users should treat exposed email/password combinations as compromised, enforce resets, enable MFA, and watch for phishing or identity-fraud attempts leveraging the leaked ID data.
