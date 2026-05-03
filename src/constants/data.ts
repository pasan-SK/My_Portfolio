export const NAVIGATION_ITEMS = ['About', 'Experience', 'Research', 'Education', 'Contact'] as const;

export const CONTACT_LINKS = {
  location: { label: 'Location', value: 'Melbourne, Australia' },
  email: { label: 'Email', value: 'pasanxavioz@gmail.com', href: 'mailto:pasanxavioz@gmail.com' },
};

export const EXPERIENCE_DATA = [
  {
    title: "Casual Research Assistant",
    subtitle: "La Trobe University / University of Auckland",
    date: "2026 — PRESENT",
    description: "Engineering R-based pipelines for 100 Hz triaxial accelerometer data processing and clinical insight generation.",
    achievements: [
      "Automated feature extraction and data filtering protocols.",
      "Implemented ANN-based classification models for activity analysis."
    ]
  },
  {
    title: "Software Engineer",
    subtitle: "Sysco LABS (Fortune 500)",
    date: "2024 — 2025",
    description: "Developed mission-critical web applications for global supply chain operations using React and Spring Boot.",
  },
  {
    title: "AOTULE Research Fellow",
    subtitle: "Tokyo Institute of Technology — Japan",
    date: "2024",
    description: "Investigated multimodal dialogue systems and physiological signal integration for conversational AI turn-taking prediction.",
  }
] as const;

export const EDUCATION_DATA = [
  {
    title: "PhD – Medicine, Dentistry and Health Science",
    subtitle: "University of Melbourne — Australia",
    date: "2025 — PRESENT",
    description: "Focusing on Intelligent Decision Support Systems for medical diagnostics.",
    achievements: [
      "Awarded the Melbourne Research Scholarship (Full Funding).",
      "Thesis: Decision Support for the Treatment of Vestibular Schwannoma.",
      "Event Organizer of the Sri Lankan Graduates' Society (2025-2026)."
    ]
  },
  {
    title: "BSc Eng. (Hons) Computer Science & Engineering",
    subtitle: "University of Moratuwa — Sri Lanka",
    date: "2019 — 2024",
    description: "Graduated with a GPA of 4.04/4.2. Specialization in Machine Learning and Software Architecture.",
    achievements: [
      "Dean's List honors for all academic semesters.",
      "Selected for Tokyo Tech AOTULE Summer Program (Only representative from Sri Lanka).",
      "Chaired sessions at the 15th Multidisciplinary International Student Workshop (MISW)."
    ]
  },
  {
    title: "Certificate in Business Accounting (Cert BA)",
    subtitle: "CIMA — The Chartered Institute of Management Accountants",
    date: "2019",
    description: "Foundational training in business finance and management principles.",
  },
  {
    title: "G.C.E Advanced Level",
    subtitle: "S. Thomas' College, Mt. Lavinia — Sri Lanka",
    date: "2016 — 2018",
    description: "Achieved 4 Distinction passes. Ranked 326th island-wide.",
    achievements: [
      "Winner of The Professor Dayasiri Fernando Memorial Prize.",
      "Served as a Teaching Assistant."
    ]
  }
] as const;

export const PUBLICATIONS_DATA = [
  {
    id: "01",
    title: "Machine learning for preoperative predictions in Vestibular Schwannoma: A systematic review",
    journal: "Neuroscience Informatics (Elsevier) - Q1 Journal",
    authors: "P. Kalansooriya, S. Wijewickrema, et al.",
    tags: ["PhD First Publication", "SLR", "Medical AI"],
    link: "https://www.sciencedirect.com/science/article/pii/S2772528626000178",
    achievement: "Systematic Literature Review"
  },
  {
    id: "02",
    title: "An Emotion Aware Context Adaptive Machine Learning Approach for Detecting Hate Speech",
    journal: "Neural Computing and Applications (Springer Nature) - Q1 Journal",
    authors: "K. Chavinda, P. Kalansooriya, et al.",
    tags: ["Undergraduate FYP", "NLP", "Emotion AI"],
    link: "https://link.springer.com/article/10.1007/s00521-026-12029-8",
    achievement: "Journal Ranked #10 globally in Google Scholar Metrics (AI)"
  }
] as const;

export const FOOTER_LINKS = [
  { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/pasan-kalansooriya-825b54213/' },
  { label: 'GITHUB', url: 'https://github.com/pasan-SK' },
  { label: 'MEDIUM', url: 'https://medium.com/@pasanSK' },
  { label: 'SCHOLAR', url: 'https://scholar.google.com/citations?user=d1rDI_YAAAAJ&hl=en' },
  { label: 'ORCID', url: 'https://orcid.org/0009-0002-3934-8226' },
] as const;
