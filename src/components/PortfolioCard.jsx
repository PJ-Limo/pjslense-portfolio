import { Link } from "react-router-dom";
import { EditorialAction, EditorialMeta } from "./Editorial";

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  index,
  className = "",
}) {
  return (
    <article className={`group flex h-full flex-col py-10 ${className}`}>
      <Link
        to={link}
        aria-label={`Explore ${title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-surface"
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

      <div className="flex flex-1 flex-col pt-6">
        <EditorialMeta>{String(index).padStart(2, "0")} / 04</EditorialMeta>
        <h3 className="mt-3 font-playfair text-3xl font-bold leading-tight text-snow sm:text-4xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md font-inter text-sm leading-7 text-muted">
          {description}
        </p>
        <EditorialAction to={link} className="mt-7 self-start">
          Explore the work
        </EditorialAction>
      </div>
    </article>
  );
}
