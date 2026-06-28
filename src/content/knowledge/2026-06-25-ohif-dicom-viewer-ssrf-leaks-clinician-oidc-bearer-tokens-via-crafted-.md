---
title: "OHIF DICOM Viewer SSRF Leaks Clinician OIDC Bearer Tokens via Crafted Links"
date: 2026-06-25
category: advisory
summary: "A SSRF flaw in OHIF DICOM Web Viewer (<=v3.12.0) can leak an authenticated clinician's OIDC Bearer token to an attacker-controlled server."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-medical-advisories/icsma-26-176-02"
cves: ["CVE-2026-12473"]
---
CISA published an ICS Medical Advisory for a server-side request forgery vulnerability (CVE-2026-12473, CVSS v3 8.2) in the OHIF DICOM Web Viewer Framework versions up to v3.12.0. The DICOMWebProxy and DICOMJSON data sources, shipped in the default configuration, fetch an arbitrary URL parameter without validation. Because OHIF's global authentication service automatically injects the authenticated user's OIDC Bearer token into outbound requests, a crafted link can cause that token to be sent to an attacker-controlled endpoint.

This is a direct identity/credential exposure risk: a stolen Bearer token lets an attacker impersonate the clinician and access medical imaging systems and any federated services trusting the same OIDC session. Standard DICOMweb data sources are not impacted, so exposure depends on the configured data source.

What to take away: in OIDC/SSO environments, automatic token injection into outbound requests is a recurring weak point—any SSRF or open-redirect can become a token theft primitive. Audit which data sources are enabled, restrict outbound URL targets, and treat token leakage as an account-takeover incident.
