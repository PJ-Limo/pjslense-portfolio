import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PrimaryAction } from "./Editorial";

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/15 bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:py-24 md:grid-cols-[32%_68%] lg:px-20">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
          Available for work
        </p>

        <div>
          <h2 className="max-w-4xl font-playfair text-5xl font-bold leading-[1.02] text-snow sm:text-6xl lg:text-7xl">
            Let&apos;s make the next story clear, human and memorable.
          </h2>
          <p className="mt-6 max-w-xl font-inter text-sm leading-7 text-muted sm:text-base">
            Available for freelance projects and full-time opportunities across
            East Africa and beyond.
          </p>
          <PrimaryAction href="mailto:joseph@pjslense.co.ke" className="mt-8">
            Start a conversation
          </PrimaryAction>
        </div>
      </div>

      <div className="border-t border-white/15 px-6 py-8 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <img
              src="/pjslense-logo.png"
              alt="PJ's Lense"
              width="107"
              height="60"
              loading="lazy"
              decoding="async"
              className="h-12 w-auto"
            />
            <p className="mt-2 font-inter text-xs uppercase tracking-[0.12em] text-muted">
              Nairobi · Kenya
            </p>
          </div>

          <address className="flex flex-col gap-3 font-inter text-sm not-italic sm:flex-row sm:gap-7">
            <a
              href="mailto:joseph@pjslense.co.ke"
              className="inline-flex min-h-11 items-center border-b border-white/15 text-muted transition-colors hover:border-amber hover:text-amber"
            >
              joseph@pjslense.co.ke
            </a>
            <a
              href="tel:+254729067166"
              className="inline-flex min-h-11 items-center border-b border-white/15 text-muted transition-colors hover:border-amber hover:text-amber"
            >
              +254 729 067 166
            </a>
          </address>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/joseph-limo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joseph Limo on LinkedIn"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-amber"
            >
              <FaLinkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://wa.me/254729067166"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Joseph Limo on WhatsApp"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-amber"
            >
              <FaWhatsapp size={17} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-6 text-center font-inter text-[11px] uppercase tracking-[0.15em] text-muted md:text-left">
          © {new Date().getFullYear()} PJ&apos;s Lense · Crafted with intention.
        </p>
      </div>
    </footer>
  );
}
