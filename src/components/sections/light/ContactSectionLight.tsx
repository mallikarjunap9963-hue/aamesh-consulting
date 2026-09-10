import { ArrowUpRight } from 'lucide-react';

interface ContactSectionLightProps {
  onOpenModal: () => void;
}

export function ContactSectionLight({ onOpenModal }: ContactSectionLightProps) {
  return (
    <section id="contact-us" className="relative py-8 md:py-12 bg-white w-full border-t border-slate-200/80 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-5">
          <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
            START YOUR TRANSFORMATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-[#012854] tracking-tight leading-tight mb-6 font-sans">
          Let's Build <span className="text-gradient-primary-light font-bold">What's Next</span>
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-[#3D3E42] max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Whether you're looking to modernize your IT environment, develop a new product, adopt AI, transform your business processes, or find the right technology expertise, Aamesh Consulting Services can help you move from challenge to solution.
        </p>

        {/* Button */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-[#012854] via-[#012F62] to-[#B77805] hover:from-[#012F62] hover:via-[#B77805] hover:to-[#CE9116] text-white font-bold px-9 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 group"
          >
            <span>TALK TO OUR EXPERTS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-[#3D3E42] font-normal">
          Have a business problem to solve? Let's start with a conversation.
        </p>
      </div>
    </section>
  );
}
