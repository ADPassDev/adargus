---
title: "SberSpasibo loyalty program breach exposes 3.3M emails and card hashes"
date: 2026-11-11
category: breach
summary: "Data from Sberbank's SberSpasibo loyalty program, covering 48M users, surfaced online with emails, phone numbers, DOBs and unsalted SHA-1 card hashes."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#SberSpasibo"
cves: []
---
Data allegedly taken from СберСпасибо (SberSpasibo), the loyalty program of Russian bank Sberbank, was published online in March 2023 and has now been indexed by Have I Been Pwned. The dump reportedly covers 48 million users, with 3.3 million unique email addresses alongside phone numbers, dates of birth, and loyalty program activity such as membership dates and bonus point redemptions.

Most concerning from a credential standpoint, the data also included bank card numbers stored as unsalted SHA-1 hashes. Unsalted SHA-1 is weak and, given the limited keyspace of card number formats, such hashes are highly susceptible to reversal, effectively exposing the underlying card numbers.

What to take away: exposed emails, phone numbers and DOBs are prime fuel for phishing, social engineering, and credential-stuffing against reused passwords. Organizations should watch for affected addresses appearing in authentication logs and encourage password hygiene and MFA for any accounts tied to these identities.
