import { useState, useEffect } from 'react';
import type { NavTab, ServiceModalData } from './types';
import { Header } from './components/layout/Header';
import { FooterLight } from './components/layout/FooterLight';
import { ServiceModal } from './components/modals/ServiceModal';
import { ServicesPage, ServicesHeroSection } from './pages/ServicesPage';
import { Home2Page } from './pages/Home2Page';
import { getServiceUrlSlug, getServiceIdFromSlug } from './data/servicesData';

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

  // Path & Hash sync for Services page and Home page
  useEffect(() => {
    const handleUrlSync = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;

      if (
        pathname.startsWith('/services') ||
        pathname.startsWith('/service-') ||
        hash === '#services' ||
        hash.startsWith('#service-') ||
        hash.startsWith('#services/')
      ) {
        setCurrentPage('SERVICES');
        setActiveTab('SERVICES');

        let rawSlug = '';
        if (pathname.includes('/services/service-')) {
          rawSlug = pathname.split('/services/service-')[1];
        } else if (pathname.includes('/services/')) {
          rawSlug = pathname.split('/services/')[1];
        } else if (pathname.startsWith('/service-')) {
          rawSlug = pathname.replace('/service-', '');
        } else if (hash.startsWith('#service-')) {
          rawSlug = hash.replace('#service-', '');
        } else if (hash.startsWith('#services/')) {
          rawSlug = hash.replace('#services/', '');
        }

        rawSlug = rawSlug.replace(/\/$/, '');
        const serviceId = getServiceIdFromSlug(rawSlug);
        setSelectedServiceId(serviceId);

        const canonicalSlug = getServiceUrlSlug(serviceId);
        const cleanPath = `/services/${canonicalSlug}`;

        if (hash.startsWith('#service') || window.location.pathname !== cleanPath) {
          window.history.replaceState(null, '', cleanPath);
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

    handleUrlSync();
    window.addEventListener('popstate', handleUrlSync);
    window.addEventListener('hashchange', handleUrlSync);
    return () => {
      window.removeEventListener('popstate', handleUrlSync);
      window.removeEventListener('hashchange', handleUrlSync);
    };
  }, []);

  const navigateToServices = (serviceId?: string) => {
    const targetId = serviceId || selectedServiceId || 'it-services';
    setCurrentPage('SERVICES');
    setActiveTab('SERVICES');
    setSelectedServiceId(targetId);

    const canonicalSlug = getServiceUrlSlug(targetId);
    const newPath = `/services/${canonicalSlug}`;

    if (window.location.pathname !== newPath || window.location.hash) {
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (sectionId?: string) => {
    setCurrentPage('HOME');
    setActiveTab('HOME');
    const targetPath = sectionId ? `/#${sectionId}` : '/';
    if (window.location.pathname !== '/' || (sectionId && window.location.hash !== `#${sectionId}`)) {
      window.history.pushState(null, '', targetPath);
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
          {/* LIGHT THEME TOP WRAPPER WITH HERO & HEADER */}
          <div className="relative w-full bg-white overflow-hidden">
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
              const canonicalSlug = getServiceUrlSlug(id);
              const newPath = `/services/${canonicalSlug}`;
              if (window.location.pathname !== newPath || window.location.hash) {
                window.history.pushState(null, '', newPath);
              }
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

