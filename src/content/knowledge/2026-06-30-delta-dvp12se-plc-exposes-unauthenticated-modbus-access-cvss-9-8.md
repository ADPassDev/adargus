---
title: "Delta DVP12SE PLC Exposes Unauthenticated Modbus Access (CVSS 9.8)"
date: 2026-06-30
category: advisory
summary: "CISA warns Delta Electronics DVP12SE PLCs allow unauthenticated Modbus TCP commands, letting remote attackers control device logic without credentials."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-181-07"
cves: ["CVE-2026-12819", "CVE-2026-12818"]
---
CISA published an ICS advisory for Delta Electronics DVP12SE PLCs (all versions), flagging two vulnerabilities including a missing-authentication flaw (CVE-2026-12819) rated CVSS 9.8. The device exposes a Modbus TCP service with no authentication, access control, or privilege validation, allowing any reachable network source to read and write coils, holding registers, and operational memory. A second issue (CVE-2026-12818) involves resource allocation without throttling. Successful exploitation lets an attacker remotely issue commands, modify operational values, and alter control logic.

While this is an OT/ICS device rather than a traditional identity system, the core weakness is fundamentally an access-control failure: the complete absence of authentication and privilege enforcement on a critical function. It is a textbook example of why network-exposed control functions must never rely on network reachability as a security boundary.

What to take away: teams running these PLCs in critical manufacturing should isolate the devices behind segmentation and restrict Modbus port access, since no credential or privilege check exists at the device level.
