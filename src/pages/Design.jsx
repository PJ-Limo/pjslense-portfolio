import { Link } from 'react-router-dom'
import PortfolioLayout from './PortfolioLayout'

const featured = {
  title: 'Plastics Campaign',
  client: 'Tearfund',
  year: '2023',
  summary: 'A full campaign visual identity for Tearfund\'s plastics advocacy work — spanning print, digital and social media across multiple markets.',
  cover: '/TF CCT design.jpg',
  slug: 'tearfund-plastics-campaign',
}

const projects = [
  {
    title: 'Brand Identity',
    client: 'Inuka Africa',
    year: '2022',
    summary: 'End-to-end brand identity design including logo, colour system, typography and brand guidelines.',
    cover: '/pj.png',
    slug: 'inuka-brand-identity',
  },
  {
    title: 'Event Collateral',
    client: 'AMCHAM Kenya',
    year: '2023',
    summary: 'Print and digital design for annual business forum — programmes, banners, social assets and signage.',
    cover: '/pj.png',
    slug: 'amcham-event-collateral',
  },
  {
    title: 'Brand Refresh',
    client: 'Rosslyn Riviera',
    year: '2021',
    summary: 'Visual identity refresh for a leading Nairobi hospitality venue — logo evolution, menus and marketing materials.',
    cover: '/pj.png',
    slug: 'rosslyn-brand-refresh',
  },
  {
    title: 'Campaign Design',
    client: 'Good Kenyan Foundation',
    year: '2022',
    summary: 'Social media campaign visuals and print materials for youth empowerment initiatives.',
    cover: '/pj.png',
    slug: 'goodkenyan-campaign',
  },
  {
    title: 'Communications Kit',
    client: 'African Union',
    year: '2023',
    summary: 'Design of communications materials including reports, presentations and digital assets.',
    cover: '/pj.png',
    slug: 'african-union-comms',
  },
]

function FeaturedCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block mb-16"
    >
      {/* Hero image */}
      <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] mb-6">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent" />

        {/* Featured badge */}
        <div className="absolute top-5 left-5 font-inter text-[10px] tracking-[0.15em] text-amber uppercase border border-amber/40 bg-base/60 backdrop-blur-sm rounded-full px-3 py-1">
          Featured
        </div>

        {/* Title overlay on image */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-inter text-xs text-amber tracking-widest uppercase mb-2">
            {project.client} · {project.year}
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-snow font-bold leading-tight group-hover:text-amber transition-colors duration-300">
            {project.title}
          </h2>
        </div>
      </div>

      {/* Summary + CTA below image */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-1">
        <p className="font-inter text-sm text-muted leading-relaxed max-w-xl">
          {project.summary}
        </p>
        <div className="flex-shrink-0 inline-flex items-center gap-2 font-inter text-xs font-medium text-amber border border-border rounded-full px-4 py-2 group-hover:border-amber/50 transition-all duration-300 whitespace-nowrap">
          <span>View case study</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  )
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-amber/30 hover:bg-white/[0.07] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 border-t border-white/5">
        <p className="font-inter text-[10px] text-amber tracking-widest uppercase mb-1.5">
          {project.client} · {project.year}
        </p>
        <h3 className="font-playfair text-lg text-snow font-bold mb-2 leading-snug group-hover:text-amber transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-inter text-xs text-muted leading-relaxed mb-5">
          {project.summary}
        </p>
        <div className="inline-flex items-center gap-1.5 font-inter text-xs font-medium text-amber border border-border rounded-full px-3.5 py-1.5 group-hover:border-amber/50 transition-all duration-300">
          <span>View case study</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  )
}

export default function Design() {
  return (
    <PortfolioLayout
      title="Graphic Design"
      description="Brand identity, campaign visuals and print design across NGO, corporate and creative sectors."
    >
      <FeaturedCard project={featured} />

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-grow bg-border" />
        <p className="font-inter text-[10px] text-faint tracking-[0.2em] uppercase">More work</p>
        <div className="h-px flex-grow bg-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </PortfolioLayout>
  )
}