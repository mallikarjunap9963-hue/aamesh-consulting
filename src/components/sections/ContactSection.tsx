import { ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenModal: () => void;
}

export function ContactSection({ onOpenModal }: ContactSectionProps) {
  return (
    <section id="contact-us" className="relative py-8 md:py-12 bg-[#080709] w-full border-t border-white/5 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#fac400]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/30 px-5 py-2 rounded-full uppercase font-sans">
            START YOUR TRANSFORMATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-[56px] font-semibold text-white tracking-tight leading-tight mb-6 font-sans">
          Let's Build What's Next
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Whether you're looking to modernize your IT environment, develop a new product, adopt AI, transform your business processes, or find the right technology expertise, Aamesh Consulting Services can help you move from challenge to solution.
        </p>

        {/* Button */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={onOpenModal}
            className="btn-primary-glow inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase cursor-pointer text-[#080709] group"
          >
            <span>TALK TO OUR EXPERTS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-gray-400 font-normal">
          Have a business problem to solve? Let's start with a conversation.
        </p>
      </div>
    </section>
  );
}
