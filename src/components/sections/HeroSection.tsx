import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Bot, ShieldCheck, Users } from 'lucide-react';

interface HeroSectionProps {
  prefersReducedMotion: boolean;
}

export function HeroSection({ prefersReducedMotion }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full flex flex-col justify-between overflow-hidden bg-[#080709] min-h-screen">
      {/* HERO BACKGROUND IMAGE & CONTRAST OVERLAYS */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85 pointer-events-none z-0"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#080709] pointer-events-none z-0" />

      {/* Subtle Light Ambient Gold Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#fac400]/4 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-28 sm:pt-36 md:pt-40 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Tagline Badge */}
          <div className="overflow-hidden mb-4">
            <motion.div
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-xs font-semibold tracking-wider text-[#fac400] uppercase font-sans">
                Technology • Solutions • Growth
              </span>
            </motion.div>
          </div>

          {/* Hero Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[54px] lg:text-[60px] font-normal tracking-normal text-white leading-[1.08] mb-6 font-sans">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="block"
              >
                Technology Solutions That <br className="hidden sm:inline" />
              </motion.span>
            </span>
            <span className="block overflow-hidden pt-1 pb-1">
              <motion.span
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.22,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="block"
              >
                <span className="text-gradient-primary font-medium">Simplify Complexity</span> and Accelerate Growth.
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <div className="overflow-hidden mb-8">
            <motion.p
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed"
            >
              Aamesh Consulting Services is a technology and consulting partner helping businesses modernize, build, and scale through IT services, digital transformation, product engineering, AI, cloud, and strategic technology solutions.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.52,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection('cards-section')}
              className="btn-primary-glow inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer group text-[#080709]"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('cards-section')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer border border-white/20 hover:border-[#fac400] text-white hover:text-[#fac400] bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md group"
            >
              <span>View Our Products</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </main>

      {/* 4 FEATURE CARDS AT BOTTOM */}
      <div id="cards-section" className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* CARD 1 */}
          <motion.div
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 25,
              scale: prefersReducedMotion ? 1 : 0.96
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.65,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={() => scrollToSection('services-section')}
            className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
          >
            <div>
              <Cpu className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                IT EXPERTISE
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                End-to-end technology capabilities.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 25,
              scale: prefersReducedMotion ? 1 : 0.96
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={() => scrollToSection('services-section')}
            className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
          >
            <div>
              <Bot className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                AI & AUTOMATION
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Intelligent solutions for modern businesses.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 25,
              scale: prefersReducedMotion ? 1 : 0.96
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.85,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={() => scrollToSection('services-section')}
            className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
          >
            <div>
              <ShieldCheck className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                ENTERPRISE SOLUTIONS
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Cloud, ERP, data and cybersecurity.
              </p>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 25,
              scale: prefersReducedMotion ? 1 : 0.96
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.95,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={() => scrollToSection('services-section')}
            className="card-hero-glass p-7 rounded-2xl cursor-pointer group flex flex-col justify-between min-h-[190px]"
          >
            <div>
              <Users className="w-11 h-11 text-[#fac400] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                FLEXIBLE ENGAGEMENT
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Consulting, projects, managed services and staffing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
