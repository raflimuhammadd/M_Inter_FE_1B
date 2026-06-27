import Badge from '../base/Badge'
import Rating from '../base/Rating'
import Icon from '../base/Icon'

export default function MovieCard({ variant = 'default', title, rating, image, meta, progress, badge, rank }) {
  return (
    <article className={`rounded-lg overflow-hidden cursor-pointer bg-[#1a1a26] group relative
                         transition-all duration-[250ms] hover:scale-[1.04] hover:-translate-y-1
                         hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                         ${variant === 'wide' ? 'flex-[0_0_280px]' : 'flex-[0_0_200px]'}`}>
      {badge && <Badge variant={badge} />}

      {rank !== undefined && (
        <span className="absolute top-2 right-2.5 text-2xl font-black text-white/10 pointer-events-none z-10">
          {rank}
        </span>
      )}

      <div className={`w-full bg-gradient-to-br from-[#1a1a26] to-[#252540]
                        overflow-hidden ${variant === 'wide' ? 'aspect-video' : 'aspect-[2/3]'}`}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35
                      flex items-center justify-center transition-all duration-[250ms]">
        <div className="w-12 h-12 bg-white/95 text-black rounded-full flex items-center justify-center
                        opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-[250ms]">
          <Icon name="play" size={20}/>
        </div>
      </div>

      <div className="p-3 pb-4">
        <h3 className="text-sm font-bold text-[#f1f0f5] truncate mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-[10px] text-[#5c5a70]">
          <Rating score={rating} />
          {meta && <span>{meta}</span>}
        </div>
        {progress !== undefined && (
          <div className="h-[3px] bg-[#2a2a3d] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7c3aed] to-[#c084fc] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </article>
  )
}