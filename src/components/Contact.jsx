import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="bg-surface border-t border-amber/20">

      {/* ── Main CTA band ── */}
      <div className="px-6 lg:px-20 py-20 max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-4xl text-snow font-handwritten leading-tight mb-6 max-w-3xl mx-auto">
          Stories told with purpose. <br className="hidden md:block" />
          <span className="italic text-amber ">Designed to connect</span>
        </h2>

        <p className="font-inter text-sm text-muted leading-relaxed max-w-md mx-auto mb-10">
          Available for freelance projects and full-time opportunities across
          East Africa and beyond. Let's create something that resonates.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:joseph@pjslense.co.ke"
          className="inline-block font-inter text-sm font-medium px-6 py-3 rounded-2xl ring-1 ring-white/10 bg-amber hover:bg-amber-light transition-all duration-300"
          style={{ color: '#1C1B1A' }}
        >
          Let's work together
        </a>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border px-6 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: logo + tagline */}
          <div className="text-center md:text-left">
            <img
              src="/pjslense logo.png"
              alt="PJ's Lense"
              className={`h-14 w-auto transition-all duration-500 hover:opacity-80 
              }`}
            />
            <p className="font-inter text-xs text-faint mt-1 tracking-wide">
              Nairobi · Kenya
            </p>
          </div>

          {/* Center: contact details */}
          <div className="flex flex-col sm:flex-row items-center gap-4 font-inter text-xs lg:-translate-x-10">
            <a
              href="mailto:joseph@pjslense.co.ke"
              className="text-muted hover:text-amber transition-colors duration-300"
            >
              joseph@pjslense.co.ke
            </a>
            <div className="h-5 w-px bg-amber" />
            <a
              href="tel:+254729067166"
              className="text-muted hover:text-amber transition-colors duration-300"
            >
              +254 729 067 166
            </a>
          </div>

          {/* Right: social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/joseph-limo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-amber transition-colors duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://wa.me/254729067166"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted hover:text-amber transition-colors duration-300"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-border text-center">
          <p className="font-inter text-xs tracking-[0.15em] uppercase text-faint">
            © {new Date().getFullYear()} PJ's Lense · Crafted with intention.
          </p>
        </div>

      </div>
    </footer>
  )
}