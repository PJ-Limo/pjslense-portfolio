import { Link, useLocation } from 'react-router-dom'

const disciplines = [
  { slug: 'photography', label: 'Photography' },
  { slug: 'design',      label: 'Graphic Design' },
  { slug: 'video',       label: 'Video & Motion' },
  { slug: 'stories',     label: 'Stories' },
]

export default function PortfolioLayout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-charcoal text-snow flex">

      {/* ── Sidebar — desktop only ──
        Fixed left panel. Current page gets amber text and
        a white left border. Others are muted gray.
        Hidden on mobile — replaced by top tab bar.
      */}
      <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 border-r border-border px-6 py-20 sticky top-0 h-screen">

        {/* Back to home */}
        <Link
          to="/"
          className="font-inter text-xs text-faint hover:text-amber transition-colors duration-300 mb-12 flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to home</span>
        </Link>

        <p className="font-inter text-xs tracking-[0.2em] text-amber uppercase mb-6">
          Portfolio
        </p>

        <nav className="flex flex-col gap-1">
          {disciplines.map(d => {
            const isActive = pathname === `/portfolio/${d.slug}`
            return (
              <Link
                key={d.slug}
                to={`/portfolio/${d.slug}`}
                className={`relative font-inter text-sm py-2 pl-4 rounded-sm transition-all duration-300 ${
                  isActive
                    ? 'text-amber border-l-2 border-amber'
                    : 'text-muted hover:text-snow border-l-2 border-transparent'
                }`}
              >
                {d.label}
              </Link>
            )
          })}
        </nav>

      </aside>

      {/* ── Main content ── */}
      <div className="flex-grow min-w-0">

        {/* Mobile tab bar — replaces sidebar on small screens */}
        <div className="lg:hidden flex border-b border-border overflow-x-auto">
          {disciplines.map(d => {
            const isActive = pathname === `/portfolio/${d.slug}`
            return (
              <Link
                key={d.slug}
                to={`/portfolio/${d.slug}`}
                className={`flex-shrink-0 font-inter text-xs px-5 py-4 border-b-2 transition-all duration-300 ${
                  isActive
                    ? 'text-amber border-amber'
                    : 'text-muted border-transparent hover:text-snow'
                }`}
              >
                {d.label}
              </Link>
            )
          })}
        </div>

        {/* Page content */}
        <div className="px-6 md:px-12 lg:px-16 py-16">
          {children}
        </div>

      </div>
    </div>
  )
}