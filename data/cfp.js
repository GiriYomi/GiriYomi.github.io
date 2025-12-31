/**
 * DIRLab Call for Papers (CFP) Data
 * ==================================
 * 
 * MAINTENANCE GUIDE:
 * 1. URL_DICTIONARY: Add/update conference URLs here. These are the ONLY URLs used.
 * 2. CFP_DATA: Add/update deadline entries. Link to URL_DICTIONARY keys.
 * 3. Do NOT guess URLs - if unknown, leave urlKey undefined.
 * 
 * Data sourced from: temp/dirlab-Call-For-Papers - Sheet1.csv
 */

// ============================================
// URL DICTIONARY — MANUALLY MAINTAINED
// Add conference official URLs here
// ============================================
const URL_DICTIONARY = {
  // Top-tier conferences
  "SOSP": null, // TBD
  "OSDI": null, // TBD  
  "FAST": null, // TBD
  "SIGMOD": null, // TBD
  "SC": null, // TBD
  "HPDC": null, // TBD
  "ICS": null, // TBD
  "IPDPS": null, // TBD
  "ASPLOS": null, // TBD
  "SIGMETRICS": null, // TBD
  "NSDI": null, // TBD
  "PPoPP": null, // TBD
  "EuroSys": null, // TBD
  "USENIX_ATC": null, // TBD
  
  // Other conferences
  "CLUSTER": null,
  "CCGRID": null,
  "MSST": null,
  "SOCC": null,
  "SYSTOR": null,
  "PDSW": "https://www.pdsw.org",
  "HotStorage": null,
  "BIGDATA": null,
  "ICPP": null,
  "PACT": null,
  "HPCC": null,
  "ICPADS": null,
  "ICDCS": null,
  "ISC": null,
  "MASCOTS": null,
  "SBAC_PAD": null,
  "HiPC": null,
  "PODS": null,
  "PODC": null,
  "SPAA": null
};

