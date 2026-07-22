import PortfolioLayout from './PortfolioLayout'

const projects = [
  {
    title: 'Impact Reel 2024',
    client: 'Tearfund',
    year: '2024',
    summary: 'Annual impact documentary showcasing Tearfund\'s programme outcomes across East Africa — shot, directed and edited in-house.',
    cover: '/pj.png',
    link: 'https://youtube.com', // replace with real video URL
  },
  {
    title: 'West Pokot Documentary',
    client: 'Farming Systems Kenya',
    year: '2023',
    summary: 'Two short documentaries produced for donor reporting — covering food security and community resilience programmes in Alale.',
    cover: '/pj.png',
    link: 'https://youtube.com',
  },
  {
    title: 'Festival Coverage Film',
    client: 'Ubumuntu Arts Festival',
    year: '2022',
    summary: 'Short-form documentary capturing the spirit and community of East Africa\'s leading international arts festival.',
    cover: '/pj.png',
    link: 'https://youtube.com',
  },
  {
    title: 'Brand Campaign Film',
    client: 'Inuka Africa',
    year: '2022',
    summary: 'Promotional film for youth empowerment initiative — concept, direction, filming and post-production.',
    cover: '/pj.png',
    link: 'https://youtube.com',
  },
  {
    title: 'Social Media Reels',
    client: 'Various Clients',
    year: '2021–2024',
    summary: 'Short-form video content for Instagram and LinkedIn — motion graphics, talking heads and campaign edits.',
    cover: '/pj.png',
    link: 'https://youtube.com',
  },
  {
    title: 'Event Highlight Films',
    client: 'AMCHAM Kenya',
    year: '2023',
    summary: 'Corporate event coverage and highlight films for annual business forums and networking events.',
    cover: '/pj.png',
    link: 'https://youtube.com',
  },
]

export default function Video() {
  return (
    <PortfolioLayout>

      {/* Page header */}
      <div className="mb-16 max-w-xl">
        <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-3">
          Discipline
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-snow font-bold mb-4">
          Video & Motion
        </h1>
        <p className="font-inter text-sm text-muted leading-relaxed">
          Documentary, brand film and social content. View full videos on YouTube.
        </p>
      </div>

      {/* Alternating editorial rows */}
      <div className="flex flex-col gap-24">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Thumbnail with play button overlay */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/thumb block relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
                >
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/thumb:scale-105"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 group-hover/thumb:bg-charcoal/20 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border-2 border-snow/80 flex items-center justify-center group-hover/thumb:border-amber group-hover/thumb:scale-110 transition-all duration-300">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-snow group-hover/thumb:border-l-amber ml-1 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Text */}
              <div className="w-full md:w-[55%]">
                <p className="font-inter text-xs text-amber tracking-widest uppercase mb-3">
                  {project.client} · {project.year}
                </p>
                <h2 className="font-playfair text-3xl md:text-4xl text-snow font-bold mb-4 leading-tight">
                  {project.title}
                </h2>
                <div className="h-px w-12 bg-amber mb-5" />
                <p className="font-inter text-sm text-muted leading-relaxed mb-8">
                  {project.summary}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-inter text-sm text-snow border border-border rounded-sm px-6 py-3 hover:border-amber hover:text-amber transition-all duration-300"
                >
                  <span>Watch on YouTube</span>
                  <span>↗</span>
                </a>
              </div>

            </div>
          )
        })}
      </div>

    </PortfolioLayout>
  )
}