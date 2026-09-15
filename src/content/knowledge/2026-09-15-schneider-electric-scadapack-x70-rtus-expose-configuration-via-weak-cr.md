---
title: "Schneider Electric SCADAPack x70 RTUs Expose Configuration via Weak Credential Protection"
date: 2026-09-15
category: advisory
summary: "A CVSS 6.5 flaw in Schneider Electric SCADAPack x70 RTUs insufficiently protects credentials, risking unauthorized access to device configuration."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-258-04"
cves: ["CVE-2026-81861"]
---
CISA published an ICS advisory covering a vulnerability (CVE-2026-81861) affecting a broad range of Schneider Electric SCADAPack Remote Terminal Units, including the 47x, 47xi, 47xd, 470R, 57x, 3xx, and 32 series across all versions. The issue is classified as insufficiently protected credentials tied to the Secure Lock functionality, and without applying the vendor's mitigations, an attacker could gain unauthorized access to RTU configuration, leading to a loss of confidentiality.

While these are OT/ICS devices rather than traditional Active Directory infrastructure, the root cause is a credential-protection weakness — the same class of identity and access failure that plagues enterprise environments. Weakly protected credentials on internet- or network-reachable devices remain a common initial-access foothold, and these RTUs are deployed worldwide in critical manufacturing and energy sectors.

What to take away: treat credential storage and access controls on OT devices with the same rigor as identity systems elsewhere. Apply Schneider's mitigations, segment RTUs off flat networks, and monitor for unauthorized configuration access.
