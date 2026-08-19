---
title: "Fanlore wiki breach exposes 144,520 accounts with email and password hashes"
date: 2026-08-19
category: breach
summary: "OTW disclosed unauthorized access to its Fanlore wiki, exposing ~145k emails, usernames, and MD5/PBKDF2 password hashes."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#Fanlore"
cves: []
---
The Organization for Transformative Works (OTW) reported that its Fanlore wiki suffered unauthorized access in August 2026, resulting in the exposure of roughly 144,520 unique email addresses along with usernames and passwords hashed using either MD5 or PBKDF2. OTW self-submitted the affected data to Have I Been Pwned. The mix of hashing algorithms is notable: MD5-hashed passwords are trivial to crack, meaning a significant portion of credentials should be considered effectively compromised.

For identity security, exposed credentials from breaches like this feed directly into credential-stuffing and password-spray campaigns. Users who reused their Fanlore password elsewhere—including on corporate or Active Directory accounts—are at elevated risk of account takeover.

What to take away: Treat any password reused from this breach as burned. Organizations should screen affected email domains against their directories, enforce resets where reuse is suspected, and continuously check exposed-password lists against AD to block known-compromised credentials.
