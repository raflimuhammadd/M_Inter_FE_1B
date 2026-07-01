import { useState } from 'react';
import Button from '../base/Button';
import Rating from '../base/Rating';
import Icon from '../base/Icon';

export default function Hero({
  title,
  description,
  rating,
  year,
  duration,
  genres,
  image,
  badgeText,
}) {
  const [volumeOn, setVolumeOn] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div
          className="absolute inset-0
                        bg-[linear-gradient(0deg,#0d0d0f_0%,rgba(13,13,15,0.6)_35%,rgba(13,13,15,0.15)_60%,rgba(13,13,15,0.4)_100%),linear-gradient(90deg,rgba(13,13,15,0.9)_0%,transparent_50%)]"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-10 w-full">
        <div
          className="inline-flex items-center gap-1.5 bg-[#0F1E93]/20 border border-[#7c3aed]/35
                        rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase
                        text-[#E7E3FCDE] mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0586FF] animate-[pulse_2s_ease_infinite]" />
          {badgeText}
        </div>

        <h1 className="text-[3.25rem] font-black tracking-[-2px] leading-[1.08] mb-4 max-w-[580px]">
          {title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-[#9b99ab] mb-4">
          <Rating score={rating} />
          <span className="w-1 h-1 rounded-full bg-[#5c5a70]" />
          <span>{year}</span>
          <span className="w-1 h-1 rounded-full bg-[#5c5a70]" />
          <span>{duration}</span>
          <span className="w-1 h-1 rounded-full bg-[#5c5a70]" />
          <span>{genres}</span>
        </div>

        <p className="text-base text-[#9b99ab] max-w-[460px] leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <Button variant="primary" size="lg" icon="play">
            Mulai
          </Button>
          <Button variant="secondary" size="lg" icon="info">
            Selengkapnya
          </Button>
          <div className="ml-auto flex items-center justify-end">
            <button
              onClick={() => setVolumeOn(!volumeOn)}
              className="w-[44px] h-[44px] rounded-full bg-white/10 border-[1.5px] border-white/20
                         flex items-center justify-center text-[#f1f0f5] hover:bg-white/[0.18] transition-colors"
            >
              <Icon name={volumeOn ? 'volume-on' : 'volume-off'} size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
