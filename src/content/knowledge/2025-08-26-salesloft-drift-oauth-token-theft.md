---
title: "Stolen Salesloft Drift OAuth tokens used to raid 700+ companies' Salesforce data"
date: 2025-08-26
category: breach
summary: "UNC6395 stole OAuth tokens tied to the Salesloft Drift integration and used them to export data — and hunt for cloud credentials — from over 700 organizations' Salesforce instances."
sourceName: "Google Threat Intelligence Group"
sourceUrl: "https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift"
cves: []
---

Between roughly **August 8 and 18, 2025**, an actor Google tracks as **UNC6395**
ran a supply-chain identity attack: it stole **OAuth access and refresh tokens**
associated with the third-party **Salesloft Drift** application and used them to
impersonate that trusted integration. With the tokens, the attacker queried and
bulk-exported data from the **Salesforce instances of more than 700
organizations** — including a number of well-known security vendors.

Because the stolen tokens belonged to a widely-connected integration, access
extended beyond Salesforce to platforms such as **Slack and Google Workspace**.
Crucially, the actor wasn't only after CRM records — it specifically hunted for
**secrets**: AWS access keys, Snowflake tokens, and passwords embedded in support
cases and objects. Salesloft and Salesforce revoked all Drift tokens on
August 20 and pulled the app from the AppExchange.

**Why it matters for identity teams.** **OAuth tokens are credentials** — and a
single compromised integration becomes a master key across every system it
connects. Non-human identities (apps, integrations, service tokens) now need the
same scrutiny as user accounts.

**What to take away:**

- Inventory third-party integrations and scope their OAuth permissions tightly.
- Rotate and monitor app tokens; alert on anomalous API/SOQL export activity.
- Don't store secrets in CRM records or support tickets where a token can reach them.
