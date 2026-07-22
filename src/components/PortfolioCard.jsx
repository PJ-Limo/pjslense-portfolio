import { Link } from "react-router-dom";

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  className,
}) {
  return (
    <Link
      to={link}
      className={`
        group relative h-full overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
        ${className}
      `}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className=" absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 "
      />
      {/* Bottom gradient */}
      <div className=" absolute inset-0 bg-gradient-to-t from-charcoal from-[8%] via-base/70 via-20% to-transparent to-[38%] " />

      {/* Amber Accent Line */}
      <div className=" absolute bottom-0 left-0 h-1 w-0 bg-amber transition-all duration-500 group-hover:w-full z-20 " />

      {/* Text */}
      <div className=" absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 ">
        <h3 className="font-playfair text-3xl text-snow leading-tight drop-shadow-md">
          {title}
        </h3>

        <p className="mt-2 text-sm text-snow/90 drop-shadow-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
