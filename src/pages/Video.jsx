import { Play } from "lucide-react";
import {
  EditorialAction,
  EditorialMeta,
  EditorialRule,
} from "../components/Editorial";
import { videoProjects } from "../data/projects";
import PortfolioLayout from "./PortfolioLayout";

function VideoProject({ project, reverse, eager }) {
  return (
    <article className="grid border-b border-white/15 py-12 lg:grid-cols-[60%_40%] lg:py-16">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${project.title} on YouTube`}
        className={`group relative block aspect-video overflow-hidden bg-surface ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <img
          src={project.cover}
          alt=""
          width="1600"
          height="900"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.9] saturate-[0.95] transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-charcoal/20 transition-colors group-hover:bg-charcoal/10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-charcoal/75 text-snow transition-colors group-hover:text-amber">
            <Play size={24} fill="currentColor" aria-hidden="true" />
          </span>
        </span>
      </a>

      <div
        className={`flex items-center py-9 lg:py-10 ${
          reverse ? "lg:order-1 lg:pr-12" : "lg:pl-12"
        }`}
      >
        <div>
          <EditorialMeta>
            {project.client} · {project.year}
          </EditorialMeta>
          <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-snow sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <EditorialRule className="my-6" />
          <p className="max-w-xl font-inter text-sm leading-7 text-muted">
            {project.summary}
          </p>
          <EditorialAction href={project.link} external className="mt-8">
            Watch on YouTube
          </EditorialAction>
        </div>
      </div>
    </article>
  );
}

export default function Video() {
  return (
    <PortfolioLayout
      title="Video & Motion"
      description="Documentary and conference films built around clear interviews, purposeful pacing and human stories."
    >
      <div className="border-t border-white/15">
        {videoProjects.map((project, index) => (
          <VideoProject
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
            eager={index === 0}
          />
        ))}
      </div>
    </PortfolioLayout>
  );
}
