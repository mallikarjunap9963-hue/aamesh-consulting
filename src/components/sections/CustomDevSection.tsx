import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Layers, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { ideaToSolutionCards } from '../../data/customDevData';
import type { IdeaToSolutionStep } from '../../types';

interface CustomDevSectionProps {
  onOpenModal: () => void;
}

function IdeaToSolutionStackedCard({
  proc,
  index,
  totalCards
}: {
  proc: IdeaToSolutionStep;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const isLast = index === totalCards - 1;

  const renderIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Lightbulb className="w-6 h-6 text-[#fac400]" />;
      case '02':
        return <Layers className="w-6 h-6 text-[#fac400]" />;
      case '03':
        return <Rocket className="w-6 h-6 text-[#fac400]" />;
      case '04':
        return <ShieldCheck className="w-6 h-6 text-[#fac400]" />;
      default:
        return <span className="font-extrabold text-[#fac400] text-base">{num}</span>;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] last:min-h-0 overflow-visible"
    >
      <motion.div
        className="sticky bg-gradient-to-b from-[#0d1424]/98 via-[#0a0f1b]/98 to-[#070b14]/98 border border-white/15 rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-10 overflow-hidden group hover:border-[#fac400]/40 transition-colors will-change-transform shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        style={{
          top: `calc(110px + ${index * 14}px)`,
          zIndex: 10 + index,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          y: isLast ? 0 : translateY
        }}
      >
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#fac400]/5 rounded-full blur-2xl group-hover:bg-[#fac400]/10 transition-colors pointer-events-none" />

        <div>
          {/* TOP BAR: ICON BOX ON LEFT, PHASE BADGE ON RIGHT */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#fac400]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
              {renderIcon(proc.num)}
            </div>

            <div className="bg-[#fac400]/10 text-[#fac400] border border-[#fac400]/30 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-lg shadow-sm font-sans tracking-wide">
              Phase {proc.num}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gradient-primary tracking-tight mb-3 font-sans">
            {proc.title}
          </h3>

          <div className="w-full h-px bg-white/10 my-4" />

          <p className="text-sm sm:text-base text-gray-300/90 font-normal leading-relaxed">
            {proc.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function CustomDevSection({ onOpenModal }: CustomDevSectionProps) {
  return (
    <section id="custom-product-development" className="relative py-8 md:py-12 bg-[#0e0c12] w-full overflow-visible border-t border-white/5">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-visible">
          {/* LEFT COLUMN: STICKY TEXT & CONTENT (60%) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] border border-[#fac400]/30 px-4 py-1.5 rounded-full uppercase font-sans">
                FROM IDEA TO SOLUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-tight text-white leading-[1.12] font-sans">
              Have an Idea? <span className="text-gradient-primary font-medium">We Build It.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
              You don't need to know how to build the technology. You just need to know the problem you want to solve. Aamesh works with you to transform your business idea, workflow, or operational challenge into a working digital solution—from discovery and design to development, deployment, and ongoing support.
            </p>


            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#fac400] to-[#f5b800] text-[#080709] hover:brightness-110 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <span>Let's Build Your Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLL-DRIVEN STICKY STACKED PROCESS CARDS (40%) */}
          <div className="lg:col-span-5 relative overflow-visible pb-16">
            {ideaToSolutionCards.map((proc, index) => (
              <IdeaToSolutionStackedCard
                key={proc.num}
                proc={proc}
                index={index}
                totalCards={ideaToSolutionCards.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
