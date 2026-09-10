import { servicesList } from '../../../data/servicesData';
import type { ServiceItem } from '../../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionLightProps {
  onOpenModal: () => void;
  onSelectServiceModal?: (service: ServiceItem) => void;
  onNavigateToServices?: (serviceId: string) => void;
}

export function ServicesSectionLight({ onOpenModal, onNavigateToServices }: ServicesSectionLightProps) {
  return (
    <section id="services-section" className="relative py-8 md:py-12 bg-white w-full border-t border-slate-200/80">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="/bg-2.png"
          alt="What We Do Background"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-[#012854] leading-[1.12] mb-6 font-sans">
            IT Services &amp; Solutions <br />
            <span className="text-gradient-primary-light font-bold">Built Around Your Business</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#3D3E42] font-normal leading-relaxed">
            Whether you're modernizing your enterprise environment, developing a new application, adopting AI, or finding the right talent, our technology capabilities help you move from strategy to execution.
          </p>
        </div>

        {/* 4 STACKED CARDS CONTAINER */}
        <div className="relative space-y-8 md:space-y-12 pb-0 max-w-5xl mx-auto">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className={`stacked-card bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-[0_20px_50px_-10px_rgba(1,40,84,0.14)] hover:shadow-[0_30px_70px_-15px_rgba(1,40,84,0.22)] ${idx === servicesList.length - 1 ? 'mb-0' : 'mb-12 sm:mb-16'
                }`}
              style={{ top: '6rem' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* LEFT COLUMN: TEXT CONTENT */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#B77805] border border-amber-500/30 px-3.5 py-1 rounded-full uppercase font-mono">
                        SERVICE {service.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#012854] tracking-tight leading-snug mb-3 font-sans">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#3D3E42] font-normal leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* 4 Bullet Points (Clean text bullets without card boxes) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                      {service.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#B77805] shrink-0" />
                          <span className="text-xs sm:text-sm text-[#012854] font-semibold leading-snug">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Below Button */}
                  <div>
                    <button
                      onClick={() => {
                        if (onNavigateToServices) {
                          onNavigateToServices(service.id);
                        } else {
                          onOpenModal();
                        }
                      }}
                      className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#012854] via-[#012F62] to-[#B77805] hover:from-[#012F62] hover:via-[#B77805] hover:to-[#CE9116] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer group/btn"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: CLEAN IMAGE CARD (NO TEXT OVERLAY) */}
                <div className="lg:col-span-5 h-[280px] sm:h-[320px] md:h-[360px] select-none group/imgCard">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 group-hover/imgCard:border-[#B77805]/40 shadow-[0_25px_60px_-10px_rgba(1,40,84,0.28)] group-hover/imgCard:shadow-[0_30px_70px_-10px_rgba(183,120,5,0.45)] transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/imgCard:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
