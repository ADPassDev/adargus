---
title: "Panduit IntraVUE Flaws Expose Plaintext Credentials via API"
date: 2026-07-23
category: advisory
summary: "CISA advisory flags multiple IntraVUE vulnerabilities, including plaintext password storage that leaks cleartext credentials through the API."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-204-04"
cves: ["CVE-2026-40430"]
---
CISA published an ICS advisory for Panduit IntraVUE (developed by Pronetiqs), covering versions 3.2.1a14 and prior. The flaws include plaintext storage of a password (CVE-2026-40430) that can expose cleartext credentials through the product's API, along with confused-deputy proxy issues, exposure of sensitive system information, and inadequate encryption strength. Successful exploitation could let an attacker on the IT network manipulate industrial control devices without physical access or specialized tooling.

From an identity-security standpoint, the credential-storage weakness is the standout: cleartext credentials retrievable via API give attackers ready-made access material that can enable lateral movement into OT environments and potentially broader network compromise. The affected software is deployed worldwide across critical manufacturing, energy, IT, and water/wastewater sectors.

What to take away: Organizations running IntraVUE should apply the vendor-provided update, rotate any credentials handled by the product, and restrict API exposure. Where possible, monitor for anomalous credential access and enforce network segmentation between IT and industrial control systems.
