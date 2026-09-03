import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { ServiceModalData } from '../../types';

interface ServiceModalProps {
  data: ServiceModalData | null;
  onClose: () => void;
  onOpenContactModal: () => void;
}

export function ServiceModal({ data, onClose, onOpenContactModal }: ServiceModalProps) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
      <div className="bg-[#121016] border border-[#fac400]/40 rounded-3xl p-6 sm:p-10 max-w-2xl w-full relative shadow-[0_0_50px_rgba(250,196,0,0.2)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] uppercase font-mono block mb-2">
            SERVICE DEEP DIVE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">{data.title}</h3>
          <p className="text-sm text-gray-300 mt-1 font-medium">{data.subtitle}</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Overview</h4>
            <p className="text-sm text-gray-200 leading-relaxed font-normal">{data.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Deliverables & Scope</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fac400] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenContactModal();
              }}
              className="btn-primary-glow flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer text-[#080709]"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
