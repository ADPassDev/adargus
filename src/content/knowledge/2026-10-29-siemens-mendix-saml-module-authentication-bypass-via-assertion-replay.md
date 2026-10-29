---
title: "Siemens Mendix SAML Module Authentication Bypass via Assertion Replay"
date: 2026-10-29
category: advisory
summary: "A SAML assertion replay flaw (CVE-2026-89209) lets unauthenticated attackers bypass authentication in Siemens Mendix SAML module's IdP-initiated flows."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-302-01"
cves: ["CVE-2026-89209"]
---
CISA and Siemens disclosed an authentication bypass vulnerability (CVE-2026-89209, CVSS v3 6.8) in the Siemens Mendix SAML module. The module fails to properly protect against SAML assertion replay in IdP-initiated authentication flows, allowing an unauthenticated remote attacker to capture and replay a valid SAML assertion to gain unauthorized access to the application.

Affected versions include Mendix SAML for Mendix 9 (before 3.6.29) and Mendix 10/11 (before 4.2.4). Siemens has released fixed versions and recommends updating promptly.

What to take away: SAML replay protection (one-time-use assertions, enforced timestamps, and audience/InResponseTo validation) is a recurring weak point in federated authentication. Organizations relying on Mendix-based apps with SSO should patch and audit for IdP-initiated login usage, since assertion replay directly undermines identity trust.
