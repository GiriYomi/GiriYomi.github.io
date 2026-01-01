/**
 * DIRLab Gallery Data
 * ===================
 * 
 * HOW TO ADD A NEW ALBUM:
 * 1. Add a new object to the appropriate category (conferences or activities)
 * 2. Required fields: id, title, year
 * 3. Optional fields: date, location, cover, photos[]
 * 4. For cover/photos: place images in /assets/img/gallery/<album-id>/ and set paths accordingly
 * 
 * NOTE: Photos are added manually later. Leave cover and photos as null/[] for placeholders.
 */

const GALLERY = {
  // Conference photos
  conferences: [
    {
      id: "sc25",
      title: "SC'25",
      year: 2025,
      location: "St. Louis",
      description: "We attended SC'25 in St. Louis to present four papers.",
      papers: [
        "[SC'25] Chris Egersdoerfer*, Philip Carns, Shane Snyder, Robert Ross, Dong Dai, \"STELLAR: Storage Tuning Engine Leveraging LLM Autonomous Reasoning for High-Performance Parallel File Systems.\" SC, 2025",
        "[SC'25] Abdullah Al Raqibul Islam*, Helen Xu, Dong Dai, Aydin Buluç, \"Improving SpGEMM Performance Through Matrix-Reordering and Cluster-Wise Computation.\" SC, 2025",
        "[PDSW@SC'25] Jiaxin Dong*, Md. Hasanur Rashid, Helen Xu, Dong Dai, \"RL4Sys: A Lightweight System-driven RL Framework for Drop-in Integration in System Optimization.\" PDSW@SC, 2025",
        "[PDSW@SC'25] Minqiu Sun*, Xin Huang, Luanzheng Guo, Nathan R. Tallent, Kento Sato, Dong Dai, \"LLMTailor: A Layer-wise Tailoring Tool for Efficient Checkpointing of Large Language Models.\" PDSW@SC, 2025"
      ],
      cover: null,
      photos: []
    },
    {
      id: "ipdps25",
      title: "IPDPS'25",
      year: 2025,
      location: "Milan, Italy",
      description: "We attended IPDPS'25 in Milan, Italy to present three papers.",
      papers: [
        "[IPDPS'25] Chris Egersdoerfer*, Arnav Sareen, Jean Luca Bez, Suren Byna, Dongkuan (DK) Xu, Dong Dai, \"IOAgent: Democratizing Trustworthy HPC I/O Performance Diagnosis Capability via LLMs.\" IPDPS, 2025",
        "[IPDPS'25] Saisha Kamat*, Mai Zheng, Bo Fang, Dong Dai, \"Be Aware of Metadata Corruption in Parallel File System: It Can Be Silent and Catastrophic\" IPDPS, 2025",
        "[IPDPS'25] Md. Hasanur Rashid*, Dong Dai \"AdapTBF: Decentralized Bandwidth Control via Adaptive Token Borrowing for HPC Storage\" IPDPS, 2025"
      ],
      cover: null,
      photos: []
    },
    {
      id: "sc24",
      title: "SC'24",
      year: 2024,
      location: "Atlanta",
      description: "Our group attended SC'24 in Atlanta for presenting two papers.",
      papers: [
        "[PDSW@SC'24] Chris Egersdoerfer*, Md. Hasanur Rashid*, Dong Dai, Bo Fang, Tallent Nathan, \"Understanding and Predicting Cross-Application I/O Interference in HPC Storage Systems.\" PDSW@SC, 2024.",
        "[ACM SRC@SC'24] Abdullah Al Raqibul Islam*, Helen Xu, Dong Dai, Aydin Buluc. \"Improving SpGEMM Performance Through Reordering and Cluster-wise Computation\". Raqibul won the 3rd place of ACM Student Research Competition - Graduates!"
      ],
      cover: null,
      photos: []
    },
    {
      id: "hotstorage24",
      title: "HotStorage'24",
      year: 2024,
      location: "San Francisco",
      description: "We attended HotStorage'24 in San Francisco for presenting the ION paper.",
      papers: [
        "[HotStorage'24] Chris Egersdoerfer, Arnav Sareen, Jean Luca Bez, Suren Byna, Dong Dai. \"ION: Navigating HPC I/O Optimization Journey using Large Language Models.\" In proceedings of the 16th ACM Workshop on Hot Topics in Storage and File Systems (HotStorage'24), 2024."
      ],
      cover: null,
      photos: []
    },
    {
      id: "ipdps24",
      title: "IPDPS'24",
      year: 2024,
      location: "San Francisco",
      description: "We attended IPDPS'24 in San Francisco for presenting two papers.",
      papers: [
        "[JSSPP@IPDPS'24] Monish Soundar Raj, Thomas MacDougall, Di Zhang, Dong Dai. \"An Empirical Study of Machine Learning-based Synthetic Job Trace Generation Methods.\" Accepted to appear in the 27th Workshop on Job Scheduling Strategies for Parallel Processing (JSSPP@IPDPS'24).",
        "[IPDPS'24] Di Zhang, Monish Soundar Raj, Bing Xie, Sheng Di, Dong Dai. \"Cross-System Analysis of Job Characterization and Scheduling in Large-Scale Computing Clusters.\" Accepted to appear in the 38th IEEE International Parallel & Distributed Processing Symposium (IPDPS'24), 2024. (Conference CORE Ranking A)."
      ],
      cover: null,
      photos: []
    }
    // Add more conference albums here
  ],

  // Lab activities
  activities: [
    {
      id: "1219-2024",
      title: "Lab Activity",
      date: "December 19, 2024",
      year: 2024,
      cover: null,
      photos: []
    }
    // Add more activity albums here
  ]
};

// Helper function to get all albums as flat array
function getAllAlbums() {
  return [
    ...GALLERY.conferences.map(a => ({ ...a, category: 'conferences' })),
    ...GALLERY.activities.map(a => ({ ...a, category: 'activities' }))
  ].sort((a, b) => b.year - a.year);
}

// Helper to check if album has photos
function hasPhotos(album) {
  return album.photos && album.photos.length > 0;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GALLERY, getAllAlbums, hasPhotos };
}


