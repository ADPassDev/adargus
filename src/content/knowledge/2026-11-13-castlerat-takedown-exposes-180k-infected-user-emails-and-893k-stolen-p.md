---
title: "CastleRAT takedown exposes 180k infected-user emails and 893k stolen passwords"
date: 2026-11-13
category: breach
summary: "Europol-led operation dismantled CastleRAT; HIBP added 179,745 emails and 893k unique stolen passwords harvested from infected machines."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#CastleRAT"
cves: []
---
In November 2026, Europol and international partners took down infrastructure behind several malware operations, including CastleRAT, a remote access trojan used to hijack infected computers. Law enforcement shared the harvested data with Have I Been Pwned: roughly 180,000 email addresses tied to infections and 893,000 unique passwords seen over 3 million times across accounts used on compromised machines. The passwords are now searchable via Pwned Passwords.

For identity teams, malware-sourced credential dumps like this are especially dangerous because the passwords were captured directly from victim endpoints, meaning they reflect real, actively-used credentials rather than hashed database leaks. Any of these passwords reused in Active Directory, VPN, or cloud logins create a direct path for account takeover.

What to take away: Screen your directory and privileged accounts against the updated Pwned Passwords list, force resets on matches, and prioritize MFA—infostealer/RAT-harvested credentials bypass password complexity entirely.
