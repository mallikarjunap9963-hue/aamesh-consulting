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
  const isGradientCard = index === 0 || index === 2;

  const renderIcon = (num: string, iconColor = "text-[#012854]") => {
    switch (num) {
      case '01':
        return <Lightbulb className={`w-6 h-6 ${iconColor}`} />;
      case '02':
        return <Layers className={`w-6 h-6 ${iconColor}`} />;
      case '03':
        return <Rocket className={`w-6 h-6 ${iconColor}`} />;
      case '04':
        return <ShieldCheck className={`w-6 h-6 ${iconColor}`} />;
      default:
        return <span className={`font-extrabold ${iconColor} text-base`}>{num}</span>;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] last:min-h-0 overflow-visible"
    >
      <motion.div
        className={
          isGradientCard
            ? "sticky bg-gradient-to-r from-[#012854] via-[#012F62] to-[#B77805] text-white border border-white/20 rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-10 overflow-hidden group transition-all will-change-transform shadow-[0_20px_50px_-10px_rgba(1,40,84,0.3)] hover:shadow-[0_25px_60px_-10px_rgba(183,120,5,0.4)]"
            : "sticky bg-gradient-to-br from-white via-slate-50/95 to-amber-50/40 border border-amber-400/40 rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-10 overflow-hidden group hover:border-[#B77805] transition-all will-change-transform shadow-[0_15px_45px_-10px_rgba(1,40,84,0.12)] hover:shadow-[0_20px_50px_-10px_rgba(183,120,5,0.25)]"
        }
        style={{
          top: `calc(110px + ${index * 14}px)`,
          zIndex: 10 + index,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          y: isLast ? 0 : translateY
        }}
      >
        {isGradientCard ? (
          <div>
            {/* TOP BAR: WHITE ICON BOX ON LEFT, WHITE BADGE ON RIGHT */}
            <div className="flex items-center justify-between mb-6">
              {/* Top Left: White Box with Icon */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                {renderIcon(proc.num, "text-[#B77805]")}
              </div>

              {/* Top Right: White Pill Badge */}
              <div className="bg-white text-[#012854] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-lg shadow-sm font-sans tracking-wide">
                Phase {proc.num}
              </div>
            </div>

            {/* TITLE: GOLD & GRADIENT COLOR */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gradient-primary tracking-tight mb-3 font-sans">
              {proc.title}
            </h3>

            {/* DIVIDER LINE */}
            <div className="w-full h-px bg-white/20 my-4" />

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed">
              {proc.desc}
            </p>
          </div>
        ) : (
          <div>
            {/* TOP BAR: NAVY ICON BOX ON LEFT, NAVY BADGE ON RIGHT */}
            <div className="flex items-center justify-between mb-6">
              {/* Top Left: Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-[#012854] text-[#B77805] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                {renderIcon(proc.num, "text-[#B77805]")}
              </div>

              {/* Top Right: Phase Pill Badge */}
              <div className="bg-[#012854] text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-lg shadow-sm font-sans tracking-wide">
                Phase {proc.num}
              </div>
            </div>

            {/* TITLE: GOLD & GRADIENT COLOR */}
            <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#92400E] via-[#B77805] to-[#D97706] bg-clip-text text-transparent tracking-tight mb-3 font-sans">
              {proc.title}
            </h3>

            {/* DIVIDER LINE */}
            <div className="w-full h-px bg-slate-200/80 my-4" />

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base text-[#3D3E42] font-normal leading-relaxed">
              {proc.desc}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function CustomDevSectionLight({ onOpenModal }: CustomDevSectionLightProps) {
  return (
    <section id="custom-product-development" className="relative py-8 md:py-12 bg-white w-full overflow-visible border-t border-slate-200/80">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-visible">
          {/* LEFT COLUMN: STICKY TEXT & CONTENT */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
                FROM IDEA TO SOLUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tight text-[#012854] leading-[1.12] font-sans">
              Have an Idea? <br />
              <span className="text-gradient-primary-light font-bold">We Build It.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#3D3E42] font-normal leading-relaxed">
              You don't need to know how to build the technology. You just need to know the problem you want to solve. Aamesh works with you to transform your business idea, workflow, or operational challenge into a working digital solution—from discovery and design to development, deployment, and ongoing support.
            </p>

            {/* TRANSFORMATION FLOW PILLS IN LEFT COLUMN */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-[#B77805] tracking-widest uppercase block">
                TRANSFORMATION FLOW
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-semibold text-[#012854]">
                <span className="bg-white border border-slate-200/90 px-3 py-1.5 rounded-xl shadow-sm text-center w-full sm:w-auto">
                  Your Business Idea
                </span>
                <span className="text-[#B77805] font-bold hidden sm:inline">→</span>
                <span className="text-[#B77805] font-bold sm:hidden">↓</span>
                <span className="border border-amber-500/30 px-3 py-1.5 rounded-xl text-[#B77805] shadow-sm text-center w-full sm:w-auto">
                  Our Technology Expertise
                </span>
                <span className="text-[#B77805] font-bold hidden sm:inline">→</span>
                <span className="text-[#B77805] font-bold sm:hidden">↓</span>
                <span className="bg-white border border-slate-200/90 px-3 py-1.5 rounded-xl shadow-sm text-center w-full sm:w-auto">
                  Your Working Solution
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="group bg-gradient-to-r from-[#012854] via-[#012F62] to-[#B77805] hover:from-[#012F62] hover:via-[#B77805] hover:to-[#CE9116] text-white font-bold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5"
              >
                <span>Let's Build Your Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLL-DRIVEN STICKY STACKED PROCESS CARDS */}
          <div className="lg:col-span-7 relative overflow-visible pb-16">
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
