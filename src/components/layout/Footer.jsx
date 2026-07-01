import { useState } from 'react'
import Icon from '../base/Icon'

const GENRES = ['Aksi','Drama','Komedi','Sains & Alam','Anak-anak','Fantasi Ilmiah & Fantasi','Petualangan','Thriller','Anime','Kejahatan','Perang','Britania','KDrama','Romantis']
const BANTUAN = ['FAQ','Kontak Kami','Privasi','Syarat & Ketentuan']

export default function Footer() {
  // Toggle states for mobile accordion functionality
  const [genreOpen, setGenreOpen] = useState(false)
  const [bantuanOpen, setBantuanOpen] = useState(false)

  return (
    <footer className="bg-[#16161f] border-t border-[#2a2a3d] pt-14 pb-8 mt-10">
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-[240px_1fr_1fr] gap-16 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 font-black text-[1.125rem] tracking-tight text-[#f1f0f5]">
              <span className=" h-7 flex shrink-0 overflow-hidden">
                <img src="/assets/images/chill-vect.png" alt="" className="h-7 object-contain" />
              </span>
              <span className="font-['Londrina_Solid',cursive] text-[3rem]">CHILL</span>
            </a>
            <p className="text-sm text-[#5c5a70] mt-3 leading-relaxed">@2026 Chill All Rights Reserved</p>
          </div>

          {/* Genre */}
          <div>
            <h3 className="text-sm font-bold mb-3">Genre</h3>
            <div className="grid grid-cols-4 gap-3">
              {GENRES.map(g => (
                <a key={g} href="#" className="text-sm text-[#9b99ab] hover:text-[#f1f0f5] transition-colors">{g}</a>
              ))}
            </div>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-sm font-bold mb-3">Bantuan</h3>
            <div className="flex flex-col gap-3">
              {BANTUAN.map(b => (
                <a key={b} href="#" className="text-sm text-[#9b99ab] hover:text-[#f1f0f5] transition-colors">{b}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden flex flex-col gap-0">
          <div>
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <img src="/assets/images/chill-vect.png" alt="" className="w-10 h-8 object-contain" />
              <span className="font-['Londrina_Solid',cursive] text-[1.75rem]">CHILL</span>
            </a>
            <p className="text-sm text-[#5c5a70] mb-6">@2026 Chill All Rights Reserved</p>
          </div>

          {/* Genre accordion */}
          <button
            onClick={() => setGenreOpen(!genreOpen)}
            aria-expanded={genreOpen}
            aria-controls='genre-menu'
            className="flex items-center justify-between w-full py-4 border-b border-[#2a2a3d]
                       text-base font-semibold text-[#f1f0f5] bg-transparent"
          >
            Genre
            <Icon name="chevron-right" size={20}
                  className={`text-[#9b99ab] transition-transform duration-300
                              ${genreOpen ? 'rotate-90' : ''}`} />
          </button>
          {genreOpen && (
            <div id="genre-menu" className="flex flex-col gap-3 py-4">
              {GENRES.map(g => (
                <a key={g} href="#" className="text-sm text-[#9b99ab]">{g}</a>
              ))}
            </div>
          )}

          {/* Bantuan accordion */}
          <button
            onClick={() => setBantuanOpen(!bantuanOpen)}
            aria-expanded={bantuanOpen}
            aria-controls='bantuan-menu'
            className="flex items-center justify-between w-full py-4 border-b border-[#2a2a3d]
                       text-base font-semibold text-[#f1f0f5] bg-transparent"
          >
            Bantuan
            <Icon name="chevron-right" size={20}
                  className={`text-[#9b99ab] transition-transform duration-300
                              ${bantuanOpen ? 'rotate-90' : ''}`} />
          </button>
          {bantuanOpen && (
            <div id="genre-menu" className="flex flex-col gap-3 py-4">
              {BANTUAN.map(b => (
                <a key={b} href="#" className="text-sm text-[#9b99ab]">{b}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}