import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Zap, ShieldCheck, BarChart3 } from 'lucide-react';

interface HeroSectionProps {
  prefersReducedMotion?: boolean;
  onNavigateToServices?: () => void;
}

export function HeroSection({ prefersReducedMotion = false, onNavigateToServices }: HeroSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const card1Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -8, 0]);
  const card1Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -30, 0]);
  const card1X = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -10, 0]);

  const card2Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 6, 0]);
  const card2Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 15, 0]);

  const card3Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -6, 0]);
  const card3Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -20, 0]);

  const card4Rotate = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 8, 0]);
  const card4Y = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : -30, 0]);
  const card4X = useTransform(scrollYProgress, [0, 0.22], [prefersReducedMotion ? 0 : 10, 0]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={targetRef} id="hero" className="relative w-full flex flex-col justify-center overflow-hidden bg-[#080709] text-white pt-10 pb-16 md:pt-14 md:pb-24 border-b border-white/5">
      {/* Background Ambient Video (Same as Sustho Hero) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/69f8ec4cbac699d72af25679%2F69fa5ac71aaf65a868d1fe1d_Bg-Video_poster.0000000.jpg"
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.prod.website-files.com/69f8ec4cbac699d72af25679%2F69fa5ac71aaf65a868d1fe1d_Bg-Video_mp4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080709]/80 via-[#080709]/90 to-[#080709]" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#fac400]/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex-1 flex flex-col items-center text-center">


        {/* 2. CENTERED MAIN HEADLINE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mb-5 font-sans">
          Technology Solutions That{" "}
          <span className="text-gradient-primary font-extrabold inline-block px-1">
            Simplify Complexity
          </span>{" "}
          and Accelerate Growth.
        </h1>

        {/* 3. CENTERED SUBTITLE */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
          Aamesh Consulting Services is a technology and consulting partner helping businesses modernize, build, and scale through IT services, digital transformation, product engineering, AI, cloud, and strategic technology solutions.
        </p>

        {/* 4. CENTERED CTA BUTTONS ROW */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => {
              if (onNavigateToServices) onNavigateToServices();
              else scrollToSection('services-section');
            }}
            className="bg-[#fac400] hover:bg-[#e0b000] text-[#080709] font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(250,196,0,0.4)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer group"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollToSection('products-section')}
            className="bg-[#121016]/90 hover:bg-[#1c1924] text-white border border-white/20 hover:border-white/40 font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer group"
          >
            <span>VIEW OUR PRODUCTS</span>
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 5. CENTERED DASHBOARD & FLOATING METRIC CARDS SHOWCASE */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Main Container Card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#121016]/90 p-3 sm:p-4 group">
            <div className="relative h-[320px] sm:h-[420px] md:h-[500px] w-full rounded-2xl overflow-hidden">
              <img
                src="/hero bg.png"
                alt="Aamesh Enterprise Technology Dashboard"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080709]/90 via-[#080709]/30 to-transparent pointer-events-none" />

              {/* Center Overlay Banner Text */}
              <div className="absolute bottom-6 left-6 right-6 text-left text-white max-w-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#fac400] mb-1 font-mono">
                  ENTERPRISE PLATFORM
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Unified Cloud, AI &amp; IT Management
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed hidden sm:block">
                  Streamline enterprise workflows, automate processes, and monitor performance in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Metric Cards Grid with Tilt-to-Fit Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <motion.div
              style={{ rotate: card1Rotate, y: card1Y, x: card1X }}
              className="bg-gradient-to-br from-[#fac400]/20 via-[#121016]/95 to-[#fac400]/10 border border-[#fac400]/40 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 text-left hover:border-[#fac400] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#fac400]/20 text-[#fac400] flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">99.9% Uptime</div>
                <div className="text-[11px] text-amber-200/80">Cloud Infrastructure</div>
              </div>
            </motion.div>

            <motion.div
              style={{ rotate: card2Rotate, y: card2Y }}
              className="bg-[#121016]/90 border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 text-left hover:border-[#fac400]/40 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">500+ Daily</div>
                <div className="text-[11px] text-gray-400">Automated Workflows</div>
              </div>
            </motion.div>

            <motion.div
              style={{ rotate: card3Rotate, y: card3Y }}
              className="bg-gradient-to-br from-[#fac400]/20 via-[#121016]/95 to-[#fac400]/10 border border-[#fac400]/40 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 text-left hover:border-[#fac400] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">50+ Clients</div>
                <div className="text-[11px] text-emerald-200/80">Partner Enterprises</div>
              </div>
            </motion.div>

            <motion.div
              style={{ rotate: card4Rotate, y: card4Y, x: card4X }}
              className="bg-[#121016]/90 border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 text-left hover:border-[#fac400]/40 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">24/7 SLA</div>
                <div className="text-[11px] text-gray-400">Managed IT Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
}
