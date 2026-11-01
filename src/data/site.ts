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
      "Fullstack engineer and architect. I build products end to end and leave teams that can run them.",
    location: "Germany",
  },
  social: {
    email: "work@loreth.co",
    github: "https://github.com/wipeair",
    linkedin: "https://www.linkedin.com/in/andre-loreth/",
    malt: "https://www.malt.de/profile/andrelo",
  },
  about: [
    "Building since 2014, ten years in. Today I run abi group, a small consultancy, and take on the technical side of a client's product: the app, the infrastructure under it, the CI/CD nobody got around to. I prefer systems dull enough that nobody has to watch them.",
  ],
  experience: [
    {
      company: "abi group GmbH",
      role: "Managing Director & Software Architect",
      dateRange: "02/2023 — Present",
      bullets: [
        "Architecture and technical ownership of client products, from concept to production",
      ],
    },
    {
      company: "SDA SE",
      role: "Software Developer",
      dateRange: "08/2021 — 01/2023",
      bullets: [
        "Microservices in insurance, Backstage developer portal, multi-cloud on AWS, GCP and Azure",
      ],
    },
    {
      company: "AurityLab UG",
      role: "Co-Founder & Managing Director",
      dateRange: "01/2018 — 12/2022",
      bullets: ["Co-founded and ran web platforms and MVPs end to end"],
    },
    {
      company: "ADITO Software GmbH",
      role: "Software Developer",
      dateRange: "09/2016 — 07/2021",
      bullets: [],
    },
  ],
  projects: [
    {
      label: "Client & Product Work",
      projects: [
        {
          name: "evmquery",
          description:
            "A hosted MCP server for querying EVM smart contract state through CEL expressions.",
          link: "",
          tags: ["MCP", "TypeScript", "Kubernetes"],
        },
        {
          name: "ESG Data Platform",
          description:
            "Architecture and build for a regulated real estate data platform on GCP.",
          link: "",
          tags: ["GCP", "Architecture", "PostgreSQL"],
        },
        {
          name: "Cloud Migration",
          description:
            "Moved an investment platform to Kubernetes with pipelines the team now runs alone.",
          link: "",
          tags: ["GCP", "Kubernetes", "CI/CD"],
        },
        {
          name: "Document Intelligence Pipeline",
          description:
            "LLM classification with human review and audit-proof archiving, in production.",
          link: "",
          tags: ["LLM", "Automation", "GoBD/GDPR"],
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
      ],
    },
  ],
  skills: [
    {
      label: "Fullstack",
      items: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "React",
        "Next.js",
        "GraphQL",
        "PostgreSQL",
      ],
    },
    {
      label: "Cloud",
      items: ["Google Cloud Platform", "Kubernetes", "Terraform", "ArgoCD", "CI/CD"],
    },
    {
      label: "AI",
      items: ["LLM Integration", "MCP (Model Context Protocol)"],
    },
  ],
  contact: {
    invitation:
      "Have something half-formed? Happy to look at it with you, and to say so if I'm not the right fit.",
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
