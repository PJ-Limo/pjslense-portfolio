import { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  const activeTab = location.pathname.startsWith("/portfolio")
    ? "portfolio"
    : "work";

  const menuRef = useRef(null);

  const navLinks = [
    {
      name: "Home",
      href: "/",
      description: "Welcome and introduction.",
    },
    {
      name: "Partners",
      href: "#partners",
      description: "Brands and organisations I've worked with.",
    },
    {
      name: "Portfolio",
      href: "/portfolio/photography",
      description: "Selected work across multiple creative disciplines.",
    },
    {
      name: "About",
      href: "#about",
      description: "Experience, philosophy and journey.",
    },
    {
      name: "Contact",
      href: "#contact",
      description: "Let's create something meaningful together.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={` fixed inset-x-0 top-0 z-50 pointer-events-none transition-all duration-500
    ${
      scrolled
        ? ` bg-charcoal/35 backdrop-blur-3xl border-b border-white/15 shadow-[0_20px_60px_rgba(0,0,0,.45)] `
        : "bg-transparent"
    }
  `}
    >
      <div
        className={` relative max-w-[1920px] mx-auto flex items-center justify-between px-8 lg:px-10 transition-all duration-500
    ${scrolled ? "py-3" : "py-6"}
  `}
      >
        {/* =========================
            LEFT
        ========================= */}

        <div className="flex items-center gap-10 pointer-events-auto">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/pjslense logo.png"
              alt="PJ's Lense"
              className={`h-14 w-auto transition-all duration-500 hover:opacity-80 ${
                scrolled ? "drop-shadow-[0_8px_18px_rgba(0,0,0,.75)]" : ""
              }`}
            />
          </Link>

          <div
            className={`hidden xl:flex items-center gap-5 text-sm transition-all duration-500 ${
              scrolled ? "drop-shadow-[0_2px_8px_rgba(0,0,0,.85)]" : ""
            }`}
          >
            <span className="text-muted hover:text-amber transition">
              +254 729 067 166
            </span>

            <span className="text-amber">/</span>

            <a
              href="mailto:joseph@pjslense.co.ke"
              className="text-muted hover:text-amber transition"
            >
              joseph@pjslense.co.ke
            </a>
          </div>
        </div>

        {/* =========================
            CENTRE NAVIGATION
        ========================= */}

        <div
          className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-md bg-white/[0.04] shadow-[0_10px_35px_rgba(0,0,0,.18)]"
              : "backdrop-blur-xl bg-white/5"
          } rounded-full border border-white/10 px-1 py-1`}
        >
          <div className="relative flex items-center">
            {/* Sliding pill */}

            <div
              className={`absolute top-0 left-0 h-8 w-20 rounded-full bg-amber
    transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
    ${activeTab === "work" ? "left-0" : "left-20"}
  `}
            />

            {/* Decorative amber line */}

            <div
              className={`absolute top-1/2 -translate-y-1/2 h-6 w-[2px] bg-amber rounded-full transition-all duration-500
      ${activeTab === "work" ? "-left-3" : "-right-3"}`}
            />

            <Link
              to="/"
              className={`relative z-10 flex items-center justify-center w-20 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "work"
                  ? "text-charcoal"
                  : "text-snow hover:text-amber"
              }`}
            >
              Info
            </Link>

            <Link
              to="/portfolio/photography"
              className={`relative z-10 flex items-center justify-center w-20 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "portfolio"
                  ? "text-charcoal"
                  : "text-snow hover:text-amber"
              }`}
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* =========================
            RIGHT
        ========================= */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* LinkedIn + Resume */}

          <div
            className={` flex items-center gap-4 rounded-full transition-all duration-500
              ${
                scrolled
                  ? ` px-4 py-2 bg-white/[0.04] backdrop-blur-md border-white/10 ring-2 ring-white/5 shadow-[0_10px_35px_rgba(0,0,0,.18)] `
                  : ""
              }
            `}
          >
            <a
              href="https://www.linkedin.com/in/joseph-limo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-snow hover:text-amber transition-colors duration-300"
            >
              <FaLinkedin size={17} />
              <span>LinkedIn</span>
            </a>

            <div className="h-5 w-px bg-amber" />

            <a
              href="/Joseph-Limo-Resume.pdf"
              download
              className="flex items-center gap-2 text-sm text-snow hover:text-amber transition-colors duration-300"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Hamburger */}

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={` flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 hover:border-amber
                ${
                  scrolled
                    ? ` bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-2xl border border-white/15 ring-1 ring-white/5 shadow-[0_10px_35px_rgba(0,0,0,.18)] `
                    : "border border-white/15 bg-white/5 backdrop-blur-xl"
                }
              `}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Menu
                  size={15}
                  strokeWidth={1.8}
                  className={`absolute transition-all duration-300 ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />

                <X
                  size={15}
                  strokeWidth={1.8}
                  className={`absolute transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </div>
            </button>

            {/* Dropdown */}

            <div
              className={`absolute right-0 mt-5 origin-top-right transition-all duration-500 ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "pointer-events-none opacity-0 scale-95 -translate-y-4"
              }`}
            >
              <div className=" w-80 overflow-hidden rounded-2xl border border-white/15 bg-charcoal/40 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.5)] ">
                <ul className="py-3">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="border-b border-white/5 last:border-none"
                    >
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          onClick={() => {
                            setIsOpen(false);
                            setHoveredItem(null);
                          }}
                          onMouseEnter={() => setHoveredItem(link.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="block px-7 py-4 transition-all duration-500 hover:bg-white/5 hover:pl-9"
                        >
                          <h3
                            style={{
                              color:
                                hoveredItem === link.name
                                  ? "#FFBF00"
                                  : hoveredItem === null
                                    ? "#F0EDE8"
                                    : "#8C8A86",
                            }}
                            className="text-charcoal font-medium transition-all duration-500"
                          >
                            {link.name}
                          </h3>

                          <p
                            className={`overflow-hidden text-xs leading-relaxed transition-all duration-500 ${
                              hoveredItem === link.name
                                ? "mt-2 max-h-20 opacity-100 text-snow"
                                : "mt-0 max-h-0 opacity-0"
                            }`}
                          >
                            {link.description}
                          </p>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => {
                            setIsOpen(false);
                            setHoveredItem(null);
                          }}
                          onMouseEnter={() => setHoveredItem(link.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="block px-7 py-4 transition-all duration-500 hover:bg-white/5 hover:pl-9"
                        >
                          <h3
                            style={{
                              color:
                                hoveredItem === link.name
                                  ? "#FFBF00"
                                  : hoveredItem === null
                                    ? "#F0EDE8"
                                    : "#8C8A86",
                            }}
                            className="text-charcoal font-medium transition-all duration-500"
                          >
                            {link.name}
                          </h3>

                          <p
                            className={`overflow-hidden text-xs leading-relaxed transition-all duration-500 ${
                              hoveredItem === link.name
                                ? "mt-2 max-h-20 opacity-100 text-snow"
                                : "mt-0 max-h-0 opacity-0"
                            }`}
                          >
                            {link.description}
                          </p>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
