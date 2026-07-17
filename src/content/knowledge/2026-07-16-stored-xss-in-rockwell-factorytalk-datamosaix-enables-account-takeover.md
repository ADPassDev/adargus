---
title: "Stored XSS in Rockwell FactoryTalk DataMosaix Enables Account Takeover"
date: 2026-07-16
category: advisory
summary: "CISA advisory warns of a stored XSS flaw (CVE-2026-9292) in FactoryTalk DataMosaix that can lead to credential theft and account takeover."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-197-09"
cves: ["CVE-2026-9292"]
---
CISA has published an ICS advisory covering CVE-2026-9292, a stored cross-site scripting (XSS) vulnerability in Rockwell Automation's FactoryTalk DataMosaix Private Cloud (versions 8.02 and earlier). The flaw arises from improper neutralization of user-supplied input in the Workflows configuration, letting a high-privileged authenticated attacker plant persistent malicious JavaScript on the server.

When other users load the affected page, the injected script executes in their browser session. Per the advisory, this can result in account takeover, credential theft, and redirection to attacker-controlled destinations \u2014 making it a genuine identity/access concern despite the CVSS 6.1 rating. Because DataMosaix is deployed across critical manufacturing environments worldwide, exploitation could give attackers a foothold in sensitive OT-adjacent systems.

What to take away: stored XSS is often underrated, but its ability to hijack authenticated sessions and steal credentials makes it a real identity risk. Organizations running affected DataMosaix versions should apply Rockwell's fixes and review privileged account activity for signs of session compromise.
