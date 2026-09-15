---
title: "Wärtsilä FOS-Onboard Flaws Allow Credential Extraction, Privileged Impersonation"
date: 2026-09-15
category: advisory
summary: "CISA advisory warns hardcoded crypto key vulnerabilities in Wärtsilä FOS-Onboard could let attackers extract credentials and impersonate privileged clients."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-02"
cves: ["CVE-2026-78225", "CVE-2026-81855"]
---
CISA has issued an ICS advisory covering vulnerabilities in Wärtsilä FOS-Onboard (version 5.07.0923.01), maritime software used in the transportation critical infrastructure sector worldwide. The flaws (CVE-2026-78225 and CVE-2026-81855) stem from a use of hard-coded cryptographic keys, carrying a CVSS v3 score of 9.1. Successful exploitation could allow an attacker to deliver an unauthorized update, execute code, or extract credentials — ultimately enabling impersonation of a privileged client.

The credential-extraction and privileged-impersonation aspects are the identity-relevant angle here: a hardcoded server key undermines the trust boundary of the update mechanism, letting an attacker present themselves as a legitimate, trusted party. Wärtsilä states the vulnerabilities are not exploitable when the product is installed as recommended and has released a security patch, which affected users must obtain by contacting the vendor.

What to take away: hardcoded cryptographic keys remain a recurring root cause of authentication and impersonation weaknesses. Operators of affected OT/maritime systems should apply the vendor patch and verify deployments follow recommended hardening to prevent credential compromise.
