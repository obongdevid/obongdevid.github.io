import { Reveal } from "./Reveal";

const experience = [
  {
    role: "Backend / Systems Engineer",
    company: "Sense Connect",
    period: "June 2026",
    end: "Present",
    description:
      "Building the backend systems for Sense Connect, a market intelligence platform designed to compete with tools like Crunchbase and Briter. I design and build the pipelines that gather business signals from multiple sources, verify and classify them for accuracy, and turn them into a clear, trustworthy intelligence portfolio clients can rely on for decision-making.",
    tech: "TypeScript, NestJS, Prisma, PostgreSQL",
  },
  {
    role: "Backend / Systems Engineer (Contract)",
    company: "EshSpeaks LLP",
    period: "April 2026 - July 2026",
    description:
      "Built core backend systems for EshSpeaks, an editorial publishing platform delivering news to everyday readers. I developed the systems behind content sections and articles, along with the underlying infrastructure that keeps the platform organized, fast, and easy for the editorial team to manage.",
    tech: "NestJS, TypeScript, Prisma",
  },
  {
    role: "Backend & Mobile Developer (Contract)",
    company: "Citadel Nutrition Consult (DietPadi)",
    period: "January 2026 - March 2026",
    description:
      "Handled the backend systems and mobile app development for DietPadi, a platform connecting clients with dietitians. I built the features that let clients book appointments with dietitians and allowed dietitians to create personalized diet plans and prescriptions for their clients, and made sure emails and notifications were delivered reliably.",
    tech: "NestJS, TypeScript, PostgreSQL, Flutter, CI/CD",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal><h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2></Reveal>

        <div className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={item.company} direction="left" delay={i * 120}>
            <div className="relative border-l-2 border-primary-button pl-8 transition-all duration-300 hover:pl-10">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary-button ring-4 ring-primary-button/20" />
              <h3 className="text-xl font-semibold text-foreground">
                {item.role} — {item.company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                {item.period}
                {item.end && (
                  <>
                    {" - "}
                    <span className="text-primary-button font-semibold">{item.end.toUpperCase()}</span>
                  </>
                )}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                {item.description}
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Technologies: {item.tech}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
