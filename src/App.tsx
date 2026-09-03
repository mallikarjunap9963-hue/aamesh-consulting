import { useState, useEffect } from 'react';
import type { NavTab, ServiceModalData } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/modals/ContactModal';
import { ServiceModal } from './components/modals/ServiceModal';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CentersOfExcellence } from './components/sections/CentersOfExcellence';
import { ProductsSection } from './components/sections/ProductsSection';
import { CustomDevSection } from './components/sections/CustomDevSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('HOME');
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceModalData | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#080709] text-white flex flex-col font-sans selection:bg-[#fac400] selection:text-[#080709]">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      <HeroSection prefersReducedMotion={prefersReducedMotion} />
      <AboutSection prefersReducedMotion={prefersReducedMotion} />
      <ServicesSection
        onOpenModal={() => setIsContactModalOpen(true)}
        onSelectServiceModal={(service) => setActiveServiceModal(service.modalData)}
      />
      <CentersOfExcellence onOpenModal={() => setIsContactModalOpen(true)} />
      <ProductsSection onOpenModal={() => setIsContactModalOpen(true)} />
      <CustomDevSection onOpenModal={() => setIsContactModalOpen(true)} />
      <TechnologySection prefersReducedMotion={prefersReducedMotion} />
      <ContactSection onOpenModal={() => setIsContactModalOpen(true)} />

      <Footer
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onSelectServiceModal={(service) => setActiveServiceModal(service.modalData)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ServiceModal
        data={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />
    </div>
  );
}

export default App;
