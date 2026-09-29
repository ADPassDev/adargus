---
title: "Anjvision YSSD-RTMP-H5 flaws include hard-coded and weak credentials (CVSS 9.8)"
date: 2026-09-29
category: advisory
summary: "CISA advisory flags multiple critical flaws in Anjvision camera firmware, including hard-coded credentials and account access enabling full device takeover."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-272-05"
cves: ["CVE-2026-100291", "CVE-2026-100292", "CVE-2026-100293", "CVE-2026-100294", "CVE-2026-100295", "CVE-2026-100296", "CVE-2026-100297", "CVE-2026-100298", "CVE-2026-100299"]
---
CISA issued an ICS advisory for the Anjvision YSSD-RTMP-H5 device (firmware 3.3.2.4), covering nine vulnerabilities carrying a top CVSS score of 9.8. Several of the flaws are directly identity- and credential-related, including use of hard-coded credentials (CVE-2026-100291 series), insufficiently protected credentials, and use of weak credentials. Others involve OS command injection, SSRF, improper cryptographic signature verification, and active debug code.

Successful exploitation could let an attacker access sensitive information, hijack user accounts, run OS-level commands, or gain full control of the device. Hard-coded and weak credentials are particularly dangerous because they cannot be remediated by end users and provide reliable, repeatable access across every deployed unit worldwide.

What to take away: IoT and camera devices with embedded credentials often become footholds into broader networks. Organizations should inventory affected Anjvision devices, isolate them from identity-critical segments, and apply vendor mitigations to prevent credential-based compromise.
