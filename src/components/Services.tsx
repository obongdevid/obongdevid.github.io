import { Reveal } from "./Reveal";
import { Server, Smartphone, Cloud } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Server,
      title: "Backend Engineering",
      description:
        "I design and build secure, scalable APIs and data pipelines with NestJS, TypeScript and PostgreSQL that stay reliable as your product grows.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "I build fast, reliable mobile applications with Flutter, backed by robust APIs, notifications and emails that work seamlessly across devices.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "I containerize, automate and deploy with Docker, Terraform, NGINX, CI/CD and AWS EC2 so releases are fast, repeatable and safe.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal><h2 className="text-3xl md:text-4xl font-bold mb-12">What I do</h2></Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 150}>
              <div className="group h-full text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary-button">
                <div className="flex justify-center mb-4">
                  <span className="p-4 rounded-2xl bg-primary-button/10 text-primary-button transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-10 h-10" />
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
