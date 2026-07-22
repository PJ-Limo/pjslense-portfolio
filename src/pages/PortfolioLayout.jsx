import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { disciplines } from '../pages/disciplines'

function StickyHeader({ title, description }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`sticky top-[72px] z-40 -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16 py-5 transition-all duration-500 ${
        scrolled
          ? 'bg-base/70 backdrop-blur-2xl border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-1.5 mb-5">
        <div className="flex items-center gap-1.5 bg-base/60 backdrop-blur-xl border border-white/10 rounded-full px-1.5 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
          {disciplines.map(d => {
            const isActive = pathname === `/portfolio/${d.slug}`
            return (
              <Link
                key={d.slug}
                to={`/portfolio/${d.slug}`}
                className={`relative font-inter text-[11px] font-medium px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-amber shadow-[0_0_10px_rgba(255,191,0,0.25)]'
                    : 'text-muted hover:text-snow hover:bg-white/5'
                }`}
                style={isActive ? { color: '#2C2C2A' } : {}}
              >
                {d.label}
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_5px_rgba(255,191,0,0.9)]" />
                )}
              </Link>
            )
          })}
        </div>
      </div>

      <h1 className="font-playfair text-4xl md:text-5xl text-snow font-bold mb-2">
        {title}
      </h1>
      <p className="font-inter text-sm text-muted leading-relaxed max-w-lg">
        {description}
      </p>
    </div>
  )
}

export default function PortfolioLayout({ children, title, description }) {
  return (
    <div className="min-h-screen bg-base text-snow">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-20">
        <StickyHeader title={title} description={description} />
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  )
}