import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavTab } from '../../types';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenContactModal: () => void;
}

export function Header({ activeTab, setActiveTab, onOpenContactModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);

    if (tab === 'CONTACT US') {
      const el = document.getElementById('contact-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else onOpenContactModal();
    } else if (tab === 'ABOUT US') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'SERVICES') {
      const el = document.getElementById('services-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'TECHNOLOGY') {
      const el = document.getElementById('technology');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'PRODUCTS') {
      const el = document.getElementById('cards-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navTabs: NavTab[] = ['HOME', 'ABOUT US', 'SERVICES', 'TECHNOLOGY', 'PRODUCTS', 'CONTACT US'];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full bg-transparent transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* BRAND LOGO */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src="/ACS-logo.webp"
            alt="Aamesh Consulting Services Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleNavClick(tab)}
              className={`text-xs tracking-widest font-semibold transition-all duration-200 uppercase relative py-1 ${
                activeTab === tab ? 'text-[#fac400]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#fac400]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0c12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleNavClick(tab)}
              className={`text-left text-sm font-semibold tracking-wider py-2 border-b border-white/5 uppercase ${
                activeTab === tab ? 'text-[#fac400]' : 'text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
