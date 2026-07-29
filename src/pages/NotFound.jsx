import { Link } from "react-router-dom";
import { PrimaryAction } from "../components/Editorial";
import PageMeta from "../components/PageMeta";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-charcoal px-6 pt-24 text-center text-snow"
    >
      <PageMeta
        title="Page not found"
        description="The page you requested could not be found."
        path="/404"
      />
      <div className="max-w-xl">
        <p className="font-inter text-xs uppercase tracking-[0.2em] text-amber">
          404
        </p>
        <h1 className="mt-4 font-playfair text-5xl font-bold sm:text-6xl">
          This story has moved.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          The page you requested is unavailable. Return home or continue
          exploring the portfolio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryAction to="/">
            Return home
          </PrimaryAction>
          <Link
            to="/portfolio/photography"
            className="inline-flex min-h-11 items-center border-b border-amber pb-1 text-sm font-semibold text-amber transition-colors hover:text-amber-light"
          >
            Browse the portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
