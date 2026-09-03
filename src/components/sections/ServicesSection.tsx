import { servicesList } from '../../data/servicesData';
import type { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onOpenModal: () => void;
  onSelectServiceModal: (service: ServiceItem) => void;
}

export function ServicesSection({ onOpenModal }: ServicesSectionProps) {
  return (
    <section id="services-section" className="relative py-8 md:py-12 bg-[#080709] w-full border-t border-white/5">
      {/* Soft Ambient Gold Glow Flare */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#fac400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal tracking-tight text-white leading-[1.12] mb-6 font-sans">
            IT Services &amp; Solutions <br />
            <span className="text-gradient-primary font-medium">Built Around Your Business</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
            Whether you're modernizing your enterprise environment, developing a new application, adopting AI, or optimizing business operations, our technology capabilities help you move from strategy to execution.
          </p>
        </div>

        {/* 10 STACKED CARDS CONTAINER */}
        <div className="relative space-y-8 md:space-y-12 pb-0 max-w-5xl mx-auto">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className={`stacked-card bg-gradient-to-br from-[#16151f] via-[#121118] to-[#0c0b10] border border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 relative overflow-hidden group hover:border-[#fac400]/40 transition-colors ${
                idx === servicesList.length - 1 ? 'mb-0' : 'mb-12 sm:mb-16'
              }`}
              style={{ top: '6rem' }}
            >
              {/* Subtle Top-Left Ambient Card Glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#fac400]/5 rounded-full blur-3xl group-hover:bg-[#fac400]/15 transition-all duration-500 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* LEFT COLUMN: TEXT CONTENT */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/20 px-3 py-1 rounded-full uppercase">
                        SERVICE {service.num}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-[30px] font-semibold text-white tracking-tight leading-snug mb-3 font-sans">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-300 font-normal leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Pill Button */}
                  <div>
                    <button
                      onClick={onOpenModal}
                      className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-white text-[#080709] hover:bg-[#fac400] hover:text-[#080709] transition-all duration-300 shadow-lg cursor-pointer group/btn"
                    >
                      <span>{service.cta}</span>
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: IMAGE */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/img">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[300px] md:h-[320px] object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
