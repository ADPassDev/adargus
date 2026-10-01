---
title: "CISA Flags Auth Flaws in Monta EV Charging Platform Allowing Admin Takeover"
date: 2026-10-01
category: advisory
summary: "Missing authentication, weak session handling, and poorly protected credentials in Monta's monta.app could let attackers seize admin control of EV charging stations."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-274-02"
cves: ["CVE-2026-95102", "CVE-2026-97363", "CVE-2026-97212", "CVE-2026-93474"]
---
CISA issued an ICS advisory covering four vulnerabilities in Monta's monta.app EV charging management platform, affecting all versions with a CVSS v3 score up to 9.4. The flaws center heavily on identity and access weaknesses: missing authentication on critical WebSocket endpoints (CVE-2026-95102), improper restriction of excessive authentication attempts (CVE-2026-97363), insufficient session expiration (CVE-2026-97212), and insufficiently protected credentials (CVE-2026-93474).

The unauthenticated WebSocket issue is particularly notable, as it allows attackers to impersonate charging stations, access sensitive data, and escalate privileges — potentially gaining unauthorized administrative control. The combination of absent authentication, lack of brute-force protections, lingering sessions, and exposed credentials represents a classic chain of identity failures that can compromise an entire system and disrupt charging services via denial-of-service.

What to take away: These vulnerabilities underscore how foundational authentication, session management, and credential protection controls remain the weakest links even in critical energy and transportation infrastructure. Operators relying on Monta should apply vendor mitigations and scrutinize any externally reachable endpoints that lack enforced authentication.
