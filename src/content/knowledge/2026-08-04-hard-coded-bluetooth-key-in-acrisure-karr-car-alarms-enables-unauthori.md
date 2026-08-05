---
title: "Hard-coded Bluetooth key in Acrisure KARR car alarms enables unauthorized vehicle control"
date: 2026-08-04
category: advisory
summary: "A shared, hard-coded Bluetooth authentication key in KARR BT and DR-100 anti-theft systems lets nearby attackers unlock doors and bypass immobilizers."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-216-01"
cves: ["CVE-2026-18411"]
---
CISA issued an ICS advisory for Acrisure's KARR BT and DR-100 dealer-installed automotive anti-theft systems (CVE-2026-18411, CVSS 8.1). The devices use a hard-coded cryptographic key that is shared across affected units for Bluetooth authentication. Because the same key is reused everywhere, an attacker within Bluetooth range can authenticate and issue unauthorized commands such as unlocking doors or manipulating the engine immobilizer. Firmware versions prior to July 20, 2026 are affected, with a vendor fix available.

While this is embedded/automotive rather than Active Directory, it is a textbook credential/authentication failure: a static shared secret used as the sole authenticator. Hard-coded keys cannot be rotated per device, so a single extraction compromises the entire fleet's authentication scheme.

What to take away: the same anti-pattern — shared or hard-coded secrets standing in for real per-identity credentials — appears across IT and OT alike. Unique, rotatable credentials and proper key management remain foundational to any access control model.
