import { useRef, useState, useEffect } from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { productsList } from '../../data/productsData';

interface ProductsSectionProps {
  onOpenModal: () => void;
}

function ProductCardsCarousel({ onOpenModal }: { onOpenModal: () => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProduct = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.children[index] as HTMLElement;
      if (cardElement) {
        const targetLeft = cardElement.offsetLeft - container.offsetLeft;
        container.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % productsList.length;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cardElement = container.children[nextIndex] as HTMLElement;
          if (cardElement) {
            const targetLeft = cardElement.offsetLeft - container.offsetLeft;
            container.scrollTo({ left: targetLeft, behavior: 'smooth' });
          }
        }
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 340;
      const gap = 24;
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(index, 0), productsList.length - 1));
    }
  };

  return (
    <div className="relative w-full mb-12 group/carousel">
      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {productsList.map((prod, pIdx) => (
          <div
            key={pIdx}
            onClick={onOpenModal}
            className="snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[370px] bg-gradient-to-b from-[#14121a] to-[#0c0a11] border border-white/10 hover:border-[#fac400]/40 rounded-3xl transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(250,196,0,0.12)] flex flex-col justify-between relative overflow-hidden cursor-pointer"
          >
            {/* TOP IMAGE CONTAINER */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-white/10 group-hover:border-[#fac400]/30 transition-colors shrink-0">
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14121a] via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING CATEGORY BADGE */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#080709]/85 backdrop-blur-md border border-[#fac400]/30 text-[#fac400] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase font-mono shadow-md z-10">
                {prod.badge}
              </div>
            </div>

            {/* CARD CONTENT AREA */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#fac400] tracking-tight mb-2 font-sans leading-snug">
                  {prod.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-4">
                  {prod.desc}
                </p>

                <div className="space-y-2.5 pt-1">
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fac400] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION DOTS AT BOTTOM */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {productsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToProduct(idx)}
            aria-label={`Go to product slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? 'w-8 h-2.5 bg-[#fac400] rounded-full shadow-[0_0_10px_rgba(250,196,0,0.5)]'
                : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/50 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductsSection({ onOpenModal }: ProductsSectionProps) {
  return (
    <section id="products-section" className="relative py-8 md:py-12 bg-[#080709] w-full border-t border-white/5 overflow-hidden">
      {/* Ambient Gold Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#fac400]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] bg-[#fac400]/10 border border-[#fac400]/25 px-4 py-1.5 rounded-full uppercase font-sans">
              OUR PRODUCTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal tracking-tight text-white leading-[1.12] mb-4 font-sans">
            Ready-to-Use Products. <br />
            <span className="text-gradient-primary font-medium">Built for Real Business.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-6">
            Aamesh has developed a portfolio of independent business applications that can be deployed individually based on your organization's needs. Start with one product. Add more when you're ready.
          </p>
        </div>

        {/* 6 PRODUCT CARDS AUTO-SCROLL CAROUSEL */}
        <ProductCardsCarousel onOpenModal={onOpenModal} />

        {/* SUPPORTING MESSAGE & CTAS BOX */}
        <div className="bg-gradient-to-r from-[#14121a] via-[#1a1624] to-[#14121a] border border-[#fac400]/30 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans tracking-tight">
              Choose what you need. <span className="text-[#fac400]">Grow when you're ready.</span>
            </h3>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              Each product can work independently, while the optional integration platform can connect systems when your organization is ready to create a connected ecosystem.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="btn-primary-glow inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase cursor-pointer group text-[#080709]"
              >
                <span>Request a Product Demo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
