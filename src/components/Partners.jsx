export default function Partners() {
  const logos = [
    { src: "/2FSD-Logo.png", alt: "2FSD" },
    { src: "/inuka.png", alt: "Inuka Africa" },
    { src: "/TearfundLogo.png", alt: "Tearfund" },
    { src: "/rosslynrivieralogo.png", alt: "Rosslyn Riviera" },
    { src: "/Boya logo.png", alt: "Boya" },
    { src: "/AMCHAM.png", alt: "AMCHAM" },
    { src: "/au.png", alt: "African Union" },
    { src: "/goodkenyan-logo.png", alt: "Good Kenyan" },
    { src: "/ubumulogo-1.png", alt: "Ubumuntu" },
    { src: "/kotra.avif", alt: "Kotra" },
    { src: "/FutbolMas.png", alt: "FutbolMas" },
  ];

  return (
    <section id="partners" className="w-full bg-charcoal py-20">
      {/* Header row */}
      <div className="px-6 md:px-20 flex items-center gap-6 mb-10">
        <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase flex-shrink-0">
          Clients & Partners
        </p>
        <div className="h-px w-full bg-border" />
      </div>

      {/* Scrolling logo strip */}
      <div className="relative scroll-wrapper overflow-hidden group">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base to-transparent z-10" />

        <div className="flex items-center animate-scroll-logos motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {/* Real set — announced to screen readers */}
          {logos.map((logo, index) => (
            <div
              key={`real-${index}`}
              className="flex-shrink-0 w-44 h-16 mx-6 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto max-w-[120px] object-contain grayscale opacity-45 brightness-150 contrast-110 transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop — hidden from assistive tech */}
          {logos.map((logo, index) => (
            <div
              key={`dupe-${index}`}
              aria-hidden="true"
              className="flex-shrink-0 w-32 h-16 mx-4 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt=""
                className="h-8 w-auto max-w-[120px] object-contain grayscale opacity-45 brightness-150 contrast-110 transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}