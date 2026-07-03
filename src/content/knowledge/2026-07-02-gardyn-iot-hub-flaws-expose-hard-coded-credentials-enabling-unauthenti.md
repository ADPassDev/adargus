---
title: "Gardyn IoT Hub Flaws Expose Hard-Coded Credentials Enabling Unauthenticated Device Takeover"
date: 2026-07-02
category: advisory
summary: "CISA advisory details critical Gardyn IoT Hub vulnerabilities, including a hard-coded privileged key allowing unauthenticated attackers to control managed devices."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-183-03"
cves: ["CVE-2026-13768", "CVE-2026-55726", "CVE-2026-54477"]
---
CISA issued an ICS advisory for the Gardyn IoT Hub covering three vulnerabilities (CVE-2026-13768, CVE-2026-55726, CVE-2026-54477), one of which carries a maximum CVSS v3 score of 10. The most serious issue stems from use of hard-coded credentials: Gardyn devices expose a privileged `iothubowner` key that lets an attacker invoke IoT Hub Registry Manager functions, retrieve connection details for all Home Kit and Studio devices, execute arbitrary commands on connected devices, and potentially pivot to other systems on the victim's network. The other flaws involve exposure of sensitive system information and improper neutralization of HTTP headers.

From an identity and access standpoint, this is a textbook example of why static, embedded credentials are dangerous. A single leaked privileged key effectively becomes a master credential across the entire device fleet, bypassing any per-user authentication and granting broad, unauthenticated control.

What to take away: Hard-coded credentials remain one of the most reliable footholds for attackers. Organizations deploying IoT gear in operational or corporate environments should segment those devices from identity-critical infrastructure and treat any device with embedded keys as a potential pivot point into the broader network.
