/**
 * DIRLab Publications Data
 * ========================
 * 
 * HOW TO ADD A NEW PUBLICATION:
 * 1. Add a new object to the appropriate year array below
 * 2. Required fields: id, title, authors, venue, year
 * 3. Optional fields: doi, pdf, code, slides, talk, abstract, figure, type
 * 4. For authors: wrap student names in ** to indicate mentored students (e.g., "**Chris Egersdoerfer**")
 * 
 * NOTE: Do NOT fabricate abstract, figure, or links that don't exist. Leave them undefined.
 */

const PUBLICATIONS = {
  2025: [
    {
      id: "pdsw25-rl4sys",
      title: "RL4Sys: A Lightweight System-driven RL Framework for Drop-in Integration in System Optimization",
      authors: "**Jiaxin Dong**, **Md Hasanur Rashid**, Helen Xu, Dong Dai",
      venue: "PDSW'25",
      venueUrl: "https://www.pdsw.org",
      year: 2025,
      type: "workshop"
    }
  ],

  2024: [
    {
      id: "tpds24-provio",
      title: "PROV-IO: A Cross-Platform Provenance Framework for Scientific Data on HPC Systems",
      authors: "Runzhou Han, Mai Zheng, Suren Byna, Houjun Tang, Bin Dong, Dong Dai, Yong Chen, Dongkyun Kim, Joseph Hassoun, David Thorsley",
      venue: "TPDS'24",
      year: 2024,
      type: "journal",
      doi: "10.1109/TPDS.2024.3374555"
    }
  ],

  2023: [
    {
      id: "sc23-dgap",
      title: "DGAP: Efficient Dynamic Graph Analysis on Persistent Memory",
      authors: "**Abdullah Al Raqibul Islam**, Dong Dai",
      venue: "SC'23",
      year: 2023,
      type: "conference"
    },
    {
      id: "pmbs23-backfilling",
      title: "A Reinforcement Learning Based Backfilling Strategy for HPC Batch Jobs",
      authors: "**Elliot Kolker-Hicks**, **Di Zhang**, Dong Dai",
      venue: "PMBS@SC'23",
      year: 2023,
      type: "workshop"
    },
    {
      id: "ipdps23-drill",
      title: "Drill: Log-based Anomaly Detection for Large-scale Storage Systems Using Source Code Analysis",
      authors: "**Di Zhang**, **Chris Egersdoerfer**, Tabassum Mahmud, Mai Zheng, Dong Dai",
      venue: "IPDPS'23",
      year: 2023,
      type: "conference"
    },
    {
      id: "ipdps23-faultyrank",
      title: "FaultyRank: A Graph-based Parallel File System Checker",
      authors: "**Saisha Kamat**, **Abdullah Al Raqibul Islam**, Mai Zheng, Dong Dai",
      venue: "IPDPS'23",
      year: 2023,
      type: "conference"
    }
  ],

  2022: [
    {
      id: "ftxs22-clusterlog",
      title: "ClusterLog: Clustering Logs for Effective Log-based Anomaly Detection",
      authors: "**Chris Egersdoerfer**, **Di Zhang**, Dong Dai",
      venue: "FTXS@SC'22",
      year: 2022,
      type: "workshop"
    },
    {
      id: "hpdc22-schedinspector",
      title: "SchedInspector: A Batch Job Scheduling Inspector Using Reinforcement Learning",
      authors: "**Di Zhang**, Dong Dai, Bing Xie",
      venue: "HPDC'22",
      year: 2022,
      type: "conference"
    },
    {
      id: "ccgrid22-vcsr",
      title: "VCSR: Mutable CSR Graph Format Using Vertex-Centric Packed Memory Array",
      authors: "**Abdullah Al Raqibul Islam**, Dong Dai, Dazhao Cheng",
      venue: "CCGrid'22",
      year: 2022,
      type: "conference"
    },
    {
      id: "thpc22-optane",
      title: "A performance study of Optane persistent memory: from storage data structures' perspective",
      authors: "**Abdullah Al Raqibul Islam**, **Christopher York**, Dong Dai",
      venue: "THPC'22",
      year: 2022,
      type: "journal",
      doi: "10.1007/s42514-022-00123-x"
    },
    {
      id: "tos22-failure",
      title: "A Study of Failure Recovery and Logging of High-Performance Parallel File Systems",
      authors: "Runzhou Han, Om Rameshwar Gatla, Mai Zheng, Jinrui Cao, **Di Zhang**, Dong Dai, Yong Chen, Jonathan Cook",
      venue: "TOS'22",
      year: 2022,
      type: "journal",
      doi: "10.1145/3483447"
    }
  ],

  2021: [
    {
      id: "hotstorage21-sentilog",
      title: "SentiLog: Anomaly Detecting on Parallel File Systems via Log-based Sentiment Analysis",
      authors: "**Di Zhang**, Dong Dai, Runzhou Han, Mai Zheng",
      venue: "HotStorage'21",
      year: 2021,
      type: "workshop",
      note: "Best Paper Nominee"
    },
    {
      id: "tcc21-spark",
      title: "Dynamic Resource Provisioning for Iterative Workloads on Apache Spark",
      authors: "Dazhao Cheng, Yu Wang, Dong Dai",
      venue: "TCC'21",
      year: 2021,
      type: "journal",
      doi: "10.1109/TCC.2021.3108043"
    },
    {
      id: "jpdc21-io",
      title: "I/O characteristic discovery for storage system optimizations",
      authors: "Jiang Zhou, Yong Chen, Dong Dai, Yu Zhuang, Weiping Wang",
      venue: "JPDC'21",
      year: 2021,
      type: "journal",
      doi: "10.1016/j.jpdc.2020.08.005"
    }
  ],

  2020: [
    {
      id: "sc20-rlscheduler",
      title: "RLScheduler: An Automated HPC Batch Job Scheduler Using Reinforcement Learning",
      authors: "**Di Zhang**, Dong Dai, Youbiao He, Forrest Sheng Bao, Bing Xie",
      venue: "SC'20",
      year: 2020,
      type: "conference"
    },
    {
      id: "msst20-optane",
      title: "A Performance Study of Optane Persistent Memory: From Indexing Data Structures' Perspective",
      authors: "**Abdullah Al Raqibul Islam**, Anirudh Narayanan, **Christopher York**, Dong Dai",
      venue: "MSST'20",
      year: 2020,
      type: "conference"
    }
  ],

  2019: [
    {
      id: "msst19-lustre",
      title: "A Performance Study of Lustre File System Checker: Bottlenecks and Potentials",
      authors: "Dong Dai, Om Rameshwar Gatla, Mai Zheng",
      venue: "MSST'19",
      year: 2019,
      type: "conference"
    },
    {
      id: "tc19-prs",
      title: "PRS: A Pattern-Directed Replication Scheme for Heterogeneous Object-Based Storage",
      authors: "Jiang Zhou, Yong Chen, Wei Xie, Dong Dai, Shuibing He, Weiping Wang",
      venue: "TC'19",
      year: 2019,
      type: "journal",
      doi: "10.1109/TC.2019.2954089"
    }
  ],

  2018: [
    {
      id: "ics18-pfault",
      title: "PFault: A General Framework for Analyzing the Reliability of High-Performance Parallel File Systems",
      authors: "Jinrui Cao, Om Rameshwar Gatla, Mai Zheng, Dong Dai, Vidya Eswarappa, Yan Mu, Yong Chen",
      venue: "ICS'18",
      year: 2018,
      type: "conference"
    },
    {
      id: "ccgrid18-akin",
      title: "AKIN: A Streaming Graph Partitioning Algorithm for Distributed Graph Storage Systems",
      authors: "Wei Zhang, Dong Dai, Yong Chen",
      venue: "CCGrid'18",
      year: 2018,
      type: "conference"
    },
    {
      id: "cloud18-io",
      title: "I/O Characteristics Discovery in Cloud Storage Systems",
      authors: "Jiang Zhou, Dong Dai, Yu Mao, Xin Chen, Yu Zhuang, Yong Chen",
      venue: "CLOUD'18",
      year: 2018,
      type: "conference"
    },
    {
      id: "tpds18-metadata",
      title: "Managing Rich Metadata in High-Performance Computing Systems Using a Graph Model",
      authors: "Dong Dai, Yong Chen, Philip Carns, John Jenkins, Wei Zhang, Robert Ross",
      venue: "TPDS'18",
      year: 2018,
      type: "journal"
    },
    {
      id: "tcc18-trigger",
      title: "Trigger-based Incremental Data Processing with Unified Sync and Async Model",
      authors: "Dong Dai, Yong Chen, Dries Kimpe, Robert Ross",
      venue: "TCC'18",
      year: 2018,
      type: "journal"
    },
    {
      id: "jpdc18-vectorizing",
      title: "Vectorizing Disk Blocks for Efficient Storage Systems via Deep Learning",
      authors: "Dong Dai, Forrest Sheng Bao, Jiang Zhou, Xuanhua Shi, Yong Chen",
      venue: "JPDC'18",
      year: 2018,
      type: "journal"
    }
  ],

  2017: [
    {
      id: "pact17-provenance",
      title: "Lightweight Provenance Service for High Performance Computing",
      authors: "Dong Dai, Yong Chen, Philip Carns, John Jenkins, Robert Ross",
      venue: "PACT'17",
      year: 2017,
      type: "conference"
    },
    {
      id: "hpdc17-iogp",
      title: "IOGP: An Incremental Online Graph Partitioning Algorithm for Distributed Graph Databases",
      authors: "Dong Dai, Wei Zhang, Yong Chen",
      venue: "HPDC'17",
      year: 2017,
      type: "conference"
    }
  ]
};

// Helper function to get all publications as flat array
function getAllPublications() {
  const all = [];
  Object.keys(PUBLICATIONS)
    .sort((a, b) => b - a) // Sort years descending
    .forEach(year => {
      PUBLICATIONS[year].forEach(pub => {
        all.push({ ...pub, year: parseInt(year) });
      });
    });
  return all;
}

// Helper function to get publications by year
function getPublicationsByYear() {
  return Object.keys(PUBLICATIONS)
    .sort((a, b) => b - a)
    .map(year => ({
      year: parseInt(year),
      publications: PUBLICATIONS[year]
    }));
}

// Helper to format authors with student highlighting
function formatAuthors(authorString) {
  return authorString.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PUBLICATIONS, getAllPublications, getPublicationsByYear, formatAuthors };
}

