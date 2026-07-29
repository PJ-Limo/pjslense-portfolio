import { Link } from "react-router-dom";
import { PrimaryAction } from "./Editorial";

const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "30+", label: "Clients served" },
  { value: "4", label: "Creative disciplines" },
  { value: "10+", label: "Countries reached" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-charcoal pt-[77px] text-snow md:pt-[85px]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-6 lg:px-20 md:flex-row md:items-stretch">
        <div
          id="about"
          className="relative z-10 flex w-full scroll-mt-28 flex-col justify-center py-10 md:w-[58%] md:py-16 lg:-translate-x-4"
        >
          <p className="mb-5 font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
            Nairobi · Kenya
          </p>

          <h1 className="font-playfair text-6xl font-bold leading-[0.98] sm:text-7xl lg:text-8xl">
            Joseph <br />
            <span className="italic text-amber">Limo.</span>
          </h1>

          <p className="mt-5 font-inter text-sm tracking-wide text-muted">
            Communications &amp; Multimedia Specialist
          </p>

          <div className="my-8 h-px w-16 bg-amber" aria-hidden="true" />

          <h2 className="max-w-2xl font-playfair text-2xl font-bold leading-snug text-snow sm:text-3xl">
            Visual communication for organisations working across East Africa.
          </h2>

          <p className="mt-5 max-w-xl font-inter text-sm leading-relaxed text-muted">
            I&apos;m Joseph Limo, a communications and multimedia specialist
            creating documentary photography, films and editorial design for
            organisations communicating social and environmental impact.
          </p>

          <p className="mt-4 max-w-xl font-inter text-sm leading-relaxed text-muted">
            Across more than seven years, I have worked from community settings
            to conference floors—building clear, respectful narratives around
            people, programmes and place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <PrimaryAction href="mailto:joseph@pjslense.co.ke">
              Start a conversation
            </PrimaryAction>
            <Link
              to="/portfolio/photography"
              className="inline-flex min-h-11 items-center border-b border-amber pb-1 text-sm font-semibold text-amber transition-colors hover:text-amber-light"
            >
              Explore the portfolio
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 border-y border-white/15 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col py-5 sm:pr-4">
                <dt className="font-inter text-xs leading-relaxed text-muted">
                  {stat.label}
                </dt>
                <dd className="order-first mb-1 font-playfair text-3xl font-bold text-amber">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-xl font-playfair text-xl italic leading-relaxed text-snow/70 md:mt-auto md:pt-10 lg:text-2xl">
            Thoughtful images. Clear stories. Work grounded in the people it
            represents.
          </p>
        </div>

        <div className="relative hidden w-[42%] self-end md:block md:h-[calc(100vh-5rem)]">
          <img
            src="/media/joseph-limo.webp"
            alt="Joseph Limo"
            width="900"
            height="1200"
            fetchPriority="high"
            className="absolute bottom-0 right-[-8%] h-[92%] w-auto max-w-none object-contain object-bottom"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
