import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
  Download,
} from "lucide-react";
// import developerImg from "../assets/hero-portrait.jpg";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="topographic"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 20c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20zm40 0c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20zm40 0c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M30 50c15 0 30 15 30 30s-15 30-30 30-30-15-30-30 15-30 30-30zm60 0c15 0 30 15 30 30s-15 30-30 30-30-15-30-30 15-30 30-30z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M40 90c20 0 40 20 40 40s-20 40-40 40-40-20-40-40 20-40 40-40zm80 0c20 0 40 20 40 40s-20 40-40 40-40-20-40-40 20-40 40-40z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topographic)" />
        </svg>
      </div>

      <div className="animate-blob absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-button/20 blur-3xl" />
      <div
        className="animate-blob absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      {/* Hero */}
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 md:py-24">
        {/* Hero Content with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="space-y-2">
              <p
                className="animate-fade-up text-lg md:text-xl text-gray-600 dark:text-gray-400"
                style={{ animationDelay: "100ms" }}
              >
                Hi, I am
              </p>
              <h1
                className="animate-fade-up text-5xl md:text-7xl font-extrabold tracking-tight"
                style={{ animationDelay: "200ms" }}
              >
                <span className="text-gradient">Favour Mfon.</span>
              </h1>
              <p
                className="animate-fade-up text-xl md:text-3xl text-foreground pt-2"
                style={{ animationDelay: "350ms" }}
              >
                Full-Stack Software Engineer
                <br />building secure & scalable systems
              </p>
            </div>

            <div
              className="animate-fade-up flex flex-wrap gap-4"
              style={{ animationDelay: "500ms" }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary-button text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary-button/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-button/40 cursor-pointer"
              >
                HIRE ME
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 transition-all hover:-translate-y-1 hover:border-primary-button cursor-pointer"
              >
                VIEW WORK
              </button>
              <a
                href={`${import.meta.env.BASE_URL.replace(/\/?$/, "/")}Favour_Mfon_Portfolio.pdf`}
                download
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 transition-all hover:-translate-y-1 hover:border-primary-button"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD PDF
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end relative z-10">
            <div className="animate-float relative">
              {/* <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-button/40 to-purple-500/30 blur-2xl -z-10" /> */}
              {/* <img
                src={developerImg}
                alt="Favour Mfon"
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
              /> */}
              {/* Decorative frame */}
              {/* <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-gray-300 dark:border-gray-700 rounded-tr-lg"></div> */}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Social Links */}
          <div className="flex space-x-4 pt-8">
            <a
              href="https://github.com/obongdevid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-button hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/favourmfon_4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-button hover:-translate-y-1 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/favour-mfon-ab930b23b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-button hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:favourmichael004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-button hover:-translate-y-1 transition-all"
              aria-label="Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("services")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
