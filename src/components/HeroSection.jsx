import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight, Leaf, Sun, ShieldCheck, Heart } from 'lucide-react';

export const HeroSection = ({ onOpenQuiz }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.18, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-8 lg:px-12 w-full bg-[#F9F7F2] overflow-hidden">
      
      {/* Background Subtle Watermark Typography inspired by Image 2 (SAGE) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[14vw] font-serif font-light text-[#5D3A24]/[0.03] select-none pointer-events-none uppercase tracking-[0.2em] whitespace-nowrap z-0">
        grow BY JOHANÍA
      </div>

      {/* Main 7xl Centered Organic Container Box matching Image 1 */}
      <div 
        className="w-full max-w-7xl mx-auto bg-[#F4E8E1]/80 border border-[#D9AE94]/40 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl z-10"
        style={{ borderRadius: '60px' }}
      >
        {/* Soft Terracotta Glowing Orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D9AE94]/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E8C5B0]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          
          {/* Left Column (6 Cols): Feminine Luxury Typography, CTA & 4-Grid Features */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Cute Feminine Script Badge */}
            <div className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9]/90 border border-[#D9AE94]/50 text-[#5D3A24] mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D9AE94]" />
              <span className="font-script text-base text-[#8C5E41] tracking-wide">Elixir Botánico de Alta Costura</span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-[#5D3A24]/60">• 100% Orgánico</span>
            </div>

            {/* Main Editorial Headline with Script Accent */}
            <h1 className="hero-animate font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-[#5D3A24] font-light tracking-[0.04em] uppercase mb-5">
              UN SANTUARIO <br />
              <span className="italic font-serif text-[#8C5E41]">PARA TU PIEL.</span>
              <span className="block font-script text-3xl sm:text-4xl text-[#D9AE94] capitalize tracking-normal mt-1 text-left font-normal">
                ~ resplandor natural & belleza consciente ~
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-animate font-sans font-light text-sm sm:text-base text-[#5D3A24]/85 max-w-lg mb-8 leading-relaxed tracking-wide">
              Fórmulas botánicas puras prensadas en frío y enriquecidas con aceites esenciales silvestres. 
              Diseñadas para estructurar, nutrir y exaltar tu luz natural cotidiana.
            </p>

            {/* CTA Pill Buttons Row */}
            <div className="hero-animate flex flex-wrap items-center gap-4 mb-10">
              <a href="#coleccion" className="btn-pill-cocoa group">
                <span>EXPLORAR COLECCIÓN</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button 
                onClick={onOpenQuiz}
                className="btn-pill-outline text-xs tracking-[0.25em]"
              >
                <span>TEST GLOW MATCH</span>
              </button>
            </div>

            {/* 4 Mini Features Grid (2x2) directly matching Image 1 */}
            <div className="hero-animate grid grid-cols-2 gap-5 pt-8 border-t border-[#5D3A24]/15 w-full">
              
              <div className="flex items-start gap-3 group">
                <div className="p-2.5 rounded-2xl bg-[#FFFDF9] text-[#5D3A24] shadow-sm shrink-0 border border-[#D9AE94]/40 group-hover:scale-110 transition-transform">
                  <Leaf className="w-4 h-4 text-[#8C5E41]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase font-medium tracking-wider text-[#5D3A24]">Fórmulas Puras</h4>
                  <p className="font-sans text-[11px] text-[#5D3A24]/70 font-light mt-0.5">Extractos Silvestres</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2.5 rounded-2xl bg-[#FFFDF9] text-[#5D3A24] shadow-sm shrink-0 border border-[#D9AE94]/40 group-hover:scale-110 transition-transform">
                  <Sun className="w-4 h-4 text-[#8C5E41]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase font-medium tracking-wider text-[#5D3A24]">Glow Satinado</h4>
                  <p className="font-sans text-[11px] text-[#5D3A24]/70 font-light mt-0.5">Luz Natural 24H</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2.5 rounded-2xl bg-[#FFFDF9] text-[#5D3A24] shadow-sm shrink-0 border border-[#D9AE94]/40 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4 text-[#8C5E41]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase font-medium tracking-wider text-[#5D3A24]">Sin Tóxicos</h4>
                  <p className="font-sans text-[11px] text-[#5D3A24]/70 font-light mt-0.5">Zero Parabenos</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2.5 rounded-2xl bg-[#FFFDF9] text-[#5D3A24] shadow-sm shrink-0 border border-[#D9AE94]/40 group-hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4 text-[#8C5E41]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase font-medium tracking-wider text-[#5D3A24]">Hecho con Amor</h4>
                  <p className="font-sans text-[11px] text-[#5D3A24]/70 font-light mt-0.5">Artesanal en Colombia</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (6 Cols): Arched Image with Circular Floating Seal matching Image 1 */}
          <div className="hero-animate lg:col-span-6 relative flex justify-center items-center">
            
            {/* Arched Smooth Container with Soft Sunlight Shadows */}
            <div 
              className="relative overflow-hidden shadow-2xl border-4 border-[#FFFDF9] w-full max-w-md sm:max-w-lg h-[480px] sm:h-[560px] group"
              style={{ borderRadius: '150px 150px 45px 45px' }}
            >
              <img 
                src="/assets/hero_macro.png" 
                alt="GROW Luxury Model Skincare" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D3A24]/35 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#D9AE94]/40 text-[#5D3A24] font-serif text-xs italic tracking-wider whitespace-nowrap shadow-md">
                “La belleza es la manifestación de la luz interior.”
              </div>
            </div>

            {/* Circular Floating Seal Badge directly inspired by Image 1's "YOUR SANCTUARY AWAITS" */}
            <div className="absolute top-4 right-2 sm:right-4 bg-[#FFFDF9]/95 text-[#5D3A24] p-4 rounded-full shadow-xl border border-[#D9AE94]/60 flex flex-col items-center justify-center text-center w-32 h-32 animate-float pointer-events-none">
              <Sparkles className="w-4 h-4 text-[#8C5E41] mb-1" />
              <span className="font-serif text-[10px] uppercase tracking-[0.25em] font-medium leading-tight text-center">
                YOUR SANCTUARY <br /> AWAITS
              </span>
              <span className="font-script text-xs text-[#8C5E41] mt-0.5">Johanía Ballestas</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
