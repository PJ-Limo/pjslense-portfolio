import { Link } from "react-router-dom";
import {
  EditorialAction,
  EditorialMeta,
  EditorialRule,
} from "../components/Editorial";
import { storyProjects } from "../data/projects";
import PortfolioLayout, { PortfolioNav } from "./PortfolioLayout";

function StoryAction({ project }) {
  return (
    <EditorialAction
      to={`/projects/${project.slug}`}
      className="mt-8"
    >
      Read the story
    </EditorialAction>
  );
}

function StoryCopy({ project, featured = false, headingId }) {
  return (
    <div>
      <EditorialMeta>
        {project.client} · {project.year}
      </EditorialMeta>
      <h2
        id={headingId}
        className={`font-playfair font-bold leading-[0.98] text-snow ${
          featured
            ? "mt-5 text-5xl sm:text-6xl lg:text-[clamp(4.8rem,6vw,6rem)]"
            : "mt-3 text-4xl sm:text-5xl lg:text-5xl"
        }`}
      >
        {project.title}
      </h2>
      <EditorialRule className={featured ? "my-7" : "my-6"} />
      <p className="max-w-[440px] font-inter text-sm leading-7 text-muted sm:text-base">
        {project.summary}
      </p>
      <StoryAction project={project} />
    </div>
  );
}

export default function Stories() {
  const [featuredStory, secondStory] = storyProjects;

  return (
    <PortfolioLayout
      title="Visual Stories"
      description="Documentary and advocacy narratives grounded in people, place and lived experience."
      variant="immersive"
    >
      <h1 className="sr-only">Visual Stories</h1>
      <section
        aria-labelledby="featured-story-title"
        className="relative border-b border-white/15"
      >
        <div className="absolute inset-x-0 top-4 z-20 px-5 sm:px-8 lg:top-5 lg:px-12">
          <PortfolioNav activeFirst overlay />
        </div>

        <article className="flex flex-col pt-[76px] lg:grid lg:min-h-[625px] lg:grid-cols-[60%_40%] lg:pt-0">
          <Link
            to={`/projects/${featuredStory.slug}`}
            aria-label={`Read ${featuredStory.title}`}
            className="group relative block min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-0"
          >
            <img
              src={featuredStory.cover}
              alt=""
              width="1400"
              height="933"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.9] saturate-[0.95] transition-transform duration-1000 group-hover:scale-[1.015]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-charcoal/55 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-charcoal"
              aria-hidden="true"
            />
          </Link>

          <div className="relative flex items-center bg-charcoal px-6 py-12 sm:px-10 lg:-ml-px lg:px-8 lg:py-24 xl:px-9">
            <div className="lg:translate-y-6">
              <StoryCopy
                project={featuredStory}
                featured
                headingId="featured-story-title"
              />
            </div>
          </div>
        </article>
      </section>

      <article className="grid border-b border-white/15 lg:min-h-[390px] lg:grid-cols-[36.7%_63.3%]">
        <div className="order-2 flex items-center border-white/15 px-6 py-12 sm:px-10 lg:order-1 lg:items-start lg:border-r lg:px-14 lg:py-10">
          <StoryCopy project={secondStory} />
        </div>

        <Link
          to={`/projects/${secondStory.slug}`}
          aria-label={`Read ${secondStory.title}`}
          className="group relative order-1 block min-h-[310px] overflow-hidden lg:order-2 lg:my-8 lg:ml-6 lg:min-h-0"
        >
          <img
            src={secondStory.cover}
            alt=""
            width="1400"
            height="933"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.9] saturate-[0.95] transition-transform duration-1000 group-hover:scale-[1.015]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-charcoal/15 to-transparent"
            aria-hidden="true"
          />
        </Link>
      </article>
    </PortfolioLayout>
  );
}
