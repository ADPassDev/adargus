---
title: "'Midnight Blizzard' breached Microsoft via password spray on a legacy account"
date: 2024-01-19
category: breach
summary: "A legacy, non-production tenant account with no MFA was compromised by password spray, then abused through OAuth to read senior Microsoft executives' email."
sourceName: "Microsoft Security Response Center"
sourceUrl: "https://msrc.microsoft.com/blog/2024/01/microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard/"
cves: []
---

Microsoft detected a nation-state intrusion in its corporate systems on
January 12, 2024, attributing it to **Midnight Blizzard** (a.k.a. Nobelium), a
Russian state-sponsored actor. The entry point was mundane: beginning in late
November 2023, the attacker used a **password-spray** attack to compromise a
**legacy, non-production test tenant account that did not have MFA enabled**.

From that foothold they identified and abused a **legacy test OAuth application**
with elevated access to Microsoft's corporate environment, created additional
malicious OAuth apps, and ultimately granted themselves the Exchange Online
`full_access_as_app` role — reading email belonging to senior leadership and
staff in cybersecurity, legal, and other functions.

**Why it matters for identity teams.** Two identity failure modes did the damage:
a **forgotten, un-MFA'd legacy account**, and **over-privileged OAuth
applications** nobody was watching. Even a security-leading organization is only
as strong as its least-governed identity.

**What to take away:**

- Enforce MFA on *every* account, including test and legacy tenants.
- Inventory and constrain OAuth app permissions; revoke dormant grants.
- Decommission unused tenants and accounts rather than leaving them idle.
