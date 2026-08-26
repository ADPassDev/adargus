---
title: "CISA Red Team Achieves Full Domain Compromise in Two SOC Assessments"
date: 2026-08-25
category: advisory
summary: "CISA's dual red team exercises both reached full Active Directory domain compromise, with only one org detecting and containing the intrusion."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-237a"
cves: []
---
CISA published an advisory (AA26-237A) detailing simultaneous red team assessments at two critical infrastructure organizations. In both cases the red team achieved full domain compromise and reached sensitive business systems and cloud resources. The key difference was defensive maturity: Organization A neither detected nor contained the activity, while Organization B quickly spotted the initial compromise, isolated affected systems, and forced the red team into an assume-breach posture.

For identity and AD defenders, the takeaway is that domain compromise remains achievable against real environments, and the deciding factor is detection and response capability rather than perimeter controls alone. CISA highlights that untuned detection tools generate alert fatigue and missed threats, while organizational silos and bureaucratic delays cripple incident response.

What to take away: Baseline your environment, tune alerts to cut false positives, and rehearse rapid isolation of compromised hosts and identities. Assume attackers can reach Domain Admin, and invest in the detection and response workflows that let you catch and contain lateral movement before full compromise.
