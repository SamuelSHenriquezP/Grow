import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Check, Gift, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const bundlesData = [
  {
    id: 'bundle-sanctuary',
    title: 'The Sanctuary Glow Set',
    subtitle: 'Ritual Completo de Iluminación Celular',
    price: 185.00,
    priceFormatted: '$185.00',
    originalPriceFormatted: '$210.00',
    savings: 'Ahorra 20%',
    image: '/assets/bundle_sanctuary.png',
    features: [
      'Botanical Radiance Serum (30 ml)',
      'Silk Skin Fluid Foundation (35 ml)',
      'Nectar Radiance Balm Pot (15 g)',
      'Neceser Exclusivo de Lino Orgánico GROW'
    ],
    popular: true,
    shape: 'rounded-organic-lg'
  },
  {
    id: 'bundle-essential',
    title: 'The Essential Velvet Trio',
    subtitle: 'El Arte de los Labios & Tez Satinada',
    price: 145.00,
    priceFormatted: '$145.00',
    originalPriceFormatted: '$166.00',
    savings: 'Ahorra 15%',
    image: '/assets/lipstick.png',
    features: [
      'Velvet Lip Kiss - Tono a Elección',
      'Nectar Radiance Balm Pot',
      'Brocha Arquitectónica para Pómulos'
    ],
    popular: false,
    shape: 'rounded-organic-lg'
  },
  {
    id: 'bundle-architect',
    title: 'The Daily Architect Ritual',
    subtitle: 'La Base de la Belleza Orgánica',
    price: 210.00,
    priceFormatted: '$210.00',
    originalPriceFormatted: '$248.00',
    savings: 'Mejor Valor',
    image: '/assets/foundation.png',
    features: [
      'Silk Skin Fluid Foundation',
      'Botanical Radiance Serum',
      'Velvet Lip Kiss',
      'Muestra de Lujo del Próximo Elixir 2027'
    ],
    popular: false,
    shape: 'rounded-organic-lg'
  }
];

export const BundlesSection = ({ onAddToCart, onOpenQuiz }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bundle-floating-card',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="rituales" 
      ref={sectionRef} 
      className="relative py-32 md:py-40 bg-[#FFFDF9] overflow-hidden text-center"
    >
      {/* Background Soft Terracotta Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-[30rem] h-[30rem] bg-[#D9AE94]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#8C5E41] font-light block mb-3 text-center">
            Sets de Experiencia Exclusiva
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5D3A24] font-light tracking-[0.2em] text-center">
            Los Rituales <span className="italic">Firma</span>
          </h2>
          <p className="font-sans text-sm text-[#5D3A24]/75 mt-4 font-light leading-relaxed tracking-wide text-center max-w-md mx-auto">
            Curadurías de belleza concebidas para complementarse armónicamente. 
            Empacadas en cajas artesanales con sello de cera virgen.
          </p>
        </div>

        {/* Floating Cards Grid Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-stretch text-center">
          {bundlesData.map((bundle) => (
            <div
              key={bundle.id}
              className={`bundle-floating-card relative group bg-[#F9F7F2] p-8 sm:p-10 flex flex-col items-center justify-between text-center transition-all duration-700 ${bundle.shape}`}
              style={{
                borderRadius: '60px',
                boxShadow: '0 30px 60px -15px rgba(93, 58, 36, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                border: bundle.popular ? '2px solid #D9AE94' : '1px solid rgba(93, 58, 36, 0.1)'
              }}
            >
              {/* Top Badges Centered */}
              <div className="flex items-center justify-center gap-3 mb-6 mx-auto text-center">
                <span className="px-4 py-1.5 rounded-pill bg-[#5D3A24] text-[#F9F7F2] font-sans text-[10px] uppercase tracking-[0.3em] text-center">
                  {bundle.savings}
                </span>

                {bundle.popular && (
                  <span className="flex items-center justify-center gap-1 font-sans text-[10px] uppercase tracking-[0.3em] text-[#5D3A24] bg-[#D9AE94]/30 px-3.5 py-1.5 rounded-pill border border-[#D9AE94]/40 text-center">
                    <Sparkles className="w-3 h-3 text-[#5D3A24]" />
                    Recomendado
                  </span>
                )}
              </div>

              {/* Product Visual Frame */}
              <div className="relative overflow-hidden mb-8 rounded-organic-md bg-[#FFFDF9] shadow-inner w-full">
                <img 
                  src={bundle.image} 
                  alt={bundle.title}
                  className="w-full h-[240px] sm:h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info Centered */}
              <div className="flex-1 flex flex-col justify-between items-center text-center w-full">
                <div className="flex flex-col items-center text-center w-full">
                  <h3 className="font-serif text-3xl text-[#5D3A24] mb-2 tracking-[0.18em] text-center">
                    {bundle.title}
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#8C5E41] block mb-6 font-light text-center">
                    {bundle.subtitle}
                  </span>

                  {/* Included Items Checklist */}
                  <ul className="space-y-3 mb-8 max-w-xs mx-auto text-left w-full">
                    {bundle.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-sans text-xs text-[#5D3A24]/80 font-light tracking-wide">
                        <div className="w-4 h-4 rounded-full bg-[#D9AE94]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#5D3A24]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA Centered */}
                <div className="pt-6 border-t border-[#5D3A24]/10 flex flex-col items-center justify-center gap-4 text-center w-full">
                  <div className="flex flex-col items-center justify-center text-center gap-1">
                    <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#5D3A24]/60 block text-center">Inversión:</span>
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="font-serif text-3xl italic text-[#5D3A24] font-normal tracking-[0.12em]">
                        {bundle.priceFormatted}
                      </span>
                      <span className="font-sans text-xs line-through text-[#8C5E41]/60 tracking-wider">
                        {bundle.originalPriceFormatted}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart({
                      id: bundle.id,
                      name: bundle.title,
                      price: bundle.price,
                      priceFormatted: bundle.priceFormatted,
                      image: bundle.image,
                      selectedShade: { name: 'Ritual Completo', color: '#D9AE94' }
                    })}
                    className="w-full btn-pill-cocoa justify-center text-center tracking-[0.3em]"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Adquirir Set Experiencia</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Bundle CTA Banner Centered */}
        <div className="mt-16 text-center bg-[#5D3A24]/5 p-8 sm:p-10 rounded-organic-md border border-[#5D3A24]/10 max-w-2xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <span className="font-serif italic text-2xl text-[#5D3A24] block mb-1">¿Prefieres un ritual a la medida?</span>
            <p className="font-sans text-xs text-[#5D3A24]/75 font-light tracking-wide text-center">Realiza nuestro test personalizado para formular tu set ideal.</p>
          </div>
          <button 
            onClick={onOpenQuiz}
            className="btn-pill-outline shrink-0 text-xs py-3.5 px-8 mt-2 tracking-[0.3em] mx-auto text-center"
          >
            <span>Iniciar Glow Match</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

