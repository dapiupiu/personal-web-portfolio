export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  metrics: { label: string; value: string; highlight?: boolean }[];
  tags: string[];
  githubUrl?: string;
  publicationUrl?: string;
  publicationText?: string;
  isAcademicPrototype?: boolean;
}

export interface Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: string;
  url: string;
  abstract: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  type: 'education' | 'experience' | 'scholarship';
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Kaka Davi Dharmawan",
  roleTagline: "Data Scientist | Machine Learning • Statistical Analysis • Python & SQL",
  subhead: "Computer Science student with hands-on experience in machine learning, statistical analysis, and predictive modeling across 3 data-driven projects, including 2 published research papers.",
  bio: "Final-year Computer Science undergraduate student at Universitas Islam Negeri Sumatera Utara (expected graduation July 2027) with a current GPA of 3.71 / 4.00. Recipient of the Bright Scholarship Batch 9, demonstrating strong academic standing and leadership commitment. My technical focus centers on machine learning, statistical analysis, and predictive modeling, backed by 3 hands-on data projects and 2 first-authored research publications.",
  location: "Medan, North Sumatra, Indonesia",
  email: "kakadavidarmawan@gmail.com",
  phone: "+62 852 6066 6148",
  github: "https://github.com/dapiupiu",
  linkedin: "https://linkedin.com/in/kakadavidharmawan",
  resumeUrl: "/Kaka_Davi_Dharmawan_CV.pdf",
  university: "Universitas Islam Negeri Sumatera Utara",
  gpa: "3.71 / 4.00",
  expectedGraduation: "July 2027",
  scholarship: "Bright Scholarship Batch 9 Awardee",
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    iconName: "Code",
    skills: ["Python", "SQL (MySQL, PostgreSQL)", "Java"]
  },
  {
    category: "Data Science & ML",
    iconName: "BrainCircuit",
    skills: ["Machine Learning", "Statistical Analysis", "Feature Engineering", "EDA", "Deep Learning", "NLP"]
  },
  {
    category: "Frameworks & Libraries",
    iconName: "Library",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Streamlit"]
  },
  {
    category: "Tools & Practices",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "CRISP-DM", "Agile Scrum"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "edupredict-ai",
    title: "EduPredict AI: Early Warning Education System",
    role: "Capstone Project Lead & Data Scientist",
    period: "Mar 2026 – Jul 2026",
    description: "Directed a 6-member cross-functional team using Hybrid CRISP-DM and Agile Scrum sprints. Guided key technical decisions including clamping logic to safeguard model robustness against out-of-distribution inputs (e.g., Attendance below 60%). Executed data assessing, cleaning, and outlier capping on 6,600+ records. Built a predictive modeling pipeline using TensorFlow, including feature engineering via domain-driven target construction (Risk_Category classification from Exam_Score). Deployed via interactive Streamlit dashboard for automated intervention strategies.",
    metrics: [
      { label: "Model Accuracy", value: "91.23%", highlight: true },
      { label: "MAE Score", value: "0.0154", highlight: true },
      { label: "Test Samples", value: "992" },
      { label: "Records Processed", value: "6,600+" }
    ],
    tags: ["TensorFlow", "Python", "Streamlit", "Deep Learning", "Feature Engineering", "CRISP-DM"],
    githubUrl: "https://github.com/dapiupiu/edupredict-ai", // TODO: replace with user's exact repo URL
    isAcademicPrototype: false
  },
  {
    id: "road-sentiment",
    title: "Road Infrastructure Sentiment Analysis via Weak Supervision",
    role: "NLP Developer & Researcher (First Author)",
    period: "Oct 2025 – Jan 2026",
    description: "Engineered an automated NLP classification pipeline processing public infrastructure complaints across 60+ regional news sources to support data-driven regional oversight. Built a rule-based lexicon scoring system (-5 to +5) under weak supervision and applied SMOTE to resolve class imbalance, achieving high precision and robust sentiment classification.",
    metrics: [
      { label: "Classification Accuracy", value: "70.93%", highlight: true },
      { label: "Precision", value: "0.86", highlight: true },
      { label: "News Sources", value: "60+" }
    ],
    tags: ["NLP", "Weak Supervision", "SMOTE", "Statistical Analysis", "Python"],
    publicationUrl: "https://doi.org/10.xxxx/jmtek.2026.placeholder", // TODO: replace with user's publication URL
    publicationText: "Published in Jurnal Media Teknik Elektro dan Komputer (2026)",
    isAcademicPrototype: false
  },
  {
    id: "aslab-recruitment",
    title: "Computer Laboratory Assistant Recruitment System",
    role: "System Analyst & Researcher (First Author)",
    period: "Apr 2025 – Jul 2025",
    description: "Architected system workflows, UML specifications, and functional SRS documentation for a centralized web recruitment platform prototype, addressing fragmented manual screening processes. Engineered relational database schemas and automated scoring modules.",
    metrics: [
      { label: "Turnaround Reduction", value: "66.67%", highlight: true },
      { label: "Evaluation Time", value: "3 Days → 1 Day" }
    ],
    tags: ["System Design", "UML", "Relational Database", "SQL"],
    publicationUrl: "https://doi.org/10.xxxx/jsecsit.2025.placeholder", // TODO: replace with user's publication URL
    publicationText: "Published in Journal of Software Engineering, CS & IT (2025)",
    isAcademicPrototype: true
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "dicoding",
    company: "DBS Foundation Coding Camp (Dicoding Indonesia)",
    role: "Data Scientist Cohort",
    period: "Feb 2026 – Jul 2026",
    location: "Remote",
    type: "experience",
    bullets: [
      "Completed an intensive 6-month curriculum covering data assessing, wrangling, exploratory data analysis (EDA), and predictive modeling in Python.",
      "Conducted structured EDA and statistical analysis on behavioral datasets using Pandas and NumPy, deploying interactive Streamlit dashboards for data storytelling and actionable business insights."
    ]
  },
  {
    id: "lab-assistant",
    company: "Universitas Islam Negeri Sumatera Utara (UINSU)",
    role: "Computer Laboratory Assistant",
    period: "Sep 2024 – Jan 2025",
    location: "Medan, Indonesia",
    type: "experience",
    bullets: [
      "Supervised ~100 undergraduate students per semester in laboratory practicums, strengthening programming logic, data structures, and debugging skills.",
      "Graded 100+ weekly laboratory reports, delivering structured technical feedback to reinforce code quality and data structures & algorithms fundamentals."
    ]
  },
  {
    id: "bright-scholarship",
    company: "Bright Scholarship",
    role: "Scholarship Awardee (Batch 9)",
    period: "Dec 2024 – Present",
    location: "Medan, Indonesia",
    type: "scholarship",
    bullets: [
      "Selected for a prestigious merit- and leadership-based scholarship, submitting structured monthly progress reports on community impact projects.",
      "Participated in post-disaster field operations during the 'Brighters Peduli' mission in Aceh Tamiang, assisting structured relief distribution workflows."
    ]
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-1",
    authors: "Dharmawan, K. D. (First Author)",
    title: "Road Damage Sentiment Analysis via Weak Supervision",
    journal: "Jurnal Media Teknik Elektro & Komputer",
    year: "2026",
    url: "https://doi.org/10.xxxx/jmtek.2026.placeholder", // TODO: replace with actual publication link
    abstract: "Presents an automated NLP classification framework for mining public infrastructure grievances from 60+ regional news outlets. Utilizes weak supervision with custom -5 to +5 lexicon scoring combined with SMOTE oversampling, attaining 70.93% accuracy and 0.86 precision.",
    tags: ["NLP", "Weak Supervision", "Lexicon Scoring", "SMOTE", "Infrastructure Mining"]
  },
  {
    id: "pub-2",
    authors: "Dharmawan, K. D. (First Author)",
    title: "Waterfall Aslab Recruitment System",
    journal: "Journal of Software Engineering, Computer Science, and Information Technology",
    year: "2025",
    url: "https://doi.org/10.xxxx/jsecsit.2025.placeholder", // TODO: replace with actual publication link
    abstract: "Proposes an academic web recruitment platform prototype using the Waterfall SDLC model. Includes detailed UML modeling, relational schema architecture, and automated candidate evaluation modules that reduced screening turnaround time from 3 days to 1 day (66.67% efficiency gain).",
    tags: ["System Analysis", "UML", "Database Schema", "Waterfall SDLC", "Recruitment Automation"]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Data Scientist Track",
    issuer: "DBS Foundation / Dicoding Indonesia",
    year: "2026",
    badge: "Professional Certificate",
    type: "certification"
  },
  {
    title: "BNSP Competence Certification",
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2023 – 2026",
    badge: "National Competency",
    type: "certification"
  },
  {
    title: "Web Development",
    issuer: "Digital Talent Scholarship (DTS) Kominfo",
    year: "2026",
    badge: "Government Program",
    type: "certification"
  }
];

export const HONORS_DATA = [
  {
    title: "1st Favorite Champion",
    event: "Mini Hackathon: Tech for Ummah, KI-PTKIN",
    year: "2025",
    badge: "1st Place / Winner",
    description: "Awarded 1st Favorite Champion for developing an innovative tech solution for Islamic higher education communities."
  },
  {
    title: "Finalist",
    event: "RAFATECH Web Development Competition",
    year: "2025",
    badge: "National Finalist",
    description: "Selected as national finalist in competitive web application development."
  }
];
