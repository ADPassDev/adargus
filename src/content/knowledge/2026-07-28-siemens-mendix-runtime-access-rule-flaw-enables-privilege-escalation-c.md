---
title: "Siemens Mendix Runtime Access-Rule Flaw Enables Privilege Escalation (CVE-2026-7891)"
date: 2026-07-28
category: advisory
summary: "A documentation gap around the System.User entity in Siemens Mendix leads to overly permissive access rules, risking data exposure and privilege escalation."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-209-02"
cves: ["CVE-2026-7891"]
---
CISA has published an advisory on a critical (CVSS 9.1) issue in Siemens Mendix Runtime, tracked as CVE-2026-7891. The root cause is a documentation gap: Mendix guidance did not adequately explain the special access behavior of the System.User entity, leaving developers without enough information to configure access rules securely. As a result, applications can end up with insecure inherited permissions.

The practical impact is significant for identity and access control. A common misconfiguration allows the anonymous user role, when combined with the System.User entity, to read all stored records even though no access rights were explicitly granted to that role. This can lead to unintended exposure of sensitive user data or privilege escalation within deployed Mendix applications. All Mendix Runtime versions are considered affected.

What to take away: This is a design/documentation-driven access-control weakness rather than a code exploit, so remediation is on developers. Teams running Mendix apps should audit access rules against the updated Siemens documentation, paying special attention to anonymous roles and any entity inheriting from System.User to prevent unauthorized access to identity data.
