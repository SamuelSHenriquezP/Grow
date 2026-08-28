import React, { useState, useEffect } from 'react';
import { HeroSage } from './hero/HeroSage';
import { HeroSanctuary } from './hero/HeroSanctuary';
import { Sparkles, Layers, Eye } from 'lucide-react';

export const HeroSection = ({ onOpenQuiz }) => {
  // Check URL parameter on load (?v=1 | ?v=sage | ?v=2 | ?v=sanctuary)
  const getInitialVariant = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('v') || params.get('hero');
      if (v === '1' || v === 'sage') return 'sage';
      if (v === '2' || v === 'sanctuary') return 'sanctuary';
    }
    // Default to 'sanctuary' (the fusion design) or 'sage'
    return 'sanctuary';
  };

  const [variant, setVariant] = useState(getInitialVariant);

  const handleSelectVariant = (newVariant) => {
    setVariant(newVariant);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location);
      url.searchParams.set('v', newVariant === 'sage' ? '1' : '2');
      window.history.replaceState({}, '', url);
    }
  };

  return (
    <section className="relative w-full h-[100dvh] max-h-[100dvh] p-2.5 sm:p-4 md:p-5 box-border flex flex-col justify-center items-center bg-[#F9F7F2] overflow-hidden">
      
      {/* Active Hero Variant with Smooth Transition */}
      <div className="w-full h-full transition-all duration-700 ease-in-out">
        {variant === 'sage' ? (
          <HeroSage onOpenQuiz={onOpenQuiz} />
        ) : (
          <HeroSanctuary onOpenQuiz={onOpenQuiz} />
        )}
      </div>

      {/* Floating Studio Variant Switcher Pill */}
      <aside 
        aria-label="Selector de Variantes de Diseño"
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-[#382012]/90 backdrop-blur-xl border border-[#D9AE94]/50 shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <div className="flex items-center gap-1 pl-2 pr-1 text-[#D9AE94]">
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden md:inline font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#F4EDE4]">
            Diseño:
          </span>
        </div>

        {/* Option 1: Inmersivo Sage */}
        <button
          onClick={() => handleSelectVariant('sage')}
          className={`px-3 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 ${
            variant === 'sage'
              ? 'bg-[#D9AE94] text-[#24130A] font-semibold shadow-md'
              : 'text-[#F4EDE4]/75 hover:text-[#FFFDF9] hover:bg-white/10'
          }`}
          title="Variante 1: Inmersiva Macro (Sage) con tipografía gigante"
        >
          <span>1. Inmersivo Sage</span>
        </button>

        {/* Option 2: Santuario Wave */}
        <button
          onClick={() => handleSelectVariant('sanctuary')}
          className={`px-3 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 ${
            variant === 'sanctuary'
              ? 'bg-[#D9AE94] text-[#24130A] font-semibold shadow-md'
              : 'text-[#F4EDE4]/75 hover:text-[#FFFDF9] hover:bg-white/10'
          }`}
          title="Variante 2: Panel Santuario con Onda Orgánica y 4 Pilares"
        >
          <span>2. Santuario Onda</span>
        </button>
      </aside>

    </section>
  );
};
