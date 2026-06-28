---
title: "Okta support-system breach exposed customer session tokens"
date: 2023-10-20
category: breach
summary: "Attackers accessed Okta's customer support case-management system and obtained HAR files containing session tokens, which were then used against several downstream customers."
sourceName: "Okta Security"
sourceUrl: "https://sec.okta.com/"
cves: []
---

Okta disclosed that a threat actor gained access to its **customer support
case-management system** using a stolen credential. Support tickets often include
HTTP Archive (**HAR**) files for troubleshooting, and some of those files contained
valid **session tokens**. The attacker replayed those tokens to access a number of
Okta customers' environments.

**Why it matters for identity teams.** The incident is a textbook reminder that
**session tokens are credentials** — capturing a live token can sidestep both
passwords and MFA. It also shows how a support/secondary system can become the path
to production identity data.

**What to take away:**

- Sanitize HAR files and any diagnostic uploads before sharing them with vendors.
- Bind sessions to device/network signals and shorten token lifetimes.
- Treat the identity provider's own supply chain as part of your attack surface.

> This is a seed entry illustrating the Knowledge Center format. Read Okta's own
> write-ups at the primary source linked above.
