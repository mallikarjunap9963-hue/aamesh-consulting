import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import type { ContactFormData } from '../../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: defaultService || 'IT Services',
    budget: '$10k - $25k',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: 'IT Expertise',
        budget: '$10k - $25k',
        message: ''
      });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
      <div className="bg-[#121016] border border-[#fac400]/40 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative shadow-[0_0_50px_rgba(250,196,0,0.2)]">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!formSubmitted ? (
          <>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] uppercase font-display block mb-2">
                START A CONVERSATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Let's build something epic.</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Tell us about your product goals and vision.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Service Requested</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#1c1824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                  >
                    <option value="IT Expertise">IT Expertise</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Enterprise Solutions">Enterprise Solutions</option>
                    <option value="Flexible Engagement">Flexible Engagement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#1c1824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors"
                  >
                    <option value="< $10k">&lt; $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k - $50k">$25,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">Project Details</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe your objectives, timeline, and key requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fac400] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary-glow w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer mt-2 text-[#080709]"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#fac400]/20 border border-[#fac400]/40 rounded-full flex items-center justify-center mx-auto text-[#fac400]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Inquiry Received!</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#fac400] font-semibold">{formData.name || 'Friend'}</span>. Our partner design director will review your project requirements and get back to you at <span className="text-white font-medium">{formData.email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
