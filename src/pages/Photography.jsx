import { useState, useCallback } from 'react'
import PortfolioLayout from './PortfolioLayout'

const projects = [
  {
    title: 'Tearfund - East Africa Drought hunger campaign',
    client: 'Tearfund',
    year: '2023',
    summary: 'A media campaign content series capturing community resilience and environmental impact across the Turkana region of northern Kenya during a persistent drought.',
    images: ['/Turkana 1.jpg', '/Turkana2.jpg', '/Turkana3.jpg', '/Turkana4.jpg'],
    link: 'https://pjslense.pixieset.com/tearfund/',
  },
  {
    title: 'Plastics pollution advocacy campaign',
    client: 'Tearfund',
    year: '2025',
    summary: 'What was once a quarry is now towering mountains of plastic waste among other trash. A stone throw from the INC3 #PlasticsTreaty negotiations in Nairobi lies Dandora dump site, one of the largest in Africa.',
    images: ['/Plastics1.jpg', '/Plastics2.jpg', '/Plastics3.jpg', '/Plastics4.jpg'],
    link: 'https://pjslense.pixieset.com/tearfund-plasticspollutioncampaign/',
  },
  {
    title: 'AMCHAM Kenya Annual Business Forum',
    client: 'AMCHAM Kenya',
    year: '2019',
    summary: 'Media coverage of the AMCHAM Kenya Annual Business Forum held at the UN offices in Nairobi, Kenya. Our team captured the event, speakers, and networking moments to create a comprehensive visual record of the forum.',
    images: ['/amcham2.JPG', '/amcham1.JPG', '/amcham3.JPG', '/amcham4.JPG'],
    link: 'https://pjslense.pixieset.com/events/',
  },
  {
    title: 'West Pokot Documentary',
    client: 'Farming Systems Kenya',
    year: '2023',
    summary: 'On-the-ground photography from a content gathering trip in Alale, capturing programme outcomes and participant stories.',
    images: ['/pj.png', '/pj.png', '/pj.png', '/pj.png'],
    link: 'https://pjslense.pixieset.com',
  },
  {
    title: 'Festival Coverage',
    client: 'Ubumuntu Arts Festival',
    year: '2022',
    summary: 'Event photography capturing the energy, performance and human moments of East Africa\'s leading arts festival.',
    images: ['/pj.png', '/pj.png', '/pj.png', '/pj.png'],
    link: 'https://pjslense.pixieset.com',
  },
  {
    title: 'Brand & Product Shoots',
    client: 'Various Clients',
    year: '2021–2024',
    summary: 'Commercial photography for brand campaigns, product launches and marketing collateral.',
    images: ['/pj.png', '/pj.png', '/pj.png', '/pj.png'],
    link: 'https://pjslense.pixieset.com',
  },
]

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0)
  const total = project.images.length

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  return (
    <div className="group bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-amber/30 hover:bg-white/[0.07] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">

      <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
        {project.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${project.title} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          onClick={prev}
          aria-label="Previous"
          className="group/btn absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-base/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-amber/50 md:opacity-0 md:group-hover:opacity-100"
        >
          <span className="text-snow group-hover/btn:text-amber text-xs transition-colors duration-300">←</span>
        </button>

        <button
          onClick={next}
          aria-label="Next"
          className="group/btn absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-base/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-amber/50 md:opacity-0 md:group-hover:opacity-100"
        >
          <span className="text-snow group-hover/btn:text-amber text-xs transition-colors duration-300">→</span>
        </button>

        <div className="absolute bottom-2 right-2 z-10 bg-base/60 backdrop-blur-sm rounded-full px-2.5 py-1">
          <p className="font-inter text-[10px] text-amber">
            {project.client} · {project.year}
          </p>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-3.5 h-1 bg-amber'
                  : 'w-1 h-1 bg-snow/30 hover:bg-snow/60'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent z-[5]" />
      </div>

      <div className="p-5 flex flex-col flex-grow border-t border-white/5">
        <h3 className="font-playfair text-lg text-snow font-bold mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="font-inter text-xs text-muted leading-relaxed mb-5 flex-grow">
          {project.summary}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-inter text-[10px] text-faint">
            {current + 1} / {total}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-inter text-xs font-medium text-amber border border-border rounded-full px-3.5 py-1.5 hover:border-amber/50 transition-all duration-300"
          >
            <span>View full gallery</span>
            <span>↗</span>
          </a>
        </div>
      </div>

    </div>
  )
}

export default function Photography() {
  return (
    <PortfolioLayout
      title="Photography"
      description="Documentary, portrait and commercial photography across East Africa and beyond. Each gallery opens in Pixieset."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </PortfolioLayout>
  )
}