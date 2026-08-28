import React, { useState, useEffect } from 'react';
import { HeroSage } from './hero/HeroSage';
import { HeroSanctuary } from './hero/HeroSanctuary';

export const HeroSection = ({ onOpenQuiz }) => {
  // Automatic device detection:
  // Mobile (< 768px) => 'sage' (1ª opción)
  // Computer (>= 768px) => 'sanctuary' (2ª opción)
  const getInitialVariant = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('v') || params.get('hero');
      if (v === '1' || v === 'sage') return 'sage';
      if (v === '2' || v === 'sanctuary') return 'sanctuary';
      return window.innerWidth < 768 ? 'sage' : 'sanctuary';
    }
    return 'sanctuary';
  };

  const [variant, setVariant] = useState(getInitialVariant);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('v') || params.get('hero')) return;
      
      const isMobile = window.innerWidth < 768;
      setVariant(isMobile ? 'sage' : 'sanctuary');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    </section>
  );
};
