import { useState, useEffect } from "react";

const colors = [
  {
    bg: "bg-amber/20",
    dot: "bg-amber/60",
    text: "text-amber",
    border: "border-amber/30",
  },
  {
    bg: "bg-blue-500/20",
    dot: "bg-blue-500/60",
    text: "text-blue-300",
    border: "border-blue-400/30",
  },
  {
    bg: "bg-rose-500/20",
    dot: "bg-rose-500/60",
    text: "text-rose-300",
    border: "border-rose-400/30",
  },
  {
    bg: "bg-emerald-500/20",
    dot: "bg-emerald-500/60",
    text: "text-emerald-300",
    border: "border-emerald-400/30",
  },
  {
    bg: "bg-violet-500/20",
    dot: "bg-violet-500/60",
    text: "text-violet-300",
    border: "border-violet-400/30",
  },
  {
    bg: "bg-orange-500/20",
    dot: "bg-orange-500/60",
    text: "text-orange-300",
    border: "border-orange-400/30",
  },
  {
    bg: "bg-teal-500/20",
    dot: "bg-teal-500/60",
    text: "text-teal-300",
    border: "border-teal-400/30",
  },
];

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
  {
    quote:
      "Every project felt collaborative from beginning to end. His ability to understand our audience elevated the final outcome enormously.",
    name: "Grace Njeri",
    title: "Head of Communications",
    company: "World Vision",
  },
  {
    quote:
      "Joseph consistently delivers work that feels intentional, thoughtful and beautifully executed.",
    name: "Paul Kimani",
    title: "Creative Director",
    company: "Studio North",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(
      () => transition((active + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(timer);
  }, [active]);

  function transition(i) {
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 300);
  }

  const t = testimonials[active];
  const c = colors[active % colors.length];

  return (
    <section
      id="testimonials"
      className="relative bg-charcoal px-6 lg:px-20 py-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-amber/5 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* ── Top row: intro left, selectors right ──
          This keeps the header and navigation on one line
          so they don't eat vertical space above the card.
          On mobile they stack naturally via flex-col.
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          {/* Intro text */}
          <div>
            <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-3">
              Voices
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-snow font-bold mb-3">
              In their words
            </h2>
            <p className="font-inter text-sm text-muted leading-relaxed max-w-sm">
              Perspectives from clients, collaborators and partners I've had the
              privilege to work alongside.
            </p>
          </div>

          {/* Selectors — aligned to bottom of intro text on desktop */}
          <div className="flex-shrink-0">
            {/* Desktop: pill buttons */}
            <div className="hidden sm:flex items-center gap-2 flex-wrap justify-end">
              {testimonials.map((item, i) => {
                const col = colors[i % colors.length];
                const isActive = i === active;
                const cls = isActive
                  ? `flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${col.bg} ${col.border}`
                  : "flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-transparent opacity-40 hover:opacity-70 transition-all duration-300";
                return (
                  <button key={i} onClick={() => transition(i)} className={cls}>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${col.bg} ${col.text}`}
                    >
                      {initials(item.name)}
                    </span>
                    {isActive && (
                      <span className={`font-inter text-xs ${col.text} pr-1`}>
                        {item.name.split(" ")[0]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile: dot indicators */}
            <div className="flex sm:hidden items-center gap-2">
              {testimonials.map((_, i) => {
                const col = colors[i % colors.length];
                const cls =
                  i === active
                    ? `h-2 w-6 rounded-full transition-all duration-300 ${col.dot}`
                    : "h-2 w-2 rounded-full transition-all duration-300 bg-border";
                return (
                  <button
                    key={i}
                    onClick={() => transition(i)}
                    className={cls}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Full width quote card ──
          No fixed height — card grows naturally with the content.
          max-w-5xl on the parent constrains the overall width
          so very long quotes don't stretch uncomfortably wide.
          transition-opacity handles the crossfade between quotes.
        */}
        <div
          className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Decorative quotation mark */}
          <div className="absolute top-4 right-8 font-playfair text-[120px] leading-none text-amber/10 select-none">
            "
          </div>

          {/* Quote — grows as tall as needed */}
          <p className="font-playfair text-lg md:text-xl text-snow leading-relaxed relative z-10 mb-10">
            "{t.quote}"
          </p>

          {/* Attribution */}
          <div className="flex items-center gap-4 border-t border-white/5 pt-8">
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 ${c.bg} ${c.border}`}
            >
              <span className={`font-inter text-sm font-semibold ${c.text}`}>
                {initials(t.name)}
              </span>
            </div>
            <div>
              <div className="w-6 h-px bg-amber mb-2" />
              <h3 className="font-playfair text-base text-snow">
                {t.name}
              </h3>
              <p className="font-inter text-xs text-muted mt-1">
                {t.title}
                {t.company ? ` · ${t.company}` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
