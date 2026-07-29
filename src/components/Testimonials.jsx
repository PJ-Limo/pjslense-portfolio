import { useState } from "react";

const testimonials = [
  {
    quote:
      "Joseph has a fantastic eye and a passion for using media to tell stories. His attention to detail and ability to weave a narrative using video or images is an artform that has been a great asset in many projects. Joseph is a talented photographer and videographer but the place he shines brightest is in using visual media to connect to people by empathically understanding the underlying story and drawing it out. Joseph would be a fantastic addition to any team that wants to connect people through visual narratives.",
    name: "Mathew Muraya",
    title: "Digital Data Analyst",
    company: "Tearfund",
  },
  {
    quote:
      "I had the pleasure of working with Joseph Limo during a content gathering trip in Alale, West Pokot, where he spearheaded the planning, filming, interviewing, and post-production of two short documentaries for donor reporting. He demonstrated exceptional professionalism, technical expertise, and a clear understanding of how to translate programme outcomes into compelling visual stories. His approach to interviewing participants was thoughtful and intentional, creating a comfortable environment that enabled authentic conversations while ensuring every story was captured with dignity, respect, and sensitivity. I recommend him without reservation for any opportunity you may have.",
    name: "Kenneth Wamuga",
    title: "Executive Director",
    company: "Farming Systems Kenya",
  },
  {
    quote:
      "Joseph is a perfect example of a multi-skilled individual! His ability to design on-brand visuals, capture quality photographs and create memorable videos is very impressive. He is innovative, meticulous and always open to ideas and suggestions. His dedication to his craft and collaborative nature made him a delight to work with.",
    name: "Wanjiru Mwoka",
    title: "Digital content and communication specialist",
    company: "",
  },
  {
    quote:
      "It makes me extremely happy to be able to recommend Joseph. His incredible grasp on concepts from brainstorming stages to finalization, creative artworks combined with his work ethic, and prompt service greatly improved our organization's quality of campaigns, interactions, and effective communication. Joseph is remarkably hardworking as he always went above and beyond when serving as a volunteer.",
    name: "Lucy Chepchumba",
    title: "Executive Director",
    company: "Good Kenyan Foundation",
  },
  {
    quote:
      "Joseph Limo has worked with our team as a consultant creative designer for over five years, contributing to a broad scope of work including the design of posters, fliers, videos, animations and reports for our organization. His work consistently demonstrates creativity and professionalism across every assignment. He possesses a strong technical command of a wide range of design tools, coupled with a research-driven approach to concept development that he skillfully adapts to our needs, reflecting his strong strategic thinking capabilities. Joseph’s collaborative approach in working with a diverse team and his clear communication of design rationale, makes him a pleasure to work with, allowing seamless incorporation of feedback, and consistently accelerating turnaround times in meeting deadlines. He further demonstrates notable composure under pressure, reprioritizing work efficiently and delivering high-quality results as scopes shift. It is a pleasure to recommend Joseph Limo, he will be an excellent addition to your team.",
    name: "Charlene Denousse",
    title: "Chief of Coaching",
    company: "Inuka Africa",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-white/15 bg-charcoal px-6 py-20 sm:py-24 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[32%_68%] lg:gap-16">
        <header>
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
            Client perspective
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-playfair text-5xl font-bold leading-none text-snow sm:text-6xl"
          >
            In their words
          </h2>
          <p className="mt-5 max-w-sm font-inter text-sm leading-7 text-muted">
            Reflections from clients and collaborators across documentary,
            design and communications work.
          </p>
        </header>

        <div className="min-w-0">
          <div
            className="scrollbar-hide flex max-w-full gap-6 overflow-x-auto border-b border-white/15"
            role="group"
            aria-label="Choose a testimonial"
          >
            {testimonials.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-pressed={isActive}
                  className={`min-h-11 flex-shrink-0 border-b-2 px-0.5 pb-3 font-inter text-xs transition-colors ${
                    isActive
                      ? "border-amber text-amber"
                      : "border-transparent text-muted hover:text-snow"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")} · {item.name.split(" ")[0]}
                </button>
              );
            })}
          </div>

          <blockquote
            className="py-10 sm:py-12"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="font-playfair text-xl leading-relaxed text-snow sm:text-2xl lg:text-[1.7rem]">
              “{testimonial.quote}”
            </p>
            <footer className="mt-9 border-t border-white/15 pt-6">
              <p className="font-playfair text-lg text-snow">
                {testimonial.name}
              </p>
              <p className="mt-1 font-inter text-xs uppercase tracking-[0.12em] text-muted">
                {testimonial.title}
                {testimonial.company ? ` · ${testimonial.company}` : ""}
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
