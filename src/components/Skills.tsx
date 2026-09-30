import { Reveal } from "./Reveal";

const icon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const skills = [
  { name: "NestJS", icon: icon("nestjs/nestjs-original.svg") },
  { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
  { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
  { name: "Next.js", icon: icon("nextjs/nextjs-original.svg"), invertDark: true },
  { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
  { name: "MongoDB", icon: icon("mongodb/mongodb-original.svg") },
  { name: "Docker", icon: icon("docker/docker-original.svg") },
  { name: "Terraform", icon: icon("terraform/terraform-original.svg") },
  { name: "NGINX", icon: icon("nginx/nginx-original.svg") },
  {
    name: "Amazon EC2",
    icon: icon("amazonwebservices/amazonwebservices-plain-wordmark.svg"),
    invertDark: true,
  },
  { name: "Flutter", icon: icon("flutter/flutter-original.svg") },
  { name: "Prisma", icon: icon("prisma/prisma-original.svg"), invertDark: true },
  { name: "CI/CD", icon: icon("githubactions/githubactions-original.svg") },
  { name: "Git", icon: icon("git/git-original.svg") },
];

const workingStyle = ["Solution Oriented", "Accountable for Outcomes"];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal><h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2></Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 50}>
            <div className="group flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center mb-3 bg-white dark:bg-gray-900 rounded-xl p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-lg">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  className={`w-full h-full object-contain ${
                    skill.invertDark ? "dark:invert" : ""
                  }`}
                />
              </div>
              <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12"><div>
          <h3 className="text-lg font-semibold mb-4">Working style</h3>
          <div className="flex flex-wrap gap-3">
            {workingStyle.map((item) => (
              <span
                key={item}
                className="px-5 py-2 rounded-full font-medium border border-gray-300 hover:border-primary-button hover:text-primary-button transition-colors dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}
