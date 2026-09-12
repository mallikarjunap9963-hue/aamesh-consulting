import { servicesList } from '../../data/servicesData';
import type { ServiceItem } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenModal: () => void;
  onSelectServiceModal?: (service: ServiceItem) => void;
  onNavigateToServices?: (serviceId: string) => void;
}

export function ServicesSection({ onOpenModal, onNavigateToServices }: ServicesSectionProps) {
  return (
    <section id="services-section" className="relative py-12 md:py-16 bg-[#080709] w-full">

      {/* Soft Ambient Gold Glow Flare */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#fac400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] border border-[#fac400]/30 px-4 py-1.5 rounded-full uppercase font-sans">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal tracking-tight text-white leading-[1.12] mb-6 font-sans">
            IT Services &amp; Solutions <br />
            <span className="text-gradient-primary font-medium">Built Around Your Business</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
            Whether you're modernizing your enterprise environment, developing a new application, adopting AI, or finding the right talent, our technology capabilities help you move from strategy to execution.
          </p>
        </div>

        {/* 4 STACKED CARDS CONTAINER */}
        <div className="relative space-y-8 md:space-y-12 pb-0 max-w-5xl mx-auto">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className={`stacked-card bg-gradient-to-br from-[#16151f] via-[#121118] to-[#0c0b10] border border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-[#fac400]/40 transition-colors ${idx === servicesList.length - 1 ? 'mb-0' : 'mb-12 sm:mb-16'
                }`}
              style={{ top: '6rem' }}
            >
              {/* Subtle Top-Left Ambient Card Glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#fac400]/5 rounded-full blur-3xl group-hover:bg-[#fac400]/15 transition-all duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* LEFT COLUMN: TEXT CONTENT */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#fac400] border border-[#fac400]/30 px-3.5 py-1 rounded-full uppercase font-mono">
                        SERVICE {service.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-white tracking-tight leading-snug mb-3 font-sans">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* 4 Bullet Points (Clean text bullets without card boxes) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                      {service.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#fac400] shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-200 font-semibold leading-snug">
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
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#B77805] text-white hover:bg-[#012854] transition-all duration-300 shadow-lg cursor-pointer group/btn"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: CLEAN IMAGE CARD (NO TEXT OVERLAY) */}
                <div className="lg:col-span-5 h-[280px] sm:h-[320px] md:h-[360px] select-none group/imgCard">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover/imgCard:border-[#fac400]/40 shadow-2xl transition-all duration-500">
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

