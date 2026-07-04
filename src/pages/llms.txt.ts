import type { APIRoute } from "astro";
import { siteData } from "../data/site";

const SITE_URL = "https://loreth.co";

function renderAbout(): string {
  return siteData.about.join("\n\n");
}

function renderExperience(): string {
  return siteData.experience
    .map((entry) => {
      const bullets = entry.bullets.map((bullet) => `- ${bullet}`).join("\n");
      return `### ${entry.company} — ${entry.role} (${entry.dateRange})\n${bullets}`;
    })
    .join("\n\n");
}

function renderProjects(): string {
  return siteData.projects
    .map((group) => {
      const items = group.projects
        .map((project) => {
          const name = project.link ? `[${project.name}](${project.link})` : project.name;
          const stars = project.stars !== undefined ? ` (${project.stars} stars)` : "";
          return `- **${name}**${stars}: ${project.description} — ${project.tags.join(", ")}`;
        })
        .join("\n");
      return `### ${group.label}\n${items}`;
    })
    .join("\n\n");
}

function renderSkills(): string {
  return siteData.skills.map((group) => `- **${group.label}**: ${group.items.join(", ")}`).join("\n");
}

function renderContact(): string {
  return [
    `- Email: [${siteData.social.email}](mailto:${siteData.social.email})`,
    `- GitHub: ${siteData.social.github}`,
    `- LinkedIn: ${siteData.social.linkedin}`,
    `- Location: ${siteData.profile.location}`,
  ].join("\n");
}

const body = `# ${siteData.profile.name}

> ${siteData.profile.title} — ${siteData.profile.tagline}

## About

${renderAbout()}

## Experience

${renderExperience()}

## Projects

${renderProjects()}

## Skills

${renderSkills()}

## Contact

${renderContact()}

## Optional

- [Imprint](${SITE_URL}/legal/imprint)
- [Privacy Policy](${SITE_URL}/legal/privacy)
`;

export const GET: APIRoute = () => {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