// ============================================
// CFP DATA — From CSV
// ============================================
const CFP_DATA = [
  // January
  {
    venue: "USENIX ATC'25",
    deadlines: "Abstract: Jan 7, 2025 | Paper: Jan 14, 2025",
    conference: "Jul 7-9, 2025 | Boston, MA, USA",
    tier: "A",
    urlKey: "USENIX_ATC"
  },
  {
    venue: "SIGMOD'26 (Cycle 1)",
    deadlines: "Abstract: Jan 10, 2025 | Paper: Jan 17, 2025",
    conference: "May 31 - Jun 5, 2026 | Bengaluru, India",
    tier: "A*",
    urlKey: "SIGMOD"
  },
  {
    venue: "ACM SIGMETRICS 2026 (Winter)",
    deadlines: "Abstract: Jan 6, 2026 | Paper: Jan 13, 2025",
    conference: "Jun 8-12, 2026 | Ann Arbor, Michigan, USA",
    tier: "A*",
    urlKey: "SIGMETRICS"
  },

  // February
  {
    venue: "HPDC'26",
    deadlines: "Abstract: Jan 29, 2026 | Paper: Feb 5, 2026",
    conference: "Jul 13-16, 2026 | Cleveland, Ohio, USA",
    tier: "A",
    urlKey: "HPDC"
  },
  {
    venue: "ACM PODC 2026",
    deadlines: "TBD",
    conference: "Jul 6-10, 2026 | Egham, England",
    tier: "A*",
    urlKey: "PODC"
  },
  {
    venue: "SPAA 2025",
    deadlines: "Abstract: Feb 21, 2025 | Paper: Feb 28, 2025",
    conference: "Jul 6-10, 2026 | London, UK",
    tier: "A",
    urlKey: "SPAA"
  },
  {
    venue: "ICS 2026 (Feb)",
    deadlines: "Abstract: Feb 2, 2026 | Paper: Feb 9, 2026",
    conference: "Jul 6-9, 2026 | Belfast, Northern Ireland, UK",
    tier: "A",
    urlKey: "ICS"
  },

  // March
  {
    venue: "HotStorage 2025",
    deadlines: "Paper: Mar 27, 2025",
    conference: "Jul 10-11, 2025 | Boston, MA",
    tier: "",
    urlKey: "HotStorage"
  },
  {
    venue: "ASPLOS 2026 (Spring)",
    deadlines: "Abstract: Mar 5, 2025 | Paper: Mar 12, 2025",
    conference: "Mar 22-26, 2026 | Pittsburgh, USA",
    tier: "A*",
    urlKey: "ASPLOS"
  },

  // April
  {
    venue: "SC 2026",
    deadlines: "Abstract: Apr 1, 2026 | Paper: Apr 8, 2026",
    conference: "Nov 15-20, 2026 | Chicago, IL",
    tier: "A",
    urlKey: "SC"
  },
  {
    venue: "SIGMOD'26 (Cycle 2)",
    deadlines: "Abstract: Apr 10, 2025 | Paper: Apr 17, 2025",
    conference: "May 31 - Jun 5, 2026 | Bengaluru, India",
    tier: "A*",
    urlKey: "SIGMOD"
  },
  {
    venue: "SOSP 2026",
    deadlines: "Abstract: Mar 26, 2026 | Paper: Apr 1, 2026",
    conference: "Sep 29 - Oct 2, 2026 | Prague, Czechia",
    tier: "A*",
    urlKey: "SOSP"
  },
  {
    venue: "PACT 2025",
    deadlines: "Paper: Apr 27, 2025",
    conference: "Oct 6-10, 2025 | Almaty, Kazakhstan",
    tier: "B",
    urlKey: "PACT"
  },
  {
    venue: "NSDI'26 (Spring)",
    deadlines: "Abstract: Apr 18, 2025 | Paper: Apr 25, 2025",
    conference: "May 4-6, 2026 | Renton, WA, USA",
    tier: "",
    urlKey: "NSDI"
  },
  {
    venue: "Cluster 2025",
    deadlines: "Paper: Apr 25, 2025",
    conference: "Sep 2-5, 2025 | Edinburgh, UK",
    tier: "A",
    urlKey: "CLUSTER"
  },
  {
    venue: "HPCC 2025",
    deadlines: "Paper: Apr 30, 2025",
    conference: "Aug 13-15, 2025 | Exeter, UK",
    tier: "C",
    urlKey: "HPCC"
  },

  // May
  {
    venue: "EuroSys'26 (Spring)",
    deadlines: "Abstract: May 8, 2025 | Paper: May 15, 2025",
    conference: "Apr 13-16, 2026 | Edinburgh, UK",
    tier: "A",
    urlKey: "EuroSys"
  },
  {
    venue: "ICPP 2026",
    deadlines: "Abstract: Apr 24, 2026 | Paper: May 1, 2026",
    conference: "Sep 28 - Oct 1, 2026 | Singapore",
    tier: "A",
    urlKey: "ICPP"
  },

  // June
  {
    venue: "MASCOTS 2026",
    deadlines: "Paper: Jun 1, 2025",
    conference: "Oct 21-23, 2025 | Paris, France",
    tier: "B",
    urlKey: "MASCOTS"
  },
  {
    venue: "SBAC-PAD 2026",
    deadlines: "Abstract: Jul 1, 2026 | Paper: Jul 9, 2026",
    conference: "Oct 14-16, 2026 | Madrid, Spain",
    tier: "B",
    urlKey: "SBAC_PAD"
  },
  {
    venue: "HiPC 2025",
    deadlines: "Abstract: Jun 18, 2025 | Paper: Jun 25, 2025",
    conference: "Dec 17-20, 2025 | Hyderabad, India",
    tier: "",
    urlKey: "HiPC"
  },
  {
    venue: "PODS'26 (Cycle 1)",
    deadlines: "Abstract: Jun 3, 2025 | Paper: Jun 10, 2025",
    conference: "May 31 - Jun 5, 2026 | Bengaluru, India",
    tier: "A*",
    urlKey: "PODS"
  },

  // July
  {
    venue: "SIGMOD'26 (Cycle 3)",
    deadlines: "Abstract: Jul 10, 2025 | Paper: Jul 17, 2025",
    conference: "May 31 - Jun 5, 2026 | Bengaluru, India",
    tier: "A*",
    urlKey: "SIGMOD"
  },
  {
    venue: "SOCC'26",
    deadlines: "Abstract: Jul 7, 2026 | Paper: Jul 14, 2026",
    conference: "Nov 18-20, 2026 | Singapore",
    tier: "",
    urlKey: "SOCC"
  },

  // August
  {
    venue: "ASPLOS 2026 (Summer)",
    deadlines: "Abstract: Aug 13, 2025 | Paper: Aug 20, 2025",
    conference: "Mar 22-26, 2026 | Pittsburgh, USA",
    tier: "A*",
    urlKey: "ASPLOS"
  },
  {
    venue: "ACM SIGMETRICS 2026 (Summer)",
    deadlines: "Abstract: Jul 22, 2025 | Paper: Jul 29, 2025",
    conference: "Jun 8-12, 2026 | Ann Arbor, Michigan, USA",
    tier: "A*",
    urlKey: "SIGMETRICS"
  },
  {
    venue: "BIGDATA 2025",
    deadlines: "Paper: Aug 31, 2025",
    conference: "Dec 8-11, 2025 | Macau, China",
    tier: "B",
    urlKey: "BIGDATA"
  },
  {
    venue: "ICPADS 2025",
    deadlines: "Paper: Aug 31, 2025",
    conference: "Dec 14-18, 2025 | Hefei, China",
    tier: "B",
    urlKey: "ICPADS"
  },

  // September
  {
    venue: "PPoPP'26",
    deadlines: "Paper: Sep 1, 2025",
    conference: "Jan 31 - Feb 4, 2026 | Sydney, Australia",
    tier: "A",
    urlKey: "PPoPP"
  },
  {
    venue: "NSDI'26 (Fall)",
    deadlines: "Abstract: Sep 11, 2025 | Paper: Sep 18, 2025",
    conference: "May 4-6, 2026 | Renton, WA, USA",
    tier: "",
    urlKey: "NSDI"
  },
  {
    venue: "EuroSys'26 (Fall)",
    deadlines: "Abstract: Sep 18, 2025 | Paper: Sep 25, 2025",
    conference: "Apr 13-16, 2026 | Edinburgh, UK",
    tier: "A",
    urlKey: "EuroSys"
  },
  {
    venue: "FAST'26",
    deadlines: "Paper: Sep 16, 2025",
    conference: "Feb 24-26, 2026 | Santa Clara, CA, USA",
    tier: "A",
    urlKey: "FAST"
  },

  // October
  {
    venue: "IPDPS 2026",
    deadlines: "Abstract: Oct 2, 2025 | Paper: Oct 9, 2025",
    conference: "May 25-29, 2026 | New Orleans, USA",
    tier: "A",
    urlKey: "IPDPS"
  },
  {
    venue: "ACM SIGMETRICS 2026 (Fall)",
    deadlines: "Abstract: Oct 7, 2025 | Paper: Oct 14, 2025",
    conference: "Jun 8-12, 2026 | Ann Arbor, Michigan, USA",
    tier: "A*",
    urlKey: "SIGMETRICS"
  },
  {
    venue: "SIGMOD'26 (Cycle 4)",
    deadlines: "Abstract: Oct 10, 2025 | Paper: Oct 17, 2025",
    conference: "May 31 - Jun 5, 2026 | Bengaluru, India",
    tier: "A*",
    urlKey: "SIGMOD"
  },

  // December
  {
    venue: "PODS'26 (Cycle 2)",
    deadlines: "Abstract: Dec 3, 2025 | Paper: Dec 10, 2025",
    conference: "May 31 - Jun 5, 2026 | Bengaluru, India",
    tier: "A*",
    urlKey: "PODS"
  },
  {
    venue: "OSDI'26",
    deadlines: "Abstract: Dec 4, 2025 | Paper: Dec 11, 2025",
    conference: "Jul 13-15, 2026 | Seattle, WA, USA",
    tier: "A*",
    urlKey: "OSDI"
  },
  {
    venue: "ICDCS 2026",
    deadlines: "Abstract: Dec 5, 2025 | Paper: Dec 12, 2025",
    conference: "Jul 20-24, 2026 | Gwangju, South Korea",
    tier: "A",
    urlKey: "ICDCS"
  },
  {
    venue: "ICS 2026 (Dec)",
    deadlines: "Abstract: Dec 9, 2025 | Paper: Dec 16, 2025",
    conference: "TBD | Belfast, Northern Ireland",
    tier: "A",
    urlKey: "ICS"
  },
  {
    venue: "ISC 2026",
    deadlines: "Abstract & Paper: Dec 19, 2025",
    conference: "Jun 22-26, 2026 | Hamburg, Germany",
    tier: "C",
    urlKey: "ISC"
  },
  {
    venue: "CCGrid'26",
    deadlines: "Abstract & Paper: Dec 21, 2025",
    conference: "May 18-21, 2026 | Sydney, Australia",
    tier: "A",
    urlKey: "CCGRID"
  }
];

// Helper function to get URL for a venue
function getVenueUrl(urlKey) {
  if (!urlKey) return null;
  return URL_DICTIONARY[urlKey] || null;
}

// Helper function to get tier badge class
function getTierClass(tier) {
  switch(tier) {
    case "A*": return "tag--tier-a-star";
    case "A": return "tag--tier-a";
    case "B": return "tag--tier-b";
    case "C": return "tag--tier-c";
    default: return "";
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { URL_DICTIONARY, CFP_DATA, getVenueUrl, getTierClass };
}

