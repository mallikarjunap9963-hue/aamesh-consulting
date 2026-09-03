import { motion } from 'framer-motion';
import {
  CloudCog,
  Database,
  Server,
  Briefcase,
  Users,
  Building2,
  HardDrive,
  BrainCircuit,
  FileCode,
  Bot,
  Coffee,
  Atom,
  Cpu,
  Leaf,
  ShieldCheck,
  BarChart3,
  Network,
  PieChart,
  GitBranch,
  Workflow,
  Boxes,
  FileText,
  Cog,
  Infinity as InfinityIcon,
  RefreshCcw,
  Activity
} from 'lucide-react';
import { MarqueeRow } from '../common/MarqueeRow';

interface TechnologySectionProps {
  prefersReducedMotion: boolean;
}

export function TechnologySection({ prefersReducedMotion }: TechnologySectionProps) {
  return (
    <>
      {/* ================= TECHNOLOGY EXPERTISE SECTION ================= */}
      <section id="technology" className="relative py-8 md:py-12 bg-[#080709] w-full overflow-hidden border-t border-white/5">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* SECTION HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
                TECHNOLOGY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal tracking-tight text-white leading-[1.12] mb-6 font-sans">
              Technology Expertise for the <br />
              <span className="text-gradient-primary font-medium">Modern Enterprise</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
              Our teams bring expertise across enterprise platforms, modern application development, cloud, AI, automation, data, and DevOps.
            </p>
          </div>

          {/* MULTI-ROW INFINITE HORIZONTAL MARQUEE CONVEYOR BELT */}
          <div className="mt-12 space-y-3">
            {/* Row 1: Right to Left */}
            <MarqueeRow
              direction="left"
              speedSeconds={28}
              items={[
                { name: 'AWS', category: 'Cloud', icon: CloudCog, iconColor: '#FF9900' },
                { name: 'SAP S/4HANA', category: 'Enterprise ERP', icon: Database, iconColor: '#008FD3' },
                { name: 'Azure', category: 'Cloud', icon: CloudCog, iconColor: '#0089D6' },
                { name: 'Oracle Cloud', category: 'Cloud', icon: Server, iconColor: '#F80000' },
                { name: 'Workday', category: 'Enterprise ERP', icon: Briefcase, iconColor: '#E25822' },
                { name: 'PeopleSoft', category: 'Enterprise ERP', icon: Users, iconColor: '#FF7A00' },
                { name: 'SAP', category: 'Enterprise ERP', icon: Building2, iconColor: '#008FD3' },
                { name: 'Oracle', category: 'Enterprise ERP', icon: HardDrive, iconColor: '#F80000' }
              ]}
            />

            {/* Row 2: Left to Right */}
            <MarqueeRow
              direction="right"
              speedSeconds={32}
              items={[
                { name: 'Generative AI', category: 'Data & AI', icon: BrainCircuit, iconColor: '#10A37F' },
                { name: 'Python', category: 'Application Dev', icon: FileCode, iconColor: '#3776AB' },
                { name: 'Artificial Intelligence', category: 'Data & AI', icon: BrainCircuit, iconColor: '#A855F7' },
                { name: 'Java', category: 'Application Dev', icon: Coffee, iconColor: '#F89820' },
                { name: 'React', category: 'Application Dev', icon: Atom, iconColor: '#61DAFB' },
                { name: 'Machine Learning', category: 'Data & AI', icon: Cpu, iconColor: '#EC4899' },
                { name: 'Spring Boot', category: 'Application Dev', icon: Leaf, iconColor: '#6DB33F' },
                { name: 'Angular', category: 'Application Dev', icon: ShieldCheck, iconColor: '#DD0031' },
                { name: 'Data Analytics', category: 'Data & AI', icon: BarChart3, iconColor: '#3B82F6' },
                { name: 'Node / Modern APIs', category: 'Application Dev', icon: Network, iconColor: '#5FA04E' },
                { name: 'Business Intelligence', category: 'Data & AI', icon: PieChart, iconColor: '#F2C94C' }
              ]}
            />

            {/* Row 3: Right to Left */}
            <MarqueeRow
              direction="left"
              speedSeconds={26}
              items={[
                { name: 'UiPath', category: 'Automation', icon: Bot, iconColor: '#FA4616' },
                { name: 'CI/CD', category: 'DevOps & Eng', icon: GitBranch, iconColor: '#22C55E' },
                { name: 'PEGA', category: 'Automation', icon: Workflow, iconColor: '#0073CF' },
                { name: 'Cloud Engineering', category: 'DevOps & Eng', icon: CloudCog, iconColor: '#06B6D4' },
                { name: 'Blue Prism', category: 'Automation', icon: Boxes, iconColor: '#00A3E0' },
                { name: 'Infrastructure as Code', category: 'DevOps & Eng', icon: FileText, iconColor: '#8B5CF6' },
                { name: 'RPA', category: 'Automation', icon: Cog, iconColor: '#FF7A00' },
                { name: 'DevOps', category: 'DevOps & Eng', icon: InfinityIcon, iconColor: '#3B82F6' },
                { name: 'Agile', category: 'DevOps & Eng', icon: RefreshCcw, iconColor: '#F59E0B' },
                { name: 'SRE', category: 'DevOps & Eng', icon: Activity, iconColor: '#10B981' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= 8. WHY AAMESH SECTION ================= */}
      <section id="why-aamesh" className="relative py-8 md:py-12 bg-[#080709] w-full overflow-hidden border-t border-white/5">
        {/* Soft Ambient Radial Gold Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#fac400]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* SECTION HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
                WHY AAMESH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal tracking-tight text-white leading-[1.12] mb-6 font-sans">
              More Than a Technology Vendor. <br />
              <span className="text-gradient-primary font-medium">A Partner for What's Next.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
              We bring together consulting, engineering, products, and technology expertise to help businesses move from ideas and challenges to working solutions.
            </p>
          </div>

          {/* 6 DIFFERENTIATORS MATRIX */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: '01',
                title: 'Technology + Consulting',
                desc: 'We combine strategic thinking with hands-on technology execution.',
                icon: Cpu
              },
              {
                num: '02',
                title: 'Build + Buy',
                desc: 'Choose from ready-to-use products or work with us to build a solution specifically for your business.',
                icon: Boxes
              },
              {
                num: '03',
                title: 'Business-First Thinking',
                desc: 'We focus on solving the underlying business problem—not simply implementing technology.',
                icon: BrainCircuit
              },
              {
                num: '04',
                title: 'End-to-End Delivery',
                desc: 'From discovery and architecture to development, deployment, and support.',
                icon: Workflow
              },
              {
                num: '05',
                title: 'Flexible & Scalable',
                desc: 'Start with a focused requirement and expand as your business and technology needs evolve.',
                icon: RefreshCcw
              },
              {
                num: '06',
                title: 'We Build What We Support',
                desc: 'Our product portfolio emphasizes that ACS builds, owns, and supports its own products, giving customers direct access to the team behind the technology.',
                icon: ShieldCheck
              }
            ].map((diff, idx) => {
              const IconComponent = diff.icon;
              return (
                <motion.div
                  key={diff.num}
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#121016]/90 border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#fac400]/40 transition-all duration-300 group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#fac400]/10 border border-[#fac400]/30 flex items-center justify-center text-[#fac400] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-bold font-mono text-white/20 group-hover:text-[#fac400]/40 transition-colors">
                        {diff.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-[#fac400] transition-colors">
                      {diff.title}
                    </h3>

                    <p className="text-sm text-gray-300 font-normal leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
