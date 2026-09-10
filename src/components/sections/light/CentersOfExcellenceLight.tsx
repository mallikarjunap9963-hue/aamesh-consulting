import { Cpu, Network, BrainCircuit, ShieldCheck, ArrowRight } from 'lucide-react';

interface CentersOfExcellenceLightProps {
  onOpenModal: () => void;
}

export function CentersOfExcellenceLight({ onOpenModal }: CentersOfExcellenceLightProps) {
  const solutions = [
    {
      num: '01',
      title: 'ENTERPRISE MODERNIZATION',
      desc: 'Modernize legacy environments, applications, infrastructure, and enterprise systems to create an agile, resilient, and scalable technology foundation.',
      capabilities: [
        'Cloud Migration & Hybrid Strategy',
        'Monolith to Microservices Refactoring',
        'Legacy System Overhaul & Refactoring',
        'SRE & Continuous DevOps Pipeline'
      ],
      cta: 'Explore More',
      icon: Cpu
    },
    {
      num: '02',
      title: 'DIGITAL TRANSFORMATION',
      desc: 'Transform core business processes and customer experiences with modern technology platforms, cloud automation, analytics, and connected digital solutions.',
      capabilities: [
        'Cloud Native Application Platforms',
        'Intelligent Process & Workflow Automation',
        'Digital Customer Experience Portals',
        'Omnichannel Integration & API Fabric'
      ],
      cta: 'Explore More',
      icon: Network
    },
    {
      num: '03',
      title: 'AI & GENERATIVE AI',
      desc: 'Bring intelligence into everyday business operations through AI-powered applications, document intelligence, knowledge search assistants, and decision engines.',
      capabilities: [
        'Custom Fine-Tuned LLMs & AI Agents',
        'RAG Knowledge Search & Assistant Engines',
        'Document & OCR Intelligent Processing',
        'Autonomous Business AI Workflows'
      ],
      cta: 'Explore More',
      icon: BrainCircuit
    },
    {
      num: '04',
      title: 'CUSTOM BUSINESS SOLUTIONS',
      desc: 'Have a business challenge that does not fit off-the-shelf software? We design and build purpose-built digital solutions customized specifically to your requirements.',
      capabilities: [
        'Bespoke SaaS Platform Architecture',
        'Custom Business Logic & Rule Engines',
        'High-Performance API & Integration Layer',
        'End-to-End Product Engineering'
      ],
      cta: 'Explore More',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="solutions" className="relative py-8 md:py-12 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
              SOLUTIONS &amp; CENTERS OF EXCELLENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#012854] leading-[1.12] mb-4 font-sans">
            A Simple Process for <br />
            <span className="text-gradient-primary-light font-bold">Enterprise Technology Solutions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#3D3E42] font-normal leading-relaxed">
            We combine strategic consulting, enterprise architecture, and hands-on engineering to design tailored solutions that turn operational challenges into competitive advantages.
          </p>
        </div>

        {/* 2 ROWS x 2 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.num}
                className="bg-white border border-slate-200/90 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 group shadow-[0_16px_40px_-10px_rgba(1,40,84,0.16)] hover:shadow-[0_24px_55px_-10px_rgba(183,120,5,0.28)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
              >
                {/* STEP NUMBER WATERMARK */}
                <span className="absolute bottom-4 right-5 text-3xl sm:text-4xl font-extrabold text-[#B77805]/35 group-hover:text-[#B77805]/70 transition-colors font-mono pointer-events-none select-none">
                  {item.num}
                </span>

                <div>
                  {/* ENLARGED ICON */}
                  <div className="w-12 h-12 rounded-2xl bg-[#012854] text-[#B77805] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#012854] tracking-tight leading-snug mb-3 font-sans group-hover:text-[#B77805] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* CAPABILITIES LIST */}
                  <div className="space-y-2.5 mb-8 border-t border-slate-200/80 pt-5">
                    {item.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#012854]">
                        <span className="text-[#B77805] font-bold font-mono text-xs mt-0.5">&gt;</span>
                        <span className="font-normal">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER CTA ROW */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between relative z-10">
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#012854] via-[#012F62] to-[#B77805] hover:from-[#012F62] hover:via-[#B77805] hover:to-[#CE9116] text-white shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer group/btn"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
