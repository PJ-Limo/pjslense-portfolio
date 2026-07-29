import PortfolioCard from "./PortfolioCard";

const portfolioItems = [
  {
    title: "Graphic Design",
    description: "Editorial design & publications",
    image: "/media/social-accountability-guide.webp",
    link: "/portfolio/design",
  },
  {
    title: "Photography",
    description: "Documentary & event photography",
    image: "/media/turkana-1.webp",
    link: "/portfolio/photography",
  },
  {
    title: "Videography",
    description: "Documentary films & interviews",
    image: "/media/cct-documentary.webp",
    link: "/portfolio/video",
  },
  {
    title: "Visual Stories",
    description: "Campaigns & advocacy narratives",
    image: "/media/plastics-1.webp",
    link: "/portfolio/stories",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="scroll-mt-24 border-t border-white/15 bg-charcoal px-6 py-20 sm:py-24 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="grid gap-6 pb-12 md:grid-cols-[36%_64%] md:items-start md:pb-16">
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
            Selected work
          </p>
          <div>
            <h2
              id="portfolio-heading"
              className="font-playfair text-5xl font-bold leading-none text-snow sm:text-7xl"
            >
              Portfolio
            </h2>
            <p className="mt-5 max-w-xl font-inter text-sm leading-7 text-muted sm:text-base">
              Photography, design, film and visual stories created for
              organisations working across East Africa and beyond.
            </p>
          </div>
        </header>

        <div className="grid border-t border-white/15 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              {...item}
              index={index + 1}
              className={`border-b border-white/15 ${
                index % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
