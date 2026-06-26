const BADGE_STYLES = {
  trending: '🔥 Trending',
  new: '✦ Baru',
}

export default function Badge({ variant }) {
  return (
    <span className="absolute top-2.5 left-2.5 bg-[#7c3aed]/85 backdrop-blur-sm
                     rounded px-1.5 py-0.5 text-[10px] font-bold text-white uppercase
                     tracking-wide z-10">
      {BADGE_STYLES[variant]}
    </span>
  )
}