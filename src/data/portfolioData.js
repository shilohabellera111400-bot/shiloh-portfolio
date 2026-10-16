export const portfolioData = {
  personalInfo: {
    name: "Shiloh Abellera",
    firstName: "Shiloh",
    lastName: "Abellera",
    role: "Full-Stack Developer & BSIT Senior",
    badge: "Available for work · 2026",
    university: "Nueva Ecija University of Science and Technology (NEUST)",
    degree: "Bachelor of Science in Information Technology",
    year: "BSIT · 4th Year Senior",
    location: "Nueva Ecija, Philippines",
    countryCode: "PH",
    email: "shiloh.abellera111400@gmail.com",
    github: "https://github.com",
    githubUsername: "Shiloh-Abellera",
    bio: "Full-stack developer & BSIT senior at Nueva Ecija University of Science and Technology. I design and build resilient web systems, digital community portals, and modern software experiences.",
    quote: "Good software is not just about lines of code; it is about building intuitive solutions that make services accessible, communities stronger, and lives simpler.",
    photo: "/images/shiloh.jpg",
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Years Coding", value: "3+" },
      { label: "System Uptime & Quality", value: "99%" },
      { label: "Honors & Credentials", value: "5+" }
    ]
  },

  marqueeSkills: [
    "PHP", "MySQL", "JavaScript", "React.js", "Tailwind CSS", "REST APIs", 
    "Python", "HTML5 & CSS3", "Bootstrap", "Node.js", "Git & GitHub", 
    "Vercel Deployment", "RBAC Security", "Database Normalization", "Java OOP"
  ],

  projects: [
    {
      id: "01",
      title: "Barangay Cares — Incident & E-Services Management System",
      type: "Web Application · Public Governance",
      summary: "A full-scale community management portal developed to digitize barangay transactions. Enables residents to submit verified complaints, file official document requests (Barangay Clearance, Residency, Indigency), track statuses live, and receive administrative notices. Equipped with a robust admin dashboard for dispute categorization, verification workflows, and audit reporting.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "HTML5/CSS3", "RESTful API", "Session Auth"],
      views: [
        {
          id: "resident",
          label: "Resident Portal",
          icon: "👤",
          badge: "Citizen View",
          description: "Online filing of incidents, document request cart, real-time ticket tracker, and official announcements feed.",
          highlights: ["Real-time complaint tracking", "Document request automation", "SMS/Email notification triggers"]
        },
        {
          id: "admin",
          label: "Admin Dashboard",
          icon: "⚡",
          badge: "Barangay Official View",
          description: "Comprehensive administration console with incident dispatch metrics, dispute logs, resident database, and audit history.",
          highlights: ["Automated dispute categorization", "Official PDF clearance generator", "Citizen identity verification queue"]
        },
        {
          id: "verification",
          label: "Verification Center",
          icon: "🛡️",
          badge: "Security & Records",
          description: "Resident verification and ID matching mechanism preventing fraudulent requests and securing public records.",
          highlights: ["XSS input sanitization", "Government ID matching", "Encrypted session tokens"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      id: "02",
      title: "WeCare — Healthcare Clinic & Appointment Management System",
      type: "Web Application · HealthTech",
      summary: "An integrated healthcare appointment and triage records system designed for local outpatient clinics. Allows patients to select specialists, book available calendar slots, and review medical history. Provides clinic personnel with an automated daily schedule queue, digital prescriptions, and patient records management.",
      technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "REST API", "JWT Auth"],
      views: [
        {
          id: "patient",
          label: "Patient Portal",
          icon: "🩺",
          badge: "Patient View",
          description: "Doctor directory search, intuitive calendar scheduling, medical history vault, and consultation reminders.",
          highlights: ["Instant slot reservations", "Appointment reminders", "Digital medical history"]
        },
        {
          id: "doctor",
          label: "Physician Console",
          icon: "👨‍⚕️",
          badge: "Doctor View",
          description: "Daily patient queue manager, consultation diagnostics recorder, and electronic prescription generator.",
          highlights: ["Live patient queue", "E-Prescription generator", "Diagnostic history"]
        },
        {
          id: "reception",
          label: "Clinic Reception",
          icon: "📋",
          badge: "Staff View",
          description: "Triage check-in desk, billing summary generator, and doctor availability calendar management.",
          highlights: ["Fast-track check-in", "Billing breakdown", "Doctor schedule roster"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      id: "03",
      title: "EcoTrack — Smart IoT Energy & Sustainability Dashboard",
      type: "IoT Web Application · Sustainability",
      summary: "A modern energy intelligence dashboard that aggregates household and laboratory power consumption. Visualizes real-time kilowatt-hour draw, predicts monthly utility expenditures using local energy tariffs, and alerts users of phantom standby power waste to optimize electrical efficiency.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript ES6", "Chart.js", "Node.js", "REST APIs"],
      views: [
        {
          id: "analytics",
          label: "Telemetry Live",
          icon: "📊",
          badge: "Real-time Telemetry",
          description: "Interactive consumption graphs by hour, day, and room with peak-rate alert indicators.",
          highlights: ["Interactive consumption timeline", "Peak power spike warnings", "Room-by-room breakdown"]
        },
        {
          id: "forecaster",
          label: "Cost Forecaster",
          icon: "💡",
          badge: "Billing Analytics",
          description: "Algorithmic billing projection engine based on tiered utility formulas and historical usage patterns.",
          highlights: ["Tiered tariff calculator", "Monthly bill estimator", "Energy reduction targets"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      id: "04",
      title: "CampusLink — University Lost & Found with Split-Code Handover",
      type: "Mobile & Web · Security & Community",
      summary: "A student-centric property recovery platform engineered to eliminate false ownership claims. Features an innovative mutual split-code verification mechanism: when an item is claimed, the claimant and finder each hold complementary 2-digit PIN segments that complete only upon verified physical handover.",
      technologies: ["JavaScript", "PHP", "MySQL", "Tailwind CSS", "Firebase", "REST APIs"],
      views: [
        {
          id: "finder",
          label: "Finder & Claimant",
          icon: "🔍",
          badge: "Student View",
          description: "Item catalog with category search, location filtering, and safe in-app peer communication.",
          highlights: ["Photo surrender uploads", "Campus building tagging", "Direct peer messaging"]
        },
        {
          id: "verification",
          label: "Split-Code Handover",
          icon: "🤝",
          badge: "Security Verification",
          description: "Cryptographic PIN combination system ensuring accountability and legitimate return of student valuables.",
          highlights: ["Mutual 4-digit code matching", "Time-stamped return logs", "Campus security oversight"]
        }
      ],
      githubLink: "https://github.com",
      liveLink: "#"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      category: "Academic",
      icon: "🏆",
      title: "Dean's Lister & Academic Honors",
      institution: "College of Information and Communications Technology (NEUST)",
      year: "2023 - 2026",
      summary: "Awarded Dean's List honors for consecutive academic terms, demonstrating consistent scholastic excellence across Advanced Database Systems, Web Systems & Technologies, and Software Engineering.",
      details: [
        "Maintained top-tier GWA in core computer science & information technology courses",
        "Recognized for exemplary performance in Relational Database Management and Object-Oriented Programming",
        "Collaborated with faculty on student mentorship and academic review programs"
      ]
    },
    {
      id: "ach-2",
      category: "Capstone",
      icon: "🥇",
      title: "Best in Capstone & System Architecture Recognition",
      institution: "NEUST CICT Annual System Exhibition",
      year: "2025",
      summary: "Awarded top honors for the architectural design and societal impact of the Barangay Incident and Document Management System, recognized for bridging community bureaucracy through technology.",
      details: [
        "Praised by academic panel for database normalization (3NF) and security hygiene against SQL injection and XSS",
        "Demonstrated a complete full-stack workflow resolving document turnaround times from days to hours",
        "Featured as an exemplary senior capstone project for regional public-sector automation"
      ]
    },
    {
      id: "ach-3",
      category: "Certification",
      icon: "📜",
      title: "Full-Stack Web Development Credential",
      institution: "IT Specialist & Development Certification",
      year: "2025",
      summary: "Comprehensive certification covering end-to-end web architecture: frontend responsive engineering, backend API development with PHP & Node.js, and relational database management.",
      details: [
        "Proficiency in RESTful API lifecycle, authentication states, and CORS policies",
        "Practical mastery of modern CSS frameworks, responsive layouts, and cross-browser compatibility",
        "Rigorous automated testing, database migrations, and production deployment"
      ]
    },
    {
      id: "ach-4",
      category: "Technical",
      icon: "🛡️",
      title: "Database Engineering & SQL Optimization Specialist",
      institution: "NEUST Advanced Database Seminar & Lab",
      year: "2024",
      summary: "Demonstrated advanced competence in complex SQL queries, index optimization, multi-table transactions, ACID compliance, and database administration.",
      details: [
        "Architected relational schemas handling high concurrent queries with minimal latency",
        "Implemented database trigger routines and stored procedures for audit logging",
        "Formulated backup, recovery, and data replication strategies"
      ]
    },
    {
      id: "ach-5",
      category: "Leadership",
      icon: "🚀",
      title: "National IT Youth Summit Delegate",
      institution: "Philippine Society of Information Technology Educators (PSITE)",
      year: "2025",
      summary: "Selected as an official student delegate representing NEUST, engaging in cutting-edge panels on cloud computing, cybersecurity resilience, and modern software craft.",
      details: [
        "Participated in hands-on workshops on Vercel cloud CI/CD and modern web microservices",
        "Collaborated with student engineers across Central Luzon in competitive software hack challenges",
        "Networked with industry tech leads and alumni mentors"
      ]
    }
  ],

  skills: [
    { number: "01", name: "Full-Stack Web Development", category: "Full-Stack" },
    { number: "02", name: "PHP & Backend Architecture", category: "Backend" },
    { number: "03", name: "MySQL & Relational Databases", category: "Database" },
    { number: "04", name: "JavaScript (ES6+) & DOM", category: "Frontend" },
    { number: "05", name: "React.js & Single Page Apps", category: "Frontend" },
    { number: "06", name: "Tailwind CSS & Modern UI", category: "Frontend" },
    { number: "07", name: "HTML5 & Semantic Markup", category: "Frontend" },
    { number: "08", name: "CSS3 & Responsive Design", category: "Frontend" },
    { number: "09", name: "RESTful APIs & Endpoints", category: "Backend" },
    { number: "10", name: "Bootstrap 5 Framework", category: "Frontend" },
    { number: "11", name: "Node.js & Express.js", category: "Backend" },
    { number: "12", name: "Database Normalization (3NF)", category: "Database" },
    { number: "13", name: "Role-Based Access Control (RBAC)", category: "Security" },
    { number: "14", name: "Python Programming & Algorithms", category: "Core" },
    { number: "15", name: "Data Structures & B-Trees", category: "Core" },
    { number: "16", name: "Java Object-Oriented Programming", category: "Core" },
    { number: "17", name: "Git Version Control & GitHub", category: "Tools" },
    { number: "18", name: "Vercel Cloud Deployment", category: "Tools" },
    { number: "19", name: "XSS & SQL Injection Defense", category: "Security" },
    { number: "20", name: "UI/UX Wireframing & Design", category: "Design" },
    { number: "21", name: "System Testing & QA Debugging", category: "DevOps" },
    { number: "22", name: "Apache & XAMPP Configuration", category: "Tools" },
    { number: "23", name: "Technical Documentation", category: "Professional" },
    { number: "24", name: "Problem Solving & Analytical Thinking", category: "Professional" }
  ],

  workProcess: [
    {
      number: "01",
      phase: "Discover",
      icon: "Search",
      summary: "Understanding the problem, interviewing stakeholders, and gathering operational requirements.",
      details: "Before writing any code, I analyze user pain points, system constraints, and expected business outcomes to define clear technical specifications."
    },
    {
      number: "02",
      phase: "Ideate",
      icon: "Lightbulb",
      summary: "Architecting the entity-relationship diagrams (ERD), wireframes, and data structures.",
      details: "Mapping out normalized database schemas, component hierarchies, user journey wireframes, and API endpoints for seamless scalability."
    },
    {
      number: "03",
      phase: "Design",
      icon: "Palette",
      summary: "Crafting intuitive, accessible, and responsive user interfaces with crisp visual hierarchy.",
      details: "Designing modern dark & crimson themes, ergonomic forms, responsive card layouts, and micro-interactions that delight users."
    },
    {
      number: "04",
      phase: "Develop",
      icon: "Code2",
      summary: "Writing clean, maintainable, and secure code with robust server-side validation.",
      details: "Building responsive React & PHP modules, integrating RESTful APIs, securing endpoints against XSS/injections, and verifying database transactions."
    },
    {
      number: "05",
      phase: "Deliver",
      icon: "Send",
      summary: "Rigorous system testing, continuous deployment on Vercel, and comprehensive documentation.",
      details: "Conducting multi-browser testing, mobile responsiveness checks, automated GitHub CI/CD pipeline triggers, and deploying live to production."
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
        "Specializing in Web and Mobile Systems, Database Engineering, and Software Design",
        "Consistent academic honors and Dean's Lister standing",
        "Lead developer on community-focused capstone project 'Barangay Cares'"
      ]
    }
  ]
};
