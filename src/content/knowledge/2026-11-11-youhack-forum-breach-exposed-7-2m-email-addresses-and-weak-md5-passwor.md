---
title: "YouHack forum breach exposed 7.2M email addresses and weak MD5 password hashes"
date: 2026-11-11
category: breach
summary: "A 2013 breach of the Russian-language hacking forum YouHack leaked member credentials and millions of email/password pairs from other victims."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#YouHack"
cves: []
---
The YouHack hacking forum was breached in May 2013, with the data later resurfacing as part of a larger aggregated corpus. The breach directly exposed around 107,000 forum members' email addresses, usernames, IP addresses, and MD5 password hashes — most of which were unsalted and therefore trivial to crack. In addition, forum posts themselves contained email address and password pairs belonging to other victims, pushing the total to roughly 7.2 million unique email addresses.

The use of unsalted MD5 hashing means attackers can recover plaintext passwords quickly, and the embedded victim credential pairs make this corpus a ready-made resource for credential-stuffing attacks. Reused passwords from exposures like this routinely end up fueling account takeovers against corporate and directory accounts.

What to take away: credentials from this and similar dumps feed credential-stuffing and password-spray campaigns against enterprise identities. Organizations should check exposed accounts against their directory, enforce MFA, and screen for breached/reused passwords in AD.
