---
title: "Siemens SIMATIC Authentication Bypass Lets Attackers Hijack User Sessions"
date: 2026-11-17
category: advisory
summary: "CISA advisory warns of an authentication bypass (CVE-2026-58114) in multiple Siemens SIMATIC products enabling on-path session takeover and code execution."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-08"
cves: ["CVE-2026-58114"]
---
CISA has published an ICS advisory covering an authentication bypass flaw (CVE-2026-58114) affecting a broad range of Siemens SIMATIC products, including SIMATIC BATCH, Information Server, PCS 7, Process Historian, and multiple versions of WinCC and WinCC Runtime Professional. The weakness allows an on-path (man-in-the-middle) attacker to take over the session of a legitimate authenticated user and execute arbitrary code with that victim's privileges.

For identity-focused defenders, this is a classic session-hijacking risk: even properly authenticated users can have their trust context stolen by an attacker positioned on the network path, effectively bypassing authentication controls. Siemens is still preparing fixes for several products and recommends interim mitigations in the meantime.

What to take away: organizations running SIMATIC/WinCC in OT environments should prioritize network segmentation, enforce encrypted channels, and apply Siemens' mitigations to reduce exposure to on-path attacks until patches are available.
