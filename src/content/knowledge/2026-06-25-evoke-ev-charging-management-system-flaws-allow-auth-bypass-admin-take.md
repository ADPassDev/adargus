---
title: "EVoke EV Charging Management System Flaws Allow Auth Bypass, Admin Takeover"
date: 2026-06-25
category: advisory
summary: "CISA advisory details missing authentication, weak session handling, and exposed credentials in EVoke CSMS, enabling unauthorized admin control of charging stations."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-176-02"
cves: ["CVE-2026-40702"]
---
CISA has published an ICS advisory for EVoke Systems Charging Station Management System (CSMS), covering all versions, with a CVSS v3 score of 9.4. The flaws are heavily identity- and access-related: missing authentication for a critical function (CVE-2026-40702), improper restriction of excessive authentication attempts (brute-force exposure), insufficient session expiration, and insufficiently protected credentials. The unauthenticated WebSocket endpoints let attackers impersonate charging stations and gain access to sensitive data or perform unauthorized actions.

Successful exploitation could give attackers unauthorized administrative control over charging stations or allow denial-of-service disruption of charging services. EVoke CSMS is deployed worldwide across the Energy and Transportation Systems critical infrastructure sectors, raising the stakes of these access-control weaknesses.

What to take away: This is a textbook cluster of identity hygiene failures—no authentication, no brute-force throttling, lingering sessions, and exposed credentials. Organizations operating EV charging infrastructure should review network segmentation, enforce authentication on management interfaces, and apply vendor mitigations as they become available.
