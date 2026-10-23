---
title: "Kiloview E3 NDI Encoder: Hard-coded Credentials and Missing Auth Among 9 Flaws"
date: 2026-10-22
category: advisory
summary: "CISA advisory flags critical vulnerabilities in Kiloview E3 NDI Encoder, including hard-coded credentials and missing authentication that could fully compromise devices."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-295-01"
cves: ["CVE-2026-109122", "CVE-2026-111100", "CVE-2026-96616", "CVE-2026-105265", "CVE-2026-110491", "CVE-2026-107861", "CVE-2026-110243", "CVE-2026-92450", "CVE-2026-110825"]
---
CISA has issued an ICS advisory for the Kiloview E3 NDI Encoder (firmware before 1.30), detailing nine CVEs that together could let an attacker fully compromise affected devices. Several of the flaws are directly identity- and access-related: the device uses hard-coded credentials (CWE-798), has missing authentication for a critical function, and suffers from insufficient session expiration. Other issues include OS command injection, path traversal, and a NULL pointer dereference. The highest-rated flaw carries a CVSS v3 score of 9.9.

The combination of hard-coded credentials and missing authentication is particularly concerning because it can allow attackers to bypass access controls entirely and gain persistent control of the device without valid user credentials. Insufficient session expiration further weakens access boundaries by keeping sessions valid longer than intended.

**What to take away:** Organizations running Kiloview E3 NDI encoders in communications or IT environments should update to firmware 1.30 or later and treat these devices as high-risk until patched, rotating any credentials and restricting network exposure of the web management interface.
