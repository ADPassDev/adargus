---
title: "Siemens Industrial Edge Management Auth Bypass Enables Full Account Takeover"
date: 2026-09-22
category: advisory
summary: "A critical flaw (CVE-2026-18963, CVSS 9.1) in Siemens IEM lets unauthenticated attackers reset credentials without email verification."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-265-06"
cves: ["CVE-2026-18963"]
---
Siemens has disclosed a critical authentication bypass vulnerability (CVE-2026-18963, CVSS 9.1) in its Industrial Edge Management (IEM) products, stemming from a weak password-recovery mechanism in the underlying Keycloak identity and access management engine. The flaw resides in the reset-credentials flow, allowing an unauthenticated remote attacker to reset a user's credentials without completing email verification, resulting in full account takeover.

Affected products include IEM Cloud (all versions), IEM Pro V1 and V2, and IEM Virtual, across a range of versions. Siemens has released fixed versions and recommends updating to the latest releases. Because IEM serves critical manufacturing environments worldwide and this vulnerability targets the core identity flow, successful exploitation could hand attackers privileged control over operational technology management consoles.

What to take away: Any organization running Siemens IEM should patch immediately. This is a reminder that identity subsystems—like the embedded Keycloak here—are prime targets, and weaknesses in password-reset logic can bypass authentication entirely regardless of password strength.
