import { useEffect, useId, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    href: "/",
    description: "Introduction and selected work.",
  },
  {
    name: "Partners",
    href: "/#partners",
    description: "Organisations I have worked with.",
  },
  {
    name: "Portfolio",
    href: "/portfolio/photography",
    description: "Photography, design, film and stories.",
  },
  {
    name: "About",
    href: "/#about",
    description: "Experience, approach and disciplines.",
  },
  {
    name: "Contact",
    href: "/#contact",
    description: "Start a project or conversation.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuId = useId();

  const portfolioActive =
    location.pathname.startsWith("/portfolio") ||
    location.pathname.startsWith("/projects");
  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur-md"
    >
      <div className="relative mx-auto flex max-w-[1920px] items-center justify-between px-4 py-[18px] sm:px-6 lg:px-10 lg:py-[22px]">
        <div className="flex min-w-0 items-center gap-8 pointer-events-auto">
          <Link
            to="/"
            aria-label="PJ's Lense home"
            className="flex-shrink-0 rounded-sm focus-visible:outline-offset-4"
          >
            <img
              src="/pjslense-logo.png"
              alt=""
              width="107"
              height="60"
              className="h-10 w-auto transition-opacity duration-300 hover:opacity-80"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-4 text-sm">
            <a
              href="tel:+254729067166"
              className="text-muted hover:text-amber transition-colors"
            >
              +254 729 067 166
            </a>
            <span className="text-amber" aria-hidden="true">
              /
            </span>
            <a
              href="mailto:joseph@pjslense.co.ke"
              className="text-muted hover:text-amber transition-colors"
            >
              joseph@pjslense.co.ke
            </a>
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex"
        >
          <Link
            to="/"
            aria-current={!portfolioActive ? "page" : undefined}
            className={`flex min-h-11 items-center border-b-2 px-1 pt-0.5 text-sm font-medium transition-colors ${
              !portfolioActive
                ? "border-amber text-amber"
                : "border-transparent text-snow hover:text-amber"
            }`}
          >
            Info
          </Link>
          <Link
            to="/portfolio/photography"
            aria-current={portfolioActive ? "page" : undefined}
            className={`flex min-h-11 items-center border-b-2 px-1 pt-0.5 text-sm font-medium transition-colors ${
              portfolioActive
                ? "border-amber text-amber"
                : "border-transparent text-snow hover:text-amber"
            }`}
          >
            Portfolio
          </Link>
        </nav>

        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="hidden items-center gap-4 px-3 lg:flex">
            <a
              href="https://www.linkedin.com/in/joseph-limo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joseph Limo on LinkedIn"
              className="flex min-h-11 items-center gap-2 px-2 text-sm text-snow transition-colors hover:text-amber"
            >
              <FaLinkedin size={17} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <span className="h-5 w-px bg-amber" aria-hidden="true" />
            <a
              href="/joseph-limo-resume.pdf"
              download
              className="flex min-h-11 items-center gap-2 px-2 text-sm text-snow transition-colors hover:text-amber"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>

          <div className="relative" ref={menuRef}>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls={menuId}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] transition-colors hover:bg-white/10 hover:text-amber"
            >
              {isOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>

            {isOpen && (
              <nav
                id={menuId}
                aria-label="Site menu"
                className="absolute right-0 mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden border border-white/15 bg-charcoal"
              >
                <ul className="p-2">
                  {navLinks.map((link) => (
                    <li key={link.name} className="border-b border-white/10 last:border-b-0">
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group block px-5 py-3.5 transition-colors"
                      >
                        <span className="block font-medium text-snow transition-colors group-hover:text-amber">
                          {link.name}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">
                          {link.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
