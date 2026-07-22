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
  },
  {
    title: 'Youth in Motion',
    client: 'Inuka Africa',
    year: '2022',
    summary: 'A multimedia story following young people through Inuka\'s empowerment programmes — portraits, interviews and moments of transformation.',
    cover: '/pj.png',
    slug: 'youth-in-motion',
  },
  {
    title: 'The Plastic Tide',
    client: 'Tearfund',
    year: '2023',
    summary: 'An advocacy story combining data visualisation, photography and community voices to make the case for systemic change on plastic pollution.',
    cover: '/TF CCT design.jpg',
    slug: 'the-plastic-tide',
  },
  {
    title: 'Roots & Routes',
    client: 'Personal Project',
    year: '2024',
    summary: 'A personal documentary project exploring identity, place and belonging through portraits and landscapes across Kenya.',
    cover: '/pj.png',
    slug: 'roots-and-routes',
  },
  {
    title: 'Building Tomorrow',
    client: 'Farming Systems Kenya',
    year: '2023',
    summary: 'A donor impact story told through the eyes of smallholder farmers in West Pokot — combining field photography with programme narrative.',
    cover: '/pj.png',
    slug: 'building-tomorrow',
  },
  {
    title: 'The Festival Diaries',
    client: 'Ubumuntu Arts Festival',
    year: '2022',
    summary: 'Behind-the-scenes documentary storytelling from East Africa\'s leading international arts gathering — artists, audiences and the stories between performances.',
    cover: '/pj.png',
    slug: 'festival-diaries',
  },
]

export default function Stories() {
  return (
    <PortfolioLayout>

      {/* Page header */}
      <div className="mb-16 max-w-xl">
        <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-3">
          Discipline
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-snow font-bold mb-4">
          Stories
        </h1>
        <p className="font-inter text-sm text-muted leading-relaxed">
          Long-form visual narratives where photography, film and design
          come together to tell stories that matter.
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
              {/* Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
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
                  className="inline-flex items-center gap-2 font-inter text-sm text-snow border border-border rounded-sm px-6 py-3 hover:border-amber hover:text-amber transition-all duration-300"
                >
                  <span>Read the story</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>

            </div>
          )
        })}
      </div>

    </PortfolioLayout>
  )
}