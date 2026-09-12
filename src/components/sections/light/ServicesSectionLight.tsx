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
    <section id="services-section" className="relative py-8 md:py-12 bg-white w-full">

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-600 bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase font-sans">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-[#000000] leading-[1.12] mb-6 font-sans">
            IT Services &amp; Solutions <br />
            <span className="text-[#000000] font-bold">Built Around Your Business</span>
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
              className={`stacked-card bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-slate-300 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] ${idx === servicesList.length - 1 ? 'mb-0' : 'mb-12 sm:mb-16'
                }`}
              style={{ top: '6rem' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* LEFT COLUMN: TEXT CONTENT */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-slate-600 bg-white border border-slate-200/90 shadow-sm px-4 py-1.5 rounded-full uppercase font-sans">
                        SERVICE {service.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight leading-snug mb-3 font-sans">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#3D3E42] font-normal leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* 4 Bullet Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                      {service.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle2 className="w-5 h-5 text-white fill-[#023582] shrink-0" />
                          <span className="text-xs sm:text-sm text-[#000000] font-semibold leading-snug">
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
                      className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#023582] hover:bg-[#01255e] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer group/btn"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: CLEAN IMAGE CARD */}
                <div className="lg:col-span-5 h-[280px] sm:h-[320px] md:h-[360px] select-none group/imgCard">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 group-hover/imgCard:border-slate-300 shadow-[0_16px_40px_-10px_rgba(1,40,84,0.14)] transition-all duration-500">
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
