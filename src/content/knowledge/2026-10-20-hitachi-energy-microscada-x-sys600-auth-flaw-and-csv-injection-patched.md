---
title: "Hitachi Energy MicroSCADA X SYS600 Auth Flaw and CSV Injection Patched"
date: 2026-10-20
category: advisory
summary: "CISA advisory flags multiple SYS600 flaws including an improper authentication algorithm and CSV injection affecting energy-sector SCADA systems."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-293-04"
cves: ["CVE-2026-9852", "CVE-2026-9853", "CVE-2026-9854"]
---
CISA published an ICS advisory covering several vulnerabilities in Hitachi Energy's MicroSCADA X SYS600 product (versions 10.7 and earlier, plus 10.8). Among them is an incorrect implementation of an authentication algorithm, which is directly relevant to identity and access security, alongside a CSV injection flaw (CVE-2026-9852) that could enable data exfiltration or code execution depending on environment configuration.

SYS600 is deployed worldwide in the energy sector, making these flaws significant for critical infrastructure operators. A weak or flawed authentication mechanism in a SCADA platform could allow attackers to bypass access controls and gain unauthorized entry to operational systems.

**What to take away:** Operators running affected SYS600 versions should apply Hitachi Energy's recommended mitigations and prioritize the authentication-related fix, as broken auth in OT environments can expose critical energy infrastructure to unauthorized access.
