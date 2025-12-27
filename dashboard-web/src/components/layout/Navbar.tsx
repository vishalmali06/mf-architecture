import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  "Journey",
  "Experience",
  "Mindset",
  "Projects",
  "Teaching",
  "Now",
  "Contact",
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Journey");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* -------------------------
     Sync active with hash
  --------------------------*/
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActive(hash.charAt(0).toUpperCase() + hash.slice(1));
      }
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  /* -------------------------
     Shared Link Styles
  --------------------------*/
  const linkClasses = (link: string) => `
    px-3 py-1.5 rounded-md text-sm font-medium transition-colors
    ${
      active === link
        ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }
  `;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* ---------------- Desktop Bar ---------------- */}
        <div className="h-14 flex justify-between items-center">
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Vishal Mali
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={linkClasses(link)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* ---------------- Mobile Menu ---------------- */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-1 py-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActive(link);
                  setMobileOpen(false);
                }}
                className={linkClasses(link)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
