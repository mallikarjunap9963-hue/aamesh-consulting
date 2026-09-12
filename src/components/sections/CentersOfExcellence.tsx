import { Cpu, Network, BrainCircuit, ShieldCheck } from 'lucide-react';

interface CentersOfExcellenceProps {
  onOpenModal: () => void;
}

export function CentersOfExcellence({ onOpenModal }: CentersOfExcellenceProps) {
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
      icon: Cpu,
      accentGlow: 'from-[#fac400]/20 to-[#fac400]/5'
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
      icon: Network,
      accentGlow: 'from-[#3B82F6]/20 to-[#3B82F6]/5'
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
      icon: BrainCircuit,
      accentGlow: 'from-[#10B981]/20 to-[#10B981]/5'
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
      icon: ShieldCheck,
      accentGlow: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5'
    }
  ];

  return (
    <section id="solutions" className="relative py-12 md:py-16 bg-[#080709] overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] border border-[#fac400]/30 px-4 py-1.5 rounded-full uppercase font-sans">
              SOLUTIONS &amp; CENTERS OF EXCELLENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal tracking-tight text-white leading-[1.12] mb-4 font-sans">
            A Simple Process for <br />
            <span className="text-gradient-primary font-medium">Enterprise Technology Solutions</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
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
                className="bg-gradient-to-b from-[#14121a]/95 to-[#0c0a11]/95 border border-white/10 hover:border-[#fac400]/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 group shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_25px_rgba(250,196,0,0.2)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
              >
                {/* STEP NUMBER WATERMARK */}
                <span className="absolute bottom-4 right-5 text-3xl sm:text-4xl font-extrabold text-[#fac400]/25 group-hover:text-[#fac400]/50 transition-colors font-mono pointer-events-none select-none">
                  {item.num}
                </span>

                <div>
                  {/* ENLARGED ICON */}
                  <div className="text-[#fac400] group-hover:scale-110 transition-transform duration-300 mb-5 inline-block">
                    <IconComp className="w-10 h-10 sm:w-11 sm:h-11 stroke-[1.8]" />
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug mb-3 font-sans group-hover:text-[#fac400] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* CAPABILITIES LIST */}
                  <div className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                    {item.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <span className="text-[#fac400] font-bold font-mono text-xs mt-0.5">&gt;</span>
                        <span className="font-normal">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER CTA ROW */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fac400] hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>{item.cta}</span>
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
