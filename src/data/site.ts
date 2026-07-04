export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  malt: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  link: string;
  stars?: number;
  tags: string[];
}

export interface ProjectGroup {
  label: string;
  projects: ProjectEntry[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface LegalInfo {
  name: string;
  addressLines: string[];
}

export interface SiteData {
  profile: Profile;
  social: SocialLinks;
  about: string[];
  experience: ExperienceEntry[];
  projects: ProjectGroup[];
  skills: SkillGroup[];
  legal: LegalInfo;
}

export const siteData = {
  profile: {
    name: "Andre Loreth",
    title: "Software Architect · Platform & Cloud Engineer",
    tagline:
      "I design and operate production-grade cloud platforms — from architecture decisions to the CI/CD pipelines that ship them.",
    location: "Germany",
  },
  social: {
    email: "work@loreth.co",
    github: "https://github.com/wipeair",
    linkedin: "https://www.linkedin.com/in/andre-loreth/",
    malt: "https://www.malt.de/profile/andrelo",
  },
  about: [
    "I'm a software architect and cloud platform engineer with 10+ years of experience shipping production systems, most of it spent on backend architecture, Kubernetes, and Google Cloud infrastructure.",
    "Today I run abi group, a small consultancy where I take technical ownership of client platforms end-to-end — Kubernetes architecture, cloud migration consulting, and the CI/CD infrastructure work that keeps things running long after the kickoff meeting is forgotten.",
    "Before consulting full-time, I spent years building and operating my own web platforms and open-source tools, some of which are still quietly serving traffic I set up long ago. I like systems that are simple enough to reason about and boring enough to trust.",
  ],
  experience: [
    {
      company: "abi group GmbH",
      role: "Managing Director & Software Architect",
      dateRange: "02/2023 — Present",
      bullets: [
        "Technical ownership of client system architectures, from concept through production",
        "Defined engineering standards, CI/CD workflows, and deployment strategies across containerized environments",
        "Selected engagements: an ESG data platform for institutional real estate, cloud migration for a digital investment platform, and a scalable white-label e-commerce solution",
      ],
    },
    {
      company: "Independent Consultant",
      role: "Software & Platform Engineer (Part-time / Project-based)",
      dateRange: "12/2021 — 01/2023",
      bullets: [
        "Backend development and platform modernization embedded in client engineering teams",
        "Managed GCP infrastructure and optimized CI/CD deployment workflows",
      ],
    },
    {
      company: "SDA SE",
      role: "Software Developer",
      dateRange: "08/2021 — 01/2023",
      bullets: [
        "Built and maintained microservices in the insurance domain",
        "Enhanced an internal developer portal (Backstage) and enabled multi-cloud workflows across AWS, GCP, and Azure",
      ],
    },
    {
      company: "AurityLab UG",
      role: "Co-Founder & Managing Director",
      dateRange: "01/2018 — 12/2022",
      bullets: [
        "Designed and operated multiple web platforms and MVP products",
        "Led product architecture, backend implementation, and deployment end-to-end",
      ],
    },
    {
      company: "ADITO Software GmbH",
      role: "Software Developer (incl. 3-year apprenticeship)",
      dateRange: "09/2016 — 07/2021",
      bullets: [
        "Built CRM platform features and data visualization components",
        "Introduced automated testing (Cypress, JUnit) and led caching-based performance optimization",
      ],
    },
  ],
  projects: [
    {
      label: "Client & Platform Work",
      projects: [
        {
          name: "evmquery",
          description:
            "Hosted MCP server for querying EVM smart contract state through CEL expressions. Designed, built, and operated as a product — multi-chain backend, custom OAuth 2.1 flow, rate limiting, and billing included.",
          link: "",
          tags: ["MCP", "TypeScript", "OAuth 2.1", "Kubernetes"],
        },
        {
          name: "ESG Data Platform",
          description:
            "Architecture and implementation of a data platform for institutional real estate portfolio management. Regulated environment, production-grade from day one.",
          link: "",
          tags: ["GCP", "Architecture", "PostgreSQL"],
        },
        {
          name: "Cloud Migration — Digital Investment Platform",
          description:
            "Cloud migration consulting for a digital investment platform: containerized workloads on Kubernetes, rebuilt deployment pipelines, and an infrastructure setup the internal team can operate without me.",
          link: "",
          tags: ["GCP", "Kubernetes", "CI/CD"],
        },
        {
          name: "Document Intelligence Pipeline",
          description:
            "End-to-end document processing: LLM classification, human-in-the-loop review via Slack/Telegram, and audit-proof filing into DATEV-connected workflows. Runs in production on EU infrastructure, several hundred documents a month.",
          link: "",
          tags: ["LLM", "Automation", "GoBD/GDPR"],
        },
        {
          name: "White-Label E-Commerce Platform",
          description:
            "Design and operation of a scalable, multi-tenant e-commerce solution for SME clients — one codebase, isolated tenants, boring deployments.",
          link: "",
          tags: ["Backend", "Cloud", "Multi-tenant"],
        },
        {
          name: "High-Traffic Web Platforms (2014–2022)",
          description:
            "Built and operated my own web platforms serving tens of millions of monthly pageviews. Architecture, development, and operations in one pair of hands — where I learned that systems should run without being watched.",
          link: "",
          tags: ["Scaling", "Caching", "Operations"],
        },
      ],
    },
    {
      label: "Open Source",
      projects: [
        {
          name: "vue-recaptcha-v3",
          description:
            "A simple, dependency-free reCAPTCHA v3 integration for Vue applications.",
          link: "https://github.com/abinnovision/vue-recaptcha-v3",
          stars: 249,
          tags: ["TypeScript", "Vue"],
        },
        {
          name: "recaptcha-v3",
          description:
            "Lightweight reCAPTCHA v3 library for the browser, with no framework dependencies.",
          link: "https://github.com/abinnovision/recaptcha-v3",
          stars: 138,
          tags: ["TypeScript"],
        },
        {
          name: "nestjs-commons",
          description:
            "A collection of shared NestJS packages — configuration, Hatchet integration, file storage, and more.",
          link: "https://github.com/abinnovision/nestjs-commons",
          stars: 63,
          tags: ["TypeScript", "NestJS"],
        },
        {
          name: "abinnovision/actions",
          description:
            "Reusable GitHub Actions workflows powering our monorepo CI/CD. The standards behind \"deployments as routine, not events.\"",
          link: "https://github.com/abinnovision/actions",
          tags: ["GitHub Actions", "CI/CD"],
        },
      ],
    },
  ],
  skills: [
    {
      label: "Languages & Backend",
      items: ["TypeScript", "Node.js", "NestJS", "Java", "GraphQL"],
    },
    {
      label: "Cloud & Infrastructure",
      items: [
        "Google Cloud Platform",
        "Kubernetes",
        "PostgreSQL",
        "CloudNativePG",
        "Terraform",
        "Pulumi",
        "ArgoCD",
        "Docker",
        "CI/CD",
      ],
    },
    {
      label: "AI & Automation",
      items: [
        "LLM Integration",
        "MCP (Model Context Protocol)",
        "Document Pipelines",
        "n8n",
        "Human-in-the-Loop Workflows",
      ],
    },
    {
      label: "Architecture",
      items: [
        "API Design",
        "Event-Driven Systems",
        "Backend Systems",
        "Infrastructure Automation",
        "System Modernization",
        "Cloud Solutions Architecture",
      ],
    },
  ],
  legal: {
    name: "Andre Loreth",
    addressLines: [
      "c/o abi group GmbH",
      "Altstadt 195",
      "84028 Landshut",
      "Deutschland",
    ],
  },
} satisfies SiteData;
