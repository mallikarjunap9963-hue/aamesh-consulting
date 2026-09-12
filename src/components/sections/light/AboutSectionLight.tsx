import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionLightProps {
  prefersReducedMotion?: boolean;
  onNavigateToServices?: () => void;
}

export function AboutSectionLight({ onNavigateToServices }: AboutSectionLightProps) {
  const scrollToServices = () => {
    if (onNavigateToServices) {
      onNavigateToServices();
    } else {
      const el = document.getElementById('services-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const valuePoints = [
    'End-to-End Technology',
    'Business-Focused Solutions',
    'Product Engineering',
    'Flexible Engagement'
  ];

  return (
    <section id="about" className="relative py-8 md:py-12 bg-white w-full overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: ABOUT US IMAGE */}
          <div className="w-full relative group">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] bg-white group-hover:border-slate-300 transition-all duration-500">
              <img
                src="/about us new img.png"
                alt="About Aamesh Consulting Services"
                className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & 4 VALUE POINTS */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-slate-600 bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase font-sans">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#000000] leading-[1.12] mb-6 font-sans">
              Technology Expertise. <br />
              Business Understanding. <br />
              <span className="text-[#000000] font-bold">Real Solutions.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#3D3E42] leading-relaxed font-normal mb-8">
              Aamesh Consulting Services combines technology expertise with business-focused consulting to help organizations solve complex challenges and move forward with confidence. From enterprise IT and cloud transformation to AI, application development and ready-to-use business products, we deliver practical solutions designed around your goals. We don't just advise—we build, implement, integrate, and support technology that businesses can use to achieve real results.
            </p>

            {/* 4 Value Points List (Clean text bullets without card boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {valuePoints.map((title, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-white fill-[#023582] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#000000] uppercase tracking-wider">{title}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={scrollToServices}
                className="bg-[#023582] hover:bg-[#01255e] text-white font-bold px-8 py-4 rounded-full text-xs md:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>View More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

