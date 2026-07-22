import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Graphic Design",
      description: "Brand identity & publications",
      image: "/public/SATG.png",
      link: "/design",
      className: "col-span-1 row-span-2",
    },

    {
      title: "Photography",
      description: "Portraits & documentary",
      image: "/Turkana 1.jpg",
      link: "/photography",
      className: "col-span-1 row-span-1",
    },

    {
      title: "Videography",
      description: "Films & storytelling",
      image: "/videoThumbnail.png",
      link: "/videography",
      className: "col-span-1 row-span-1",
    },

    {
      title: "Communications",
      description: "Campaigns & advocacy",
      image: "/TF CCT design.jpg",
      link: "/communications",
      className: "col-span-1 row-span-2",
    },
  ];

  return (
    <section id="portfolio" className="bg-charcoal pt-15 px-6 pb-16">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className=" grid grid-cols-[1fr_1.1fr_1.1fr_1fr] grid-rows-[290px_250px] gap-8 items-stretch ">
          {/* Left Tall */}
          <PortfolioCard {...portfolioItems[0]} />

          {/* Top Middle */}
          <PortfolioCard {...portfolioItems[1]} />

          {/* Top Right */}
          <PortfolioCard {...portfolioItems[2]} />

          {/* Right Tall */}
          <PortfolioCard {...portfolioItems[3]} />

          {/* Intro Block */}
          <div className=" col-start-2 col-span-2 row-start-2 flex justify-center items-start mt-8 ">
            <div className="relative w-full max-w-2xl text-center">
              {/* Decorative Corner */}
              <div className=" absolute left-20 -top-4 w-36 h-36 border-l-8 border-t-8 border-amber " />

              <h2 className="font-playfair text-8xl font-bold leading-none text-snow">
                Portfolio
              </h2>

              <p className=" text-lg leading-8 text-muted max-w-md mx-auto">
                Selected works. Choose a discipline and explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
