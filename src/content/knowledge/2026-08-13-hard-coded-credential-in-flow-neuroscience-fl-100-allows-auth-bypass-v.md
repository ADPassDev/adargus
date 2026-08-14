---
title: "Hard-Coded Credential in Flow Neuroscience FL-100 Allows Auth Bypass via Bluetooth"
date: 2026-08-13
category: advisory
summary: "A shared hard-coded credential in the FL-100 brain stimulation device lets nearby attackers bypass authentication and alter stimulation parameters."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-medical-advisories/icsma-26-225-01"
cves: ["CVE-2026-18164"]
---
CISA published a medical device advisory (CVE-2026-18164, CVSS v3 8.1) for the Flow Neuroscience FL-100, a Bluetooth-connected brain stimulation device used worldwide in healthcare. The device ships with an undocumented hard-coded credential that is shared across all units and can be used to bypass authentication entirely. An attacker within Bluetooth range could exploit this to manipulate stimulation parameters and override safety limits.

While this is a medical/IoT device rather than an enterprise identity system, it is a textbook credential-management failure: static, embedded secrets shared across a fleet mean a single disclosure compromises every device, and there is no per-unit authentication or rotation. Firmware prior to July 2026 is affected; Flow Neuroscience has issued updates delivered through the Flow app.

What to take away: hard-coded and shared credentials remain one of the most damaging and avoidable authentication weaknesses. The same principle that dooms this device applies to any environment
treat embedded or shared secrets as compromised by default, enforce unique credentials, and patch firmware promptly.
