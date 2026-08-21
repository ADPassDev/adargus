---
title: "Johnson Controls Simplex Incident Manager Stores Credentials in Cleartext Memory"
date: 2026-08-20
category: advisory
summary: "CVE-2026-27875 lets a low-privileged local attacker dump passwords and auth tokens from memory in Simplex Incident Manager <=V2.01."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-232-01"
cves: ["CVE-2026-27875"]
---
CISA issued an ICS advisory for Johnson Controls Simplex Incident Manager (versions V2.01 and earlier), which stores user credentials—including passwords and authentication tokens—unencrypted in system memory while running. Tracked as CVE-2026-27875 (CVSS v3 5.8), the cleartext-storage flaw allows a local attacker with low privileges, or a malicious insider, to extract these secrets using memory-dumping tools.

For identity security, the risk is credential harvesting that can escalate into unauthorized access to the application and any connected systems. The product is deployed worldwide across critical infrastructure sectors including energy, transportation, and government facilities, raising the stakes for lateral movement if harvested tokens or passwords are reused elsewhere.

What to take away: exploitation requires local access, so tight host access controls, monitoring for memory-dumping activity, and prompt patching (once a fixed version is available) reduce exposure—and reused credentials should be rotated where this application touches broader identity infrastructure.
