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

export default function Design() {
  return (
    <PortfolioLayout>

      {/* Page header */}
      <div className="mb-16 max-w-xl">
        <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-3">
          Discipline
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-snow font-bold mb-4">
          Graphic Design
        </h1>
        <p className="font-inter text-sm text-muted leading-relaxed">
          Brand identity, campaign visuals and print design across NGO,
          corporate and creative sectors.
        </p>
      </div>

      {/* Featured project — full width hero */}
      <Link
        to={`/projects/${featured.slug}`}
        className="group block mb-20"
      >
        <div className="relative aspect-[16/7] overflow-hidden rounded-xl border border-border mb-6">
          <img
            src={featured.cover}
            alt={featured.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-base/80 to-transparent" />
          {/* Featured label */}
          <div className="absolute top-5 left-5 font-inter text-xs tracking-widest text-amber uppercase border border-amber/40 rounded-full px-3 py-1">
            Featured
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-inter text-xs text-amber tracking-widest uppercase mb-2">
              {featured.client} · {featured.year}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-snow font-bold group-hover:text-amber transition-colors duration-300">
              {featured.title}
            </h2>
            <p className="font-inter text-sm text-muted mt-3 max-w-lg leading-relaxed">
              {featured.summary}
            </p>
          </div>
          <div className="flex-shrink-0 font-inter text-sm text-muted group-hover:text-amber transition-colors duration-300 flex items-center gap-2">
            <span>View case study</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-grow bg-border" />
        <p className="font-inter text-xs text-faint tracking-widest uppercase">More work</p>
        <div className="h-px flex-grow bg-border" />
      </div>

      {/* 5-card grid — 3 top, 2 bottom centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Link
            key={i}
            to={`/projects/${project.slug}`}
            className="group block border border-border rounded-xl overflow-hidden hover:border-amber/50 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="font-inter text-xs text-amber tracking-widest uppercase mb-1">
                {project.client} · {project.year}
              </p>
              <h3 className="font-playfair text-lg text-snow font-bold mb-2 group-hover:text-amber transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-inter text-xs text-muted leading-relaxed mb-4">
                {project.summary}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted group-hover:text-amber transition-colors duration-300">
                <span>View case study</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </PortfolioLayout>
  )
}