import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function EditorialMeta({ children, className = "", ...props }) {
  return (
    <p
      {...props}
      className={`font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber ${className}`}
    >
      {children}
    </p>
  );
}

export function EditorialRule({ className = "" }) {
  return (
    <span
      className={`block h-px w-16 bg-amber ${className}`}
      aria-hidden="true"
    />
  );
}

export function EditorialAction({
  children,
  to,
  href,
  external = false,
  className = "",
  ariaLabel,
}) {
  const sharedClassName = `group/action inline-flex min-h-11 items-center gap-3 border-b border-amber pb-1 font-inter text-sm font-semibold text-amber transition-colors hover:text-amber-light ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {external ? (
        <ExternalLink
          size={15}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
        />
      ) : (
        <ArrowRight
          size={17}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover/action:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} aria-label={ariaLabel} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={sharedClassName}
    >
      {content}
    </a>
  );
}

export function PrimaryAction({ children, href, to, className = "" }) {
  const sharedClassName = `inline-flex min-h-11 items-center justify-center rounded-lg bg-amber px-5 py-3 font-inter text-sm font-semibold text-charcoal transition-colors hover:bg-amber-light ${className}`;

  if (to) {
    return (
      <Link to={to} className={sharedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={sharedClassName}>
      {children}
    </a>
  );
}
