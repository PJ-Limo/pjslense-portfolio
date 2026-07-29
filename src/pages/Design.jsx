import { Link } from "react-router-dom";
import {
  EditorialAction,
  EditorialMeta,
  EditorialRule,
} from "../components/Editorial";
import { designProjects } from "../data/projects";
import PortfolioLayout from "./PortfolioLayout";

function FeaturedProject({ project }) {
  return (
    <article className="grid border-y border-white/15 lg:min-h-[490px] lg:grid-cols-[60%_40%]">
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="group block aspect-[16/11] overflow-hidden bg-surface lg:aspect-auto lg:min-h-0"
      >
        <img
          src={project.cover}
          alt=""
          width="1600"
          height="1132"
          decoding="async"
          className="h-full w-full object-contain brightness-[0.92] saturate-[0.95] transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </Link>

      <div className="flex items-center px-0 py-10 lg:px-10 lg:py-16">
        <div>
          <EditorialMeta>
            Featured publication · {project.client} · {project.year}
          </EditorialMeta>
          <h2 className="mt-4 font-playfair text-4xl font-bold leading-[1.03] text-snow sm:text-5xl">
            {project.title}
          </h2>
          <EditorialRule className="my-6" />
          <p className="font-inter text-sm leading-7 text-muted">
            {project.summary}
          </p>
          <EditorialAction to={`/projects/${project.slug}`} className="mt-8">
            View case study
          </EditorialAction>
        </div>
      </div>
    </article>
  );
}

function StandardProject({ project, reverse }) {
  return (
    <article className="grid border-b border-white/15 py-12 lg:grid-cols-2 lg:py-16">
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        className={`group block aspect-[16/11] overflow-hidden bg-surface ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <img
          src={project.cover}
          alt=""
          width="840"
          height="1191"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain brightness-[0.92] saturate-[0.95] transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </Link>

      <div
        className={`flex items-center py-9 lg:py-10 ${
          reverse ? "lg:order-1 lg:pr-12" : "lg:pl-12"
        }`}
      >
        <div>
          <EditorialMeta>
            {project.client} · {project.year}
          </EditorialMeta>
          <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-snow sm:text-4xl">
            {project.title}
          </h2>
          <EditorialRule className="my-6" />
          <p className="max-w-xl font-inter text-sm leading-7 text-muted">
            {project.summary}
          </p>
          <EditorialAction to={`/projects/${project.slug}`} className="mt-8">
            View case study
          </EditorialAction>
        </div>
      </div>
    </article>
  );
}

export default function Design() {
  const [featured, ...moreProjects] = designProjects;

  return (
    <PortfolioLayout
      title="Graphic Design"
      description="Editorial systems and practical publications designed to make complex programme information clearer and more useful."
    >
      <FeaturedProject project={featured} />

      {moreProjects.length > 0 && (
        <section className="mt-16" aria-labelledby="more-design-work">
          <EditorialMeta id="more-design-work">More work</EditorialMeta>
          <div className="mt-6 border-t border-white/15">
            {moreProjects.map((project, index) => (
              <StandardProject
                key={project.slug}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>
      )}
    </PortfolioLayout>
  );
}
