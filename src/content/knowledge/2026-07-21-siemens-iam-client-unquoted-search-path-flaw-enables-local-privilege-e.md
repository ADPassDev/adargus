---
title: "Siemens IAM Client Unquoted Search Path Flaw Enables Local Privilege Escalation"
date: 2026-07-21
category: advisory
summary: "An unquoted search path vulnerability in Siemens IAM Client lets an authenticated local attacker escalate privileges across many Siemens engineering products."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-202-05"
cves: []
---
CISA has published an ICS advisory covering an unquoted search path vulnerability in the Siemens IAM Client component, which is bundled into a wide range of Siemens engineering and simulation products including COMOS, Simcenter, Solid Edge, Teamcenter Visualization, and Tecnomatix. The flaw allows an authenticated local attacker to place a malicious executable in a path that gets loaded with elevated privileges, resulting in privilege escalation on the affected host.

Siemens has released updated versions for several affected products and is preparing further fixes, recommending interim countermeasures where patches are not yet available. Because the shared IAM Client sits at the identity/access layer of these tools, the flaw is relevant to organizations concerned about local attackers gaining higher privileges on engineering workstations.

What to take away: while exploitation requires local authenticated access, unquoted search path issues are a well-understood escalation vector. Inventory Siemens products embedding the IAM Client, prioritize patching to the listed fixed versions, and enforce least-privilege and directory permissions on install paths as an interim mitigation.
