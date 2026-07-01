---
title: "FUXA SCADA/HMI Auth Bypass Exposes User Accounts and Roles to Unauthenticated Attackers"
date: 2026-06-30
category: advisory
summary: "CVE-2026-13207 lets remote attackers bypass authentication via dot-segment path tricks to enumerate all users and role assignments in FUXA SCADA/HMI."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-181-02"
cves: ["CVE-2026-13207"]
---
CISA published an ICS advisory for Frangoteam FUXA SCADA/HMI versions 1.3.1 and prior, affected by CVE-2026-13207 (CVSS v3 7.5), an authentication bypass by spoofing. The flaw stems from the REST API router failing to normalize dot-segment path sequences before applying authentication middleware. By prefixing requests with sequences such as `/api/./users`, `/api/./roles`, or `/api/project/../users`, an unauthenticated remote attacker can reach protected endpoints and retrieve sensitive user account and role data.

For identity security, the danger is that a full enumeration of user accounts and role assignments hands attackers a ready-made map of privileged identities in an operational technology environment. This reconnaissance is a strong precursor to targeted credential attacks or privilege escalation against critical infrastructure in manufacturing, energy, and water/wastewater sectors.

What to take away: treat this as an internet-exposed identity data leak risk. Update FUXA past 1.3.1 when a fix is available, restrict network exposure of the HMI/SCADA REST API, and monitor for anomalous unauthenticated access to user and role endpoints.
