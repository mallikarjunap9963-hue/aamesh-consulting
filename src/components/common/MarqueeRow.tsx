import type { MarqueeItem } from '../../types';

interface MarqueeRowProps {
  direction?: 'left' | 'right';
  speedSeconds?: number;
  items: MarqueeItem[];
  isLightTheme?: boolean;
}

export function MarqueeRow({ direction = 'left', speedSeconds = 28, items, isLightTheme = false }: MarqueeRowProps) {
  // Duplicate exact items list for seamless continuous looping without gaps
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-2.5">
      {/* Left Edge Fade Overlay */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r ${isLightTheme ? 'from-white to-transparent' : 'from-[#080709] to-transparent'
        } z-10`} />

      {/* Right Edge Fade Overlay */}
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l ${isLightTheme ? 'from-white to-transparent' : 'from-[#080709] to-transparent'
        } z-10`} />

      {/* Scrolling Track */}
      <div
        className={`flex w-max gap-4 sm:gap-6 will-change-transform ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          }`}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 rounded-2xl px-4.5 sm:px-5 py-3 flex items-center gap-3 transition-all duration-300 group whitespace-nowrap ${isLightTheme
                ? 'bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                : 'bg-[#121118]/90 border border-white/10 hover:border-[#fac400]/40 shadow-lg'
              }`}
          >
            {item.icon && (
              <item.icon
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 shrink-0"
                style={{ color: item.iconColor || (isLightTheme ? '#023582' : '#fac400') }}
              />
            )}
            <span className={`text-sm sm:text-base font-semibold tracking-wide ${isLightTheme ? 'text-[#000000]' : 'text-white'
              }`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
