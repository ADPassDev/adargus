---
title: "Rockwell 1715-AENTR EtherNet/IP Adapter Exposes Unauthenticated Debug Port (CVSS 10)"
date: 2026-07-14
category: advisory
summary: "A missing-authentication flaw in Rockwell's 1715-AENTR adapter lets unauthenticated remote attackers run intrusive CLI commands via an exposed debug port."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-195-04"
cves: ["CVE-2026-10577"]
---
CISA issued an advisory for CVE-2026-10577, a critical (CVSS 10) vulnerability in Rockwell Automation's 1715-AENTR EtherNet/IP Adapter affecting versions 3.003 and earlier. The device exposes a network-accessible debug port that fails to enforce privilege controls, permitting unauthenticated remote attackers to reach intrusive command-line interface functions. Successful exploitation could allow reading or deleting files, halting tasks, modifying memory, and altering I/O states, threatening the confidentiality, integrity, and availability of the device.

While this is an ICS/OT weakness rather than a classic Active Directory issue, the root cause—missing authentication for a critical function—is a fundamental access-control failure. The adapter is deployed worldwide across energy, water/wastewater, and critical manufacturing sectors, making it an attractive target.

What to take away: unauthenticated management and debug interfaces are among the highest-impact identity risks in any environment. Operators should restrict network exposure of these ports, segment OT networks, and apply vendor mitigations promptly.
