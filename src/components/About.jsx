export default function About() {

  const stats = [
    { value: '7+',  label: 'Years of experience' },
    { value: '30+', label: 'Clients served' },
    { value: '3',   label: 'Disciplines' },
    { value: '10+', label: 'Countries reached' },
  ]

  const skills = [
    'Graphic Design', 'Photography', 'Videography',
    'Brand Identity', 'Motion Graphics', 'Visual Storytelling',
    'Content Strategy', 'Print Design', 'Social Media',
    'Adobe Illustrator', 'Photoshop', 'Lightroom',
    'Premiere Pro', 'After Effects', 'Figma',
  ]

  return (
    <section id="about" className="bg-surface px-6 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">

        {/* ── Band 1: Pull quote ──
          The emotional centrepiece. Large, editorial, impossible to miss.
          The amber left border is a classic editorial device — it signals
          "this is a quote worth reading" without needing quotation marks.
          The quote itself is in Playfair italic for maximum elegance.
        */}
        <div className="border-l-2 border-amber pl-8 mb-20 max-w-3xl">
          <p className="font-playfair italic text-2xl md:text-4xl text-snow leading-relaxed">
            "I believe every story, told with honesty, has the power to move people to action."
          </p>
          <p className="font-inter text-xs tracking-[0.2em] text-amber uppercase mt-6">
            Joseph Limo — Communications & Multimedia Specialist
          </p>
        </div>

        {/* ── Band 2: Photo + Bio ──
          Classic split layout. Photo on the left, biography on the right.
          On mobile they stack — photo above, text below.
          gap-12 on desktop, gap-8 on mobile keeps breathing room.
        */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">

          {/* Photo */}
          {/*
            aspect-[4/5] keeps the image slightly portrait — taller
            than wide, which is the most flattering ratio for a headshot.
            The amber border-bottom is a subtle brand anchor — it grounds
            the image without a heavy frame.
          */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative">
              <img
                src="/pj.png"
                alt="Joseph Limo"
                className="w-full aspect-[4/5] object-cover object-top rounded-xl"
              />
              {/* Amber accent line under photo */}
              <div className="h-0.5 w-16 bg-amber mt-4" />
            </div>
          </div>

          {/* Bio + stats */}
          <div className="w-full md:flex-grow pt-0 md:pt-4">

            <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-4">
              About
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl text-snow font-bold mb-6 leading-tight">
              Telling stories that <br className="hidden md:block" />
              <span className="italic">resonate and inspire.</span>
            </h2>

            <p className="font-inter text-sm text-muted leading-relaxed mb-5">
              I'm Joseph Limo, a Communications and Multimedia Specialist based in Nairobi, Kenya,
              with over seven years of experience across graphic design, photography, videography,
              and visual storytelling.
            </p>

            <p className="font-inter text-sm text-muted leading-relaxed mb-10">
              I've had the privilege of working with organisations across East Africa and beyond —
              from grassroots NGOs to international institutions — helping them communicate their
              impact with clarity, creativity, and dignity. My work sits at the intersection of
              art and advocacy, always in service of the story that needs to be told.
            </p>

            {/* Stats row
              Four numbers that communicate scale at a glance.
              border-l on each stat except the first creates a clean
              divider between them without needing extra elements.
              On mobile they sit in a 2x2 grid for better readability.
            */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className={`${i !== 0 ? 'md:border-l md:border-border md:pl-6' : ''}`}>
                  <p className="font-playfair text-3xl text-amber font-bold">{stat.value}</p>
                  <p className="font-inter text-xs text-muted mt-1 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Band 3: Skills ──
          Full width row of skill tags.
          Separated from the bio by a subtle border-top.
          Each tag is a small pill — consistent size, no hierarchy.
          hover:border-amber / hover:text-amber gives a subtle
          interactive feel without being distracting.
        */}
        <div className="border-t border-border pt-10">
          <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-6">
            Skills & tools
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="font-inter text-xs text-muted border border-border rounded-full px-4 py-2 hover:border-amber hover:text-amber transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}