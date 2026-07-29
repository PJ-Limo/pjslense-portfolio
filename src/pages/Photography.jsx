import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { EditorialAction, EditorialMeta } from "../components/Editorial";
import { photographyProjects } from "../data/projects";
import PortfolioLayout from "./PortfolioLayout";

function ProjectCard({ project, eager = false, index }) {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;
  const currentImage = project.images[current];

  const showPrevious = () => {
    setCurrent((imageIndex) => (imageIndex - 1 + total) % total);
  };

  const showNext = () => {
    setCurrent((imageIndex) => (imageIndex + 1) % total);
  };

  return (
    <article
      className={`flex h-full flex-col border-b border-white/15 pb-12 ${
        index % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
      }`}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-surface">
        <img
          key={currentImage}
          src={currentImage}
          alt={`${project.title}, image ${current + 1} of ${total}`}
          width="1400"
          height="933"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.92] saturate-[0.95]"
        />

        <button
          type="button"
          onClick={showPrevious}
          aria-label={`Show previous image for ${project.title}`}
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/80 text-snow transition-colors hover:text-amber"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label={`Show next image for ${project.title}`}
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/80 text-snow transition-colors hover:text-amber"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>

        <div
          className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center"
          role="group"
          aria-label={`Choose an image from ${project.title}`}
        >
          {project.images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(imageIndex)}
              aria-label={`Show image ${imageIndex + 1} of ${total}`}
              aria-pressed={imageIndex === current}
              className="flex h-11 w-8 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`block h-px transition-all ${
                  imageIndex === current ? "w-5 bg-amber" : "w-2 bg-snow/65"
                }`}
              />
            </button>
          ))}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-charcoal/75 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <EditorialMeta>
          {project.client} · {project.year}
        </EditorialMeta>
        <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-snow">
          {project.title}
        </h2>
        <p className="mt-4 flex-1 font-inter text-sm leading-7 text-muted">
          {project.summary}
        </p>
        <div className="mt-7 flex flex-wrap items-end justify-between gap-5">
          <span aria-live="polite" className="font-inter text-xs text-muted">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <EditorialAction href={project.link} external>
            View full gallery
          </EditorialAction>
        </div>
      </div>
    </article>
  );
}

export default function Photography() {
  return (
    <PortfolioLayout
      title="Photography"
      description="Documentary and event photography across East Africa. Each project links to a complete external gallery."
    >
      <div className="grid gap-x-0 gap-y-12 border-t border-white/15 pt-12 md:grid-cols-2">
        {photographyProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            eager={index < 2}
            index={index}
          />
        ))}
      </div>
    </PortfolioLayout>
  );
}
