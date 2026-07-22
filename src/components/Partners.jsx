export default function Partners() {
  const logos = [
    { src: "/2FSD-Logo.png", alt: "2FSD" },
    { src: "/inuka-logo.png", alt: "Inuka Africa" },
    { src: "/Tearfund logo.png", alt: "Tearfund" },
    { src: "/rosslynrivieralogo.png", alt: "Rosslyn Riviera" },
    { src: "/Boya logo.png", alt: "Boya" },
    { src: "/AMCHAM logo.png", alt: "AMCHAM" },
    { src: "/african-union-seeklogo.png", alt: "African Union" },
    { src: "/goodkenyan-logo.png", alt: "Good Kenyan" },
    { src: "/ubumulogo-1.png", alt: "Ubumuntu" },
    { src: "/kotra-coloured-logo.avif", alt: "Kotra" },
  ];

  return (
    <section id="partners" className="w-full bg-charcoal py-20">
      {/* ── Header row ──
        Minimal single line — label left, subtle divider right.
        No card, no description. The logos are the statement.
      */}
      <div className="px-6 md:px-20 flex items-center gap-6 mb-10">
        <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase flex-shrink-0">
          Clients & Partners
        </p>
        <div className="h-px w-full bg-border" />
      </div>

      {/* ── Scrolling logo strip ── */}
      <div className="relative scroll-wrapper overflow-hidden">
        {/* Left fade mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base to-transparent z-10" />
        {/* Right fade mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base to-transparent z-10" />

        {/*
          Two passes of the logo array for seamless loop.
          grayscale — removes color so all logos read as the same tone.
          opacity-40 — mutes them to be a supporting detail, not a feature.
          brightness-200 — lifts the muted logos so they're visible on dark bg.
          hover:opacity-100 hover:grayscale-0 — on hover, full color comes back.
          This is the same treatment used by Linear, Vercel, and other
          dark-theme sites for their client logo strips.
        */}
        <div className="flex items-center animate-scroll-logos">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 max-w-[150px] object-contain] grayscale contrast-125 brightness-150 opacity-65 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
