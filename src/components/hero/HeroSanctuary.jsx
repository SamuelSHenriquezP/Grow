import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export const HeroSanctuary = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate-sanctuary',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="w-full h-full relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-2xl border border-[#D9AE94]/40 bg-[#F4EDE4] z-10 grid grid-cols-1 lg:grid-cols-12 select-none"
    >
      {/* ======================================================== */}
      {/* LEFT COLUMN: Editorial Space with Generous Air (5 Cols)  */}
      {/* ======================================================== */}
      <div className="lg:col-span-5 h-full p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between z-20 relative bg-[#F4EDE4]">
        
        {/* Top-Left: Clean Brand Logo */}
        <div className="hero-animate-sanctuary flex items-center justify-between w-full">
          <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <BrandLogo variant="dark" size="medium" align="left" />
          </a>
        </div>

        {/* Center: Headline & Refined CTA */}
        <div className="flex flex-col items-start my-auto py-4">
          
          <span className="hero-animate-sanctuary font-script text-2xl sm:text-3xl text-[#8C5E41] font-normal mb-2">
            ~ Belleza Consciente & Pura ~
          </span>

          <h1 className="hero-animate-sanctuary font-serif text-3xl sm:text-4xl xl:text-5xl leading-[1.08] text-[#5D3A24] font-light tracking-[0.03em] uppercase mb-4">
            UN SANTUARIO <br />
            <span className="italic font-serif text-[#8C5E41]">PARA TU PIEL.</span>
          </h1>

          <p className="hero-animate-sanctuary font-sans font-light text-xs sm:text-sm text-[#5D3A24]/75 max-w-sm mb-6 leading-relaxed">
            Fórmulas botánicas puras prensadas en frío para restaurar, nutrir y exaltar tu luz natural cotidiana.
          </p>

          <div className="hero-animate-sanctuary flex items-center gap-3">
            <a 
              href="#coleccion" 
              className="px-7 py-3.5 rounded-full bg-[#5D3A24] text-[#FFFDF9] font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#8C5E41] transition-all shadow-md flex items-center gap-2 group hover:scale-105"
            >
              <span>Explorar Colección</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Tagline */}
        <div className="hero-animate-sanctuary flex items-center gap-3 text-[#8C5E41]">
          <Sparkles className="w-3.5 h-3.5 text-[#D9AE94]" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-light text-[#5D3A24]/60">
            Botánica Pura • 100% Orgánico
          </span>
        </div>

      </div>

      {/* ======================================================== */}
      {/* RIGHT COLUMN: Macro Model Photography with Organic Wave */}
      {/* ======================================================== */}
      <div className="lg:col-span-7 h-full relative overflow-hidden flex flex-col justify-between p-6 sm:p-10">
        
        {/* Macro Portrait Background Image */}
        <img 
          src="/assets/hero_macro.png" 
          alt="GROW Sanctuary Experience" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Organic Double S-Curve Wave SVG Mask seamlessly connecting Left & Right */}
        <svg 
          className="hidden lg:block absolute top-0 -left-[1px] bottom-0 h-full w-24 xl:w-32 text-[#F4EDE4] fill-current z-10 pointer-events-none"
          viewBox="0 0 100 800" 
          preserveAspectRatio="none"
        >
          <path d="M 0 0 L 75 0 C 20 200, 95 380, 25 580 C -5 700, 60 760, 45 800 L 0 800 Z" />
        </svg>

        {/* Subtle Lighting Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24130A]/40 via-transparent to-[#24130A]/15 pointer-events-none" />

        {/* Scroll Down Hint */}
        <div className="hero-animate-sanctuary relative z-20 self-center lg:self-end">
          <a 
            href="#filosofia" 
            className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-[#FFFDF9]/80 bg-[#382012]/40 backdrop-blur-md px-4 py-1.5 rounded-full hover:bg-[#382012]/60 transition-colors"
            aria-label="Bajar a la sección de filosofía"
          >
            <span>Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>

    </div>
  );
};

