---
title: "Ebyte NA111-M Riddled with Auth Flaws Enabling Full Device Compromise"
date: 2026-08-27
category: advisory
summary: "CISA warns Ebyte NA111-M firmware contains multiple critical authentication and authorization flaws (CVSS 9.8) that could let attackers fully take over the device."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-239-05"
cves: ["CVE-2026-73125", "CVE-2026-76179", "CVE-2026-75814", "CVE-2026-76940", "CVE-2026-77966", "CVE-2026-73809", "CVE-2026-71187", "CVE-2026-75548", "CVE-2026-69658", "CVE-2026-76133", "CVE-2026-73819", "CVE-2026-77975", "CVE-2026-77977"]
---
CISA published an ICS advisory for the Ebyte NA111-M industrial device, disclosing 13 vulnerabilities in firmware version 9013-2-17. Several relate directly to identity and access control weaknesses, including Missing Authentication for Critical Functions, Missing Authorization, Weak Authentication, Use of Client-Side Authentication, and Improper Restriction of Excessive Authentication Attempts (enabling brute-force). The advisory also cites cleartext transmission and storage of sensitive information, use of broken cryptographic algorithms, and CSRF — with a top CVSS v3 score of 9.8.

Collectively these flaws could allow an attacker to bypass authentication entirely and fully compromise the device's web management interface, exposing credentials and administrative control. Because the device is deployed worldwide in Information Technology critical infrastructure sectors, compromised devices could serve as footholds for lateral movement and credential harvesting.

What to take away: authentication-bypass and weak-auth issues on network-facing management interfaces are a classic entry point for attackers seeking to pivot into broader identity infrastructure. Operators should restrict management access, apply vendor mitigations, and monitor for unauthorized authentication attempts.
