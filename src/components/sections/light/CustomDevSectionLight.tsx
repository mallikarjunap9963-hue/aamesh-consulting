import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Layers, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { ideaToSolutionCards } from '../../../data/customDevData';
import type { IdeaToSolutionStep } from '../../../types';

interface CustomDevSectionLightProps {
  onOpenModal: () => void;
}

function IdeaToSolutionStackedCardLight({
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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const isLast = index === totalCards - 1;

  const renderIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Lightbulb className="w-8 h-8 text-[#023582]" />;
      case '02':
        return <Layers className="w-8 h-8 text-[#023582]" />;
      case '03':
        return <Rocket className="w-8 h-8 text-[#023582]" />;
      case '04':
        return <ShieldCheck className="w-8 h-8 text-[#023582]" />;
      default:
        return <span className="font-extrabold text-[#023582] text-lg">{num}</span>;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] last:min-h-0 overflow-visible"
    >
      <motion.div
        className="sticky bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-10 overflow-hidden group transition-all will-change-transform shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
        style={{
          top: `calc(110px + ${index * 14}px)`,
          zIndex: 10 + index,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          y: isLast ? 0 : translateY
        }}
      >
        <div>
          {/* TOP BAR: WHITE ICON BOX ON LEFT, WHITE BADGE ON RIGHT */}
          <div className="flex items-center justify-between mb-6">
            {/* Top Left: Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              {renderIcon(proc.num)}
            </div>

            {/* Top Right: Phase Pill Badge */}
            <div className="bg-white border border-slate-200/90 text-[#000000] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-sm font-sans tracking-wide">
              Phase {proc.num}
            </div>
          </div>

          {/* TITLE: SOLID BLACK COLOR */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight mb-3 font-sans">
            {proc.title}
          </h3>

          {/* DIVIDER LINE */}
          <div className="w-full h-px bg-slate-200/80 my-4" />

          {/* DESCRIPTION: SOLID BLACK COLOR */}
          <p className="text-sm sm:text-base text-[#000000] font-normal leading-relaxed">
            {proc.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function CustomDevSectionLight({ onOpenModal }: CustomDevSectionLightProps) {
  return (
    <section id="custom-product-development" className="relative py-8 md:py-12 bg-white w-full overflow-visible">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-visible">
          {/* LEFT COLUMN: STICKY TEXT & CONTENT (60%) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] text-slate-600 bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase font-sans">
                FROM IDEA TO SOLUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#000000] leading-[1.12] font-sans">
              Have an Idea? We Build It.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#3D3E42] font-normal leading-relaxed">
              You don't need to know how to build the technology. You just need to know the problem you want to solve. Aamesh works with you to transform your business idea, workflow, or operational challenge into a working digital solution—from discovery and design to development, deployment, and ongoing support.
            </p>


            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="group bg-[#023582] hover:bg-[#01255e] text-white font-bold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5"
              >
                <span>Let's Build Your Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLL-DRIVEN STICKY STACKED PROCESS CARDS (40%) */}
          <div className="lg:col-span-5 relative overflow-visible pb-16">
            {ideaToSolutionCards.map((proc, index) => (
              <IdeaToSolutionStackedCardLight
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
