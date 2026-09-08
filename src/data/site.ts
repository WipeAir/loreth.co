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

export interface ContactInfo {
  invitation: string;
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
  contact: ContactInfo;
  legal: LegalInfo;
}

export const siteData = {
  profile: {
    name: "Andre Loreth",
    title: "Software Architect · Fullstack & Cloud",
    tagline:
      "I build products end to end, from the interface people actually use down to the cloud platform it runs on, and I stay long enough that the team can run it themselves.",
    location: "Germany",
  },
  social: {
    email: "work@loreth.co",
    github: "https://github.com/wipeair",
    linkedin: "https://www.linkedin.com/in/andre-loreth/",
    malt: "https://www.malt.de/profile/andrelo",
  },
  about: [
    "I started building websites in 2014, a while before I had any business running them. It was a lot of fun back then, experimenting with that. By 2016 I was doing an apprenticeship at a software company instead of going to university, which is where I learned to do this properly. Ten years later I'm a software engineer and architect: mostly TypeScript, React, Node.js and a lot of Kubernetes.",
    "These days I run abi group, a small consultancy firm. I take on the technical side of a client's product: the app itself, the infrastructure layer underneath it, and all the CI/CD automation work nobody got around to. What I actually care about is that the team can keep running it once I'm gone, which is an odd thing to optimize for as a consultant, but it's the only version of this job I really enjoy.",
    "I have some opinions about boring software. Systems should be simple enough to explain to whoever is on call next, and dull enough that nobody has to sit and watch them. I've built the clever kind too, and then had to maintain it.",
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
      label: "Client & Product Work",
      projects: [
        {
          name: "evmquery",
          description:
            "A hosted MCP server for querying EVM smart contract state through CEL expressions, with a multi-chain backend.",
          link: "",
          tags: ["MCP", "TypeScript", "OAuth 2.1", "Kubernetes"],
        },
        {
          name: "ESG Data Platform",
          description:
            "Worked on the architecture and implementation of a data platform for managing institutional real estate portfolios. A regulated environment, so it had to hold up in production from the start.",
          link: "",
          tags: ["GCP", "Architecture", "PostgreSQL"],
        },
        {
          name: "Cloud Migration — Digital Investment Platform",
          description:
            "Helped a digital investment platform move to the cloud: containerized workloads on Kubernetes, rebuilt deployment pipelines, and a setup the internal team runs on their own now.",
          link: "",
          tags: ["GCP", "Kubernetes", "CI/CD"],
        },
        {
          name: "Document Intelligence Pipeline",
          description:
            "Document processing from intake to filing: LLM classification, a human-in-the-loop review step, and audit-proof archiving. Runs in production, a few hundred documents a month.",
          link: "",
          tags: ["LLM", "Automation", "GoBD/GDPR"],
        },
        {
          name: "White-Label E-Commerce Platform",
          description:
            "A multi-tenant e-commerce platform for SME clients: one codebase, each tenant kept separate, and deployments that stay uneventful.",
          link: "",
          tags: ["Backend", "Cloud", "Multi-tenant"],
        },
        {
          name: "High-Traffic Web Platforms (2014–2022)",
          description:
            "My own web platforms, at tens of millions of pageviews a month. Building and running them at the same time is where I learned to make things that don't need watching.",
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
            "A collection of shared NestJS packages: configuration, Hatchet integration, file storage, and more.",
          link: "https://github.com/abinnovision/nestjs-commons",
          stars: 63,
          tags: ["TypeScript", "NestJS"],
        },
        {
          name: "abinnovision/actions",
          description:
            "Reusable GitHub Actions workflows behind our monorepo CI/CD. Mostly an attempt to make deployments routine enough that nobody has to think about them.",
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
      label: "Frontend",
      items: ["React", "Next.js", "Astro", "Vue", "Tailwind CSS"],
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
  contact: {
    invitation:
      "If you have something half-formed and you're not sure yet what it needs, that's usually a good conversation to have. I'm happy to look at it with you first, and I don't mind saying when I'm not the right person for it.",
  },
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
