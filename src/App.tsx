import { useState, useEffect } from 'react';
import type { NavTab, ServiceModalData } from './types';
import { Header } from './components/layout/Header';
import { FooterLight } from './components/layout/FooterLight';
import { ServiceModal } from './components/modals/ServiceModal';
import { ServicesPage, ServicesHeroSection } from './pages/ServicesPage';
import { Home2Page } from './pages/Home2Page';

function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('HOME');
  const [currentPage, setCurrentPage] = useState<'HOME' | 'SERVICES'>('HOME');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('it-services');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceModalData | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Hash-based sync for Services page and Home page
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash === '#services' || hash.startsWith('#service-') || hash.startsWith('#services/')) {
        setCurrentPage('SERVICES');
        setActiveTab('SERVICES');
        if (hash.startsWith('#service-')) {
          const serviceId = hash.replace('#service-', '');
          setSelectedServiceId(serviceId);
        } else if (hash.startsWith('#services/')) {
          const serviceId = hash.replace('#services/', '');
          setSelectedServiceId(serviceId);
        }
      } else {
        setCurrentPage('HOME');
        if (hash === '#about') setActiveTab('ABOUT US');
        else if (hash === '#technology') setActiveTab('TECHNOLOGY');
        else if (hash === '#contact-us') setActiveTab('CONTACT US');
        else if (hash === '#cards-section') setActiveTab('PRODUCTS');
        else setActiveTab('HOME');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const navigateToServices = (serviceId?: string) => {
    setCurrentPage('SERVICES');
    setActiveTab('SERVICES');
    if (serviceId) {
      setSelectedServiceId(serviceId);
      window.location.hash = `#service-${serviceId}`;
    } else {
      window.location.hash = '#services';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (sectionId?: string) => {
    setCurrentPage('HOME');
    setActiveTab('HOME');
    if (window.location.hash.startsWith('#service') || window.location.hash === '#services') {
      window.history.pushState(null, '', window.location.pathname);
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContactWithService = (_serviceName?: string) => {
    navigateHome('contact-us');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-900">
      {currentPage === 'SERVICES' ? (
        <>
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
              currentPage="SERVICES"
              isLightTheme={true}
              onNavigateToServices={navigateToServices}
              onNavigateHome={navigateHome}
              onOpenContactModal={() => handleOpenContactWithService()}
            />

            <ServicesHeroSection
              activeServiceId={selectedServiceId}
              onNavigateHome={navigateHome}
              onOpenContactModal={() => handleOpenContactWithService()}
            />
          </div>

          <ServicesPage
            activeServiceId={selectedServiceId}
            onSelectService={(id) => {
              setSelectedServiceId(id);
              window.location.hash = `#service-${id}`;
            }}
            onOpenModal={(serviceTitle) => handleOpenContactWithService(serviceTitle)}
            onNavigateHome={navigateHome}
          />

          <FooterLight
            onOpenContactModal={() => handleOpenContactWithService()}
            onSelectServiceModal={(service) => setActiveServiceModal(service.modalData || null)}
            onNavigateToServices={navigateToServices}
            onNavigateHome={navigateHome}
          />
        </>
      ) : (
        <Home2Page
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          prefersReducedMotion={prefersReducedMotion}
          onNavigateToServices={navigateToServices}
          onNavigateHome={navigateHome}
          onNavigateHome2={navigateHome}
          onOpenContactModal={handleOpenContactWithService}
          setActiveServiceModal={setActiveServiceModal}
        />
      )}

      <ServiceModal
        data={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onOpenContactModal={() => handleOpenContactWithService()}
      />
    </div>
  );
}

export default App;

