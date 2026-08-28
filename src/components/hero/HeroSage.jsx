import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export const HeroSage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate-sage',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="w-full h-full relative rounded-[28px] sm:rounded-[36px] md:rounded-[48px] overflow-hidden shadow-2xl border border-[#D9AE94]/30 flex flex-col justify-between p-6 sm:p-10 md:p-14 z-10 select-none"
    >
      {/* Full-bleed Macro Beauty Photography Background */}
      <img 
        src="/assets/hero_macro.png" 
        alt="GROW Luxury Skincare" 
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none scale-100 transition-transform duration-1000 ease-out"
      />

      {/* Subtle Cinematic Vignette Gradients */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2C180E]/50 via-[#2C180E]/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#24130A]/85 via-[#24130A]/35 to-transparent pointer-events-none" />

      {/* Top Header Row: Logo exclusively at Top-Left */}
      <div className="hero-animate-sage relative z-20 flex items-center justify-between w-full">
        <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-105">
          <BrandLogo variant="light" size="medium" align="left" />
        </a>
      </div>

      {/* Bottom Area: Pure Monumental Editorial 'grow' Typography */}
      <div className="relative z-20 flex flex-col justify-end w-full">
        
        {/* Giant High-Fashion Serif Wordmark (Matching the Sage reference) */}
        <h1 className="hero-animate-sage font-serif lowercase text-[25vw] sm:text-[23vw] md:text-[21vw] lg:text-[19vw] leading-[0.72] tracking-[-0.04em] text-[#FFFDF9] select-none text-left sm:text-left drop-shadow-2xl">
          grow
        </h1>

        {/* Minimal Subtle Scroll Down Hint */}
        <div className="hero-animate-sage flex justify-center pt-2">
          <a 
            href="#filosofia" 
            className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.35em] text-[#FFFDF9]/60 hover:text-[#FFFDF9] transition-colors py-1 animate-bounce"
            aria-label="Bajar a la sección de filosofía"
          >
            <span>Scroll</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};

