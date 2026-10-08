---
title: "CISA Flags Critical Flaws in Grid Protection Alliance openPDC and openHistorian"
date: 2026-10-08
category: advisory
summary: "CISA warns of multiple flaws including hard-coded credentials and missing authentication in energy-sector openPDC/openHistorian software, with a CVSS of 9.8."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-281-02"
cves: ["CVE-2026-104629", "CVE-2026-100730", "CVE-2026-105281", "CVE-2026-85479", "CVE-2026-101022", "CVE-2026-105278"]
---
CISA has issued an ICS advisory for Grid Protection Alliance's openPDC and openHistorian, software used worldwide in the energy sector. The five-plus vulnerabilities include Use of Hard-coded Credentials, Missing Authentication for Critical Function, insecure deserialization of untrusted data, SSRF, and unsafe reflection. The highest-rated issue carries a CVSS v3 score of 9.8.

From an identity and access perspective, the hard-coded credentials and missing authentication weaknesses are the most notable: they can allow attackers to bypass access controls and reach critical functions without valid authentication. The deserialization flaw (CVE-2026-100730) is partly mitigated on systems using Windows Authentication, where an attacker must already be authenticated, but is far more exposed on systems lacking that protection.

What to take away: organizations running affected openPDC (including the Docker image) and openHistorian versions should upgrade to the patched builds and review their authentication configuration—relying on Windows Authentication meaningfully reduces the attack surface for several of these issues.
