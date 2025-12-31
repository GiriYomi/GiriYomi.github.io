/**
 * DIRLab People Data
 * ==================
 * 
 * HOW TO ADD A NEW MEMBER:
 * 1. Add a new object to the appropriate category array
 * 2. Required fields: id, name, role
 * 3. Optional fields: email, phone, office, photo, bio, links, publications
 * 4. For photo: place image in /assets/img/people/ and set photo to filename
 * 
 * NOTE: Do NOT fabricate bio or links that don't exist. Leave them undefined.
 */

const PEOPLE = {
  // Principal Investigator (featured at top)
  pi: {
    id: "dong-dai",
    name: "Dong Dai",
    role: "Associate Professor",
    title: "Director of DIRLab",
    affiliation: "Department of Computer & Information Sciences, University of Delaware",
    email: "dai@udel.edu",
    phone: "302-831-0890",
    office: "Fintech 416B",
    photo: null, // TBD - set to filename when photo is available
    bio: "Dr. Dong Dai is an Associate Professor in the Department of Computer & Information Sciences at the University of Delaware. His research focuses on data-intensive and high-performance systems, specifically optimizing and designing intelligent infrastructure for HPC data-intensive systems including parallel file systems, metadata management, graph storage, and resource management.",
    links: {
      scholar: "https://scholar.google.com/citations?user=wGF_4JsAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/dong-dai-9684092a/",
      twitter: "https://x.com/daidong",
      website: "https://sites.google.com/udel.edu/dirlab/people/dong-dai"
    },
    services: [
      "Program Committee, SC 2024",
      "Workshop Committee, SC 2022",
      "Poster Committee, SC 2020",
      "Program Committee, IPDPS 2024",
      "Chair's Special Committee / Best Open-Source Contribution Award Committee, IPDPS 2023",
      "Program Committee, CCGRID 2024, 2022, 2021"
    ],
    teaching: [
      "CISC 361 Operating System, Fall 2024",
      "CISC 360 Computer Architecture, Spring 2025",
      "ITCS 5145 Parallel Computing, Graduate Course",
      "ITCS 6050/8050 Machine Learning for Efficient Computing Systems",
      "ITCS 6144/8144 Operating Systems Design"
    ],
    fundings: [
      "CCF - EAGER: Exploring Automatic Optimization of Multi-tiered HPC Storage Systems via Practical Reinforcement Learning",
      "CNS - Moving Machine Learning into the Next-Generation Cloud Flexibly, Agilely and Efficiently",
      "CCF - Hybrid NVM based Computing Architecture for Machine Learning Applications",
      "CCF - Parallel Graph-Based Paradigm for HPC Parallel File System Checkers",
      "OAC - Empowering Data-driven Discovery with a Provenance Collection, Management, and Analysis Software Infrastructure"
    ]
  },

  // Ph.D. Students
  phd: [
    {
      id: "chris-egersdoerfer",
      name: "Chris Egersdoerfer",
      role: "Ph.D. Student",
      photo: null,
      bio: null // Profile pending
    },
    {
      id: "jiaxin-dong",
      name: "Jiaxin Dong",
      role: "Ph.D. Student",
      photo: null,
      bio: null // Profile pending - original page was empty
    },
    {
      id: "minqiu-sun",
      name: "Minqiu Sun",
      role: "Ph.D. Student",
      email: "mqsun@udel.edu",
      phone: "302-610-9178",
      photo: null,
      bio: "Ph.D. student at University of Delaware in DIRLab. Bachelor degrees from Nanjing University of Information Science and Technology (NUIST) and University of Reading (UoR)."
    },
    {
      id: "abdullah-al-raqibul-islam",
      name: "Abdullah Al Raqibul Islam",
      role: "Ph.D. Student",
      photo: null,
      bio: null
    },
    {
      id: "md-hasanur-rashid",
      name: "Md. Hasanur Rashid",
      role: "Ph.D. Student",
      photo: null,
      bio: null
    },
    {
      id: "saisha-kamat",
      name: "Saisha Kamat",
      role: "Ph.D. Student",
      photo: null,
      bio: null
    },
    {
      id: "khondoker-mirazul-mumenin",
      name: "Khondoker Mirazul Mumenin",
      role: "Ph.D. Student",
      photo: null,
      bio: null
    },
    {
      id: "yuan-liang",
      name: "Yuan Liang",
      role: "Ph.D. Student",
      photo: null,
      bio: null
    }
  ],

  // Master Students
  master: [
    // No names listed in source - section exists but is empty
    // Add new master students here following the same format
  ],

  // Undergraduate Students
  undergraduate: [
    // No names listed in source - section exists but is empty
    // Add new undergraduate students here following the same format
  ],

  // Alumni
  alumni: [
    {
      id: "di-zhang",
      name: "Di Zhang",
      role: "Alumni",
      photo: null,
      bio: null
    }
  ]
};

// Helper function to get all members as flat array
function getAllPeople() {
  return [
    PEOPLE.pi,
    ...PEOPLE.phd,
    ...PEOPLE.master,
    ...PEOPLE.undergraduate,
    ...PEOPLE.alumni
  ];
}

// Helper function to get initials for avatar placeholder
function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PEOPLE, getAllPeople, getInitials };
}


