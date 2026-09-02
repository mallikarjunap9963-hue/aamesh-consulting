import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  Cpu,
  Bot,
  ShieldCheck,
  Users,
  X,
  Menu,
  CheckCircle2,
  Send,
  Mail,
  MapPin,
  Phone,
  BrainCircuit,
  Server,
  Briefcase,
  HardDrive,
  Building2,
  FileCode,
  Coffee,
  Atom,
  Leaf,
  BarChart3,
  Network,
  PieChart,
  GitBranch,
  Workflow,
  CloudCog,
  Boxes,
  FileText,
  Cog,
  Infinity,
  RefreshCcw,
  Activity,
  Database
} from 'lucide-react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface ServiceModalData {
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

// Reusable Infinite Marquee Row Component
interface MarqueeItem {
  name: string;
  category?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor?: string;
}

interface MarqueeRowProps {
  direction?: 'left' | 'right';
  speedSeconds?: number;
  items: MarqueeItem[];
}

function MarqueeRow({ direction = 'left', speedSeconds = 28, items }: MarqueeRowProps) {
  // Duplicate exact items list for seamless continuous looping without gaps
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-2.5">
      {/* Left Edge Fade Overlay */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#080709] to-transparent z-10" />

      {/* Right Edge Fade Overlay */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#080709] to-transparent z-10" />

      {/* Scrolling Track */}
      <div
        className={`flex w-max gap-4 sm:gap-6 will-change-transform ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          }`}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 bg-[#121118]/90 border border-white/10 rounded-2xl px-4.5 sm:px-5 py-3 flex items-center gap-3 hover:border-[#fac400]/40 transition-all duration-300 group shadow-lg whitespace-nowrap"
          >
            {item.icon && (
              <item.icon
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 shrink-0"
                style={{ color: item.iconColor || '#fac400' }}
              />
            )}
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  cta: string;
  image: string;
  tags: string[];
  metricLabel: string;
  metricValue: string;
  metricLegend: { label: string; pct: string; color: string }[];
  modalData: ServiceModalData;
}

const servicesList: ServiceItem[] = [
  {
    id: 'it-services',
    num: '01',
    title: 'IT Services & Infrastructure Management',
    desc: 'Reliable technology infrastructure and IT support designed to improve performance, availability, security, and operational efficiency.',
    cta: 'Explore IT Services →',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
    tags: ['Infrastructure', '24/7 Support', 'DevOps', 'High Availability'],
    metricLabel: 'Infrastructure Health',
    metricValue: '99.99% Uptime',
    metricLegend: [
      { label: 'Compute', pct: '47%', color: '#f97316' },
      { label: 'Network', pct: '33%', color: '#fac400' },
      { label: 'Storage', pct: '20%', color: '#ec4899' }
    ],
    modalData: {
      title: 'IT Services & Infrastructure Management',
      subtitle: 'Reliable technology infrastructure and enterprise IT support.',
      description: 'We deliver comprehensive IT infrastructure management, cloud-native hosting, 24/7 NOC support, DevOps automation pipelines, and enterprise application lifecycle management built for mission-critical operations.',
      deliverables: [
        '24/7 NOC Infrastructure Monitoring',
        'DevOps & CI/CD Pipeline Automation',
        'Network & Server Architecture Optimization',
        'Disaster Recovery & Enterprise Backup'
      ]
    }
  },
  {
    id: 'cloud-computing',
    num: '02',
    title: 'Cloud Computing & Digital Transformation',
    desc: 'Modernize infrastructure, applications, and business operations with scalable cloud and digital transformation strategies.',
    cta: 'Explore Cloud & Digital →',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    tags: ['AWS / Azure / GCP', 'Cloud Native', 'Legacy Migration', 'Scalability'],
    metricLabel: 'Cloud Acceleration',
    metricValue: '4.8x Velocity',
    metricLegend: [
      { label: 'AWS Cloud', pct: '50%', color: '#f97316' },
      { label: 'Azure ERP', pct: '35%', color: '#fac400' },
      { label: 'GCP Cloud', pct: '15%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Cloud Computing & Digital Transformation',
      subtitle: 'Scalable multi-cloud engineering and legacy modernizations.',
      description: 'Accelerate digital transformation by migrating legacy monoliths to elastic cloud-native microservices, optimizing multi-cloud environments across AWS, Azure, and Google Cloud while lowering infrastructure overhead.',
      deliverables: [
        'Multi-Cloud Migration & Architecture',
        'Cloud-Native Microservices Design',
        'FinOps Cloud Cost Optimization',
        'Kubernetes & Serverless Deployment'
      ]
    }
  },
  {
    id: 'erp-sap',
    num: '03',
    title: 'ERP & SAP Consulting',
    desc: 'Support enterprise transformation through SAP S/4HANA migration, ERP consulting, implementation, integration, and optimization.',
    cta: 'Explore ERP Solutions →',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    tags: ['SAP S/4HANA', 'ERP Integration', 'Process Mining', 'Supply Chain'],
    metricLabel: 'ERP System Sync',
    metricValue: '$12.4M Saved',
    metricLegend: [
      { label: 'Finance', pct: '45%', color: '#f97316' },
      { label: 'Supply Chain', pct: '35%', color: '#fac400' },
      { label: 'HR / Ops', pct: '20%', color: '#ec4899' }
    ],
    modalData: {
      title: 'ERP & SAP Consulting',
      subtitle: 'End-to-end enterprise ERP implementation and SAP S/4HANA transformation.',
      description: 'Drive operational efficiency across supply chain, finance, and human capital with tailored SAP S/4HANA implementations, custom ABAP development, third-party ERP integrations, and business process re-engineering.',
      deliverables: [
        'SAP S/4HANA Migration & Greenfield Deployments',
        'Enterprise Resource Planning Strategy',
        'Custom ERP Integrations & API Layering',
        'Process Optimization & Change Management'
      ]
    }
  },
  {
    id: 'ai-ml-genai',
    num: '04',
    title: 'AI, Machine Learning & Gen AI',
    desc: 'Apply AI and generative AI to automate knowledge work, improve decision-making, analyze information, and create intelligent business experiences.',
    cta: 'Explore AI Solutions →',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
    tags: ['Generative AI', 'Custom LLMs', 'RAG Search', 'Predictive ML'],
    metricLabel: 'GenAI Efficiency',
    metricValue: '+85% Productivity',
    metricLegend: [
      { label: 'AI Agents', pct: '55%', color: '#f97316' },
      { label: 'RAG Search', pct: '30%', color: '#fac400' },
      { label: 'Predictive', pct: '15%', color: '#ec4899' }
    ],
    modalData: {
      title: 'AI, Machine Learning & Gen AI',
      subtitle: 'Intelligent AI agents and machine learning pipelines.',
      description: 'Harness the power of enterprise Generative AI, fine-tuned Large Language Models, Retrieval-Augmented Generation (RAG), and predictive AI models to transform internal workflows and create smart digital customer experiences.',
      deliverables: [
        'Enterprise Autonomous AI Agent Workflows',
        'Custom Fine-Tuned LLM Architectures & RAG',
        'Predictive Analytics & Forecasting Models',
        'Intelligent Document & Unstructured Data Processing'
      ]
    }
  },
  {
    id: 'product-dev',
    num: '05',
    title: 'Product Development & Application Engineering',
    desc: 'Design and build scalable web, mobile, and enterprise applications—from concept and architecture through development and deployment.',
    cta: 'Explore Product Development →',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80',
    tags: ['Full-Stack', 'React / Node / Mobile', 'SaaS Architecture', 'UX/UI Design'],
    metricLabel: 'Engineering Speed',
    metricValue: '100% On-Time',
    metricLegend: [
      { label: 'Web Platform', pct: '45%', color: '#f97316' },
      { label: 'Mobile Apps', pct: '35%', color: '#fac400' },
      { label: 'APIs & Core', pct: '20%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Product Development & Application Engineering',
      subtitle: 'Scalable custom software, web, and mobile engineering.',
      description: 'Partner with senior full-stack product teams to design, architect, and deliver robust web, mobile, and cloud-native SaaS applications designed for rapid scale, exceptional user experiences, and seamless maintainability.',
      deliverables: [
        'Full-Stack Web & Mobile App Development',
        'SaaS Multi-Tenant Product Architecture',
        'User Experience (UX) & Interface (UI) Design',
        'Agile Software Development & Maintenance'
      ]
    }
  },
  {
    id: 'data-analytics',
    num: '06',
    title: 'Data Analytics & Business Intelligence',
    desc: 'Turn business data into actionable insights through analytics, reporting, dashboards, and intelligent decision support.',
    cta: 'Explore Data Solutions →',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    tags: ['Snowflake / Databricks', 'PowerBI / Tableau', 'ETL Pipelines', 'Data Warehouse'],
    metricLabel: 'Data Throughput',
    metricValue: '2.4M Records/s',
    metricLegend: [
      { label: 'Realtime BI', pct: '60%', color: '#f97316' },
      { label: 'Warehouse', pct: '25%', color: '#fac400' },
      { label: 'Analytics', pct: '15%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Data Analytics & Business Intelligence',
      subtitle: 'Enterprise data warehousing and executive BI dashboards.',
      description: 'Consolidate fragmented business data streams into high-performance cloud data warehouses (Snowflake, Databricks, BigQuery) with interactive PowerBI/Tableau dashboards for real-time decision making.',
      deliverables: [
        'Cloud Data Warehouse & ETL Pipeline Setup',
        'Executive Real-Time Business Intelligence Dashboards',
        'Advanced Data Governance & Quality Controls',
        'Customer & Operational Analytics Insights'
      ]
    }
  },
  {
    id: 'cybersecurity',
    num: '07',
    title: 'Cybersecurity & Risk Management',
    desc: 'Strengthen technology environments through security, risk management, governance, compliance, and technology controls.',
    cta: 'Explore Cybersecurity →',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    tags: ['Zero-Trust', 'SOC Monitoring', 'ISO/SOC2 Compliance', 'Penetration Testing'],
    metricLabel: 'Security Index',
    metricValue: '100% Compliant',
    metricLegend: [
      { label: 'Zero-Trust', pct: '50%', color: '#f97316' },
      { label: 'Audit / SOC2', pct: '30%', color: '#fac400' },
      { label: 'Threat Monitoring', pct: '20%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Cybersecurity & Risk Management',
      subtitle: 'Zero-Trust network architecture and risk compliance frameworks.',
      description: 'Protect your enterprise digital assets against cyber threats through comprehensive penetration testing, Zero-Trust network security, continuous threat monitoring, SOC2/ISO compliance audits, and incident response.',
      deliverables: [
        'Zero-Trust Architecture & Identity Management',
        'SOC Monitoring & Threat Intelligence',
        'Vulnerability Assessments & Pen Testing',
        'Regulatory Compliance (SOC 2, ISO 27001, HIPAA)'
      ]
    }
  },
  {
    id: 'automation-ops',
    num: '08',
    title: 'Automation & Intelligent Operations',
    desc: 'Use RPA, intelligent automation, and modern engineering practices to reduce repetitive work and improve operational efficiency.',
    cta: 'Explore Automation →',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    tags: ['UiPath / RPA', 'Workflow Engines', 'OCR Extraction', 'Ops Automation'],
    metricLabel: 'Hours Saved',
    metricValue: '12,400 hrs/yr',
    metricLegend: [
      { label: 'RPA Bots', pct: '50%', color: '#f97316' },
      { label: 'Workflows', pct: '30%', color: '#fac400' },
      { label: 'IDP / OCR', pct: '20%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Automation & Intelligent Operations',
      subtitle: 'Robotic Process Automation and workflow engineering.',
      description: 'Eliminate tedious manual processes and operational bottlenecks by deploying Robotic Process Automation (RPA), intelligent document extraction, automated cross-system syncs, and self-healing IT operational scripts.',
      deliverables: [
        'Robotic Process Automation (UiPath / Automation Anywhere)',
        'Intelligent Document Processing (IDP)',
        'End-to-End Workflow & Business Logic Automation',
        'Operational Efficiency Benchmarking'
      ]
    }
  },
  {
    id: 'strategic-consulting',
    num: '09',
    title: 'Strategic Consulting & PMO',
    desc: 'Align technology initiatives with business priorities through strategic consulting, process optimization, project/program coordination, and PMO support.',
    cta: 'Explore Consulting →',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
    tags: ['Fractional CTO', 'PMO Office', 'Agile Delivery', 'Tech Strategy'],
    metricLabel: 'Project Alignment',
    metricValue: '100% Delivery',
    metricLegend: [
      { label: 'Strategy', pct: '40%', color: '#f97316' },
      { label: 'PMO Ops', pct: '40%', color: '#fac400' },
      { label: 'Governance', pct: '20%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Strategic Consulting & PMO',
      subtitle: 'Executive advisory, technology roadmapping, and PMO oversight.',
      description: 'Bridging the gap between business vision and technical execution. We provide fractional CTO leadership, program management office (PMO) governance, technology portfolio alignment, and agile delivery frameworks.',
      deliverables: [
        'Strategic Fractional CTO Advisory',
        'Enterprise PMO Setup & Program Management',
        'Technology Portfolio Optimization & Roadmap',
        'Vendor Selection & Enterprise IT Audits'
      ]
    }
  },
  {
    id: 'staffing-solutions',
    num: '10',
    title: 'Staffing Solutions',
    desc: 'Access qualified technology professionals across cloud, ERP, full-stack development, DevOps, automation, and other specialized technology areas.',
    cta: 'Explore Staffing →',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    tags: ['Dedicated Engineers', 'Staff Augmentation', 'Contract to Hire', 'Domain Experts'],
    metricLabel: 'Talent Placement',
    metricValue: '48hr Onboarding',
    metricLegend: [
      { label: 'Cloud / DevOps', pct: '35%', color: '#f97316' },
      { label: 'Full-Stack', pct: '35%', color: '#fac400' },
      { label: 'ERP / AI', pct: '30%', color: '#ec4899' }
    ],
    modalData: {
      title: 'Staffing Solutions',
      subtitle: 'Vetted technical talent and specialized IT staff augmentation.',
      description: 'Scale your engineering capacity on demand with top 1% pre-screened technical talent. Whether you need senior DevOps engineers, full-stack React/Node developers, SAP architects, or AI researchers.',
      deliverables: [
        'Dedicated Technical Staff Augmentation',
        'Domain Specialist Short-Term Contracting',
        'Full Agile Team Deployment',
        'Rigorous Vetting & Onboarding Support'
      ]
    }
  }
];



function AboutGrowthGraph() {
  const [timeframe, setTimeframe] = useState<'Weekly' | 'Monthly' | 'Yearly'>('Weekly');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const bars = [
    { month: 'Jan', value: 60, color: 'bg-[#3b82f6]', heightPct: '60%' },
    { month: 'Feb', value: 80, color: 'bg-[#f59e0b]', heightPct: '80%' },
    { month: 'Marc', value: 40, color: 'bg-[#3b82f6]', heightPct: '40%' },
    { month: 'Apr', value: 25, color: 'bg-[#f59e0b]', heightPct: '25%' },
    { month: 'May', value: 58, color: 'bg-[#3b82f6]', heightPct: '58%' },
    { month: 'Jun', value: 53, color: 'bg-[#f59e0b]', heightPct: '53%' },
    { month: 'July', value: 60, color: 'bg-[#3b82f6]', heightPct: '60%' },
    { month: 'Aug', value: 22, color: 'bg-[#f59e0b]', heightPct: '22%' }
  ];

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#111016] via-[#0d0c11] to-[#07060a] border border-white/10 p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group hover:border-[#fac400]/30 transition-all duration-500 min-h-[480px] sm:min-h-[520px] md:min-h-[560px] flex flex-col justify-between">


      {/* CARD HEADER: TITLE & WEEKLY DROPDOWN & THREE DOTS */}
      <div className="flex items-center justify-between relative z-20 mb-6">
        <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight font-sans">
          Customer Map
        </h3>

        <div className="flex items-center gap-3 relative">
          {/* Timeframe Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 hover:text-white font-normal bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            >
              <span>{timeframe}</span>
              <span className="text-[10px] text-gray-400">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-[#181622] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-30 py-1">
                {(['Weekly', 'Monthly', 'Yearly'] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setTimeframe(option);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-normal transition-colors ${timeframe === option ? 'text-[#fac400] bg-white/5 font-semibold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Three Dots Icon */}
          <button className="text-gray-400 hover:text-white text-lg font-bold px-1 transition-colors cursor-pointer">
            ⋮
          </button>
        </div>
      </div>

      {/* BAR CHART AREA WITH Y-AXIS & X-AXIS */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pt-4">
        <div className="flex items-end gap-3 sm:gap-5 h-[320px] sm:h-[380px] md:h-[420px] pl-8 relative">
          {/* Y-AXIS LABELS */}
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs sm:text-sm font-normal text-gray-400 font-sans">
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>0</span>
          </div>

          {/* BARS CONTAINER */}
          <div className="w-full h-full flex items-end justify-between px-2 pb-6 gap-2 sm:gap-3">
            {bars.map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group/bar flex-1 h-full justify-end">
                {/* Vertical Pill Bar */}
                <div className="w-3.5 sm:w-5 bg-white/5 rounded-full relative overflow-hidden flex items-end h-full">
                  <motion.div
                    initial={{ height: '0%' }}
                    whileInView={{ height: bar.heightPct }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full rounded-full ${bar.color} shadow-lg group-hover/bar:brightness-125 transition-all duration-300`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* X-AXIS LABELS */}
        <div className="flex items-center justify-between pl-8 px-2 text-xs sm:text-sm font-normal text-gray-300 font-sans pt-3 border-t border-white/5">
          {bars.map((bar, idx) => (
            <span key={idx} className="text-center flex-1">
              {bar.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface IdeaToSolutionStep {
  num: string;
  title: string;
  desc: string;
}

function TimelineNodeDot({ scrollYProgress, threshold }: { scrollYProgress: any; threshold: number }) {
  // Activate dot as scroll line reaches threshold
  const nodeScale = useTransform(scrollYProgress, [threshold - 0.12, threshold + 0.05], [0.85, 1.25]);
  const nodeGlow = useTransform(
    scrollYProgress,
    [threshold - 0.12, threshold + 0.05],
    ['0 0 0px rgba(250,196,0,0)', '0 0 25px rgba(250,196,0,0.95)']
  );
  const dotScale = useTransform(scrollYProgress, [threshold - 0.12, threshold + 0.05], [0.4, 1.1]);

  return (
    <motion.div
      style={{
        scale: nodeScale,
        boxShadow: nodeGlow,
      }}
      className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#080709] border-2 border-[#fac400] items-center justify-center z-20 transition-colors duration-300"
    >
      <motion.div
        style={{ scale: dotScale }}
        className="w-2.5 h-2.5 rounded-full bg-[#fac400] shadow-[0_0_12px_#fac400]"
      />
    </motion.div>
  );
}

function CentersOfExcellence({ onOpenModal }: { onOpenModal: () => void }) {
  const timelineRef = React.useRef<HTMLDivElement>(null);

  // Track scroll progress along the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 75%']
  });

  // Smooth out line extension animation
  const smoothLineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001
  });

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
      cta: 'Explore Modernization →',
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
      cta: 'Explore Transformation →',
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
      cta: 'Explore AI Solutions →',
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
      cta: 'Build Your Solution →',
      icon: ShieldCheck,
      accentGlow: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5'
    }
  ];

  return (
    <section id="solutions" className="relative py-12 md:py-20 bg-[#0e0c12] border-t border-white/5 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">

        {/* SECTION HEADER IN ALTRION STYLE */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
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

        {/* ALTRION STAGGERED PROCESS TIMELINE GRID */}
        <div ref={timelineRef} className="relative">
          {/* FAINT STATIC BACKGROUND LINE */}
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-white/10 hidden lg:block -translate-x-1/2 z-0" />

          {/* DYNAMIC SCROLL-ANIMATED GLOWING YELLOW CONNECTOR LINE */}
          <motion.div
            style={{ scaleY: smoothLineScale }}
            className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#fac400] via-[#ffd633] to-[#fac400] shadow-[0_0_16px_rgba(250,196,0,0.95)] origin-top hidden lg:block -translate-x-1/2 z-0"
          />

          <div className="space-y-12 lg:space-y-0 relative z-10">
            {solutions.map((item, index) => {
              const IconComp = item.icon;
              const isEven = index % 2 === 0;
              const threshold = (index + 0.2) / solutions.length;

              return (
                <div
                  key={item.num}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:py-6"
                >
                  {/* TIMELINE CENTER NODE DOT ANIMATED ON SCROLL */}
                  <TimelineNodeDot scrollYProgress={scrollYProgress} threshold={threshold} />

                  {/* STAGGERED STEP CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-6 ${isEven ? 'lg:col-start-1 lg:pr-6' : 'lg:col-start-7 lg:pl-6'
                      }`}
                  >
                    <div className="bg-gradient-to-b from-[#14121a]/95 to-[#0c0a11]/95 border border-white/10 hover:border-[#fac400]/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 group shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(250,196,0,0.1)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">

                      {/* GIANT STEP NUMBER WATERMARK */}
                      <span className="absolute -bottom-3 -right-2 text-7xl sm:text-8xl font-black text-white/[0.04] group-hover:text-[#fac400]/[0.08] transition-colors font-mono pointer-events-none select-none">
                        {item.num}
                      </span>

                      <div>
                        {/* STANDALONE ENLARGED ICON */}
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

                        {/* CHEVRON CAPABILITIES LIST (ALTRION STYLE) */}
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
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

const ideaToSolutionCards: IdeaToSolutionStep[] = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We understand your business, processes, users, challenges, and objectives.'
  },
  {
    num: '02',
    title: 'Design & Build',
    desc: 'We architect, design, develop, and test the solution with your team involved throughout the process.'
  },
  {
    num: '03',
    title: 'Deploy',
    desc: 'We deploy the solution to your environment and help your team get started.'
  },
  {
    num: '04',
    title: 'Support & Scale',
    desc: 'We provide ongoing support, enhancements, and technology improvements as your business evolves.'
  }
];

function IdeaToSolutionStackedCard({
  proc,
  index,
  totalCards
}: {
  proc: IdeaToSolutionStep;
  index: number;
  totalCards: number;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Monitor scroll progress of this card wrapper relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Progressive depth transforms: scale down, translate up, dim opacity as subsequent cards stack over it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const isLast = index === totalCards - 1;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] last:min-h-0 overflow-visible"
    >
      <motion.div
        className="sticky bg-gradient-to-b from-[#0d1424]/98 via-[#0a0f1b]/98 to-[#070b14]/98 border border-white/15 rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-10 overflow-hidden group hover:border-[#fac400]/40 transition-colors will-change-transform shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        style={{
          top: `calc(110px + ${index * 14}px)`,
          zIndex: 10 + index,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          y: isLast ? 0 : translateY
        }}
      >
        {/* Subtle top background glow */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#fac400]/5 rounded-full blur-2xl group-hover:bg-[#fac400]/10 transition-colors pointer-events-none" />

        <div>
          {/* Glossy Double-Ring Circular Step Badge with Top Line Accent */}
          <div className="relative pt-2 mb-6">
            <div className="absolute -top-7 left-6 w-px h-6 bg-gradient-to-b from-transparent via-[#fac400]/40 to-transparent" />

            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#162238] to-[#0a111f] border border-[#fac400]/40 shadow-[0_0_15px_rgba(250,196,0,0.2)] flex items-center justify-center text-[#fac400] text-sm font-bold tracking-wider font-sans group-hover:scale-105 transition-transform">
              {proc.num}
            </div>
          </div>

          {/* Card Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 font-sans">
            {proc.title}
          </h3>

          {/* Card Description */}
          <p className="text-sm sm:text-base text-gray-300/90 font-normal leading-relaxed">
            {proc.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function App() {
  const [activeTab, setActiveTab] = useState<'HOME' | 'ABOUT US' | 'SERVICES' | 'TECHNOLOGY' | 'PRODUCTS' | 'CONTACT US'>('HOME');
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Hero Animation Accessibility State
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'IT Expertise',
    budget: '$10k - $25k',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setFormSubmitted(false);
  };



  return (
    <div className="min-h-screen bg-[#080709] text-white selection:bg-[#fac400] selection:text-[#080709] font-sans overflow-x-clip flex flex-col justify-between">

      {/* HERO SECTION WITH FULL-SCREEN BACKGROUND IMAGE */}
      <div
        id="hero"
        className="hero-bg-container flex flex-col justify-between relative min-h-screen w-full"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="hero-overlay-dark absolute inset-0 pointer-events-none z-[1]" />

        {/* Glowing Ambient Yellow Flare Accent */}
        <div className="hero-glow-accent animate-pulse-glow" />

        {/* HEADER / NAVIGATION BAR */}
        <header className="header-glass relative z-50 transition-all duration-300">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

            {/* BRAND LOGO FROM PUBLIC DIRECTORY */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 group"
            >
              <img
                src="/ACS-logo.webp"
                alt="Aamesh Consulting Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {(['HOME', 'ABOUT US', 'SERVICES', 'TECHNOLOGY', 'PRODUCTS', 'CONTACT US'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'CONTACT US') setIsContactModalOpen(true);
                    else if (tab === 'ABOUT US') {
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'SERVICES') {
                      const el = document.getElementById('services-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'TECHNOLOGY') {
                      const el = document.getElementById('technology');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'PRODUCTS') {
                      const el = document.getElementById('cards-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'HOME') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`text-xs tracking-widest font-semibold transition-all duration-200 uppercase relative py-1 ${activeTab === tab
                    ? 'text-[#fac400]'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#fac400]" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

          {/* MOBILE DROPDOWN */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#0e0c12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4">
              {(['HOME', 'ABOUT US', 'SERVICES', 'TECHNOLOGY', 'PRODUCTS', 'CONTACT US'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                    if (tab === 'CONTACT US') setIsContactModalOpen(true);
                    else if (tab === 'ABOUT US') {
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'SERVICES') {
                      const el = document.getElementById('services-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'TECHNOLOGY') {
                      const el = document.getElementById('technology');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'PRODUCTS') {
                      const el = document.getElementById('cards-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (tab === 'HOME') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`text-left text-sm font-semibold tracking-wider py-2 border-b border-white/5 uppercase ${activeTab === tab ? 'text-[#fac400]' : 'text-gray-300'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* HERO MAIN BODY CONTENT */}
        <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-8 md:pt-14 pb-8 flex-1 flex flex-col justify-center">

          <div className="max-w-4xl">
            {/* 1. Small Hero Label */}
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-flex items-center gap-2"
              >
                <span className="text-xs font-semibold tracking-wider text-[#fac400] uppercase font-sans">
                  Technology • Solutions • Growth
                </span>
              </motion.div>
            </div>

            {/* 2. Hero Heading (Line-by-Line Masked Reveal) */}
            <h1 className="text-3xl sm:text-4xl md:text-[54px] lg:text-[60px] font-normal tracking-normal text-white leading-[1.08] mb-6 font-sans">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="block"
                >
                  Technology Solutions That <br className="hidden sm:inline" />
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1 pb-1">
                <motion.span
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.22,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="block"
                >
                  <span className="text-gradient-primary font-medium">Simplify Complexity</span> and Accelerate Growth.
                </motion.span>
              </span>
            </h1>

            {/* 3. Description */}
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.38,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed"
              >
                Aamesh Consulting Services is a technology and consulting partner helping businesses modernize, build, and scale through IT services, digital transformation, product engineering, AI, cloud, and strategic technology solutions.
              </motion.p>
            </div>

            {/* 4. CTA Buttons */}
            <motion.div
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.52,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('cards-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary-glow inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer group"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('cards-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer border border-white/20 hover:border-[#fac400] text-white hover:text-[#fac400] bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md group"
              >
                <span>View Our Products</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

        </main>

        {/* 4 FEATURE CARDS AT BOTTOM */}
        <div id="cards-section" className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

            {/* CARD 1 */}
            <motion.div
              initial={{
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 25,
                scale: prefersReducedMotion ? 1 : 0.96
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <Cpu className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                  IT EXPERTISE
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  End-to-end technology capabilities.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 25,
                scale: prefersReducedMotion ? 1 : 0.96
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <Bot className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                  AI & AUTOMATION
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  Intelligent solutions for modern businesses.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 25,
                scale: prefersReducedMotion ? 1 : 0.96
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.85,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <ShieldCheck className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                  ENTERPRISE SOLUTIONS
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  Cloud, ERP, data and cybersecurity.
                </p>
              </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              initial={{
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 25,
                scale: prefersReducedMotion ? 1 : 0.96
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.95,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <Users className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                  FLEXIBLE ENGAGEMENT
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  Consulting, projects, managed services and staffing.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* ================= ABOUT US SECTION ================= */}
      <section id="about" className="relative py-8 md:py-12 bg-[#0e0c12] w-full overflow-hidden border-t border-white/5">


        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT COLUMN: ABOUT US CUSTOMER MAP BAR CHART */}
            <motion.div
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25, scale: prefersReducedMotion ? 1 : 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <AboutGrowthGraph />
            </motion.div>

            {/* RIGHT COLUMN: TEXT CONTENT & 4 VALUE POINTS */}
            <div>
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
                  ABOUT US
                </span>
              </div>

              {/* Heading Line-by-Line Masked Reveal */}
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-tight text-white leading-[1.12] mb-6 font-sans">
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Technology Expertise.
                  </motion.span>
                </span>
                <span className="block overflow-hidden pt-1 pb-1">
                  <motion.span
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Business Understanding.
                  </motion.span>
                </span>
                <span className="block overflow-hidden pt-1 pb-1">
                  <motion.span
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    <span className="text-gradient-primary font-medium">Real Solutions.</span>
                  </motion.span>
                </span>
              </h2>

              {/* Description */}
              <div className="overflow-hidden mb-8">
                <motion.p
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal"
                >
                  Aamesh Consulting Services combines technology expertise with business-focused consulting to help organizations solve complex challenges and move forward with confidence. From enterprise IT and cloud transformation to AI, application development and ready-to-use business products, we deliver practical solutions designed around your goals. We don't just advise—we build, implement, integrate, and support technology that businesses can use to achieve real results.
                </motion.p>
              </div>

              {/* 4 Value Points List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {[
                  'End-to-End Technology',
                  'Business-Focused Solutions',
                  'Product Engineering',
                  'Flexible Engagement'
                ].map((title, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: 0.55 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#fac400] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider">{title}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary-glow inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer group"
                >
                  <span>View More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= IT SERVICES & SOLUTIONS STACKED CARDS SECTION ================= */}
      <section id="services-section" className="relative py-10 md:py-16 bg-[#080709] w-full border-t border-white/5">
        {/* Soft Ambient Gold Glow Flare (Restored exclusively for Services section) */}
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

          {/* 10 STACKED CARDS CONTAINER WITH REDUCED MAX-WIDTH */}
          <div className="relative space-y-8 md:space-y-12 pb-0 max-w-5xl mx-auto">
            {servicesList.map((service, idx) => (
              <div
                key={service.id}
                className={`stacked-card bg-gradient-to-br from-[#16151f] via-[#121118] to-[#0c0b10] border border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 relative overflow-hidden group hover:border-[#fac400]/40 transition-colors ${idx === servicesList.length - 1 ? 'mb-0' : 'mb-12 sm:mb-16'
                  }`}
                style={{ top: '6rem' }}
              >
                {/* Subtle Top-Left Ambient Card Glow behind text */}
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
                        onClick={() => setIsContactModalOpen(true)}
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

      {/* ================= 4. FEATURED SOLUTIONS & CENTERS OF EXCELLENCE SECTION ================= */}
      <CentersOfExcellence onOpenModal={() => setIsContactModalOpen(true)} />

      {/* ================= CUSTOM PRODUCT DEVELOPMENT SECTION (STICKY SIDE-BY-SIDE) ================= */}
      <section id="custom-product-development" className="relative py-10 md:py-16 bg-[#0e0c12] w-full overflow-visible border-t border-white/5">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-visible">

            {/* LEFT COLUMN: STICKY TEXT & CONTENT */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
                  FROM IDEA TO SOLUTION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal tracking-tight text-white leading-[1.12] font-sans">
                Have an Idea? <br />
                <span className="text-gradient-primary font-medium">We Build It.</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
                You don't need to know how to build the technology. You just need to know the problem you want to solve. Aamesh works with you to transform your business idea, workflow, or operational challenge into a working digital solution—from discovery and design to development, deployment, and ongoing support.
              </p>



              {/* TRANSFORMATION FLOW PILLS IN LEFT COLUMN */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-bold text-[#fac400] tracking-widest uppercase block">
                  TRANSFORMATION FLOW
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-semibold text-gray-200">
                  <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-white shadow-sm text-center w-full sm:w-auto">
                    Your Business Idea
                  </span>
                  <span className="text-[#fac400] font-bold hidden sm:inline">→</span>
                  <span className="text-[#fac400] font-bold sm:hidden">↓</span>
                  <span className="bg-[#fac400]/10 border border-[#fac400]/30 px-3 py-1.5 rounded-xl text-[#fac400] shadow-sm text-center w-full sm:w-auto">
                    Our Technology Expertise
                  </span>
                  <span className="text-[#fac400] font-bold hidden sm:inline">→</span>
                  <span className="text-[#fac400] font-bold sm:hidden">↓</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-white shadow-sm text-center w-full sm:w-auto">
                    Your Working Solution
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#fac400] to-[#f5b800] text-[#080709] hover:brightness-110 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
                >
                  <span>Let's Build Your Solution →</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: SCROLL-DRIVEN STICKY STACKED PROCESS CARDS */}
            <div className="lg:col-span-7 relative overflow-visible pb-16">

              {/* STICKY STACKED PROCESS CARDS */}
              {ideaToSolutionCards.map((proc, index) => (
                <IdeaToSolutionStackedCard
                  key={proc.num}
                  proc={proc}
                  index={index}
                  totalCards={ideaToSolutionCards.length}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY EXPERTISE SECTION ================= */}
      <section id="technology" className="relative py-10 md:py-16 bg-[#080709] w-full overflow-hidden border-t border-white/5">
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
                { name: 'DevOps', category: 'DevOps & Eng', icon: Infinity, iconColor: '#3B82F6' },
                { name: 'Agile', category: 'DevOps & Eng', icon: RefreshCcw, iconColor: '#F59E0B' },
                { name: 'SRE', category: 'DevOps & Eng', icon: Activity, iconColor: '#10B981' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= 8. WHY AAMESH SECTION (PREMIUM GLASS CARD MATRIX DESIGN) ================= */}
      <section id="why-aamesh" className="relative py-14 md:py-24 bg-[#080709] w-full overflow-hidden border-t border-white/5">
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

          {/* 6 DIFFERENTIATORS - MATCHING EXACT SCREENSHOT CARD DESIGN */}
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
                  className="relative group bg-[#131217] border border-white/10 hover:border-white/25 rounded-[28px] p-8 md:p-9 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[280px]"
                >
                  {/* Soft Radial Ambient Gold Glow in Top-Right Corner */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#fac400]/15 to-transparent rounded-full blur-3xl group-hover:from-[#fac400]/30 transition-all duration-500 pointer-events-none" />

                  {/* TOP ROW: LINE ICON */}
                  <div className="mb-10 relative z-10">
                    {/* Top Left Icon */}
                    <div className="text-[#fac400] transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-10 h-10 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* BOTTOM BLOCK: TITLE & DESCRIPTION */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-medium text-white tracking-tight mb-3 font-sans group-hover:text-[#fac400] transition-colors leading-snug">
                      {diff.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-300/90 font-normal leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 9. FINAL CTA SECTION ================= */}
      <section id="final-cta" className="relative py-12 md:py-18 bg-[#0e0c12] w-full overflow-hidden border-t border-white/10">
        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1200px] mx-auto text-center">

          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] uppercase font-sans bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full">
              START YOUR TRANSFORMATION
            </span>
          </div>

          {/* H2 Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-[56px] font-normal tracking-tight text-white leading-[1.1] mb-6 font-sans">
            Let's Build What's Next
          </h2>

          {/* Content Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you're looking to modernize your IT environment, develop a new product, adopt AI, transform your business processes, or find the right technology expertise, Aamesh Consulting Services can help you move from challenge to solution.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn-primary-glow inline-flex items-center gap-3 px-9 py-4.5 rounded-full font-bold text-sm tracking-wider uppercase cursor-pointer group shadow-2xl hover:scale-105 transition-all duration-300 text-[#080709]"
            >
              <span>Talk to Our Experts</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm text-gray-400 font-normal mt-2">
              Have a business problem to solve? Let's start with a conversation.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="relative bg-[#050406] text-white border-t border-white/10 pt-8 md:pt-10 pb-5 overflow-hidden">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#fac400]/40 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* TOP FOOTER ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 border-b border-white/10">

            {/* BRAND COLUMN */}
            <div className="lg:col-span-4 space-y-6">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-block group"
              >
                <img
                  src="/ACS-logo.webp"
                  alt="Aamesh Consulting Services Logo"
                  className="h-16 md:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
                Aamesh Consulting Services Pvt. Ltd. delivers enterprise technology, AI automation, multi-cloud engineering, and strategic IT consulting that powers digital acceleration.
              </p>

              {/* SOCIAL LINKS */}
              <div className="pt-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase font-sans block mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                  >
                    <LinkedinIcon className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                  >
                    <TwitterIcon className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                  >
                    <GithubIcon className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                  >
                    <InstagramIcon className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                  { label: 'About Us', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
                  { label: 'IT Services', action: () => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }) },
                  { label: 'Products', action: () => document.getElementById('cards-section')?.scrollIntoView({ behavior: 'smooth' }) },
                  { label: 'Contact Us', action: () => setIsContactModalOpen(true) }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={item.action}
                      className="text-xs sm:text-sm text-gray-400 hover:text-[#fac400] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CORE CAPABILITIES */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
                Core Capabilities
              </h4>
              <ul className="space-y-2.5">
                {[
                  'IT Infrastructure Management',
                  'Cloud & Digital Transformation',
                  'AI, ML & Generative AI',
                  'ERP & SAP Consulting',
                  'Product Engineering & DevOps',
                  'Cybersecurity & Risk Control'
                ].map((service, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fac400]/60 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CORPORATE OFFICE COLUMN */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
                Corporate Office
              </h4>
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#fac400] shrink-0 mt-0.5" />
                  <span>3rd floor, Trendz JP Building, Chhota Anjaiah Nagar, Gachibowli, Hyderabad - 500032</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-[#fac400] shrink-0" />
                  <a href="mailto:info@aameshconsulting.com" className="hover:text-[#fac400] transition-colors">
                    info@aameshconsulting.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-[#fac400] shrink-0" />
                  <a href="tel:+917032450002" className="hover:text-[#fac400] transition-colors">
                    +91 7032450002
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM FOOTER ROW */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>
              © {new Date().getFullYear()} Aamesh Consulting Services Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>



      {/* CONTACT / LET'S TALK MODAL */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
          <div className="bg-[#121016] border border-[#fac400]/40 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative shadow-[0_0_50px_rgba(250,196,0,0.2)]">

            <button
              onClick={closeContactModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] uppercase font-display block mb-2">
                    START A CONVERSATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Let's build something epic.</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Tell us about your product goals and vision.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Service Requested</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#1c1824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                      >
                        <option value="IT Expertise">IT Expertise</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Enterprise Solutions">Enterprise Solutions</option>
                        <option value="Flexible Engagement">Flexible Engagement</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#1c1824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                      >
                        <option value="< $10k">&lt; $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Project Details</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe your objectives, timeline, and key requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-glow w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#fac400]/20 border border-[#fac400]/40 rounded-full flex items-center justify-center mx-auto text-[#fac400]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Inquiry Received!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#fac400] font-semibold">{formData.name || 'Friend'}</span>. Our partner design director will review your project requirements and get back to you at <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={closeContactModal}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
