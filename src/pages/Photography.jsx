import PortfolioLayout from './PortfolioLayout'

const projects = [
  {
    title: 'Turkana Field Series',
    client: 'Tearfund',
    year: '2023',
    summary: 'A documentary photography series capturing community resilience and environmental impact across the Turkana region of northern Kenya.',
    cover: '/Turkana 1.jpg',
    link: 'https://pixieset.com', // replace with real gallery URL
  },
  {
    title: 'Community Portraits',
    client: 'Inuka Africa',
    year: '2022',
    summary: 'Intimate portrait work documenting the faces and stories behind youth empowerment programmes across Nairobi.',
    cover: '/pj.png',
    link: 'https://pixieset.com',
  },
  {
    title: 'Conservation in Focus',
    client: 'African Wildlife Foundation',
    year: '2024',
    summary: 'Field photography documenting conservation efforts and wildlife across East African ecosystems.',
    cover: '/pj.png',
    link: 'https://pixieset.com',
  },
  {
    title: 'West Pokot Documentary',
    client: 'Farming Systems Kenya',
    year: '2023',
    summary: 'On-the-ground photography from a content gathering trip in Alale, capturing programme outcomes and participant stories.',
    cover: '/pj.png',
    link: 'https://pixieset.com',
  },
  {
    title: 'Festival Coverage',
    client: 'Ubumuntu Arts Festival',
    year: '2022',
    summary: 'Event photography capturing the energy, performance and human moments of East Africa\'s leading arts festival.',
    cover: '/pj.png',
    link: 'https://pixieset.com',
  },
  {
    title: 'Brand & Product Shoots',
    client: 'Various Clients',
    year: '2021–2024',
    summary: 'Commercial photography for brand campaigns, product launches and marketing collateral across multiple industries.',
    cover: '/pj.png',
    link: 'https://pixieset.com',
  },
]

export default function Photography() {
  return (
    <PortfolioLayout>

      {/* Page header */}
      <div className="mb-16 max-w-xl">
        <p className="font-inter text-xs font-medium tracking-[0.2em] text-amber uppercase mb-3">
          Discipline
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-snow font-bold mb-4">
          Photography
        </h1>
        <p className="font-inter text-sm text-muted leading-relaxed">
          Documentary, portrait and commercial photography across East Africa
          and beyond. View full galleries on Pixieset.
        </p>
      </div>

      {/* Alternating editorial rows */}
      <div className="flex flex-col gap-24">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-inter text-sm text-snow border border-border rounded-sm px-6 py-3 hover:border-amber hover:text-amber transition-all duration-300"
                >
                  <span>View gallery</span>
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