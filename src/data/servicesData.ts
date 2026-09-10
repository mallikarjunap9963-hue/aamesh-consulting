import type { ServiceItem } from '../types';

export const servicesList: ServiceItem[] = [
  {
    id: 'it-services',
    num: '01',
    title: 'IT Services',
    desc: 'We provide flexible IT services designed to help businesses improve efficiency, modernise operations, and make better use of technology.',
    bullets: [
      'IT Consulting & Advisory',
      'Digital Transformation Support',
      'Cloud Solutions & Migration',
      'Application Support & Maintenance'
    ],
    cta: 'Explore More',
    image: '/services/IT Services & Infrastructure Management.webp',
    modalData: {
      title: 'IT Services',
      subtitle: 'Technology Solutions That Support Your Business',
      description: 'We provide flexible IT services designed to help businesses improve efficiency, modernise operations, and make better use of technology.',
      deliverables: [
        'IT Consulting & Advisory',
        'Digital Transformation Support',
        'Cloud Solutions & Migration',
        'Application Support & Maintenance'
      ]
    }
  },
  {
    id: 'products-application-development',
    num: '02',
    title: 'Products & Application Development',
    desc: 'We design and develop digital products and applications that help businesses solve problems, improve customer experiences, and streamline operations.',
    bullets: [
      'SaaS Product Development',
      'API Development & Integration',
      'UI/UX Design',
      'Application Modernisation'
    ],
    cta: 'Explore More',
    image: '/services/Product Development & Application Engineering.webp',
    modalData: {
      title: 'Products & Application Development',
      subtitle: 'Turning Ideas into Digital Solutions',
      description: 'We design and develop digital products and applications that help businesses solve problems, improve customer experiences, and streamline operations.',
      deliverables: [
        'SaaS Product Development',
        'API Development & Integration',
        'UI/UX Design',
        'Application Modernisation'
      ]
    }
  },
  {
    id: 'ai-automation-services',
    num: '03',
    title: 'Our AI & Automation Services',
    desc: 'Exploring AI for the first time or looking to integrate intelligent capabilities into an existing application.',
    bullets: [
      'AI Strategy & Consulting',
      'Generative AI Solutions',
      'AI-Powered Chatbots & Virtual Assistants',
      'Business Process Automation'
    ],
    cta: 'Explore More',
    image: '/services/AI, Machine Learning & Gen AI.webp',
    modalData: {
      title: 'Our AI & Automation Services',
      subtitle: 'Intelligent Capabilities & Process Automation',
      description: 'Exploring AI for the first time or looking to integrate intelligent capabilities into an existing application.',
      deliverables: [
        'AI Strategy & Consulting',
        'Generative AI Solutions',
        'AI-Powered Chatbots & Virtual Assistants',
        'Business Process Automation'
      ]
    }
  },
  {
    id: 'recruitment-solutions',
    num: '04',
    title: 'Recruitment Solutions',
    desc: 'Finding the right people is essential to building a successful organisation. Our recruitment solutions help businesses identify and engage skilled professionals who match their technical requirements, organisational needs, and long-term objectives.',
    bullets: [
      'Permanent Recruitment',
      'Contract Staffing',
      'Temporary Staffing',
      'IT & Technology Recruitment'
    ],
    cta: 'Explore More',
    image: '/services/Staffing Solutions.webp',
    modalData: {
      title: 'Recruitment Solutions',
      subtitle: 'Connecting Businesses with the Right Talent',
      description: 'Finding the right people is essential to building a successful organisation. Our recruitment solutions help businesses identify and engage skilled professionals who match their technical requirements, organisational needs, and long-term objectives.',
      deliverables: [
        'Permanent Recruitment',
        'Contract Staffing',
        'Temporary Staffing',
        'IT & Technology Recruitment'
      ]
    }
  }
];
