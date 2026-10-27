---
title: "Authentication bypass flaws hit Mitsubishi Electric GENESIS/ICONICS SCADA suite"
date: 2026-10-27
category: advisory
summary: "CISA advisory flags multiple vulnerabilities in Mitsubishi Electric GENESIS and ICONICS products, including auth bypass bugs enabling unauthorized access."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-300-02"
cves: ["CVE-2023-4863", "CVE-2026-16436", "CVE-2026-16437", "CVE-2026-16438"]
---
CISA published an ICS advisory covering several vulnerabilities across Mitsubishi Electric's GENESIS, GENESIS64, ICONICS Suite, Hyper Historian, AnalytiX, MobileHMI, IoTWorX, MC Works64, GENESIS32 and BizViz products. Two of the flaws (CVE-2026-16436 and CVE-2026-16437) allow attackers to bypass authentication, while CVE-2026-16438 permits arbitrary operations and CVE-2023-4863 enables arbitrary code execution. Impacts range from information disclosure and data tampering to destruction of data and denial-of-service conditions.

The authentication bypass issues are the most identity-relevant here, as they could let an unauthorized actor gain access to SCADA/HMI environments without valid credentials, undermining access controls in industrial operations.

What to take away: Organizations running affected GENESIS/ICONICS versions should prioritize vendor patches and tighten network segmentation and access restrictions around these HMI/SCADA systems, since auth-bypass weaknesses in operational technology can give attackers a foothold into critical infrastructure.
