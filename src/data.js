export const resumeUrl = `${import.meta.env.BASE_URL}AkashJha-SOC-Analyst.pdf`;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Labs", href: "#labs" },
  { label: "Education", href: "#experience" },
];

export const heroHighlights = [
  "Investigating authentication activity and security events in lab environments",
  "Practising network analysis, vulnerability assessment, and Linux administration",
  "Documenting findings, evidence, and practical remediation steps",
];

export const skills = [
  {
    number: "01",
    title: "Security Operations",
    summary: "Foundational blue-team investigation and documentation.",
    items: ["Security log analysis", "Authentication event investigation", "Incident documentation", "Security hardening"],
  },
  {
    number: "02",
    title: "Network Analysis",
    summary: "Understanding traffic, services, and network exposure.",
    items: ["TCP/IP fundamentals", "DNS and HTTP/HTTPS", "Wireshark", "Nmap", "Firewall fundamentals"],
  },
  {
    number: "03",
    title: "Security Tooling",
    summary: "Tools used in controlled labs and practical exercises.",
    items: ["Windows Event Viewer", "Burp Suite", "Nessus", "Metasploit", "VirtualBox"],
  },
  {
    number: "04",
    title: "Systems & Scripting",
    summary: "Command-line workflows and basic automation.",
    items: ["Linux", "Windows", "Python", "Bash fundamentals", "Git and GitHub"],
  },
];

export const featuredProjects = [
  {
    number: "01",
    type: "BLUE TEAM LAB",
    title: "Windows Authentication Log Investigation",
    status: "In progress",
    description:
      "A hands-on investigation of Windows authentication activity, including failed logons, event timestamps, and patterns that may indicate repeated login attempts. Evidence collection and analysis are ongoing.",
    tags: ["Windows", "Event Viewer", "Authentication"],
    url: "https://github.com/akashjha518/SOC-projects",
    visual: "logs",
  },
  {
    number: "02",
    type: "HOME LAB",
    title: "Cybersecurity Home Lab",
    status: "Documented",
    description:
      "A VirtualBox lab using Kali Linux, Ubuntu, and Metasploitable2 to practise networking, Linux administration, reconnaissance, vulnerability assessment, and controlled security testing.",
    tags: ["VirtualBox", "Kali Linux", "Ubuntu"],
    url: "https://github.com/akashjha518/homelab",
    visual: "network",
  },
  {
    number: "03",
    type: "PYTHON · FASTAPI",
    title: "CyberBuddy",
    status: "Prototype",
    description:
      "An AI-assisted cybersecurity project intended to help non-technical users examine suspicious messages and URLs, classify potential risk, and understand practical next steps.",
    tags: ["Python", "FastAPI", "Risk analysis"],
    url: "https://github.com/akashjha518/CyberBuddy",
    visual: "assistant",
  },
  {
    number: "04",
    type: "SCAM ANALYSIS",
    title: "ScamShield",
    status: "In progress",
    description:
      "A project in progress for reviewing freelance job offers, client messages, and payment requests for warning signs, risk indicators, missing information, and recommended next steps.",
    tags: ["Python", "FastAPI", "Fraud awareness"],
    url: "https://github.com/akashjha518/ScamShield",
    visual: "shield",
  },
];

export const labProjects = [
  {
    title: "Linux Server Hardening & Monitoring",
    description:
      "Configured an Nginx server in a lab, worked with firewall controls, and built a health-check script to monitor service availability.",
    tags: ["Linux", "Nginx", "Bash"],
  },
  {
    title: "Web Application Security Testing",
    description:
      "Practised controlled web security testing around access control, authentication, password reset flows, and HTTP request analysis using Burp Suite.",
    tags: ["Burp Suite", "HTTP", "Web security"],
  },
  {
    title: "CyberEscape / CyberScape",
    description:
      "An outdoor cybersecurity learning concept that turns walks into security-themed missions and encourages observation and defensive thinking.",
    tags: ["Learning project", "Cybersecurity"],
  },
];

export const journeyItems = [
  {
    date: "2024 — 2026",
    degree: "M.Sc. Informatics",
    institution: "Institute of Informatics and Communication, University of Delhi",
  },
  {
    date: "2020 — 2023",
    degree: "B.Sc. (Hons.) Electronics",
    institution: "Acharya Narendra Dev College, University of Delhi",
  },
];


export const trainingItems = [
  {
    title: "Ethical Hacking",
    provider: "TuteDude",
    credentialId: "TD-AKAS-EH-1128",
    detail: "Course credential",
    url: "https://tutedude694.s3.ap-south-1.amazonaws.com/Certificates/TD-AKAS-EH-1128.pdf",
    linkLabel: "View certificate",
    format: "PDF",
  },
  {
    title: "Cybersecurity",
    provider: "TuteDude",
    credentialId: "TD-AKAS-CS-1556",
    detail: "Course credential",
    url: "https://upskill.tutedude.com/certificate/TD-AKAS-CS-1556",
    linkLabel: "Verify credential",
    format: "Online",
  },
  {
    title: "Python Programming",
    provider: "TuteDude",
    credentialId: "TD-AKAS-PY-1919",
    detail: "Course credential",
    url: "https://upskill.tutedude.com/certificate/TD-AKAS-PY-1919",
    linkLabel: "Verify credential",
    format: "Online",
  },
  {
    title: "Linux",
    provider: "TuteDude",
    credentialId: "TD-AKAS-LN-1919",
    detail: "Course credential",
    url: "https://upskill.tutedude.com/certificate/TD-AKAS-LN-1919",
    linkLabel: "Verify credential",
    format: "Online",
  },
];

