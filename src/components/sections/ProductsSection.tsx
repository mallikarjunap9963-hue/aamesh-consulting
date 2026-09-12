import { useRef, useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { productsList } from '../../data/productsData';

interface ProductsSectionProps {
  onOpenModal: () => void;
}

function ProductCardsCarousel({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isScrollingRef = useRef(false);

  const productPages = [
    productsList.slice(0, 3),
    productsList.slice(3, 6)
  ];

  const scrollToSlide = (page: number) => {
    setActiveSlide(page);
    isScrollingRef.current = true;
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: page * slideWidth,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const nextSlide = activeSlide === 0 ? 1 : 0;
      scrollToSlide(nextSlide);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, activeSlide]);

  const handleScroll = () => {
    if (isScrollingRef.current) return;
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.clientWidth;
      if (slideWidth > 0) {
        const page = Math.round(container.scrollLeft / slideWidth);
        if (page !== activeSlide && (page === 0 || page === 1)) {
          setActiveSlide(page);
        }
      }
    }
  };

  return (
    <div className="relative w-full mb-12 group/carousel">
      {/* HORIZONTAL SCROLL CONTAINER WITH EXACT 3 CARDS PER VIEW */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto scroll-smooth py-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {productPages.map((pageProducts, pageIdx) => (
          <div
            key={pageIdx}
            className="w-full flex-none snap-start grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-1"
          >
            {pageProducts.map((prod, pIdx) => (
              <div
                key={pIdx}
                onClick={onOpenModal}
                className="bg-gradient-to-b from-[#14121a] to-[#0c0a11] border border-white/10 hover:border-[#fac400]/40 rounded-3xl transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_25px_rgba(250,196,0,0.2)] flex flex-col justify-between relative overflow-hidden cursor-pointer"
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

                  {/* CARD FOOTER CTA */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#fac400] group-hover:translate-x-1 transition-transform">
                      <span>Explore More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* PAGINATION DOTS & ARROWS */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scrollToSlide(0)}
          aria-label="Previous Page"
          className={`p-2 rounded-full border transition-all cursor-pointer ${
            activeSlide === 0
              ? 'border-[#fac400]/40 text-[#fac400] bg-[#fac400]/10'
              : 'border-white/20 text-gray-400 hover:text-white'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5">
          {productPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to product slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? 'w-8 h-2.5 bg-[#fac400] rounded-full shadow-[0_0_10px_rgba(250,196,0,0.5)]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/50 rounded-full'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToSlide(1)}
          aria-label="Next Page"
          className={`p-2 rounded-full border transition-all cursor-pointer ${
            activeSlide === 1
              ? 'border-[#fac400]/40 text-[#fac400] bg-[#fac400]/10'
              : 'border-white/20 text-gray-400 hover:text-white'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function ProductsSection({ onOpenModal }: ProductsSectionProps) {
  return (
    <section id="products-section" className="relative py-12 md:py-16 bg-[#080709] w-full overflow-hidden">
      {/* Ambient Gold Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#fac400]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#fac400] border border-[#fac400]/30 px-4 py-1.5 rounded-full uppercase font-sans">
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
      </div>
    </section>
  );
}
