---
title: "CISA #StopRansomware: SafePay Group Leverages Stolen Credentials for Network Access"
date: 2026-10-20
category: advisory
summary: "CISA advisory details SafePay ransomware actors using stolen/guessed passwords, VPN flaws, and new account creation to compromise and encrypt victim networks."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-293a"
cves: ["CVE-2020-3259", "CVE-2023-20269"]
---
CISA's #StopRansomware advisory on the SafePay group highlights an identity-centric attack chain. Active since August 2024, SafePay actors frequently gain initial access by stealing or guessing passwords, phishing, and exploiting vulnerabilities in internet-facing security systems—including Cisco ASA/VPN flaws CVE-2020-3259 and CVE-2023-20269. Once inside, they establish persistence by creating new accounts or hijacking existing ones, then abuse legitimate system tools (living-off-the-land) to move laterally and disable defenses before encrypting files.

For identity and AD security teams, the advisory underscores how credential theft and account manipulation remain the backbone of ransomware intrusions. The creation of rogue accounts and takeover of legitimate ones are classic persistence techniques that directly impact Active Directory hygiene.

What to take away: Enforce MFA, patch exposed VPN appliances, monitor for anomalous account creation and privilege changes, and audit for credential-based lateral movement to blunt SafePay-style attacks.
