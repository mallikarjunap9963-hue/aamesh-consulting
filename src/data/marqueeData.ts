import {
  Cpu,
  Bot,
  BrainCircuit,
  Server,
  Building2,
  Atom,
  Leaf,
  BarChart3,
  Network,
  GitBranch,
  Workflow,
  CloudCog,
  Boxes,
  Activity,
  Database
} from 'lucide-react';
import type { MarqueeItem } from '../types';

export const techMarqueeRow1: MarqueeItem[] = [
  { name: 'Amazon Web Services (AWS)', category: 'Cloud Infrastructure', icon: Server, iconColor: '#ff9900' },
  { name: 'Microsoft Azure', category: 'Enterprise Cloud', icon: CloudCog, iconColor: '#0078d4' },
  { name: 'Google Cloud Platform (GCP)', category: 'Multi-Cloud', icon: Network, iconColor: '#4285f4' },
  { name: 'SAP S/4HANA & ERP', category: 'Enterprise ERP', icon: Building2, iconColor: '#fac400' },
  { name: 'Generative AI & LLMs', category: 'Artificial Intelligence', icon: BrainCircuit, iconColor: '#10b981' },
  { name: 'OpenAI GPT-4 & RAG Search', category: 'GenAI Frameworks', icon: Bot, iconColor: '#a855f7' },
  { name: 'PyTorch & TensorFlow', category: 'Machine Learning', icon: Cpu, iconColor: '#ee4c2c' },
  { name: 'React & Next.js', category: 'Frontend Engineering', icon: Atom, iconColor: '#61dafb' }
];

export const techMarqueeRow2: MarqueeItem[] = [
  { name: 'Node.js & Python FastAPI', category: 'Backend Systems', icon: GitBranch, iconColor: '#68a063' },
  { name: 'Kubernetes & Docker Containerization', category: 'DevOps & SRE', icon: Boxes, iconColor: '#326ce5' },
  { name: 'Snowflake & Databricks Data Lake', category: 'Data Engineering', icon: Database, iconColor: '#29b5e8' },
  { name: 'PowerBI & Tableau BI Dashboards', category: 'Business Intelligence', icon: BarChart3, iconColor: '#f2c811' },
  { name: 'UiPath & Intelligent Automation RPA', category: 'Workflow Automation', icon: Workflow, iconColor: '#fa6400' },
  { name: 'Zero-Trust Cybersecurity & SOC2', category: 'Security & Compliance', icon: Activity, iconColor: '#ef4444' },
  { name: 'Agile & Enterprise PMO Delivery', category: 'Project Governance', icon: Leaf, iconColor: '#fac400' }
];
