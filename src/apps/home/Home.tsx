import { useEffect, useState } from "react";
import Experience from "../../components/Experence";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import scrollingEffect from "../../utils/scrollingEffect";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:hkwang25@gmail.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/howardwang1998221/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.98H3.86v10.14h3.08V8.98ZM7.2 5.84A1.78 1.78 0 1 0 3.64 5.8a1.78 1.78 0 0 0 3.56.04ZM20.36 13.28c0-3.06-1.64-4.48-3.82-4.48a3.29 3.29 0 0 0-2.98 1.64h-.04V8.98h-2.96v10.14h3.08v-5.02c0-1.32.25-2.6 1.89-2.6 1.61 0 1.63 1.51 1.63 2.68v4.94h3.08l.12-5.84Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/hkw25",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.7c-2.73.6-3.31-1.17-3.31-1.17-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.99.07 1.51 1.02 1.51 1.02.87 1.5 2.29 1.07 2.85.82.09-.64.34-1.07.62-1.31-2.18-.25-4.47-1.09-4.47-4.86 0-1.07.38-1.95 1.01-2.64-.1-.25-.44-1.25.1-2.6 0 0 .83-.27 2.69 1.01a9.24 9.24 0 0 1 4.9 0c1.86-1.28 2.68-1.01 2.68-1.01.54 1.35.2 2.35.1 2.6.63.69 1.01 1.57 1.01 2.64 0 3.78-2.3 4.61-4.49 4.86.35.3.66.9.66 1.82v2.7c0 .26.18.56.68.47A9.75 9.75 0 0 0 12 2.25Z" />
      </svg>
    ),
  },
];

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavBackground = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateNavBackground();
    window.addEventListener("scroll", updateNavBackground, { passive: true });

    return () => window.removeEventListener("scroll", updateNavBackground);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1de] text-[#3d405b]">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-[#3d405b]/20 bg-[#3d405b]/90 shadow-md shadow-[#3d405b]/15"
            : "border-[#3d405b]/15 bg-[#f4f1de]/85"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-4 flex justify-between items-center">
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              isScrolled ? "gradient-text-nav-scrolled" : "gradient-text"
            }`}
          >
            Howard Wang
          </span>
          <div className="flex items-center gap-8 text-sm font-medium text-[#3d405b]/80">
            <a 
              href="#experience" 
              onClick={(event) => scrollingEffect(event, "#experience")}
              className={`hover:text-[#e07a5f] transition-colors duration-150 ${
                isScrolled
                  ? "text-[#f4f1de]"
                  : "text-[#3d405b]/80"
              }`}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(event) => scrollingEffect(event, "#projects")}
              className={`hover:text-[#e07a5f] transition-colors duration-150 ${
                isScrolled
                  ? "text-[#f4f1de]"
                  : "text-[#3d405b]/80"
              }`}
            >
              Projects
            </a>
            <div
              className={`flex items-center gap-2 border-l pl-4 transition-colors duration-300 ${
                isScrolled ? "border-[#f4f1de]/25" : "border-[#3d405b]/15"
              }`}
            >
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-150 hover:-translate-y-0.5 ${
                    isScrolled
                      ? "bg-[#f4f1de]/15 text-[#f4f1de] hover:bg-[#f2cc8f] hover:text-[#3d405b]"
                      : "bg-[#3d405b]/10 text-[#3d405b] hover:bg-[#e07a5f] hover:text-[#f4f1de]"
                  }`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="w-full">
        <Hero />
        <div className="w-full px-6">
          <Experience />
          <Projects />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#3d405b]/15 bg-[#f2cc8f]/25">
        <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-[#3d405b]/70">
          <span>Built with React &amp; Tailwind CSS</span>
          <span className="inline-flex gap-2">
            {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-150 hover:-translate-y-0.5 ${
                   "bg-[#3d405b]/10 text-[#3d405b] hover:bg-[#e07a5f] hover:text-[#f4f1de]"
                  }`}
                >
                  {link.icon}
                </a>
              ))}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
