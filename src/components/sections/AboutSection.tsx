import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  prefersReducedMotion: boolean;
}

export function AboutSection({ prefersReducedMotion }: AboutSectionProps) {
  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-8 md:py-12 bg-[#0e0c12] w-full overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: ABOUT US IMAGE */}
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25, scale: prefersReducedMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#121118] group-hover:border-[#fac400]/40 transition-all duration-500">
              <img
                src="/about us new img.png"
                alt="About Aamesh Consulting Services"
                className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c12]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: TEXT CONTENT & 4 VALUE POINTS */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
                ABOUT US
              </span>
            </div>

            {/* Heading Line-by-Line Masked Reveal */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-tight text-white leading-[1.12] mb-6 font-sans">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Technology Expertise.
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1 pb-1">
                <motion.span
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Business Understanding.
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1 pb-1">
                <motion.span
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  <span className="text-gradient-primary font-medium">Real Solutions.</span>
                </motion.span>
              </span>
            </h2>

            {/* Description */}
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal"
              >
                Aamesh Consulting Services combines technology expertise with business-focused consulting to help organizations solve complex challenges and move forward with confidence. From enterprise IT and cloud transformation to AI, application development and ready-to-use business products, we deliver practical solutions designed around your goals. We don't just advise—we build, implement, integrate, and support technology that businesses can use to achieve real results.
              </motion.p>
            </div>

            {/* 4 Value Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                'End-to-End Technology',
                'Business-Focused Solutions',
                'Product Engineering',
                'Flexible Engagement'
              ].map((title, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: 0.55 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#fac400] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider">{title}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={scrollToServices}
                className="btn-primary-glow inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer group text-[#080709]"
              >
                <span>View More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
