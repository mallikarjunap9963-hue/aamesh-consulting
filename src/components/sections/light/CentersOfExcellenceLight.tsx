import { Cpu, Network, BrainCircuit, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section id="solutions" className="relative py-8 md:py-12 bg-white overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-600 bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase font-sans">
              SOLUTIONS &amp; CENTERS OF EXCELLENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#000000] leading-[1.12] mb-4 font-sans">
            A Simple Process for Enterprise Technology Solutions
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
                className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-3xl p-6 sm:p-8 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
              >
                {/* STEP NUMBER WATERMARK */}
                <span className="absolute bottom-4 right-5 text-3xl sm:text-4xl font-extrabold text-[#023582]/15 group-hover:text-[#023582]/30 transition-colors font-mono pointer-events-none select-none">
                  {item.num}
                </span>

                <div>
                  {/* ENLARGED ICON */}
                  <div className="w-12 h-12 rounded-2xl bg-[#023582] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight leading-snug mb-3 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* CAPABILITIES LIST */}
                  <div className="space-y-2.5 mb-8 border-t border-slate-200/80 pt-5">
                    {item.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs text-[#000000]">
                        <CheckCircle2 className="w-4 h-4 text-white fill-[#023582] shrink-0" />
                        <span className="font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER CTA ROW */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between relative z-10">
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#023582] hover:bg-[#01255e] text-white shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer group/btn"
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
