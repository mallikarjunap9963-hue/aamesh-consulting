import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Home,
  Bot,
  Search,
  Settings,
  Rocket,
  BarChart3,
  LineChart,
  Zap,
  Maximize2,
  ShieldCheck,
  ShieldAlert,
  Target,
  TrendingUp,
  Cloud,
  Wrench,
  Network,
  Server,
  Code2,
  Smartphone,
  Globe,
  Sparkles,
  UserCheck,
  UserSearch,
  Briefcase,
  Clock,
  CheckCircle2,
  Workflow,
  Compass,
  Cpu,
  Binary,
  LifeBuoy,
  Kanban,
  FolderKanban,
  Building2,
  Boxes,
  Webhook,
  Palette,
  RefreshCw,
  BrainCircuit,
  Cog,
  FileText,
  Laptop,
  Building,
  Users,
  Handshake
} from 'lucide-react';
import { servicesList } from '../data/servicesData';

interface ServicesHeroSectionProps {
  activeServiceId: string;
  onNavigateHome: (sectionId?: string) => void;
  onOpenContactModal?: () => void;
}

export function ServicesHeroSection({
  activeServiceId,
  onNavigateHome,
  onOpenContactModal
}: ServicesHeroSectionProps) {
  const currentService = servicesList.find((s) => s.id === activeServiceId) || servicesList[0];

  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden bg-transparent pt-6 pb-12 md:pt-10 md:pb-16 z-10 font-sans">
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex-1 flex flex-col items-center text-center">

        {/* 1. Breadcrumb Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-md text-xs sm:text-sm text-slate-600 shadow-sm">
            <button
              onClick={() => onNavigateHome()}
              className="inline-flex items-center gap-1.5 hover:text-[#B77805] transition-colors cursor-pointer group"
            >
              <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#B77805] transition-colors" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-medium">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#B77805] font-bold">{currentService.title}</span>
          </div>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] max-w-4xl mb-5 font-sans"
        >
          Technology Solutions That <br className="hidden sm:inline" />
          <span className="text-gradient-primary-light font-extrabold inline-block px-1">
            Drive Real Progress
          </span>
        </motion.h1>

        {/* 3. Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed mb-8"
        >
          From strategy to execution, we deliver IT solutions, digital products, AI &amp; automation, and talent solutions to help businesses grow, adapt, and lead.
        </motion.p>

        {/* 4. CTA BUTTONS ROW (Matching Home Page Hero) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-2"
        >
          <button
            onClick={() => {
              const el = document.getElementById('service-detail-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#B77805] hover:bg-[#9E6503] text-white font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer group"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => {
              if (onOpenContactModal) onOpenContactModal();
            }}
            className="bg-[#012854] hover:bg-[#011F42] text-white border border-[#012854] font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer group"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

interface ServicesPageProps {
  activeServiceId?: string;
  onSelectService: (serviceId: string) => void;
  onOpenModal: (serviceTitle?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
}

interface DeliverableDetail {
  description: string;
  tag: string;
  points?: string[];
}

// Icon helper for deliverables with precise contextual domain icons
const getDeliverableIcon = (text: string) => {
  const lower = text.toLowerCase();

  // IT Services
  if (lower.includes('consulting & advisory') || lower.includes('it consulting')) return Compass;
  if (lower.includes('digital transformation')) return Cpu;
  if (lower.includes('cloud')) return Cloud;
  if (lower.includes('application support')) return LifeBuoy;
  if (lower.includes('systems integration')) return Network;
  if (lower.includes('it infrastructure') || lower.includes('server')) return Server;
  if (lower.includes('data & business') || lower.includes('bi solutions')) return BarChart3;
  if (lower.includes('quality assurance') || lower.includes('qa & testing') || lower.includes('testing & quality')) return ShieldCheck;
  if (lower.includes('cybersecurity') || lower.includes('security') || lower.includes('risk')) return ShieldAlert;
  if (lower.includes('technology project support')) return Kanban;

  // Products & Development
  if (lower.includes('custom software')) return Code2;
  if (lower.includes('web application')) return Globe;
  if (lower.includes('mobile application')) return Smartphone;
  if (lower.includes('enterprise application')) return Building2;
  if (lower.includes('saas product')) return Boxes;
  if (lower.includes('api development') || lower.includes('integration')) return Webhook;
  if (lower.includes('ui/ux design') || lower.includes('ui/ux')) return Palette;
  if (lower.includes('application maintenance & enhancement')) return Wrench;
  if (lower.includes('modernisation') || lower.includes('modernization')) return RefreshCw;

  // AI & Automation
  if (lower.includes('ai strategy')) return BrainCircuit;
  if (lower.includes('generative ai')) return Sparkles;
  if (lower.includes('chatbots') || lower.includes('virtual assistants')) return Bot;
  if (lower.includes('business process automation') || lower.includes('rpa')) return Cog;
  if (lower.includes('workflow automation')) return Workflow;
  if (lower.includes('ai integration')) return Binary;
  if (lower.includes('document & data') || lower.includes('document processing')) return FileText;
  if (lower.includes('search & knowledge')) return Search;
  if (lower.includes('data analytics')) return LineChart;
  if (lower.includes('custom ai')) return Cpu;

  // Recruitment
  if (lower.includes('permanent recruitment')) return UserCheck;
  if (lower.includes('contract staffing')) return Briefcase;
  if (lower.includes('temporary staffing')) return Clock;
  if (lower.includes('it & technology recruitment')) return Laptop;
  if (lower.includes('professional & corporate recruitment')) return Building;
  if (lower.includes('project-based hiring')) return FolderKanban;
  if (lower.includes('volume recruitment')) return Users;
  if (lower.includes('candidate screening')) return UserSearch;
  if (lower.includes('talent sourcing')) return Target;
  if (lower.includes('recruitment process support')) return Handshake;

  return CheckCircle2;
};

// Details & value proposition for each deliverable on card flip
const getDeliverableDetail = (text: string): DeliverableDetail => {
  const lower = text.toLowerCase();

  // IT Services
  if (lower.includes('consulting & advisory') || lower.includes('it consulting')) {
    return {
      description: 'Strategic IT roadmaps, digital architecture assessments, and vendor evaluations designed to modernize enterprise technology.',
      tag: 'Strategy & ROI',
      points: ['Enterprise IT Roadmapping', 'Vendor & Technology Evaluation', 'IT Governance & Risk Management']
    };
  }
  if (lower.includes('digital transformation')) {
    return {
      description: 'Modernizing legacy processes with agile workflows, smart cloud tooling, and digital operating models.',
      tag: 'Modernization',
      points: ['Legacy Operating Modernisation', 'Agile Workflow Adoption', 'Digital Maturity Roadmaps']
    };
  }
  if (lower.includes('cloud solutions') || lower.includes('cloud migration')) {
    return {
      description: 'Zero-disruption cloud migration, multi-cloud architecture, DevOps automation, and cloud cost governance.',
      tag: 'Cloud & DevOps',
      points: ['Zero-Downtime Cloud Migration', 'AWS, Azure & Multi-Cloud Setup', 'DevOps CI/CD & Cost Control']
    };
  }
  if (lower.includes('application support')) {
    return {
      description: '24/7 SLA monitoring, continuous patching, fast issue resolution, bug fixes, and preventive system health checks.',
      tag: '24/7 Operations',
      points: ['24/7 Production SLA Monitoring', 'Proactive Patching & Bug Fixes', 'Performance Tuning & Audits']
    };
  }
  if (lower.includes('systems integration')) {
    return {
      description: 'Seamlessly connecting ERP, CRM, legacy platforms, and cloud systems via high-throughput, secure APIs.',
      tag: 'Integration',
      points: ['Custom REST & GraphQL APIs', 'ERP & CRM Data Synchronization', 'Legacy Middleware Modernisation']
    };
  }
  if (lower.includes('it infrastructure')) {
    return {
      description: 'Resilient network, server, storage setups, and automated disaster recovery for maximum business uptime.',
      tag: 'Infrastructure',
      points: ['High-Availability Architecture', 'Network & Server Engineering', 'Disaster Recovery & Redundancy']
    };
  }
  if (lower.includes('data & business intelligence') || lower.includes('bi solutions')) {
    return {
      description: 'Interactive analytics dashboards, consolidated data warehouses, and automated executive reporting.',
      tag: 'Analytics',
      points: ['Consolidated Data Warehousing', 'Executive KPI Dashboards', 'Automated Predictive Reporting']
    };
  }
  if (lower.includes('quality assurance') || lower.includes('qa & testing') || lower.includes('testing & quality')) {
    return {
      description: 'Automated regression, performance stress tests, cross-device testing, and end-to-end security validations.',
      tag: 'Zero Defect',
      points: ['Automated Regression Suites', 'Performance & Load Stress Testing', 'Cross-Platform Quality Checks']
    };
  }
  if (lower.includes('cybersecurity') || lower.includes('security') || lower.includes('risk')) {
    return {
      description: 'Proactive vulnerability assessments, continuous threat monitoring, and zero-trust security architecture.',
      tag: 'Cybersecurity',
      points: ['Threat Detection & Audits', 'Endpoint & Identity Security', 'Regulatory Compliance Readiness']
    };
  }
  if (lower.includes('technology project support')) {
    return {
      description: 'Dedicated agile sprint teams and certified technical PMs ensuring on-schedule, on-budget delivery.',
      tag: 'Agile Delivery',
      points: ['Certified Technical PM Leadership', 'Dedicated Sprint Engineers', 'Milestone-Driven Execution']
    };
  }

  // Products & Development
  if (lower.includes('custom software')) {
    return {
      description: 'Bespoke software architecture engineered around your unique business logic and high-throughput demands.',
      tag: 'Bespoke Code',
      points: ['Tailored Architecture Design', 'Clean Code Best Practices', 'Scalable Microservices']
    };
  }
  if (lower.includes('web application')) {
    return {
      description: 'Lightning-fast, reactive web applications built on modern React, Next.js, and cloud-native stacks.',
      tag: 'Web Platforms',
      points: ['Responsive Full-Stack Apps', 'Modern React & TypeScript', 'Fast Core Web Vitals & SEO']
    };
  }
  if (lower.includes('mobile application')) {
    return {
      description: 'Intuitive iOS & Android native and hybrid applications with seamless offline sync and high engagement.',
      tag: 'Mobile First',
      points: ['Native iOS & Android Apps', 'Cross-Platform React Native', 'Offline Sync & Fast Rendering']
    };
  }
  if (lower.includes('enterprise application')) {
    return {
      description: 'High-concurrency systems engineered for security, RBAC compliance, and mission-critical enterprise scale.',
      tag: 'Enterprise Scale',
      points: ['Multi-Tenant Architecture', 'Strict RBAC Compliance', 'Mission-Critical Reliability']
    };
  }
  if (lower.includes('saas product')) {
    return {
      description: 'Multi-tenant architecture, automated subscription billing, and resilient cloud microservices built to scale.',
      tag: 'SaaS Platform',
      points: ['Subscription & Billing Engines', 'Multi-Tenant Data Isolation', 'Elastic Cloud Auto-Scaling']
    };
  }
  if (lower.includes('api development')) {
    return {
      description: 'RESTful and GraphQL API design with rate-limiting, OAuth2 security, and developer-friendly specs.',
      tag: 'APIs & Microservices',
      points: ['High-Throughput Endpoints', 'Secure OAuth2 / JWT Auth', 'Interactive API Documentation']
    };
  }
  if (lower.includes('ui/ux design')) {
    return {
      description: 'User-centric wireframes, modern design systems, user journeys, and rapid interactive prototyping.',
      tag: 'Experience Design',
      points: ['User Journey Mapping', 'Figma Interactive Prototypes', 'Accessible Design Systems']
    };
  }
  if (lower.includes('application maintenance & enhancement')) {
    return {
      description: 'Continuous performance optimization, framework upgrades, security patches, and iterative feature enhancements.',
      tag: 'Enhancement',
      points: ['Framework & Library Upgrades', 'Proactive Security Patching', 'Feature Enhancement Sprints']
    };
  }
  if (lower.includes('modernisation') || lower.includes('modernization')) {
    return {
      description: 'Migrating legacy monoliths into cloud-native microservices with zero operational downtime.',
      tag: 'Refactoring',
      points: ['Legacy Code Decoupling', 'Docker & Kubernetes Containers', 'Zero-Downtime Cutover']
    };
  }

  // AI & Automation
  if (lower.includes('ai strategy')) {
    return {
      description: 'Comprehensive feasibility analysis, data readiness audits, ROI mapping, and prioritized AI roadmaps.',
      tag: 'AI Strategy',
      points: ['Feasibility & ROI Assessment', 'Data Readiness Auditing', 'Prioritized Implementation Roadmap']
    };
  }
  if (lower.includes('generative ai')) {
    return {
      description: 'Domain-specific LLM fine-tuning, RAG enterprise search, and automated generative agent workflows.',
      tag: 'GenAI & LLMs',
      points: ['Domain LLM Fine-Tuning', 'Enterprise RAG Search', 'Autonomous Agent Workflows']
    };
  }
  if (lower.includes('chatbots') || lower.includes('virtual assistants')) {
    return {
      description: 'Multilingual conversational assistants with deep CRM, ERP, and ticketing workflow integration.',
      tag: 'Conversational AI',
      points: ['Multilingual Natural NLP', 'CRM & Helpdesk Integration', '24/7 Automated Self-Service']
    };
  }
  if (lower.includes('business process automation') || lower.includes('rpa')) {
    return {
      description: 'RPA software bots that eliminate error-prone manual data entry, approvals, and system synchronization.',
      tag: 'RPA & Bots',
      points: ['RPA Software Bots', 'Automated Data Entry & Sync', 'Operational Error Reduction']
    };
  }
  if (lower.includes('workflow automation')) {
    return {
      description: 'Event-triggered smart orchestrations connecting cross-departmental operations and multi-tier approvals.',
      tag: 'Smart Workflows',
      points: ['Event-Triggered Routing', 'Multi-Level Approval Chains', 'Cross-Department Automation']
    };
  }
  if (lower.includes('ai integration')) {
    return {
      description: 'Embedding machine learning inference and scoring directly into active client portals and apps.',
      tag: 'Model Integration',
      points: ['RESTful Inference Endpoints', 'Real-Time Scoring Models', 'Non-Disruptive Architecture']
    };
  }
  if (lower.includes('document & data') || lower.includes('document processing')) {
    return {
      description: 'Intelligent OCR parsing for invoices, receipts, contracts, claims, and scanned physical forms.',
      tag: 'Cognitive OCR',
      points: ['Intelligent OCR Extraction', 'Automated Invoice & Claims Parse', 'Structured JSON/ERP Export']
    };
  }
  if (lower.includes('search & knowledge')) {
    return {
      description: 'Vector-indexed search delivering instant, contextual answers across internal wikis, PDFs, and docs.',
      tag: 'Semantic Search',
      points: ['Semantic Vector Search', 'Enterprise Document Indexing', 'Instant Contextual Retrieval']
    };
  }
  if (lower.includes('data analytics')) {
    return {
      description: 'Predictive modeling, executive dashboards, and real-time streaming data analytics.',
      tag: 'Analytics & BI',
      points: ['Predictive Modeling & Trends', 'Real-Time Data Pipelines', 'Executive KPI Dashboards']
    };
  }
  if (lower.includes('custom ai')) {
    return {
      description: 'Custom neural networks, computer vision, and predictive scoring algorithms built for your domain.',
      tag: 'Custom AI',
      points: ['Proprietary Neural Networks', 'Computer Vision & NLP', 'Tailored Model Architecture']
    };
  }

  // Recruitment
  if (lower.includes('permanent recruitment')) {
    return {
      description: 'Full-cycle executive and technical recruitment building high-performance, enduring in-house teams.',
      tag: 'Direct Hire',
      points: ['Executive Search & Leadership', 'End-to-End Candidate Vetting', 'Cultural & Technical Alignment']
    };
  }
  if (lower.includes('contract staffing')) {
    return {
      description: 'On-demand technical contractors ready to hit the ground running for critical project milestones.',
      tag: 'Flexible Staffing',
      points: ['On-Demand Specialists', 'Rapid Project Deployment', 'Flexible Engagement Terms']
    };
  }
  if (lower.includes('temporary staffing')) {
    return {
      description: 'Agile temporary workforce staffing to meet unexpected peak demands and seasonal business workloads.',
      tag: 'Agile Staffing',
      points: ['Immediate Workforce Coverage', 'Scalable Short-Term Placements', 'Compliance & Payroll Handled']
    };
  }
  if (lower.includes('it & technology recruitment')) {
    return {
      description: 'Vetted software engineers, architects, DevOps, cloud, and cybersecurity professionals.',
      tag: 'Tech Specialists',
      points: ['Full-Stack & Cloud Engineers', 'DevOps & Security Architects', 'Rigorous Technical Benchmarking']
    };
  }
  if (lower.includes('professional & corporate recruitment')) {
    return {
      description: 'Targeted recruitment for corporate finance, operations, HR, marketing, and leadership positions.',
      tag: 'Corporate Roles',
      points: ['Finance, HR & Operations Roles', 'Mid-to-Senior Management Search', 'Industry-Specific Candidate Pools']
    };
  }
  if (lower.includes('project-based hiring')) {
    return {
      description: 'Assembling complete project squads with tailored skill sets for time-boxed software deliveries.',
      tag: 'Project Squads',
      points: ['Turnkey Project Teams', 'Milestone-Aligned Contracts', 'Fast-Track Onboarding']
    };
  }
  if (lower.includes('volume recruitment')) {
    return {
      description: 'High-volume hiring campaigns with streamlined assessments, interview days, and fast turnaround.',
      tag: 'Mass Hiring',
      points: ['Mass Hiring Campaigns', 'Standardized Assessment Batches', 'Rapid Ramp-Up Times']
    };
  }
  if (lower.includes('candidate screening') || lower.includes('shortlisting')) {
    return {
      description: 'Rigorous technical coding assessments, culture-fit interviews, and comprehensive background checks.',
      tag: 'Vetted Talent',
      points: ['Live Coding Evaluations', 'Culture-Fit Benchmarking', 'Detailed Background Verification']
    };
  }
  if (lower.includes('talent sourcing')) {
    return {
      description: 'Proactive candidate headhunting, competitor talent mapping, and talent pool engagement.',
      tag: 'Talent Mapping',
      points: ['Passive Candidate Headhunting', 'Global & Regional Talent Mapping', 'Pre-Engaged Candidate Pipelines']
    };
  }
  if (lower.includes('recruitment process support')) {
    return {
      description: 'Consultative guidance optimizing job specifications, compensation benchmarking, and onboarding.',
      tag: 'HR Advisory',
      points: ['Job Description Optimization', 'Salary & Market Benchmarking', 'Offer Negotiation Support']
    };
  }

  return {
    description: 'Enterprise-grade expertise and dedicated consulting support tailored to your business needs.',
    tag: 'Consulting',
    points: ['End-to-End Implementation', 'Technical Best Practices', 'Ongoing Optimization']
  };
};

// Image helper to map each deliverable to its relevant thematic online image
const getDeliverableImage = (text: string): string => {
  const lower = text.toLowerCase();

  // IT Services
  if (lower.includes('consulting & advisory') || lower.includes('it consulting')) {
    return 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('digital transformation')) {
    return 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('cloud')) {
    return 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('application support')) {
    return 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('systems integration')) {
    return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('it infrastructure') || lower.includes('server')) {
    return 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('data & business') || lower.includes('bi solutions')) {
    return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('quality assurance') || lower.includes('qa & testing') || lower.includes('testing & quality')) {
    return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('cybersecurity') || lower.includes('security') || lower.includes('risk')) {
    return 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('technology project support')) {
    return 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80';
  }

  // Products & Development
  if (lower.includes('custom software')) {
    return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('web application')) {
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('mobile application')) {
    return 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('enterprise application')) {
    return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('saas product')) {
    return 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('api development')) {
    return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('ui/ux design') || lower.includes('ui/ux') || lower.includes('ux') || lower.includes('design')) {
    return 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('application maintenance & enhancement')) {
    return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('modernisation') || lower.includes('modernization')) {
    return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';
  }

  // AI & Automation
  if (lower.includes('ai strategy') || lower.includes('ai consulting')) {
    return '/services/AI, Machine Learning & Gen AI.webp';
  }
  if (lower.includes('generative ai')) {
    return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('chatbots') || lower.includes('virtual assistants')) {
    return 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('business process automation') || lower.includes('rpa')) {
    return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('workflow automation')) {
    return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('ai integration')) {
    return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('document & data') || lower.includes('document processing')) {
    return 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('search & knowledge')) {
    return 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('data analytics')) {
    return 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('custom ai')) {
    return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80';
  }

  // Recruitment
  if (lower.includes('permanent recruitment')) {
    return 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('contract staffing')) {
    return 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('temporary staffing')) {
    return 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('it & technology recruitment')) {
    return 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('professional & corporate recruitment')) {
    return 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('project-based hiring')) {
    return 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('volume recruitment')) {
    return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('candidate screening') || lower.includes('shortlisting')) {
    return 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('talent sourcing')) {
    return 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80';
  }
  if (lower.includes('recruitment process support')) {
    return 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80';
  }

  return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';
};


export function ServicesPage({
  activeServiceId = 'it-services',
  onSelectService,
  onOpenModal,
  onNavigateHome: _onNavigateHome
}: ServicesPageProps) {
  // 3D Card flip state for mobile / tap interaction
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCardFlip = (idx: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Find current service, default to first
  const currentService = servicesList.find((s) => s.id === activeServiceId) || servicesList[0];
  const otherServices = servicesList.filter((s) => s.id !== currentService.id);


  // Approach steps
  const approachSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We learn your business goals and challenges.',
      icon: Search
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We design practical, scalable solutions.',
      icon: Settings
    },
    {
      num: '03',
      title: 'Implement',
      desc: 'We deliver with expertise and best practices.',
      icon: Rocket
    },
    {
      num: '04',
      title: 'Support',
      desc: 'We ensure long-term success and improvement.',
      icon: BarChart3
    }
  ];

  // Key benefits
  const keyBenefits = [
    { title: 'Improved Efficiency', icon: Zap },
    { title: 'Scalable Solutions', icon: Maximize2 },
    { title: 'Reliable Support', icon: ShieldCheck },
    { title: 'Business-Focused Approach', icon: Target },
    { title: 'Long-Term Value', icon: TrendingUp }
  ];

  // Service specific quote & deliverables
  const getServiceMetadata = (id: string) => {
    switch (id) {
      case 'it-services':
        return {
          numLabel: 'IT SERVICES',
          quote: 'Reliable IT Solutions for a Smarter, Future-Ready Business.',
          cloudImage: '/services/Cloud Computing & Digital Transformation.webp',
          includeTitle: 'OUR IT SERVICES INCLUDE',
          deliverables: [
            'IT Consulting & Advisory',
            'Digital Transformation Support',
            'Cloud Solutions & Migration',
            'Application Support & Maintenance',
            'Systems Integration',
            'IT Infrastructure Support',
            'Data & Business Intelligence Solutions',
            'Quality Assurance & Testing',
            'Cybersecurity & Risk Management',
            'Technology Project Support'
          ],
          ctaBannerTitle: 'READY TO MODERNIZE YOUR IT ENVIRONMENT?',
          ctaBannerSub: "Let's Build a Stronger, Smarter Business Together.",
          approachClosing: 'Our approach combines technical expertise with a clear understanding of business needs, helping organisations implement practical, scalable, and reliable technology solutions.'
        };
      case 'products-application-development':
        return {
          numLabel: 'PRODUCTS & APPLICATION DEVELOPMENT',
          quote: 'Scalable, Secure, and User-Friendly Digital Products Tailored to You.',
          cloudImage: '/services/Product Development & Application Engineering.webp',
          includeTitle: 'OUR DEVELOPMENT SERVICES INCLUDE',
          deliverables: [
            'Custom Software Development',
            'Web Application Development',
            'Mobile Application Development',
            'Enterprise Application Development',
            'SaaS Product Development',
            'API Development & Integration',
            'UI/UX Design',
            'Application Modernisation',
            'Testing & Quality Assurance',
            'Application Maintenance & Enhancement'
          ],
          ctaBannerTitle: 'READY TO TURN IDEAS INTO DIGITAL PRODUCTS?',
          ctaBannerSub: "Let's Engineer Scalable Applications for Your Business.",
          approachClosing: 'Whether you are developing a new digital product, automating an internal process, or modernising an existing application, Aamesh Consulting Services can provide the technical support required throughout the development lifecycle.'
        };
      case 'ai-automation-services':
        return {
          numLabel: 'AI & AUTOMATION SERVICES',
          quote: 'Smart Automation and Cognitive AI for Modern Business Agility.',
          cloudImage: '/services/AI, Machine Learning & Gen AI.webp',
          includeTitle: 'OUR AI & AUTOMATION SERVICES INCLUDE',
          deliverables: [
            'AI Strategy & Consulting',
            'Generative AI Solutions',
            'AI-Powered Chatbots & Virtual Assistants',
            'Business Process Automation',
            'Intelligent Workflow Automation',
            'AI Integration with Existing Applications',
            'Document & Data Processing Automation',
            'AI-Powered Search & Knowledge Solutions',
            'Data Analytics & Business Intelligence',
            'Custom AI Application Development'
          ],
          ctaBannerTitle: 'READY TO ACCELERATE WITH AI & AUTOMATION?',
          ctaBannerSub: 'Unlock Intelligent Automation and Real-Time Business Insights.',
          approachClosing: 'Whether you are exploring AI for the first time or looking to integrate intelligent capabilities into an existing application or workflow, we can help identify suitable opportunities and develop solutions aligned with your business requirements.'
        };
      case 'recruitment-solutions':
      default:
        return {
          numLabel: 'RECRUITMENT SOLUTIONS',
          quote: 'Empowering Growth by Aligning Top-Tier Talent with Visionary Teams.',
          cloudImage: '/services/Staffing Solutions.webp',
          includeTitle: 'OUR RECRUITMENT SOLUTIONS INCLUDE',
          deliverables: [
            'Permanent Recruitment',
            'Contract Staffing',
            'Temporary Staffing',
            'IT & Technology Recruitment',
            'Professional & Corporate Recruitment',
            'Project-Based Hiring',
            'Volume Recruitment',
            'Candidate Screening & Shortlisting',
            'Talent Sourcing',
            'Recruitment Process Support'
          ],
          ctaBannerTitle: 'READY TO HIRE HIGH-IMPACT TALENT?',
          ctaBannerSub: 'Connect with Experienced Professionals Matching Your Goals.',
          approachClosing: 'We aim to make recruitment simpler and more efficient by understanding the role, identifying suitable candidates, and supporting the hiring process from sourcing through to placement.'
        };
    }
  };

  const meta = getServiceMetadata(currentService.id);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-0 pb-16 relative overflow-hidden font-sans">

      {/* Main Content Body */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* ========================================================
            2. ACTIVE SERVICE DETAIL SECTION
            ======================================================== */}
        <section id="service-detail-section" className="py-8 md:py-12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Paragraphs & Button */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
                  {meta.numLabel}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#012854] tracking-tight leading-[1.12] font-sans">
                {currentService.id === 'it-services' && (
                  <>
                    Technology Solutions That <br className="hidden sm:inline" />
                    <span className="text-gradient-primary-light font-bold">Support Your Business</span>
                  </>
                )}
                {currentService.id === 'products-application-development' && (
                  <>
                    Turning Ideas into <br className="hidden sm:inline" />
                    <span className="text-gradient-primary-light font-bold">Digital Solutions</span>
                  </>
                )}
                {currentService.id === 'ai-automation-services' && (
                  <>
                    Intelligent Capabilities &amp; <br className="hidden sm:inline" />
                    <span className="text-gradient-primary-light font-bold">Scalable Automation</span>
                  </>
                )}
                {currentService.id === 'recruitment-solutions' && (
                  <>
                    Connecting Businesses with <br className="hidden sm:inline" />
                    <span className="text-gradient-primary-light font-bold">the Right Talent</span>
                  </>
                )}
              </h2>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#3D3E42] font-normal leading-relaxed">
                <p>{currentService.desc}</p>
                {currentService.id === 'it-services' && (
                  <p>
                    Whether you need support for an existing technology environment or expertise for a new initiative, we work closely with your organisation to understand your requirements and provide solutions aligned with your business objectives.
                  </p>
                )}
                {currentService.id === 'products-application-development' && (
                  <p>
                    From an initial concept through development, testing, deployment, and ongoing enhancement, our focus is on creating secure, scalable, and user-friendly solutions tailored to your requirements.
                  </p>
                )}
                {currentService.id === 'ai-automation-services' && (
                  <p>
                    Whether you are exploring AI for the first time or looking to integrate intelligent capabilities into an existing application or workflow, we can help identify suitable opportunities and develop solutions aligned with your business requirements.
                  </p>
                )}
                {currentService.id === 'recruitment-solutions' && (
                  <p>
                    Finding qualified technology professionals with the right skill set can be challenging. We help organizations access technology talent through flexible engagement options aligned with your project requirements.
                  </p>
                )}
              </div>

              {meta.approachClosing && (
                <div className="border-l-4 border-[#B77805] bg-amber-500/10 pl-4 py-3.5 pr-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-[#012854] font-medium italic leading-relaxed">
                    {meta.approachClosing}
                  </p>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal(currentService.title)}
                  className="bg-gradient-to-r from-[#012854] via-[#012F62] to-[#B77805] hover:from-[#012F62] hover:via-[#B77805] hover:to-[#CE9116] text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 group"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Floating Cloud Ecosystem Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-blue-200/80 shadow-[0_20px_50px_-10px_rgba(1,40,84,0.25)] group-hover:shadow-[0_25px_60px_-10px_rgba(183,120,5,0.35)] transition-all duration-500 group">
                <img
                  src={meta.cloudImage}
                  alt={currentService.title}
                  className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                {/* Gold Glow Arc */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. SCOPE & DELIVERABLES SECTION (Centered Header + 5 Cards Per Row)
            ======================================================== */}
        <section className="py-8 md:py-12">
          {/* Centered Section Header & Description */}
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
                {meta.includeTitle}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-[#012854] leading-[1.12] mb-5 font-sans">
              Comprehensive Capabilities <br className="hidden sm:inline" />
              <span className="text-gradient-primary-light font-bold">Built Around Your Needs</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#3D3E42] font-normal leading-relaxed max-w-2xl mx-auto">
              {meta.quote}
            </p>
          </div>

          {/* 4 Cards Per Row Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {meta.deliverables.map((item, idx) => {
              const DeliverableIcon = getDeliverableIcon(item);
              const detail = getDeliverableDetail(item);
              const deliverableImg = getDeliverableImage(item);
              const isFlipped = !!flippedCards[idx];
              const isCenteredPairStart = meta.deliverables.length % 4 === 2 && idx === meta.deliverables.length - 2;

              return (
                <div
                  key={idx}
                  className={`perspective-1000 h-[330px] sm:h-[350px] w-full select-none cursor-pointer group/card ${isCenteredPairStart ? 'lg:col-start-2' : ''
                    }`}
                  onClick={() => toggleCardFlip(idx)}
                >
                  <div
                    className={`relative w-full h-full duration-700 transform-style-3d transition-transform rounded-2xl ${isFlipped ? 'rotate-y-180' : ''
                      } group-hover/card:rotate-y-180`}
                  >
                    {/* FRONT FACE: Clean Image + Service Name Overlay Only */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-blue-200/80 group-hover/card:border-amber-500/50 shadow-lg group-hover/card:shadow-[0_20px_45px_-10px_rgba(1,40,84,0.35)] flex flex-col justify-end p-5 transition-all duration-500 bg-white">
                      <img
                        src={deliverableImg}
                        alt={item}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/services/Product Development & Application Engineering.webp';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                      {/* Bottom: Service Name */}
                      <div className="relative z-10">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug tracking-tight drop-shadow-md">
                          {item}
                        </h4>
                      </div>
                    </div>

                    {/* BACK FACE (Rotated 180deg): Clean Standalone Icon + Title + Description + Bullet List */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-[#B77805]/40 shadow-2xl bg-gradient-to-br from-[#012854] via-[#01346e] to-[#012147] p-5 sm:p-6 flex flex-col justify-center space-y-3.5 text-left text-white">
                      {/* Subtle Ambient Glow */}
                      <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                      {/* Standalone Centered Icon + Service Title */}
                      <div className="relative z-10 flex flex-col items-center text-center w-full">
                        <div className="mb-2 text-[#FFD54A] group-hover/card:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <DeliverableIcon className="w-9 h-9 sm:w-10 sm:h-10 text-[#FFD54A] drop-shadow-[0_0_16px_rgba(255,213,74,0.45)]" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#FFD54A] tracking-tight leading-snug">
                          {item}
                        </h4>
                      </div>

                      {/* Description & Key Points */}
                      <div className="relative z-10 w-full space-y-2.5">
                        <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal text-left">
                          {detail.description}
                        </p>

                        {detail.points && detail.points.length > 0 && (
                          <div className="w-full space-y-2 text-left pt-1">
                            {detail.points.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-100">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD54A] shrink-0" />
                                <span className="leading-snug font-medium">{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. OUR APPROACH SECTION (Unified Card Container)
            ======================================================== */}
        <section className="py-8 md:py-12">
          <div className="bg-white border border-blue-200/80 rounded-2xl sm:rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-10px_rgba(1,40,84,0.12)] hover:shadow-[0_25px_60px_-10px_rgba(1,40,84,0.18)] transition-all duration-500 relative overflow-hidden">

            {/* Top-Left Section Title Badge */}
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-10 relative z-10">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
                OUR APPROACH
              </span>
            </div>

            {/* 4 Steps Row with Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {approachSteps.map((step, idx) => {
                const StepIcon = step.icon;

                return (
                  <div
                    key={idx}
                    className={`flex items-start justify-between gap-3 p-4 sm:p-5 lg:py-2 ${idx < 3 ? 'border-b border-slate-200' : ''
                      } ${idx === 0 ? 'md:border-r md:border-b md:border-slate-200 md:pr-6 lg:pl-0 lg:pr-6' : ''
                      } ${idx === 1 ? 'md:border-r-0 md:border-b md:border-slate-200 md:pl-6 lg:px-6' : ''
                      } ${idx === 2 ? 'md:border-r md:border-b-0 md:border-slate-200 md:pr-6 lg:px-6' : ''
                      } ${idx === 3 ? 'md:border-r-0 md:border-b-0 md:pl-6 lg:pl-6 lg:pr-0' : ''
                      } ${idx < 3 ? 'lg:border-r lg:border-b-0 lg:border-slate-200' : 'lg:border-r-0 lg:border-b-0'
                      }`}
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      {/* Icon - Larger size, no background circles */}
                      <div className="flex items-center justify-center text-[#B77805] shrink-0 mt-0.5">
                        <StepIcon className="w-9 h-9 sm:w-10 sm:h-10 text-[#B77805]" />
                      </div>

                      {/* Number, Title, Description */}
                      <div className="space-y-1">
                        <div className="text-xl sm:text-2xl font-bold font-mono text-[#012854]/40 leading-none">
                          {step.num}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#012854] tracking-tight leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-[#3D3E42] leading-relaxed font-normal pt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Arrow (Steps 0, 1, 2 only) */}
                    {idx < 3 && (
                      <div className="shrink-0 pt-2 text-[#B77805]">
                        <ArrowRight className="w-4 h-4 text-[#B77805]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            6. KEY BENEFITS SECTION (5 Benefits in a row)
            ======================================================== */}
        <section className="py-8 md:py-12">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
              KEY BENEFITS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {keyBenefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;

              return (
                <div key={idx} className="flex flex-col items-center group bg-white border border-blue-200/80 rounded-2xl p-5 shadow-md hover:shadow-[0_15px_35px_-8px_rgba(1,40,84,0.18)] transition-all duration-300">
                  <div className="mb-3 text-[#B77805] transition-transform duration-300 group-hover:scale-110">
                    <BenefitIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#B77805] drop-shadow-sm" />
                  </div>
                  <h5 className="text-xs sm:text-sm font-semibold text-[#012854] leading-snug group-hover:text-[#B77805] transition-colors">
                    {benefit.title}
                  </h5>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            7. EXPLORE OUR OTHER SERVICES
            ======================================================== */}
        <section className="py-8 md:py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
                EXPLORE OUR OTHER SERVICES
              </span>
            </div>
            <p className="text-sm text-[#3D3E42]">
              Discover how our other services can help you grow further.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-blue-200/80 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_25px_60px_-12px_rgba(1,40,84,0.22)]"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#012854] mb-2 group-hover:text-[#B77805] transition-colors leading-snug font-sans">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#3D3E42] leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onSelectService(service.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B77805] hover:text-[#012854] transition-colors cursor-pointer group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. CALL TO ACTION BANNER (Final Section)
            ======================================================== */}
        <section className="py-8 md:py-12">
          <div
            className="relative rounded-2xl md:rounded-3xl bg-[#012854] border border-amber-500/30 p-8 sm:p-10 md:p-12 overflow-hidden shadow-[0_25px_60px_-12px_rgba(1,40,84,0.4)] flex flex-col md:flex-row items-center justify-between gap-6 text-white"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#012854] via-[#01346e] to-[#012147] pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 space-y-2 text-center md:text-left max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-[38px] font-bold tracking-tight text-white leading-[1.15] font-sans">
                <span className="text-[#FFD54A]">{meta.ctaBannerTitle}</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
                {meta.ctaBannerSub}
              </p>
            </div>

            {/* Right Action Button */}
            <button
              onClick={() => onOpenModal(currentService.title)}
              className="relative z-10 bg-[#B77805] hover:bg-white text-white hover:text-[#012854] font-bold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 shrink-0 group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
