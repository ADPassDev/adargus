---
title: "Change Healthcare: one stolen Citrix login with no MFA, 190 million people exposed"
date: 2024-02-21
category: breach
summary: "BlackCat ransomware actors logged into Change Healthcare's Citrix remote-access portal with stolen credentials and no MFA — the largest healthcare data breach in U.S. history."
sourceName: "UnitedHealth Group"
sourceUrl: "https://www.unitedhealthgroup.com/changehealthcarecyberresponse"
cves: []
---

In February 2024, ransomware actors (the **BlackCat/ALPHV** group) gained access
to Change Healthcare — a UnitedHealth Group / Optum company that sits in the
middle of a large share of U.S. medical claims and pharmacy transactions. The
initial access, later confirmed by UnitedHealth Group's CEO in congressional
testimony, was a **Citrix remote-access portal protected by stolen credentials
and no multi-factor authentication**.

The attacker reached the portal on February 12, moved through the network for
roughly ten days, exfiltrated about **4 TB** of corporate and patient data, then
deployed ransomware. The fallout was historic: an estimated **190 million
Americans** affected — the largest healthcare data breach on record — with
months of disruption to claims, prescriptions, and payments and costs running
well past **$870 million**.

**Why it matters for identity teams.** A single credential on a single
remote-access gateway, missing one control, cascaded into a national-scale
incident. Remote access is exactly where MFA is non-negotiable.

**What to take away:**

- Enforce MFA on **all** remote-access paths — VPN, Citrix, RDP gateways.
- Monitor for anomalous use of valid credentials, not just malware.
- Assume any externally reachable login without MFA is a breach waiting to happen.
