---
title: "Hard-coded Credentials in EseeCloud IP Cameras Allow Full Device Takeover"
date: 2026-10-15
category: advisory
summary: "CISA warns of critical flaws in Guangzhou Juan EseeCloud app and firmware, including hard-coded credentials enabling attacker login and camera control."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-288-02"
cves: ["CVE-2026-107617", "CVE-2026-97858", "CVE-2026-105664"]
---
CISA published an ICS advisory covering three vulnerabilities in Guangzhou Juan IoT Technology's EseeCloud app (<=4.9.6) and firmware (<=4.9.86.0), carrying a CVSS v3 score of 9.8. The most significant from an identity standpoint is CVE-2026-107617, a hard-coded credential flaw that lets an attacker directly log in to affected EseeCloud devices and gain control over the IP cameras. The advisory also cites improperly controlled modification of dynamically-determined object attributes and an observable response discrepancy.

Hard-coded credentials are an authentication bypass by design: because the secret is embedded in the product, it cannot be changed by the operator and effectively hands any attacker a universal key. The vendor did not respond to CISA's coordination attempts, meaning no vendor patch or formal remediation is currently available. These cameras are deployed worldwide across critical infrastructure sectors including energy, communications, transportation, and government.

What to take away: baked-in credentials remain a recurring identity weakness in IoT gear. Organizations should inventory EseeCloud devices, isolate them from management and AD-connected networks, and restrict their exposure given the lack of a vendor fix.
