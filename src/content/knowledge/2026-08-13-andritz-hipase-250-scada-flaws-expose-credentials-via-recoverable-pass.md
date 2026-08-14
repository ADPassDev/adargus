---
title: "ANDRITZ HIPASE-250 SCADA flaws expose credentials via recoverable passwords and hard-coded creds"
date: 2026-08-13
category: advisory
summary: "CISA advisory flags multiple auth-related flaws in ANDRITZ HIPASE-250/250 SCALA energy devices, including reversible password storage and hard-coded credentials."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-225-05"
cves: ["CVE-2026-65309", "CVE-2026-65310", "CVE-2026-65311", "CVE-2026-65313"]
---
CISA has issued an ICS advisory for ANDRITZ HIPASE-250 and 250 SCALA (versions <=7.20), devices deployed in the energy sector worldwide. The flaws are heavily identity- and credential-focused: passwords are stored and transmitted in a reversible format rather than as one-way hashes (CVE-2026-65309), critical functions lack authentication, and hard-coded credentials are present. The highest CVSS v3 score is 8.1.

Because credentials are recoverable, an attacker who can read the credential store or sniff network traffic could harvest all stored passwords, potentially pivoting to affected workstations. Missing authentication and hard-coded credentials further lower the bar for unauthorized access to operational technology in a critical infrastructure context.

What to take away: reversible password storage and hard-coded credentials are exactly the kind of weaknesses that let attackers move from a single compromised OT device into broader identity abuse. Organizations running these systems should apply vendor mitigations, rotate any exposed credentials, and segment/monitor access to affected workstations.
