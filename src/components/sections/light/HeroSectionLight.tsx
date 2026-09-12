import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Cpu,
  Bot,
  ShieldCheck,
  Users
} from 'lucide-react';

interface HeroSectionLightProps {
  prefersReducedMotion?: boolean;
  onNavigateToServices?: () => void;
}

export function HeroSectionLight({ prefersReducedMotion = false, onNavigateToServices }: HeroSectionLightProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Scroll animations for Card 1 (Tilted Left)
  const card1Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -8, 0]);
  const card1Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -35, 0]);
  const card1X = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -14, 0]);

  // Scroll animations for Card 2 (Tilted Right)
  const card2Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 6, 0]);
  const card2Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 15, 0]);
  const card2X = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -4, 0]);

  // Scroll animations for Card 3 (Tilted Left)
  const card3Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -6, 0]);
  const card3Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -20, 0]);
  const card3X = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 4, 0]);

  // Scroll animations for Card 4 (Tilted Right)
  const card4Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 8, 0]);
  const card4Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -35, 0]);
  const card4X = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 14, 0]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={targetRef} id="hero" className="relative w-full flex flex-col justify-center overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-28">
      {/* Hero Content Container */}
      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex-1 flex flex-col items-center text-center">


        {/* 2. CENTERED MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#000000] leading-[1.15] max-w-4xl mb-5 font-sans"
        >
          Technology Solutions That <br className="hidden sm:inline" />
          <span className="text-[#000000] font-extrabold inline-block px-1">
            Simplify Complexity
          </span>{" "}
          and Accelerate Growth.
        </motion.h1>

        {/* 3. CENTERED SUBTITLE */}
        <motion.p
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-[#000000] max-w-2xl font-normal leading-relaxed mb-8"
        >
          Aamesh Consulting Services is a technology and consulting partner helping businesses modernize, build, and scale through IT services, digital transformation, product engineering, AI, cloud, and strategic technology solutions.
        </motion.p>

        {/* 4. CENTERED CTA BUTTONS ROW */}
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => {
              if (onNavigateToServices) onNavigateToServices();
              else scrollToSection('services-section');
            }}
            className="bg-[#023582] hover:bg-[#01255e] text-white font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer group"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollToSection('products-section')}
            className="bg-transparent hover:bg-slate-100/80 text-[#000000] border border-slate-300/90 hover:border-black font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer group"
          >
            <span>VIEW OUR PRODUCTS</span>
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* 5. HERO CARDS GRID WITH SCROLL TILT-TO-FIT ANIMATION */}
        <div className="relative w-full max-w-[1240px] mx-auto pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-20 relative px-2">
            {/* Card 1: IT EXPERTISE */}
            <motion.div
              style={{ rotate: card1Rotate, y: card1Y, x: card1X }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[190px] text-left group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-[#023582]" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#000000] uppercase tracking-wider mb-2 font-sans">
                  IT EXPERTISE
                </h4>
                <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed">
                  End-to-end technology capabilities.
                </p>
              </div>
            </motion.div>

            {/* Card 2: AI & AUTOMATION */}
            <motion.div
              style={{ rotate: card2Rotate, y: card2Y, x: card2X }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[190px] text-left group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-[#023582]" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#000000] uppercase tracking-wider mb-2 font-sans">
                  AI &amp; AUTOMATION
                </h4>
                <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed">
                  Intelligent solutions for modern businesses.
                </p>
              </div>
            </motion.div>

            {/* Card 3: ENTERPRISE SOLUTIONS */}
            <motion.div
              style={{ rotate: card3Rotate, y: card3Y, x: card3X }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[190px] text-left group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-[#023582]" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#000000] uppercase tracking-wider mb-2 font-sans">
                  ENTERPRISE SOLUTIONS
                </h4>
                <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed">
                  Cloud, ERP, data and cybersecurity.
                </p>
              </div>
            </motion.div>

            {/* Card 4: FLEXIBLE ENGAGEMENT */}
            <motion.div
              style={{ rotate: card4Rotate, y: card4Y, x: card4X }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[190px] text-left group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-[#023582]" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#000000] uppercase tracking-wider mb-2 font-sans">
                  FLEXIBLE ENGAGEMENT
                </h4>
                <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed">
                  Consulting, projects, managed services and staffing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
}
