import React from 'react';

export type NavTab = 'HOME' | 'HOME 2' | 'ABOUT US' | 'SERVICES' | 'TECHNOLOGY' | 'PRODUCTS' | 'CONTACT US';

export interface ServiceModalData {
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  image: string;
  modalData?: ServiceModalData;
}

export interface MarqueeItem {
  name: string;
  category?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor?: string;
}

export interface ProductItem {
  badge: string;
  title: string;
  desc: string;
  image: string;
  features: string[];
}

export interface CoeItem {
  num: string;
  title: string;
  desc: string;
  capabilities: string[];
  cta: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accentGlow: string;
}

export interface IdeaToSolutionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}
