import { useRef, useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { productsList } from '../../../data/productsData';

interface ProductsSectionLightProps {
  onOpenModal: () => void;
}

function ProductCardsCarouselLight({ onOpenModal }: { onOpenModal: () => void }) {
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
                className="bg-white border border-slate-200/90 hover:border-amber-500/40 rounded-3xl transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_16px_40px_-10px_rgba(1,40,84,0.16)] hover:shadow-[0_24px_55px_-10px_rgba(183,120,5,0.28)] flex flex-col justify-between relative overflow-hidden cursor-pointer"
              >
                {/* TOP IMAGE CONTAINER */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-slate-200/80 group-hover:border-amber-500/30 transition-colors shrink-0">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                  {/* FLOATING CATEGORY BADGE */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#012854]/90 backdrop-blur-md border border-amber-500/30 text-[#CE9116] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase font-mono shadow-md z-10">
                    {prod.badge}
                  </div>
                </div>

                {/* CARD CONTENT AREA */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#012854] tracking-tight mb-2 font-sans leading-snug group-hover:text-[#B77805] transition-colors">
                      {prod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3D3E42] font-normal leading-relaxed mb-4">
                      {prod.desc}
                    </p>

                    <div className="space-y-2.5 pt-1">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#012854]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B77805] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD FOOTER CTA */}
                  <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B77805] group-hover:translate-x-1 transition-transform">
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
          className={`p-2 rounded-full border transition-all cursor-pointer ${activeSlide === 0
            ? 'border-amber-500/40 text-[#B77805] bg-amber-500/10'
            : 'border-slate-300 text-slate-400 hover:text-[#012854]'
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
              className={`transition-all duration-300 cursor-pointer ${activeSlide === idx
                ? 'w-8 h-2.5 bg-[#B77805] rounded-full shadow-md'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToSlide(1)}
          aria-label="Next Page"
          className={`p-2 rounded-full border transition-all cursor-pointer ${activeSlide === 1
            ? 'border-amber-500/40 text-[#B77805] bg-amber-500/10'
            : 'border-slate-300 text-slate-400 hover:text-[#012854]'
            }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function ProductsSectionLight({ onOpenModal }: ProductsSectionLightProps) {
  return (
    <section id="products-section" className="relative py-8 md:py-12 bg-white w-full border-t border-slate-200/80 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1320px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#B77805] border border-amber-500/30 px-4 py-1.5 rounded-full uppercase font-sans">
              OUR PRODUCTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#012854] leading-[1.12] mb-4 font-sans">
            Ready-to-Use Products. <br />
            <span className="text-gradient-primary-light font-bold">Built for Real Business.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#3D3E42] font-normal leading-relaxed mb-6">
            Aamesh has developed a portfolio of independent business applications that can be deployed individually based on your organization's needs. Start with one product. Add more when you're ready.
          </p>
        </div>

        {/* 6 PRODUCT CARDS AUTO-SCROLL CAROUSEL */}
        <ProductCardsCarouselLight onOpenModal={onOpenModal} />
      </div>
    </section>
  );
}
