---
title: "Armatura One Access-Control Platform Flaws Enable Full System Takeover"
date: 2026-10-01
category: advisory
summary: "CISA warns of critical vulnerabilities in Armatura One including hard-coded credentials and crypto keys that could let attackers seize physical access control systems."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-01"
cves: ["CVE-2023-46604", "CVE-2026-94591", "CVE-2026-94592", "CVE-2026-94593", "CVE-2026-94594"]
---
CISA issued an ICS advisory for Armatura LLC's Armatura One physical access-control platform, detailing multiple critical vulnerabilities (CVSS up to 9.8) affecting versions prior to 4.7.2 (and 4.6.1 in the USA build). The flaws include use of hard-coded credentials, a hard-coded cryptographic key, insertion of sensitive information into log files, and a deserialization flaw in an embedded Apache ActiveMQ component (CVE-2023-46604). Successful exploitation could grant unauthorized database access, arbitrary code execution at the highest privilege level, or full control of the physical access-control system.

For identity and access teams, the hard-coded credentials and cryptographic key are especially significant: static secrets baked into software cannot be rotated by defenders and provide a reliable path to authentication bypass. Because Armatura One governs physical entry across critical infrastructure sectors worldwide, compromise could translate directly into unauthorized building or facility access, undermining the physical layer that complements digital identity controls.

What to take away: Organizations running Armatura One should upgrade to patched versions promptly, restrict network exposure of the embedded ActiveMQ OpenWire listener, and treat any device relying on hard-coded secrets as a high-value target for isolation and monitoring.
