---
title: "CISA Advisory: Hydro-Québec EV Charging Backend Has Critical Auth Flaws"
date: 2026-07-07
category: advisory
summary: "CVSS 9.8 access control and session flaws in Hydro-Québec's Le Circuit Electrique charging backend could enable privilege escalation and DoS."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-188-01"
cves: ["CVE-2026-20744"]
---
CISA published an ICS advisory covering the Hydro-Québec Le Circuit Electrique EV charging station backend, deployed across Canada's transportation infrastructure. The flaws include improper access control, insufficient restriction of authentication attempts, and insufficient session expiration. The headline issue (CVE-2026-20744, CVSS 9.8) is an unauthenticated WebSocket endpoint that accepts connections without authentication, opening the door to privilege escalation, alongside a denial-of-service risk.

While this is operational-technology rather than Active Directory, the root causes are core identity and access failures: missing authentication, no brute-force throttling, and sessions that never expire. Any of these in an enterprise identity context would represent a serious credential and access-control gap. Hydro-Québec has mitigated much of the fleet by disabling OCPP.

What to take away: even in ICS/EV infrastructure, weak authentication and poor session management are the recurring theme—apply the same session-expiration, MFA/rate-limiting, and endpoint-authentication rigor you enforce on IT identity systems.
