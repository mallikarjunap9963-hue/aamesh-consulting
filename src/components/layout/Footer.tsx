import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon } from '../common/SocialIcons';
import { servicesList } from '../../data/servicesData';
import { productsList } from '../../data/productsData';

interface FooterProps {
  onOpenContactModal: () => void;
  onSelectServiceModal?: (service: any) => void;
  onNavigateToServices?: (serviceId?: string) => void;
  onNavigateHome?: (sectionId?: string) => void;
}

export function Footer({ onOpenContactModal, onNavigateToServices, onNavigateHome }: FooterProps) {
  return (
    <footer className="relative bg-[#050406] text-white border-t border-white/10 pt-8 md:pt-10 pb-5 overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#fac400]/40 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* TOP FOOTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 border-b border-white/10">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-3 space-y-6">
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block group cursor-pointer text-left transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/footer-logo.png"
                alt="Aamesh Consulting Services Logo"
                className="h-14 sm:h-18 md:h-20 w-auto object-contain"
              />
            </button>

            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Aamesh Consulting Services Pvt. Ltd. delivers enterprise technology, AI automation, multi-cloud engineering, and strategic IT consulting that powers digital acceleration.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: TwitterIcon, label: 'ACS Twitter', href: '#' },
                { icon: LinkedinIcon, label: 'ACS LinkedIn', href: '#' },
                { icon: GithubIcon, label: 'ACS GitHub', href: '#' },
                { icon: InstagramIcon, label: 'ACS Instagram', href: '#' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="text-gray-300 hover:text-[#fac400] transition-colors p-1 hover:scale-110 duration-200"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                {
                  label: 'Home',
                  action: () => {
                    if (onNavigateHome) onNavigateHome();
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                },
                {
                  label: 'About Us',
                  action: () => {
                    if (onNavigateHome) onNavigateHome('about');
                    else document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }
                },
                {
                  label: 'Services',
                  action: () => {
                    if (onNavigateToServices) onNavigateToServices('it-services');
                    else document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                },
                {
                  label: 'Products',
                  action: () => {
                    if (onNavigateHome) onNavigateHome('cards-section');
                    else document.getElementById('cards-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                },
                {
                  label: 'Contact Us',
                  action: () => {
                    if (onNavigateHome) onNavigateHome('contact-us');
                    else document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={item.action}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#fac400] transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fac400]/60 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CORE SERVICES COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Core Services
            </h4>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      if (onNavigateToServices) {
                        onNavigateToServices(service.id);
                      } else {
                        const el = document.getElementById('services-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#fac400] transition-colors cursor-pointer flex items-center gap-2 text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fac400]/60 shrink-0" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR PRODUCTS COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Our Products
            </h4>
            <ul className="space-y-2">
              {productsList.slice(0, 4).map((prod, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('products-section') || document.getElementById('cards-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else if (onNavigateHome) onNavigateHome('products-section');
                    }}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#fac400] transition-colors cursor-pointer flex items-center gap-2 text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fac400]/60 shrink-0" />
                    <span>{prod.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('products-section') || document.getElementById('cards-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else if (onNavigateHome) onNavigateHome('products-section');
                  }}
                  className="text-xs sm:text-sm font-semibold text-[#fac400] hover:underline transition-colors cursor-pointer flex items-center gap-1.5 pt-1 text-left group"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              </li>
            </ul>
          </div>

          {/* OUR OFFICES COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Our Offices
            </h4>
            <div className="space-y-4 pt-1">
              {/* INDIA OFFICE */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-white tracking-wider uppercase block text-[#fac400]/90">
                  India Office
                </span>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#fac400] shrink-0 mt-0.5" />
                  <span>2nd floor, Melkiors Pride, Hitex Road, Hyderabad 500084</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-[#fac400] shrink-0" />
                  <a href="tel:+919703237002" className="hover:text-[#fac400] transition-colors">
                    +91 9703237002
                  </a>
                </div>
              </div>

              {/* UK OFFICE */}
              <div className="space-y-1.5 pt-3 border-t border-white/10">
                <span className="text-xs font-semibold text-white tracking-wider uppercase block text-[#fac400]/90">
                  UK Office
                </span>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#fac400] shrink-0 mt-0.5" />
                  <span>7 Bridge Street, Audenshaw, Manchester M34 5ZL</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-[#fac400] shrink-0" />
                  <a href="tel:+447747477426" className="hover:text-[#fac400] transition-colors">
                    +44 7747477426
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 pt-3 border-t border-white/10">
                <Mail className="w-4 h-4 text-[#fac400] shrink-0" />
                <a href="mailto:info@aameshconsulting.com" className="hover:text-[#fac400] transition-colors">
                  info@aameshconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER ROW */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Aamesh Consulting Services Pvt. Ltd. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Designed by{' '}
            <a
              href="https://sunseaz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#fac400] font-semibold underline underline-offset-2 transition-colors"
            >
              sunseaz
            </a>
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenContactModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenContactModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
