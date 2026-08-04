import { Link } from "react-router-dom";
import { EditorialAction, EditorialMeta } from "./Editorial";

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  index,
  compact = false,
  className = "",
}) {
  return (
    <article className={`group flex flex-col ${className}`}>
      <Link
        to={link}
        aria-label={`Explore ${title}`}
        className="relative block aspect-[5/4] overflow-hidden rounded-xl bg-surface"
      >
        <img
          src={image}
          alt=""
          width="1400"
          height="933"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center brightness-[0.9] saturate-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-col pt-4">
        <EditorialMeta>{String(index).padStart(2, "0")} / 04</EditorialMeta>
        <h3
          className={`mt-2 font-playfair font-bold leading-tight text-snow ${
            compact ? "text-lg" : "text-3xl"
          }`}
        >
          {title}
        </h3>

        {!compact && (
          <>
            <p className="mt-2 max-w-md font-inter text-sm leading-6 text-muted">
              {description}
            </p>
            <EditorialAction to={link} className="mt-4 self-start">
              Explore the work
            </EditorialAction>
          </>
        )}
      </div>
    </article>
  );
}