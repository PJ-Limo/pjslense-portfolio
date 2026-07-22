export default function Hero() {
  const stats = [
    { value: "10+", label: "Years of experience" },
    { value: "30+", label: "Clients served" },
    { value: "4", label: "Disciplines" },
    { value: "10+", label: "Countries reached" },
  ];

  return (
    <section
      id="hero"
      className="noise relative min-h-screen bg-charcoal text-snow overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto h-[calc(100vh-6rem)] px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT */}
        <div className="w-full md:w-[52%] h-full flex flex-col justify-center translate-y-6 lg:-translate-x-10">
          <div>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold  leading-tight mb-2 mt-10">
              Joseph <br />
              <span className="italic text-amber">Limo.</span>
            </h1>

            <p className="font-inter text-sm tracking-wide text-muted mt-3 mb-10">
              Communications & Multimedia Specialist
            </p>

            <div className="h-px w-16 bg-amber -mt-4 mb-10" />

            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-snow leading-snug mb-5">
              Telling stories that{" "}
              <span className="italic">resonate and inspire.</span>
            </h2>

            <p className="font-inter text-sm text-muted leading-relaxed mb-5 max-w-lg">
              I'm Joseph Limo, a Communications and Multimedia Specialist based
              in Nairobi, Kenya, with over seven years of experience across
              graphic design, photography, videography and visual storytelling.
            </p>

            <p className="font-inter text-sm text-muted leading-relaxed mb-10 max-w-lg">
              I've had the privilege of working with organisations across East
              Africa and beyond—from grassroots NGOs to international
              institutions—helping them communicate their impact with clarity,
              creativity and dignity. My work sits at the intersection of art
              and advocacy, always in service of the story that needs to be
              told.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={
                    i !== 0 ? "md:border-l md:border-border md:pl-6" : ""
                  }
                >
                  <p className="font-playfair text-3xl font-bold text-amber">
                    {stat.value}
                  </p>

                  <p className="font-inter text-xs text-muted mt-1 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Signature */}

          <div className="mt-auto pb-8 md:pb-10 rotate-[-3deg]">
            <p className="font-handwritten text-2xl md:text-3xl leading-snug text-snow/60">
              We tell stories that resonate,
              <br />
              inspire and leave a lasting impact.
            </p>

            <svg
              className="mt-1 max-w-96"
              viewBox="0 0 360 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14 C80 10,180 18,280 12 C310 10,328 8,338 10 C344 11,347 14,348 18 C349 22,346 26,342 27"
                stroke="#FFBF00"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT */}

        <div className="w-full md:w-[40%] relative h-[88vh] self-end lg:translate-x-32">
          <img
            src="/pj.png"
            alt="Joseph Limo"
            className=" absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom scale-x-[-1] "
          />

          {/* Left fade */}

          <div className="hidden md:block absolute left-0 top-0 h-full w-28 bg-gradient-to-r to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
