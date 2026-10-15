---
title: "CISA Advisory: dcm4che DICOM Server Flaws Include Missing Auth and Authorization Bugs"
date: 2026-10-15
category: advisory
summary: "CISA flags critical vulnerabilities in J4Care dcm4chee-arc-light, including missing authentication and authorization issues enabling patient data disclosure and record tampering."
sourceName: "CISA Cybersecurity Advisories"
sourceUrl: "https://www.cisa.gov/news-events/ics-medical-advisories/icsma-26-288-02"
cves: ["CVE-2026-97851", "CVE-2026-107621", "CVE-2026-105273", "CVE-2026-101021", "CVE-2026-105279", "CVE-2026-105667"]
---
CISA issued a medical advisory covering multiple vulnerabilities in J4Care's dcm4chee-arc-light 5.35.1, a widely deployed DICOM archive server used in healthcare environments worldwide. The flaws carry a CVSS score up to 9.1 and span missing authorization, missing authentication for critical functions, infinite loops, and inefficient algorithmic complexity. Exploitation could let an attacker delete stored medical images, disclose patient information, inject forged studies, reassign patient records, overwrite files, or trigger denial-of-service conditions.

From an identity and access perspective, the most notable issues are the missing authentication and missing authorization weaknesses. These allow unauthorized actors to invoke sensitive REST functions — for example, the storage status-change service can mark location records for deletion, causing stored objects to be purged while database records linger, leading to data integrity and availability failures.

What to take away: Even specialized medical infrastructure depends on sound access controls. Organizations running dcm4che should restrict network exposure, enforce authentication on critical endpoints, and apply vendor fixes, treating missing-auth flaws as high-priority given the potential for silent patient-data tampering.
