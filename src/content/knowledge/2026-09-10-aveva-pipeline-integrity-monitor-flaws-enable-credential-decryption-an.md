---
title: "AVEVA Pipeline Integrity Monitor Flaws Enable Credential Decryption and Brute-Forcing"
date: 2026-09-10
category: advisory
summary: "CISA advisory details four vulnerabilities in AVEVA Pipeline Integrity Monitor, including hard-coded crypto keys and weak algorithms that expose hashes to brute-force attacks."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-253-01"
cves: ["CVE-2026-81821", "CVE-2026-81822", "CVE-2026-81823", "CVE-2026-81824"]
---
CISA has published an advisory covering four vulnerabilities (CVE-2026-81821 through CVE-2026-81824) in AVEVA Pipeline Integrity Monitor versions up to 2025_SP1_P1_build_7.1.9580.8513, with a top CVSS v3 score of 8.4. The flaws stem from a hard-coded cryptographic key, use of a broken or risky cryptographic algorithm, missing authorization, and cross-site scripting. Together they could let an attacker disclose sensitive information, brute-force password hashes, or execute arbitrary code in a browser session.

From an identity and access perspective, the cryptographic weaknesses are the notable concern: a hard-coded key means anyone with read access to PIMBoards project files can decrypt protected data, while a weak hashing algorithm makes stored credentials susceptible to offline brute-forcing. The missing authorization flaw further undermines access control within the application.

What to take away: organizations running this OT/critical-manufacturing software should apply AVEVA's fixes, restrict access to project files, and treat any credentials that may have been stored with the weak algorithm as potentially compromised and rotate them.
