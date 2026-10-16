export const portfolioData = {
  personalInfo: {
    name: "Shiloh Abellera",
    firstName: "Shiloh",
    lastName: "Abellera",
    role: "Full-Stack Developer, BSIT Senior & Creative Artist",
    badge: "Available for work · 2026",
    university: "Nueva Ecija University of Science and Technology (NEUST)",
    degree: "Bachelor of Science in Information Technology",
    year: "BSIT · 4th Year Senior",
    location: "Nueva Ecija, Philippines",
    countryCode: "PH",
    email: "shiloh.abellera111400@gmail.com",
    github: "https://github.com",
    githubUsername: "Shiloh-Abellera",
    bio: "Full-stack developer, BSIT senior at NEUST, and creative artist. Creator of One-Palayan Kalinga Hub and ProcLink System. I merge engineering precision with artistic vision in web applications, automated institutional workflows, and multimedia design.",
    quote: "Good software is not just about lines of code; it is about crafting intuitive solutions that make services accessible, communities stronger, and lives simpler.",
    photo: "/images/shiloh-cutout.png",
    stats: [
      { label: "Systems & Apps Built", value: "15+" },
      { label: "Years Coding & Design", value: "3+" },
      { label: "Capstone & ISO Rating", value: "99%" },
      { label: "Honors & Credentials", value: "6+" }
    ]
  },

  marqueeSkills: [
    "PHP", "MySQL (3NF)", "JavaScript", "React.js", "Tailwind CSS", "ProcLink PRMS",
    "One-Palayan Hub", "REST APIs", "Charcoal Portrait", "Adobe Audition", "Vocal Performance",
    "Bootstrap 5", "Node.js", "Git & GitHub", "Vercel Deployment", "Row-Level Security"
  ],

  projects: [
    {
      id: "01",
      title: "One-Palayan Kalinga Hub: Integrated Social Service Management System",
      type: "Official Capstone Project · E-Governance & Social Welfare",
      summary: "An integrated web-based social service appointment, housing beneficiary management, and Assistance to Individuals in Crisis Situations (AICS) tracking system developed for the City Social Welfare and Development Office (CSWDO) of Palayan City. Built under the V-Model SDLC and evaluated under ISO/IEC 25002:2024 Software Product Quality Standards, replacing manual paper processes with real-time digital access.",
      technologies: ["PHP", "MySQL (3NF)", "JavaScript", "HTML5/CSS3", "Bootstrap 5", "Row-Level Security (RLS)", "V-Model SDLC"],
      views: [
        {
          id: "beneficiary",
          label: "Beneficiary Portal",
          icon: "👤",
          badge: "Citizen View",
          description: "Online booking for CSWDO appointments, document pre-verification upload, and real-time status tracking for AICS medical, burial, and financial assistance.",
          highlights: ["Online appointment reservation", "Real-time AICS claim tracking", "Digital document upload & pre-check"]
        },
        {
          id: "cswdo-staff",
          label: "CSWDO Staff Console",
          icon: "🏛️",
          badge: "Staff & Social Worker View",
          description: "Dedicated console for case workers to review applicant documents, manage daily intake queues, approve crisis aid, and monitor housing unit allocations.",
          highlights: ["Document pre-verification queue", "Housing beneficiary roster & unit allocation", "Direct remarks & SMS dispatch"]
        },
        {
          id: "admin-analytics",
          label: "LGU Admin Dashboard",
          icon: "⚡",
          badge: "Executive City Admin",
          description: "Centralized administrative and reporting engine delivering city-wide social welfare metrics and audit transparency for Palayan City government.",
          highlights: ["ISO/IEC 25002:2024 compliant audit logs", "AICS disbursement statistical reports", "Role-based user permissions"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      id: "02",
      title: "ProcLink System — Multi-Tier Procurement & Records Management",
      type: "Enterprise Web Application · Institutional Workflow Automation",
      summary: "A robust procurement and supply requisition management system (PRMS) designed to eliminate bureaucratic bottlenecks in institutional supply management. Features an automated sequential approval workflow (Procurement ➔ Budget Office ➔ University President / Executive ➔ Final Supply Release) with comprehensive audit logging.",
      technologies: ["PHP", "MariaDB / MySQL", "JavaScript", "REST APIs", "Session Authentication", "InfinityFree Cloud"],
      views: [
        {
          id: "requisition",
          label: "Requisition Portal",
          icon: "📦",
          badge: "Department Requester",
          description: "Supply catalog browser, custom request cart, budget allocation checks, and urgency priority flags.",
          highlights: ["Intuitive supply cart ordering", "Real-time request stage indicator", "Department budget limits"]
        },
        {
          id: "workflow",
          label: "Multi-Tier Approval Pipeline",
          icon: "✍️",
          badge: "Approval Hierarchy",
          description: "Strict 4-stage verification: Procurement validation, Budget Officer sign-off, President approval, and Storekeeper release.",
          highlights: ["Automated approval state transitions", "Executive signature & remarks logs", "Instant clarification requests"]
        },
        {
          id: "inventory",
          label: "Records & Inventory Audit",
          icon: "📊",
          badge: "Procurement Officer",
          description: "Real-time inventory deduction, purchase order generation, vendor ledger, and historical exportable audit logs.",
          highlights: ["Stock level auto-deductions", "Voucher PDF generation", "Comprehensive transaction trail"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      id: "03",
      title: "Barangay Cares — Incident & Document Request System",
      type: "Full-Stack Web Application · Public Administration",
      summary: "A localized municipal e-services platform facilitating citizen complaint triage and official barangay document requests (Clearance, Residency, Indigency) with automated verification and administrative reply handling.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "HTML5/CSS3", "RESTful API"],
      views: [
        {
          id: "resident",
          label: "Resident Portal",
          icon: "🏘️",
          badge: "Citizen View",
          description: "Online filing of incidents, document request cart, live ticket tracker, and official announcements feed.",
          highlights: ["Real-time incident tracking", "Document request cart", "Community notification alerts"]
        },
        {
          id: "admin",
          label: "Admin Console",
          icon: "🛡️",
          badge: "Barangay Official View",
          description: "Case triage dashboard, dispute logs, resident registry, and official document issuance generator.",
          highlights: ["Dispute categorization", "PDF document stamping", "Citizen verification audit"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      id: "04",
      title: "WeCare — Healthcare Clinic & Appointment Management System",
      type: "Web Application · HealthTech",
      summary: "An outpatient appointment scheduling and electronic medical records (EMR) system featuring doctor calendar synchronization, patient history archives, and digital prescription tracking.",
      technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "REST API", "JWT Auth"],
      views: [
        {
          id: "patient",
          label: "Patient Portal",
          icon: "🩺",
          badge: "Patient View",
          description: "Doctor directory search, calendar booking, medical consultation history, and digital prescription access.",
          highlights: ["Direct slot booking", "Medical history records", "Consultation reminders"]
        },
        {
          id: "doctor",
          label: "Physician Console",
          icon: "👨‍⚕️",
          badge: "Doctor View",
          description: "Daily patient queue manager, consultation diagnostics recorder, and electronic prescription generator.",
          highlights: ["Live patient queue", "E-Prescription generator", "Diagnostic history"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    }
  ],

  achievements: [
    {
      id: "ach-capstone",
      category: "Capstone",
      icon: "🏆",
      title: "Lead Architect & Developer: One-Palayan Kalinga Hub",
      institution: "CSWDO Palayan City & NEUST CICT",
      year: "2025 - 2026",
      summary: "Designed and engineered the official web-based social service appointment, housing beneficiary management, and AICS tracking system for CSWDO Palayan City, tested according to ISO/IEC 25002:2024 software product quality standards.",
      details: [
        "Architected complete 3NF normalized MySQL database with Row-Level Security (RLS) for citizen data privacy",
        "Digitized AICS crisis intake, eliminating physical queues and reducing turnaround from days to hours",
        "Evaluated with stellar ratings by IT experts and CSWDO social workers under ISO/IEC 25002 standards"
      ]
    },
    {
      id: "ach-proclink",
      category: "Technical",
      icon: "⚡",
      title: "ProcLink PRMS Workflow Architecture Recognition",
      institution: "Enterprise Systems Showcase / Institutional Software",
      year: "2026",
      summary: "Developed the ProcLink Procurement & Records Management System, automating a 4-tier approval pipeline (Procurement ➔ Budget ➔ President ➔ Release) with real-time audit trails.",
      details: [
        "Built dynamic approval state machine resolving inter-departmental requisition delays",
        "Implemented session authorization and automated inventory level tracking",
        "Deployed and tested on live web cloud infrastructure"
      ]
    },
    {
      id: "ach-arts",
      category: "Creative",
      icon: "🎨",
      title: "Fine Art & Charcoal Portrait Master Artist",
      institution: "Creative Portfolio & Visual Arts",
      year: "2022 - Present",
      summary: "Accomplished realism charcoal portrait artist, blending anatomical accuracy, lighting precision, and artistic discipline into user experience and UI interface craft.",
      details: [
        "Skilled in hyper-realistic charcoal shading, fine detail rendering, and facial proportions",
        "Vocal performance and singing enthusiast, exploring creative acoustic interpretation",
        "Audio engineering with Adobe Audition: vocal mastering, noise suppression, and podcast editing"
      ]
    },
    {
      id: "ach-dean",
      category: "Academic",
      icon: "🎖️",
      title: "Dean's Lister & Academic Honors",
      institution: "College of Information and Communications Technology (NEUST)",
      year: "2023 - 2026",
      summary: "Maintained consistent Dean's List academic honors across core computer science and software development subjects including Advanced Database Systems, Web Systems, and System Analysis.",
      details: [
        "Consistent top-tier scholastic standing in CICT department",
        "Recognized for excellence in relational data modeling and software lifecycle methodologies",
        "Active peer mentor in web development and algorithmic problem solving"
      ]
    },
    {
      id: "ach-cert",
      category: "Certification",
      icon: "📜",
      title: "Full-Stack Web Development & System Architecture Credential",
      institution: "Professional Web Technology & Software Certification",
      year: "2025",
      summary: "Comprehensive certification validating full-stack engineering proficiency: PHP backend services, MySQL database modeling, responsive modern frontend, and REST APIs.",
      details: [
        "Proficiency in RESTful API lifecycle, secure session management, and CSRF/XSS defense",
        "Mastery of modern CSS frameworks, responsive layouts, and cross-browser reliability",
        "Cloud deployment experience with Vercel and production databases"
      ]
    },
    {
      id: "ach-summit",
      category: "Leadership",
      icon: "🚀",
      title: "National IT Youth Summit Student Delegate",
      institution: "Philippine Society of Information Technology Educators (PSITE)",
      year: "2025",
      summary: "Represented NEUST as an official student delegate at nationwide technology conventions, exploring modern cloud deployments, cybersecurity, and digital public administration.",
      details: [
        "Participated in workshops on modern web architecture and cloud CI/CD pipelines",
        "Collaborated with developers across Central Luzon on public sector digital transformation",
        "Engaged in technical symposiums on AI and data privacy compliance"
      ]
    }
  ],

  skills: [
    { number: "01", name: "Full-Stack Web Development", category: "Full-Stack" },
    { number: "02", name: "PHP & MVC Backend Logic", category: "Backend" },
    { number: "03", name: "MySQL (3NF) & Relational DBs", category: "Database" },
    { number: "04", name: "One-Palayan & ProcLink PRMS", category: "Full-Stack" },
    { number: "05", name: "Charcoal Portrait Art (Realism)", category: "Creative" },
    { number: "06", name: "Audio Editing (Adobe Audition)", category: "Creative" },
    { number: "07", name: "Vocal Performance & Singing", category: "Creative" },
    { number: "08", name: "JavaScript (ES6+) & DOM", category: "Frontend" },
    { number: "09", name: "React.js & Single Page Apps", category: "Frontend" },
    { number: "10", name: "Tailwind CSS & Responsive UI", category: "Frontend" },
    { number: "11", name: "RESTful APIs & Endpoints", category: "Backend" },
    { number: "12", name: "Bootstrap 5 Framework", category: "Frontend" },
    { number: "13", name: "HTML5 & Semantic Markup", category: "Frontend" },
    { number: "14", name: "CSS3 Flexbox, Grid & Animations", category: "Frontend" },
    { number: "15", name: "Row-Level Security (RLS) & RBAC", category: "Security" },
    { number: "16", name: "Database Normalization (3NF)", category: "Database" },
    { number: "17", name: "Python Programming & B-Trees", category: "Core" },
    { number: "18", name: "Java Object-Oriented Programming", category: "Core" },
    { number: "19", name: "Git Version Control & GitHub", category: "Tools" },
    { number: "20", name: "Vercel Cloud Deployment", category: "Tools" },
    { number: "21", name: "XSS & SQL Injection Defense", category: "Security" },
    { number: "22", name: "V-Model SDLC & ISO/IEC 25002", category: "Professional" },
    { number: "23", name: "System Testing & QA Debugging", category: "DevOps" },
    { number: "24", name: "Visual Arts, Shading & UI Aesthetics", category: "Creative" }
  ],

  workProcess: [
    {
      number: "01",
      phase: "Discover",
      icon: "Search",
      summary: "Stakeholder interviews, user pain-point analysis, and operational requirement gathering.",
      details: "Like in One-Palayan Hub, I start by collaborating with agency heads and end-users to understand the true administrative bottleneck before writing a single line of code."
    },
    {
      number: "02",
      phase: "Ideate",
      icon: "Lightbulb",
      summary: "Architecting entity-relationship models (3NF), data flow diagrams, and user journey wireframes.",
      details: "Designing third-normal form database schemas, role permission matrices (Residents, Staff, Admin), and sequential workflow pipelines (as seen in ProcLink PRMS)."
    },
    {
      number: "03",
      phase: "Design",
      icon: "Palette",
      summary: "Crafting intuitive, accessible, and responsive user interfaces with artistic precision.",
      details: "Leveraging my background in charcoal realism and visual arts to create ergonomic layouts, balanced typography, and responsive modern dark aesthetics."
    },
    {
      number: "04",
      phase: "Develop",
      icon: "Code2",
      summary: "Writing clean, maintainable, and secure PHP/React code with verified backend logic.",
      details: "Implementing RESTful APIs, row-level access control, input sanitization against XSS/SQLi, and session token authentication."
    },
    {
      number: "05",
      phase: "Deliver",
      icon: "Send",
      summary: "Rigorous testing under ISO/IEC 25002:2024 standards, Vercel deployment, and user training.",
      details: "Executing unit, integration, and user acceptance testing (UAT) with real stakeholders, followed by automated GitHub and Vercel cloud deployment."
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "Nueva Ecija University of Science and Technology (NEUST)",
      campus: "Atate / General Tinio Campus, Nueva Ecija",
      period: "2022 - 2026 (Graduating Senior)",
      status: "In Progress · 4th Year Senior",
      highlights: [
        "Lead developer and researcher for Capstone Project 'One-Palayan Kalinga Hub' for CSWDO Palayan City",
        "Consistent academic honors and Dean's Lister standing throughout academic career",
        "Specializing in Web Systems Architecture, Enterprise Workflow Automation, and Relational Database Engineering"
      ]
    }
  ]
};
