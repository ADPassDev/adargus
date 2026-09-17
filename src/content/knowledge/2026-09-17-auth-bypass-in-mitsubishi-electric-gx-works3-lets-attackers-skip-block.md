---
title: "Auth Bypass in Mitsubishi Electric GX Works3 Lets Attackers Skip Block Passwords"
date: 2026-09-17
category: advisory
summary: "CVE-2026-15688 lets a local attacker authenticate with an invalid block password in GX Works3, exposing control programs to tampering."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-260-02"
cves: ["CVE-2026-15688"]
---
CISA published an ICS advisory for Mitsubishi Electric GX Works3 and the bundled Motion Control Settings software, both affected across all versions by CVE-2026-15688 (CVSS v3 8.8). The flaw stems from an incorrect implementation of the authentication algorithm (CWE-303), allowing a local attacker to authenticate successfully even with an invalid block password by running the product and modifying part of the executable module in memory.

Once past the flawed authentication check, an attacker can view, tamper with, destroy, or delete control programs — a serious concern for critical manufacturing environments where these engineering tools configure PLC and motion control logic.

What to take away: This is an authentication-bypass weakness in an OT engineering workstation product rather than an AD/domain issue, but it reinforces the same lesson — weak or bypassable credential validation on privileged tooling undermines the entire trust model. Restrict local access to engineering workstations and apply vendor mitigations promptly.
