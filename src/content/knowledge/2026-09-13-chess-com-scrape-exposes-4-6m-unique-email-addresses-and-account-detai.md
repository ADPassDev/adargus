---
title: "Chess.com scrape exposes 4.6M unique email addresses and account details"
date: 2026-09-13
category: breach
summary: "Millions of Chess.com records posted online in August 2026 contained emails, usernames, names, and countries, likely obtained via scraping."
sourceName: "Have I Been Pwned"
sourceUrl: "https://haveibeenpwned.com/PwnedWebsites#Chess2026"
cves: []
---
A dataset allegedly sourced from Chess.com surfaced online in August 2026, containing roughly 7.3 million rows tied to 4.6 million unique email addresses. Alongside emails, the data included usernames, real names, countries, and other account-related details. Analysis indicated the information was likely harvested through scraping rather than a direct system compromise, a conclusion reinforced by the fact that 99% of the emails had already appeared in prior breaches.

While scraped data lacks passwords or credentials, the combination of emails, usernames, and names still provides useful material for phishing, credential-stuffing, and social-engineering campaigns. Reused identifiers across platforms can help attackers correlate identities and target users at other services, including corporate accounts.

What to take away: Even non-credential scrapes feed the broader identity-attack ecosystem. Organizations should reinforce phishing awareness and monitor for exposed employee emails that could be leveraged against enterprise identity systems.
