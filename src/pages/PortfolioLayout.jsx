import { Link, useLocation } from "react-router-dom";
import { disciplines } from "./disciplines";
import PageMeta from "../components/PageMeta";

export function PortfolioNav({ activeFirst = false, overlay = false }) {
  const { pathname } = useLocation();
  const activeSlug = pathname.split("/").filter(Boolean).at(-1);
  const orderedDisciplines = activeFirst
    ? [
        ...disciplines.filter((discipline) => discipline.slug === activeSlug),
        ...disciplines.filter((discipline) => discipline.slug !== activeSlug),
      ]
    : disciplines;

  return (
    <nav
      aria-label="Portfolio disciplines"
      className={`max-w-full overflow-x-auto scrollbar-hide ${
        overlay ? "text-snow/70" : "text-muted"
      }`}
    >
      <ul className="flex w-max items-center gap-6 sm:gap-9">
        {orderedDisciplines.map((discipline) => {
            const isActive = pathname === `/portfolio/${discipline.slug}`;

            return (
              <li key={discipline.slug}>
                <Link
                  to={`/portfolio/${discipline.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex min-h-11 items-center whitespace-nowrap border-b-2 px-0.5 font-inter text-xs font-medium transition-colors ${
                    isActive
                      ? "border-amber text-amber"
                      : "border-transparent text-inherit hover:text-snow"
                  }`}
                >
                  {discipline.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

function PortfolioHeader({ title, description }) {
  return (
    <header className="border-b border-white/15 pb-10 sm:pb-12">
      <PortfolioNav />

      <div className="mt-9 grid gap-5 md:grid-cols-[36%_64%] md:items-start">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
          Creative discipline
        </p>
        <div>
          <h1 className="font-playfair text-5xl font-bold leading-none text-snow sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl font-inter text-sm leading-7 text-muted sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}

export default function PortfolioLayout({
  children,
  title,
  description,
  variant = "standard",
}) {
  const { pathname } = useLocation();
  const immersive = variant === "immersive";

  return (
    <main id="main-content" className="min-h-screen bg-charcoal text-snow">
      <PageMeta title={title} description={description} path={pathname} />
      {immersive ? (
        <div className="pt-[77px] md:pt-[85px]">{children}</div>
      ) : (
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 md:px-12 md:pt-32 lg:px-16">
          <PortfolioHeader title={title} description={description} />
          <div className="mt-12">{children}</div>
        </div>
      )}
    </main>
  );
}
