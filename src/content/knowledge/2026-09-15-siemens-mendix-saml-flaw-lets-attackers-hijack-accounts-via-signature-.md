---
title: "Siemens Mendix SAML Flaw Lets Attackers Hijack Accounts via Signature Bypass"
date: 2026-09-15
category: advisory
summary: "A signature-validation flaw in Siemens' Mendix SAML module (CVE-2026-80465) allows unauthenticated remote attackers to hijack accounts in certain SSO setups."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-06"
cves: ["CVE-2026-80465"]
---
CISA published an ICS advisory for CVE-2026-80465, an improper cryptographic signature verification flaw in the Siemens Mendix SAML module. Because the module fails to properly validate the SAML response signature, an unauthenticated remote attacker could forge or tamper with SAML assertions and hijack a user session in specific SSO configurations. The issue carries a CVSS v3 score of 8.7 and affects Mendix SAML versions before 4.2.3 (Mendix 10 and 11 compatible) and before 3.6.27 (Mendix 9.24 compatible).

SAML signature validation is the core trust mechanism in federated single sign-on—if signatures aren't verified, an attacker can impersonate any user without needing valid credentials. Siemens has released fixed versions and recommends updating the module promptly.

What to take away: Organizations running Mendix SAML for SSO should patch to the fixed releases immediately and review their SSO configurations, since this class of flaw directly undermines federated identity trust and can lead to full account takeover.
