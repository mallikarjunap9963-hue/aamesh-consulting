import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Home,
  ChevronRight,
  Globe,
  Building2,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

interface ContactUsHeroSectionProps {
  onNavigateHome: (sectionId?: string) => void;
}

export function ContactUsHeroSection({ onNavigateHome }: ContactUsHeroSectionProps) {
  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden bg-transparent pt-6 pb-12 md:pt-10 md:pb-16 z-10 font-sans">
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex-1 flex flex-col items-center text-center">
        {/* 1. Breadcrumb Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2 rounded-full bg-white border border-black backdrop-blur-md text-xs sm:text-sm text-slate-600 shadow-sm">
            <button
              onClick={() => onNavigateHome()}
              className="inline-flex items-center gap-1.5 hover:text-[#B77805] transition-colors cursor-pointer group"
            >
              <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#B77805] transition-colors" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#B77805] font-bold">Contact Us</span>
          </div>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#000000] leading-[1.15] max-w-4xl mb-5 font-sans"
        >
          Let's Build <span className="text-[#000000]">What's Next</span> Together
        </motion.h1>

        {/* 3. Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mb-8 leading-relaxed font-normal"
        >
          Have a vision to build, a legacy system to transform, or need dedicated IT expertise? Connect with our strategic advisory and technical team today.
        </motion.p>

        {/* 4. Value Highlights Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700"
        >
          <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-[#B77805]" />
            <span>24-Hour Response Guarantee</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
            <Globe className="w-4 h-4 text-[#023582]" />
            <span>Global Offices (India & UK)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Strict NDA & Security First</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ContactUsPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToServices?: (serviceId?: string) => void;
}

export function ContactUsPage({ onNavigateHome, onNavigateToServices }: ContactUsPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'IT Expertise & Staffing',
    budget: '$25k - $50k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@aameshconsulting.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'IT Expertise & Staffing',
      budget: '$25k - $50k',
      message: ''
    });
  };

  const faqs = [
    {
      q: 'How fast can Aamesh Consulting assemble and onboard a project team?',
      a: 'Depending on the engagement scope, our client deployment team can be onboarded in as little as 3 to 7 business days. We maintain an agile bench of enterprise architects, senior engineers, and domain experts ready to kick off.'
    },
    {
      q: 'What engagement models do you offer?',
      a: 'We offer flexible collaboration models tailored to your business needs, including Fixed Price Project Delivery, Dedicated Team / Staff Augmentation, and Offshore Centers of Excellence (CoE).'
    },
    {
      q: 'How do you handle IP protection and data security?',
      a: 'Client security and confidentiality are foundational. We sign non-disclosure agreements (NDAs) prior to detailed discovery, enforce enterprise ISO/SOC compliant security practices, and ensure 100% of IP rights remain with your organization.'
    },
    {
      q: 'Where are your teams located and what time zones do you support?',
      a: 'We operate key delivery and client relationship centers in India (Hyderabad) and the United Kingdom (Manchester), enabling round-the-clock (24/7) support and seamless overlap with North American, European, and Asia-Pacific working hours.'
    },
    {
      q: 'Can we schedule a technical discovery call before signing a contract?',
      a: 'Absolutely. We offer an initial zero-obligation 30-minute strategic consultation with our domain architects to discuss your objectives, architecture, and timeline.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans pb-20">
      {/* MAIN FORM & CONTACT DETAILS SECTION */}
      <section className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 -mt-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: INTERACTIVE FORM CARD */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.07)] p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#023582] via-[#021745] to-[#B77805]" />

            {!submitted ? (
              <>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#000000] bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase font-sans mb-3">
                    <Sparkles className="w-4 h-4 text-[#023582]" />
                    <span>Send Us a Message</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight">
                    Start Your Project Conversation
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Fill in the details below and our solution architects will contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp / Enterprise Inc"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all cursor-pointer"
                      >
                        <option value="IT Expertise & Staffing">IT Expertise & Staffing</option>
                        <option value="AI & Automation Solutions">AI & Automation Solutions</option>
                        <option value="Custom Product Development">Custom Product Development</option>
                        <option value="Enterprise Solutions & Cloud">Enterprise Solutions & Cloud</option>
                        <option value="Center of Excellence (CoE)">Center of Excellence (CoE)</option>
                        <option value="Technology Advisory & Architecture">Technology Advisory & Architecture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all cursor-pointer"
                      >
                        <option value="< $10k">&lt; $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k - $100k">$50,000 - $100,000</option>
                        <option value="$100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details / Scope Summary <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your business goals, timeline expectations, tech stack preferences, or specific pain points..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B77805]/50 focus:border-[#B77805] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#023582] hover:bg-[#021745] text-white font-bold py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2.5 group disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-normal pt-1">
                    🔒 We respect your privacy. All information submitted is protected by strict non-disclosure terms.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-5"
              >
                <div className="w-20 h-20 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] uppercase">INQUIRY RECEIVED</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mt-1 font-sans">
                    Thank You, {formData.name || 'Partner'}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                    We have successfully received your inquiry for <span className="font-semibold text-slate-900">{formData.service}</span>. Our solution team will reach out to <span className="font-semibold text-[#023582]">{formData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Reference Ticket:</span>
                    <span className="font-mono font-bold text-[#023582]">#ACS-2026-{(Math.floor(Math.random() * 9000) + 1000)}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Assigned Team:</span>
                    <span className="font-semibold text-slate-800">Global Advisory & Architecture</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Expected Response:</span>
                    <span className="font-semibold text-emerald-600">Within 24 Hours</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-full bg-[#023582] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#021745] transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    Submit Another Inquiry
                  </button>
                  {onNavigateToServices && (
                    <button
                      onClick={() => onNavigateToServices('it-services')}
                      className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs tracking-wider uppercase hover:bg-slate-200 transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      Explore Services
                    </button>
                  )}
                  {onNavigateHome && (
                    <button
                      onClick={() => onNavigateHome()}
                      className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs tracking-wider uppercase hover:bg-slate-200 transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      Back to Home
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT COLUMN: DIRECT CHANNELS & QUICK CONNECT CARDS */}
          <div className="lg:col-span-5 space-y-6">

            {/* DIRECT CONTACT CARD */}
            <div className="bg-[#023582] text-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.12)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD54A]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Connect</h3>
                  <p className="text-xs text-slate-300">Speak directly with our strategy team</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-5 h-5 text-[#FFD54A] shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">Official Email</span>
                      <a href="mailto:info@aameshconsulting.com" className="text-sm font-semibold text-white hover:text-[#FFD54A] transition-colors truncate block">
                        info@aameshconsulting.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* India Phone */}
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFD54A] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">India Office Line</span>
                    <a href="tel:+919703237002" className="text-sm font-semibold text-white hover:text-[#FFD54A] transition-colors">
                      +91 9703237002
                    </a>
                  </div>
                </div>

                {/* UK Phone */}
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFD54A] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">UK Office Line</span>
                    <a href="tel:+447747477426" className="text-sm font-semibold text-white hover:text-[#FFD54A] transition-colors">
                      +44 7747477426
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FFD54A] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">Working Hours</span>
                    <span className="text-xs text-slate-200">
                      Mon – Fri: 9:00 AM – 7:00 PM (IST / GMT)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WHY WORK WITH US CARD */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_4px_18px_rgba(0,0,0,0.05)] space-y-4">
              <h3 className="text-base font-bold text-[#000000] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#B77805]" />
                <span>Why Partner With Aamesh Consulting?</span>
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#023582] bg-gradient-to-br from-white/35 via-[#023582] to-[#011438] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span><strong>Rapid Team Deployment:</strong> Scale specialized engineering capacity in days, not months.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#023582] bg-gradient-to-br from-white/35 via-[#023582] to-[#011438] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span><strong>Domain Mastery:</strong> AI automation, cloud engineering, enterprise transformation & full-stack development.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#023582] bg-gradient-to-br from-white/35 via-[#023582] to-[#011438] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span><strong>Global Delivery Model:</strong> High performance team collaboration across IST & GMT time zones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#023582] bg-gradient-to-br from-white/35 via-[#023582] to-[#011438] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span><strong>Transparent Governance:</strong> Direct access to senior architects and clear sprint deliverables.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS SECTION */}
      <section className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-16 sm:pt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#000000] bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase">
              OUR GLOBAL PRESENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
            Visit Our Global Delivery Centers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Strategically located to support global enterprises with seamlessly integrated onshore and offshore capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* INDIA OFFICE CARD */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-[#B77805] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  India Headquarters
                </span>
                <span className="text-xs text-slate-400 font-medium">Asia-Pacific Region</span>
              </div>

              <h3 className="text-2xl font-bold text-[#000000]">Hyderabad Delivery Center</h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B77805] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    2nd floor, Melkiors Pride, Hitex Road, Hyderabad, Telangana 500084, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B77805] shrink-0" />
                  <a href="tel:+919703237002" className="hover:text-[#B77805] font-semibold text-slate-800 transition-colors">
                    +91 9703237002
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B77805] shrink-0" />
                  <a href="mailto:info@aameshconsulting.com" className="hover:text-[#B77805] font-semibold text-slate-800 transition-colors">
                    info@aameshconsulting.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Action Banner */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Hitex Innovation Hub</span>
              <a
                href="https://maps.google.com/?q=2nd+floor,+Melkiors+Pride,+Hitex+Road,+Hyderabad+500084"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#023582] hover:text-[#B77805] flex items-center gap-1.5 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* UK OFFICE CARD */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-[#023582] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  UK & European Office
                </span>
                <span className="text-xs text-slate-400 font-medium">EMEA Region</span>
              </div>

              <h3 className="text-2xl font-bold text-[#000000]">Manchester Office</h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#023582] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    7 Bridge Street, Audenshaw, Manchester M34 5ZL, United Kingdom
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#023582] shrink-0" />
                  <a href="tel:+447747477426" className="hover:text-[#023582] font-semibold text-slate-800 transition-colors">
                    +44 7747477426
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#023582] shrink-0" />
                  <a href="mailto:info@aameshconsulting.com" className="hover:text-[#023582] font-semibold text-slate-800 transition-colors">
                    info@aameshconsulting.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Action Banner */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Greater Manchester Tech Corridor</span>
              <a
                href="https://maps.google.com/?q=7+Bridge+Street,+Audenshaw,+Manchester+M34+5ZL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#023582] hover:text-[#B77805] flex items-center gap-1.5 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* HOW WE WORK / ENGAGEMENT STEPS */}
      <section className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-16 sm:pt-24">
        <div className="bg-gradient-to-br from-[#023582] to-[#021745] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FFD54A] uppercase">
              TRANSPARENT ONBOARDING
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-2 font-sans">
              What Happens After You Submit?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Our simple 3-step engagement process takes you from inquiry to active execution seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative">
              <div className="text-3xl font-extrabold text-[#FFD54A] mb-3">01</div>
              <h3 className="text-lg font-bold text-white mb-2">Discovery & Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We review your goals, conduct a 30-minute discovery call, and align on technical requirements and timeline.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative">
              <div className="text-3xl font-extrabold text-[#FFD54A] mb-3">02</div>
              <h3 className="text-lg font-bold text-white mb-2">Tailored Blueprint</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our architects deliver a clear scope proposal, talent profiles, milestone roadmap, and cost estimation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative">
              <div className="text-3xl font-extrabold text-[#FFD54A] mb-3">03</div>
              <h3 className="text-lg font-bold text-white mb-2">Sprint Kickoff</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Once approved, your dedicated engineers assemble and initiate Sprint 1 with transparent weekly check-ins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative w-full max-w-[1000px] mx-auto px-6 md:px-12 pt-16 sm:pt-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#000000] bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase">
              GOT QUESTIONS?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Everything you need to know about starting a project with Aamesh Consulting.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#B77805] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-[#B77805] shrink-0 transform rotate-180 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 transition-transform" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pl-14">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
