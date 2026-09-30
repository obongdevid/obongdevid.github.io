import { Moon, Sun, Github, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Scroll state: shadow, progress bar and active section highlight
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 10);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = links[0].id;
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-100 dark:border-gray-800 backdrop-blur-md transition-shadow ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-extrabold tracking-tight cursor-pointer"
          >
            Favour<span className="text-primary-button">.</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-xl font-bold py-1 transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-primary-button after:transition-all after:duration-300 ${
                  activeSection === id
                    ? "text-foreground after:w-full"
                    : "text-gray-500 dark:text-gray-400 hover:text-foreground after:w-0 hover:after:w-full"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:rotate-12 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <a
              href="https://github.com/obongdevid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-gray-100 dark:border-gray-800" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left text-xl font-bold py-3 cursor-pointer ${
                activeSection === id ? "text-primary-button" : "text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-button to-purple-500"
        style={{ width: `${progress}%` }}
      />
    </nav>
  );
}
