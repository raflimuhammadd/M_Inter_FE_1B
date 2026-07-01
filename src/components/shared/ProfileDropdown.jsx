import { useState, useRef, useEffect } from 'react'
import Icon from '../base/Icon'

export default function ProfileDropdown({ mobile }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      // Close dropdown if click is outside ref element
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`flex items-center gap-2 h-9 rounded-full border border-white/10 bg-white/5
                    hover:bg-white/10 transition-colors
                    ${mobile ? 'w-full px-3 justify-start' : 'px-2.5 pl-1'}`}
      >
        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4b5563] to-[#9ca3af]
                         flex items-center justify-center overflow-hidden shrink-0">
          <img src="/assets/images/profile.png" alt="" />
        </span>
        {!mobile && <span className="text-sm font-medium text-white/92">Akun</span>}
        {!mobile && <Icon name="chevron-right" size={14} className="text-white/70 rotate-90" />}
      </button>

      {isOpen && (
        <div
        role="menu" 
        className={`absolute top-full bg-[#181A1C]/95 backdrop-blur-xl border border-white/10
                         rounded-xl min-w-[200px] p-2 z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                         transition-all duration-200
                         ${mobile ? 'left-0 right-0 mt-2' : 'right-0 mt-2'}`}>
          <a href="#"
          role="menuitem" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-[#ffffff]
                                hover:text-[#3254FF] transition-colors">
            <Icon name="profile" size={18} />
            <span>Profil Saya</span>
          </a>
          <a href="#"
          role="menuitem" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-[#ffffff]
                                 hover:text-[#3254FF] transition-colors">
            <Icon name="star" size={18} />
            <span>Ubah Premium</span>
          </a>
          <a href="#"
          role="menuitem" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-[#f1f0f5]
                                hover:text-[#3254FF] transition-colors">
            <Icon name="logout" size={18} />
            <span>Keluar</span>
          </a>
        </div>
      )}
    </div>
  )
}