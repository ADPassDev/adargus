---
title: "Toptech TMS7/TopHAT Flaws Include Session Fixation, Enabling Access to Critical Data & RCE"
date: 2026-09-29
category: advisory
summary: "CISA advisory covers multiple critical vulnerabilities in Toptech TMS7 and TopHAT 7.6.3, including a session fixation flaw and SQL injection, with a max CVSS of 10."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-272-02"
cves: ["CVE-2026-71379", "CVE-2026-70356", "CVE-2026-72510", "CVE-2026-63713", "CVE-2026-68954", "CVE-2026-68068", "CVE-2026-72507", "CVE-2026-71302", "CVE-2026-69662", "CVE-2026-71189"]
---
CISA has issued an ICS advisory for Toptech Systems' TMS7 and TopHAT terminal management software (version 7.6.3), used across energy, chemical, and transportation critical infrastructure worldwide. The bundle of vulnerabilities carries a maximum CVSS v3 score of 10 and includes SQL injection, unrestricted file upload, eval injection, cross-site scripting, exposed files/directories, and a session fixation flaw. Successful exploitation could let attackers access critical data or execute arbitrary code.

From an identity and access perspective, the session fixation issue (CVE tied to the affected versions) is notable: it allows an attacker to hijack a legitimate user's authenticated session, bypassing normal login controls. Combined with SQL injection—which can expose credential stores—and code-execution paths, an attacker could pivot from web access to full compromise of accounts operating this OT software.

What to take away: Organizations running Toptech TMS7/TopHAT should apply vendor mitigations, restrict network exposure, and audit for anomalous authenticated sessions. Session fixation and credential-exposing injection flaws underscore why authentication hygiene and session management matter even in specialized ICS environments.
