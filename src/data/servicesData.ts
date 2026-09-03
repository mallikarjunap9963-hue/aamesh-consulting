import type { ServiceItem } from '../types';

export const servicesList: ServiceItem[] = [
  {
    id: 'it-services',
    num: '01',
    title: 'IT Services & Infrastructure Management',
    desc: 'Reliable technology infrastructure and IT support designed to improve performance, availability, security, and operational efficiency.',
    cta: 'Explore IT Services →',
    image: '/services/IT Services & Infrastructure Management.webp',
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
    image: '/services/Cloud Computing & Digital Transformation.webp',
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
    image: '/services/ERP & SAP Consulting.webp',
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
    image: '/services/AI, Machine Learning & Gen AI.webp',
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
    image: '/services/Product Development & Application Engineering.webp',
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
    image: '/services/Data Analytics & Business Intelligence.webp',
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
    image: '/services/Cybersecurity & Risk Management.webp',
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
    image: '/services/Automation & Intelligent Operations.png',
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
    image: '/services/Strategic Consulting & PMO.webp',
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
    image: '/services/Staffing Solutions.webp',
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
