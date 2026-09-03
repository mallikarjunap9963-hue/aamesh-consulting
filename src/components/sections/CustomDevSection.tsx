import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
          <div className="relative pt-2 mb-6">
            <div className="absolute -top-7 left-6 w-px h-6 bg-gradient-to-b from-transparent via-[#fac400]/40 to-transparent" />
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#162238] to-[#0a111f] border border-[#fac400]/40 shadow-[0_0_15px_rgba(250,196,0,0.2)] flex items-center justify-center text-[#fac400] text-sm font-bold tracking-wider font-sans group-hover:scale-105 transition-transform">
              {proc.num}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 font-sans">
            {proc.title}
          </h3>

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
          {/* LEFT COLUMN: STICKY TEXT & CONTENT */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
                FROM IDEA TO SOLUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal tracking-tight text-white leading-[1.12] font-sans">
              Have an Idea? <br />
              <span className="text-gradient-primary font-medium">We Build It.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
              You don't need to know how to build the technology. You just need to know the problem you want to solve. Aamesh works with you to transform your business idea, workflow, or operational challenge into a working digital solution—from discovery and design to development, deployment, and ongoing support.
            </p>

            {/* TRANSFORMATION FLOW PILLS IN LEFT COLUMN */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-[#fac400] tracking-widest uppercase block">
                TRANSFORMATION FLOW
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-semibold text-gray-200">
                <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-white shadow-sm text-center w-full sm:w-auto">
                  Your Business Idea
                </span>
                <span className="text-[#fac400] font-bold hidden sm:inline">→</span>
                <span className="text-[#fac400] font-bold sm:hidden">↓</span>
                <span className="bg-[#fac400]/10 border border-[#fac400]/30 px-3 py-1.5 rounded-xl text-[#fac400] shadow-sm text-center w-full sm:w-auto">
                  Our Technology Expertise
                </span>
                <span className="text-[#fac400] font-bold hidden sm:inline">→</span>
                <span className="text-[#fac400] font-bold sm:hidden">↓</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-white shadow-sm text-center w-full sm:w-auto">
                  Your Working Solution
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#fac400] to-[#f5b800] text-[#080709] hover:brightness-110 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <span>Let's Build Your Solution →</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLL-DRIVEN STICKY STACKED PROCESS CARDS */}
          <div className="lg:col-span-7 relative overflow-visible pb-16">
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
