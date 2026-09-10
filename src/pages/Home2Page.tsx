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
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* LIGHT THEME TOP WRAPPER WITH HERO & HEADER ON UNIFORM AMBIENT VIDEO BACKGROUND */}
      <div className="relative w-full bg-[#F0F4FA] overflow-hidden">
        {/* Ambient Background Video (Covers Header & Hero Area) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/69f8ec4cbac699d72af25679%2F69fa5ac71aaf65a868d1fe1d_Bg-Video_poster.0000000.jpg"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          >
            <source
              src="https://cdn.prod.website-files.com/69f8ec4cbac699d72af25679%2F69fa5ac71aaf65a868d1fe1d_Bg-Video_mp4.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F4FA]/30 via-[#F0F4FA]/60 to-[#F0F4FA]" />
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
