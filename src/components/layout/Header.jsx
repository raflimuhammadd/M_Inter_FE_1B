import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from '../base/Icon'
import ProfileDropdown from '../shared/ProfileDropdown'

const NAV_ITEMS = [
  { to: '/home',      icon: 'home',   label: 'Beranda' },
  { to: '/series',    icon: 'series', label: 'Series' },
  { to: '/film',      icon: 'film',   label: 'Film' },
  { to: '/daftar-saya', label: 'Daftar Saya' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center px-10
                  transition-all duration-300
                  ${isScrolled
                    ? 'bg-[#0d0d0f]/92 backdrop-blur-2xl border-b border-white/[0.08]'
                    : 'bg-gradient-to-b from-[#0d0d0f]/90 via-[#0d0d0f]/28 to-transparent'
                  }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6 min-w-0 flex-1">
          <Link to="/home" className="flex items-center gap-[-4px] font-black text-[1.125rem] tracking-tight text-[#f1f0f5]">
            <span className="w-20 h-7 flex shrink-0 overflow-hidden">
              <img src="/assets/images/chill-vect.png" alt="" className="w-20 h-7 object-contain ml-9" />
            </span>
            <span className="font-['Londrina_Solid',cursive] text-[1.75rem]">CHILL</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-sm font-medium px-3 py-[7px] rounded-full
                   transition-colors whitespace-nowrap
                   ${isActive
                     ? 'text-white font-bold'
                     : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                   }`
                }
              >
                {item.icon && <Icon name={item.icon} size={14} />}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right: Search + Profile + Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <button className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.02]
                             flex items-center justify-center text-white
                             hover:bg-white/[0.08] hover:border-white/[0.14] transition-colors">
            <Icon name="search" size={18} />
          </button>

          <div className="hidden lg:block">
            <ProfileDropdown />
          </div>

          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-expanded={isMobileNavOpen}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2"
          >
            <span className={`block h-[2px] bg-[#f1f0f5] rounded transition-all duration-300 origin-center
                             ${isMobileNavOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] bg-[#f1f0f5] rounded transition-all duration-300
                             ${isMobileNavOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] bg-[#f1f0f5] rounded transition-all duration-300 origin-center
                             ${isMobileNavOpen ? 'translate-y-[-7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMobileNavOpen && (
        <nav className="lg:hidden absolute top-[calc(4rem+6px)] left-4 right-4
                        bg-[#101012]/96 backdrop-blur-2xl border border-white/[0.08]
                        rounded-[18px] z-[99] flex flex-col p-3
                        shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-[0.95rem] font-medium px-3.5 py-3 rounded-xl
                 transition-colors
                 ${isActive
                   ? 'text-white font-bold'
                   : 'text-white/[0.76] hover:text-white hover:bg-white/[0.06]'
                 }`
              }
            >
              {item.icon && <Icon name={item.icon} size={18} />}
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2.5 pt-3 mt-2 border-t border-white/[0.08]">
            <ProfileDropdown mobile />
          </div>
        </nav>
      )}
    </header>
  )
}