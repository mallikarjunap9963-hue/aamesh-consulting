import type { NavTab, ServiceModalData } from '../types';
import { Header } from '../components/layout/Header';
import { FooterLight } from '../components/layout/FooterLight';
import { HeroSectionLight } from '../components/sections/light/HeroSectionLight';
import { AboutSectionLight } from '../components/sections/light/AboutSectionLight';
import { ServicesSectionLight } from '../components/sections/light/ServicesSectionLight';
import { CentersOfExcellenceLight } from '../components/sections/light/CentersOfExcellenceLight';
import { ProductsSectionLight } from '../components/sections/light/ProductsSectionLight';
import { CustomDevSectionLight } from '../components/sections/light/CustomDevSectionLight';
import { TechnologySectionLight } from '../components/sections/light/TechnologySectionLight';
import { ContactSectionLight } from '../components/sections/light/ContactSectionLight';

interface Home2PageProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  prefersReducedMotion: boolean;
  onNavigateToServices: (serviceId?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateHome2: () => void;
  onOpenContactModal: (serviceName?: string) => void;
  setActiveServiceModal: (data: ServiceModalData | null) => void;
}

export function Home2Page({
  activeTab,
  setActiveTab,
  prefersReducedMotion,
  onNavigateToServices,
  onNavigateHome,
  onNavigateHome2,
  onOpenContactModal,
  setActiveServiceModal
}: Home2PageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* LIGHT THEME TOP WRAPPER WITH HERO & HEADER ON UNIFORM AMBIENT VIDEO BACKGROUND */}
      <div className="relative w-full bg-white overflow-hidden">
        {/* Ambient Background Overlay (Clean White Ambient) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute inset-0 bg-white" />
        </div>

        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentPage="HOME2"
          isLightTheme={true}
          onNavigateToServices={onNavigateToServices}
          onNavigateHome={onNavigateHome}
          onNavigateHome2={onNavigateHome2}
          onOpenContactModal={() => onOpenContactModal()}
        />

        {/* HERO SECTION LIGHT */}
        <HeroSectionLight
          prefersReducedMotion={prefersReducedMotion}
          onNavigateToServices={() => onNavigateToServices('it-services')}
        />
      </div>

      {/* ABOUT SECTION LIGHT */}
      <AboutSectionLight
        prefersReducedMotion={prefersReducedMotion}
        onNavigateToServices={() => onNavigateToServices('it-services')}
      />

      {/* SERVICES SECTION LIGHT */}
      <ServicesSectionLight
        onOpenModal={() => onOpenContactModal()}
        onSelectServiceModal={(service) => setActiveServiceModal(service.modalData || null)}
        onNavigateToServices={onNavigateToServices}
      />

      {/* CENTERS OF EXCELLENCE LIGHT */}
      <CentersOfExcellenceLight onOpenModal={() => onOpenContactModal()} />

      {/* PRODUCTS SECTION LIGHT */}
      <ProductsSectionLight onOpenModal={() => onOpenContactModal()} />

      {/* CUSTOM DEV SECTION LIGHT */}
      <CustomDevSectionLight onOpenModal={() => onOpenContactModal()} />

      {/* TECHNOLOGY SECTION LIGHT */}
      <TechnologySectionLight prefersReducedMotion={prefersReducedMotion} />

      {/* CONTACT SECTION LIGHT */}
      <ContactSectionLight onOpenModal={() => onOpenContactModal()} />

      {/* FOOTER LIGHT / CORPORATE NAVY FOOTER */}
      <FooterLight
        onOpenContactModal={() => onOpenContactModal()}
        onSelectServiceModal={(service) => setActiveServiceModal(service.modalData || null)}
        onNavigateToServices={onNavigateToServices}
        onNavigateHome={onNavigateHome}
      />
    </div>
  );
}
