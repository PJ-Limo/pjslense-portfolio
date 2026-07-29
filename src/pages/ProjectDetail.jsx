import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  EditorialAction,
  EditorialMeta,
  PrimaryAction,
} from "../components/Editorial";
import PageMeta from "../components/PageMeta";
import { projectDetails } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return <NotFound />;
  }

  const portfolioPath =
    project.discipline === "Graphic Design"
      ? "/portfolio/design"
      : "/portfolio/stories";
  const remainingImages = project.images.slice(1);

  return (
    <main id="main-content" className="min-h-screen bg-charcoal text-snow">
      <PageMeta
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        image={project.cover}
      />

      <article className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 md:px-12 lg:px-16">
        <Link
          to={portfolioPath}
          className="inline-flex min-h-11 items-center gap-2 border-b border-transparent text-sm text-muted transition-colors hover:border-amber hover:text-amber"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to {project.discipline}
        </Link>

        <header className="mt-8 max-w-4xl">
          <EditorialMeta>
            {project.discipline} · {project.client} · {project.year}
          </EditorialMeta>
          <h1 className="mt-4 font-playfair text-5xl font-bold leading-[1.05] text-snow sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl font-inter text-base leading-relaxed text-muted sm:text-lg">
            {project.summary}
          </p>
        </header>

        <figure className="mt-12 overflow-hidden bg-surface">
          <img
            src={project.cover}
            alt={`${project.title} featured work`}
            width="1600"
            height="1067"
            fetchPriority="high"
            className="max-h-[760px] w-full object-cover object-top"
          />
        </figure>

        <div className="mt-14 grid gap-10 border-y border-border py-10 md:grid-cols-[1fr_2fr]">
          <section aria-labelledby="services-heading">
            <h2
              id="services-heading"
              className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber"
            >
              Contribution
            </h2>
            <ul className="mt-4 space-y-2">
              {project.services.map((service) => (
                <li key={service} className="text-sm text-snow">
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <div className="grid gap-8 sm:grid-cols-2">
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="font-playfair text-2xl font-bold text-snow"
              >
                Overview
              </h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-muted">
                {project.overview}
              </p>
            </section>
            <section aria-labelledby="approach-heading">
              <h2
                id="approach-heading"
                className="font-playfair text-2xl font-bold text-snow"
              >
                Approach
              </h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-muted">
                {project.contribution}
              </p>
            </section>
          </div>
        </div>

        {remainingImages.length > 0 && (
          <section className="mt-14" aria-labelledby="gallery-heading">
            <h2
              id="gallery-heading"
              className="font-playfair text-3xl font-bold text-snow"
            >
              Selected frames
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {remainingImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title}, selected frame ${index + 2}`}
                  width="1400"
                  height="933"
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${
                    remainingImages.length % 2 !== 0 &&
                    index === remainingImages.length - 1
                      ? "aspect-[16/8] sm:col-span-2"
                      : "aspect-[4/3]"
                  }`}
                />
              ))}
            </div>
          </section>
        )}

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-8 border-y border-white/15 py-10">
          <div>
            <p className="font-playfair text-2xl text-snow">
              Interested in work like this?
            </p>
            <p className="mt-1 text-sm text-muted">
              Let&apos;s talk about your next story.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.externalLink && (
              <EditorialAction href={project.externalLink} external>
                {project.externalLabel}
              </EditorialAction>
            )}
            <PrimaryAction href="mailto:joseph@pjslense.co.ke">
              Start a conversation
            </PrimaryAction>
          </div>
        </footer>
      </article>
    </main>
  );
}
