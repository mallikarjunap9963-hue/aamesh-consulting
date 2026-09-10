import type { ProductItem } from '../types';

export const productsList: ProductItem[] = [
  {
    badge: 'AGILE & DELIVERY',
    title: 'Project Management Suite',
    desc: 'Agile project, task, sprint, workflow, and delivery management built for enterprise teams.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1400&q=80',
    features: ['Sprint & Kanban Boards', 'Gantt & Timeline Tracking', 'Resource & Workload Management']
  },
  {
    badge: 'TALENT & HR OPS',
    title: 'HR & Recruitment Platform',
    desc: 'Streamline candidate pipelines, interview scheduling, offer letters, and onboarding.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80',
    features: ['ATS Candidate Pipelines', 'Automated Interview Scheduling', 'Digital Employee Onboarding']
  },
  {
    badge: 'FINANCE & INVOICING',
    title: 'Billing & Invoicing System',
    desc: 'Automate invoicing, recurring payments, revenue tracking, and account receivables.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80',
    features: ['Automated Recurring Invoices', 'Multi-Currency Gateway Sync', 'Real-Time Revenue Analytics']
  },
  {
    badge: 'GEN AI & OCR',
    title: 'AI Assistant & Document Intelligence',
    desc: 'Analyze business documents, extract data automatically, and power RAG knowledge search.',
    image: '/services/AI, Machine Learning & Gen AI.webp',
    features: ['RAG Knowledge Search Engine', 'Automated PDF/OCR Extraction', 'Custom LLM Agent Integration']
  },
  {
    badge: 'PAYROLL & HR',
    title: 'Employee Lifecycle & Payroll',
    desc: 'Complete HRMS: attendance tracking, automated payroll, leave management, and appraisals.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    features: ['Automated Payroll Processing', 'Biometric & Attendance Sync', 'Performance & Appraisal Engine']
  },
  {
    badge: 'ACADEMIC & CAMPUS',
    title: 'School & College Management',
    desc: 'All-in-one campus ERP for admissions, student records, fee collection, and grading.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
    features: ['Student & Parent Portals', 'Online Fee Collection & Receipts', 'Exam & Grade Card Generator']
  }
];
