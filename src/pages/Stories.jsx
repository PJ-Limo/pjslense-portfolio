import { Link } from 'react-router-dom'
import PortfolioLayout from './PortfolioLayout'

const projects = [
  {
    title: 'Voices from Turkana',
    client: 'Tearfund',
    year: '2023',
    summary: 'A long-form visual narrative combining photography, film and written testimony from communities living on the frontlines of climate change in northern Kenya.',
    cover: '/Turkana 1.jpg',
    slug: 'voices-from-turkana',
    tag: 'Documentary',
  },
  {
    title: 'Youth in Motion',
    client: 'Inuka Africa',
    year: '2022',
    summary: 'A multimedia story following young people through Inuka\'s empowerment programmes — portraits, interviews and moments of transformation.',
    cover: '/pj.png',
    slug: 'youth-in-motion',
    tag: 'Multimedia',
  },
  {
    title: 'The Plastic Tide',
    client: 'Tearfund',
    year: '2023',
    summary: 'An advocacy story combining data visualisation, photography and community voices to make the case for systemic change on plastic pollution.',
    cover: '/TF CCT design.jpg',
    slug: 'the-plastic-tide',
    tag: 'Advocacy',
  },
  {
    title: 'Roots & Routes',
    client: 'Personal Project',
    year: '2024',
    summary: 'A personal documentary project exploring identity, place and belonging through portraits and landscapes across Kenya.',
    cover: '/pj.png',
    slug: 'roots-and-routes',
    tag: 'Personal',
  },
  {
    title: 'Building Tomorrow',
    client: 'Farming Systems Kenya',
    year: '2023',
    summary: 'A donor impact story told through the eyes of smallholder farmers in West Pokot — combining field photography with programme narrative.',
    cover: '/pj.png',
    slug: 'building-tomorrow',
    tag: 'Impact',
  },
  {
    title: 'The Festival Diaries',
    client: 'Ubumuntu Arts Festival',
    year: '2022',
    summary: 'Behind-the-scenes documentary storytelling from East Africa\'s leading international arts gathering.',
    cover: '/pj.png',
    slug: 'festival-diaries',
    tag: 'Documentary',
  },
]

function StoryCard({ project, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>

      {/* Image */}
      <div className="w-full md:w-[45%] flex-shrink-0">
        <Link
          to={`/projects/${project.slug}`}
          className="group/img block relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        >
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />

          {/* Story tag */}
          <div className="absolute top-4 left-4 font-inter text-[10px] tracking-[0.15em] text-amber uppercase border border-amber/30 bg-base/60 backdrop-blur-sm rounded-full px-2.5 py-1">
            {project.tag}
          </div>
        </Link>
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
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-inter text-xs font-medium text-amber border border-border rounded-full px-4 py-2 hover:border-amber/50 transition-all duration-300"
        >
          <span>Read the story</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  )
}

export default function Stories() {
  return (
    <PortfolioLayout
      title="Stories"
      description="Long-form visual narratives where photography, film and design come together to tell stories that matter."
    >
      <div className="flex flex-col gap-20">
        {projects.map((project, i) => (
          <StoryCard key={i} project={project} reverse={i % 2 !== 0} />
        ))}
      </div>
    </PortfolioLayout>
  )
}