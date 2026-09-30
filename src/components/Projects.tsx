import { Reveal } from "./Reveal";
import { ExternalLink } from "lucide-react";
import dietpadiImg from "../assets/projects/dietpadi.jpg";
import eshspeaksImg from "../assets/projects/eshspeaks.jpg";
import shorelineImg from "../assets/projects/shoreline.jpg";

type ProjectLink = { label: string; url: string };

const projects: {
  title: string;
  role: string;
  description: string;
  stack: string[];
  image?: string;
  links: ProjectLink[];
}[] = [
  {
    title: "DietPadi",
    role: "Backend & Mobile Developer",
    description:
      "A dietitian appointment and prescription platform that makes professional nutrition guidance easy to access. Clients book appointments with dietitians, who in turn create personalized diet plans and prescriptions through the platform.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Flutter", "CI/CD"],
    image: dietpadiImg,
    links: [
      { label: "Website", url: "https://dietpadi.com" },
      { label: "Web App", url: "https://app.dietpadi.com" },
    ],
  },
  {
    title: "EshSpeaks",
    role: "Backend / Systems Engineer",
    description:
      "An editorial publishing platform delivering news and analysis on politics, media and current affairs. I built the systems behind content sections and articles, giving the editorial team a fast, organized way to publish.",
    stack: ["NestJS", "TypeScript", "Prisma"],
    image: eshspeaksImg,
    links: [{ label: "Live Site", url: "https://eshspeaks.netlify.app" }],
  },
  {
    title: "Shoreline",
    role: "Full-Stack Engineer",
    description:
      "An ERP console for Shoreline Natural Resources Ltd. that unifies operations in one place, with role-checked access, audit-logged actions and passkey sign-in so every operation stays accountable end to end.",
    stack: ["TypeScript", "Next.js", "NestJS"],
    image: shorelineImg,
    links: [{ label: "Live Demo", url: "https://shoreline-demo.netlify.app" }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal><h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2></Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 150} className="h-full">
            <div
              className="group h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-button"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                    {project.title}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-primary-button mb-3">{project.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.links.map((link, i) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        i === 0
                          ? "bg-primary-button hover:bg-primary-button/90 text-white"
                          : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
