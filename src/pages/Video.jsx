import PortfolioLayout from './PortfolioLayout'

const projects = [
  {
    title: 'Church and Community transformation (CCT) Documentary',
    client: 'Tearfund',
    year: '2025',
    summary: 'Two short documentaries set in Alale, West Pokot, this documentary seeks to capture the impact on the local community as they implement CCMP practices. The project was a collaboration between Tearfund and Farming Systems Kenya, with the aim of showcasing the positive changes brought about by the project on the request of the doner.',
    cover: '/videoThumbnail.png',
    link: 'https://youtu.be/03ux3CzOrPA',
  },
  {
    title: 'Africa Evangelical Alliance (AEA) conference',
    client: 'ACT forum',
    year: '2025',
    summary: 'Held in Nairobi, Kenya, the AEA conference brought together church leaders and representatives from across Africa to track the progress of initiatives set in motion by the organisation. Our team was tasked with capturing the event, and telling the story from the lens of the ACT forum a member of the AEA. We sough high impact interviews and asked hard hitting questions to dig deeper into the heart of the story. ',
    cover: '/AbundantAfrica.png',
    link: 'https://youtu.be/u821fu5OyaI',
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

function VideoCard({ project, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>

      {/* Thumbnail */}
      <div className="w-full md:w-[45%] flex-shrink-0">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/thumb block relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        >
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/thumb:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-base/30 group-hover/thumb:bg-base/10 transition-all duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-snow/60 backdrop-blur-sm bg-base/30 flex items-center justify-center group-hover/thumb:border-amber group-hover/thumb:scale-110 transition-all duration-300">
              <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-snow group-hover/thumb:border-l-amber ml-1 transition-all duration-300" />
            </div>
          </div>

          {/* Client badge */}
          <div className="absolute bottom-3 right-3 bg-base/60 backdrop-blur-sm rounded-full px-2.5 py-1">
            <p className="font-inter text-[10px] text-amber">{project.client} · {project.year}</p>
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
          className="inline-flex items-center gap-2 font-inter text-xs font-medium text-amber border border-border rounded-full px-4 py-2 hover:border-amber/50 transition-all duration-300"
        >
          <span>Watch on YouTube</span>
          <span>↗</span>
        </a>
      </div>

    </div>
  )
}

export default function Video() {
  return (
    <PortfolioLayout
      title="Video & Motion"
      description="Documentary, brand film and social content. Full videos on YouTube."
    >
      <div className="flex flex-col gap-20">
        {projects.map((project, i) => (
          <VideoCard key={i} project={project} reverse={i % 2 !== 0} />
        ))}
      </div>
    </PortfolioLayout>
  )
}