import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import type { NavTab } from '../../types';
import { servicesList } from '../../data/servicesData';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenContactModal: () => void;
  onNavigateToServices?: (serviceId?: string) => void;
  onNavigateHome?: (sectionId?: string) => void;
  onNavigateHome2?: () => void;
  currentPage?: 'HOME' | 'HOME2' | 'SERVICES';
  isLightTheme?: boolean;
}

export function Header({
  activeTab,
  setActiveTab,
  onOpenContactModal,
  onNavigateToServices,
  onNavigateHome,
  onNavigateHome2,
  currentPage = 'HOME',
  isLightTheme = true
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (tab === 'SERVICES') {
      if (onNavigateToServices) {
        onNavigateToServices('it-services');
      } else {
        const el = document.getElementById('services-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'HOME') {
      if (onNavigateHome) {
        onNavigateHome();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (tab === 'HOME 2') {
      if (onNavigateHome2) {
        onNavigateHome2();
      } else if (onNavigateHome) {
        onNavigateHome();
      }
    } else if (tab === 'ABOUT US') {
      if (currentPage !== 'HOME' && currentPage !== 'HOME2' && onNavigateHome) {
        onNavigateHome('about');
      } else {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'TECHNOLOGY') {
      if (currentPage !== 'HOME' && currentPage !== 'HOME2' && onNavigateHome) {
        onNavigateHome('technology');
      } else {
        const el = document.getElementById('technology');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'PRODUCTS') {
      if (currentPage !== 'HOME' && currentPage !== 'HOME2' && onNavigateHome) {
        onNavigateHome('cards-section');
      } else {
        const el = document.getElementById('cards-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'CONTACT US') {
      if (currentPage !== 'HOME' && currentPage !== 'HOME2' && onNavigateHome) {
        onNavigateHome('contact-us');
      } else {
        const el = document.getElementById('contact-us');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenContactModal();
      }
    }
  };

  const navTabs: NavTab[] = ['HOME', 'ABOUT US', 'SERVICES', 'TECHNOLOGY', 'PRODUCTS', 'CONTACT US'];

  return (
    <header className={`w-full z-50 sticky top-0 transition-all duration-300 ${isScrolled
      ? isLightTheme
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3 md:py-3.5'
        : 'bg-[#080709]/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-3 md:py-3.5'
      : isLightTheme
        ? 'bg-transparent border-none shadow-none py-3 md:py-4'
        : 'bg-[#080709]/85 backdrop-blur-lg border-none shadow-none py-3 md:py-3.5'
      }`}>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* BRAND LOGO */}
        <button
          onClick={() => {
            if (onNavigateHome) onNavigateHome();
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer bg-transparent border-none p-0"
        >
          <img
            src={isLightTheme ? "/dark logo.png" : "/new white logo.png"}
            alt="Aamesh Consulting Services Logo"
            className="h-12 sm:h-16 md:h-20 max-h-[75px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* DESKTOP NAV LINKS (FLOATING WHITE CAPSULE WITH SUBTLE BORDER) */}
        <nav className={isLightTheme
          ? "hidden md:flex items-center gap-1 sm:gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-sm"
          : "hidden md:flex items-center gap-1 sm:gap-1.5 lg:gap-2"
        }>
          {navTabs.map((tab) => {
            if (tab === 'SERVICES') {
              return (
                <div
                  key={tab}
                  className="relative group/dropdown"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick('SERVICES')}
                    className={`text-xs tracking-wide font-medium transition-all duration-200 uppercase py-1.5 px-3.5 rounded-xl cursor-pointer flex items-center gap-1.5 border border-transparent ${isLightTheme
                      ? (activeTab === 'SERVICES'
                        ? 'bg-white border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-slate-900 font-semibold'
                        : 'text-slate-700 hover:bg-white hover:border-slate-200/90 hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:text-slate-900')
                      : (activeTab === 'SERVICES' ? 'text-[#FFD54A] font-bold' : 'text-gray-300 hover:text-white')
                      }`}
                  >
                    <span>SERVICES</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* FLOATING SERVICES DROPDOWN MENU */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[300px] sm:w-[320px] transition-all duration-200 z-50 ${servicesDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                  >
                    <div className={`${isLightTheme
                      ? 'bg-white border border-slate-200/90 shadow-xl'
                      : 'bg-[#001F4D]/95 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
                      } rounded-2xl p-2 space-y-1`}>
                      {servicesList.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            setActiveTab('SERVICES');
                            if (onNavigateToServices) onNavigateToServices(service.id);
                          }}
                          className={`w-full text-left py-2 px-3 rounded-xl transition-all duration-200 block group/item cursor-pointer border border-transparent ${isLightTheme
                            ? 'text-slate-800 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-sm'
                            : 'text-gray-200 hover:text-[#FFD54A]'
                            }`}
                        >
                          <span className={`text-xs font-medium transition-colors block ${isLightTheme ? 'text-slate-800' : 'group-hover/item:text-[#FFD54A]'
                            }`}>
                            {service.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={tab}
                onClick={() => handleNavClick(tab)}
                className={`text-xs tracking-wide font-medium transition-all duration-200 uppercase py-1.5 px-3.5 rounded-xl cursor-pointer border border-transparent ${isLightTheme
                  ? (activeTab === tab
                    ? 'bg-white border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-slate-900 font-semibold'
                    : 'text-slate-700 hover:bg-white hover:border-slate-200/90 hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:text-slate-900')
                  : (activeTab === tab ? 'text-[#FFD54A] font-bold' : 'text-gray-300 hover:text-white')
                  }`}
              >
                <span>{tab}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT TOP CTA BUTTON (BRAND GRADIENT BUTTON) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContactModal}
            className={isLightTheme
              ? "bg-[#023582] hover:bg-[#01255e] text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              : "btn-primary-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase text-[#023582] cursor-pointer group"
            }
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 cursor-pointer ${isLightTheme ? 'text-slate-800' : 'text-gray-300 hover:text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isLightTheme ? 'text-[#023582]' : 'text-[#FFD54A]'}`} />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 py-6 flex flex-col gap-3 ${isLightTheme
          ? 'bg-white border-gray-200 text-slate-800'
          : 'bg-[#001F4D]/95 backdrop-blur-xl border-white/10 text-white'
          }`}>
          {navTabs.map((tab) => {
            if (tab === 'SERVICES') {
              return (
                <div key={tab} className="border-b border-gray-200/20 py-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick('SERVICES')}
                      className={`text-left text-sm font-semibold tracking-wider py-1.5 uppercase cursor-pointer ${activeTab === 'SERVICES' ? (isLightTheme ? 'text-[#023582]' : 'text-[#FFD54A]') : ''
                        }`}
                    >
                      SERVICES
                    </button>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1 text-gray-400"
                      aria-label="Toggle services list"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="pl-3 py-2 space-y-2">
                      {servicesList.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveTab('SERVICES');
                            if (onNavigateToServices) onNavigateToServices(service.id);
                          }}
                          className="w-full text-left py-1 text-xs font-medium block"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={tab}
                onClick={() => handleNavClick(tab)}
                className={`text-left text-sm font-semibold tracking-wider py-2 border-b border-gray-200/20 uppercase cursor-pointer ${activeTab === tab ? (isLightTheme ? 'text-[#023582]' : 'text-[#FFD54A]') : ''
                  }`}
              >
                {tab}
              </button>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContactModal();
            }}
            className={isLightTheme
              ? "w-full mt-2 py-3 rounded-xl font-bold text-xs tracking-wider uppercase bg-[#023582] text-white flex items-center justify-center gap-2"
              : "btn-primary-glow w-full mt-2 py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-[#001F4D] flex items-center justify-center gap-2"
            }
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}

