import PortfolioCard from "./PortfolioCard";

const portfolioItems = [
  { title: "Photography", description: "Documentary & event photography", image: "/media/turkana-1.webp", link: "/portfolio/photography", index: 1 },
  { title: "Graphic Design", description: "Editorial design & publications", image: "/media/social-accountability-guide.webp", link: "/portfolio/design", index: 2 },
  { title: "Videography", description: "Documentary films & interviews", image: "/media/cct-documentary.webp", link: "/portfolio/video", index: 3 },
  { title: "Visual Stories", description: "Campaigns & advocacy narratives", image: "/media/plastics-1.webp", link: "/portfolio/stories", index: 4 },
];

const [featured, ...rest] = portfolioItems;

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="scroll-mt-24 border-t border-white/15 bg-charcoal px-6 py-4
       sm:py-16 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[40%_60%] md:gap-x-12">
          <div>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
              Selected work
            </p>
            <h2
              id="portfolio-heading"
              className="mt-3 font-playfair text-5xl font-bold leading-none text-snow sm:text-6xl"
            >
              Portfolio
            </h2>
            <p className="mt-5  font-inter text-sm leading-7 text-muted">
              Photography, design, film and visual stories created for 
              organisations working across East Africa and beyond.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-10">
              {rest.map((item) => (
                <PortfolioCard key={item.title} {...item} compact />
              ))}
            </div>
          </div>

          <div className="md:pl-6">
            <PortfolioCard {...featured} />
          </div>
        </div>
      </div>
    </section>
  );
}