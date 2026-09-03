import { MapPin, Mail, Phone } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon } from '../common/SocialIcons';
import { servicesList } from '../../data/servicesData';

interface FooterProps {
  onOpenContactModal: () => void;
  onSelectServiceModal?: (service: any) => void;
}

export function Footer({ onOpenContactModal }: FooterProps) {
  return (
    <footer className="relative bg-[#050406] text-white border-t border-white/10 pt-8 md:pt-10 pb-5 overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#fac400]/40 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* TOP FOOTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 border-b border-white/10">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block group"
            >
              <img
                src="/ACS-logo.webp"
                alt="Aamesh Consulting Services Logo"
                className="h-16 md:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Aamesh Consulting Services Pvt. Ltd. delivers enterprise technology, AI automation, multi-cloud engineering, and strategic IT consulting that powers digital acceleration.
            </p>

            {/* SOCIAL LINKS */}
            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase font-sans block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                >
                  <TwitterIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#fac400] hover:bg-[#fac400]/10 hover:border-[#fac400]/30 transition-all duration-300 shadow-sm"
                >
                  <InstagramIcon className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'About Us', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: 'IT Services', action: () => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: 'Products', action: () => document.getElementById('cards-section')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: 'Contact Us', action: () => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }) }
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
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Core Services
            </h4>
            <ul className="space-y-2">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('services-section');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
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

          {/* CORPORATE OFFICE COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#fac400] uppercase font-sans">
              Corporate Office
            </h4>
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#fac400] shrink-0 mt-0.5" />
                <span>3rd floor, Trendz JP Building, Chhota Anjaiah Nagar, Gachibowli, Hyderabad - 500032</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#fac400] shrink-0" />
                <a href="mailto:info@aameshconsulting.com" className="hover:text-[#fac400] transition-colors">
                  info@aameshconsulting.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[#fac400] shrink-0" />
                <a href="tel:+917032450002" className="hover:text-[#fac400] transition-colors">
                  +91 7032450002
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER ROW */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Aamesh Consulting Services Pvt. Ltd. All rights reserved.
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
