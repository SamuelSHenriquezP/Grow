import React, { useState } from 'react';
import { Plus, ArrowRight, Sparkles, Heart } from 'lucide-react';

export const productsData = [
  {
    id: 'prod-serum-01',
    name: 'Botanical Radiance Serum',
    subtitle: 'Elixir de Resplandor Celular (30 ml)',
    price: 88.00,
    priceFormatted: '$88.00',
    category: 'Skincare Botánico',
    image: '/assets/serum_glass.png',
    description: 'Sérum botánico concentrado enriquecido con aceite silvestre de rosa mosqueta y micro-pigmentos reflectores de luz solar.'
  },
  {
    id: 'prod-foundation-02',
    name: 'Silk Skin Fluid Foundation',
    subtitle: 'Base Seda & Filtro Solar Botánico (35 ml)',
    price: 115.00,
    priceFormatted: '$115.00',
    category: 'Alta Costura Makeup',
    image: '/assets/foundation.png',
    description: 'Base ultra fluida de acabado satinado que unifica la tez sin obstruir los poros, aportando nutrición continua.'
  },
  {
    id: 'prod-balm-03',
    name: 'Nectar Radiance Balm Pot',
    subtitle: 'Bálsamo Regenerador Labios & Pómulos (15 g)',
    price: 46.00,
    priceFormatted: '$46.00',
    category: 'Tratamiento Velvet',
    image: '/assets/balm_pot.png',
    description: 'Tratamiento intensivo con manteca de karité pura y pétalos de caléndula infusionados a mano.'
  }
];

export const ProductShowcase = ({ onAddToCart }) => {
  return (
    <section id="coleccion" className="w-full py-24 sm:py-32 bg-[#F9F7F2] text-[#5D3A24] relative overflow-hidden">
      
      {/* Background Watermark Typography inspired by Image 2 (SAGE "new") */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[18vw] font-serif font-light text-[#5D3A24]/[0.025] select-none pointer-events-none uppercase tracking-[0.25em] whitespace-nowrap z-0">
        resplandor
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* 1. DARK COCOA EXPERIENCE BANNER directly matching Image 1's "DISCOVER OUR EXPERIENCES" */}
        <div 
          className="bg-[#5D3A24] text-[#F9F7F2] p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl mb-28 group"
          style={{ borderRadius: '45px' }}
        >
          {/* Background Soft Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9AE94]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Header & CTA */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F7F2]/10 text-[#D9AE94] font-sans text-[10px] uppercase tracking-[0.3em] mb-4 border border-[#D9AE94]/30">
                <Sparkles className="w-3 h-3 text-[#D9AE94]" />
                <span>Edición de Experiencia Exclusiva</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#F9F7F2] mb-3 leading-tight">
                DESCUBRE NUESTROS <br />
                <span className="italic font-serif text-[#D9AE94]">RITUALES FIRMA</span>
              </h2>

              <p className="font-script text-2xl text-[#D9AE94] mb-4 font-normal">
                ~ momentos de belleza coqueta y serenidad ~
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#F9F7F2]/80 font-light leading-relaxed mb-8 max-w-sm">
                Formulaciones botánicas concebidas para transformar el cuidado cotidiano en un acto sagrado de resplandor.
              </p>

              <a 
                href="#rituales" 
                className="py-3.5 px-8 rounded-full bg-[#D9AE94] text-[#5D3A24] font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#F9F7F2] transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg"
              >
                <span>VER TODOS LOS RITUALES</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right 3 Circular Product Highlight Cards matching Image 1 */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              
              {/* Circular Card 1 */}
              <div className="bg-[#FFFDF9]/10 p-6 rounded-3xl border border-[#F9F7F2]/15 flex flex-col items-center text-center group/card hover:bg-[#FFFDF9]/20 transition-all duration-300">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#D9AE94] mb-4 shadow-md group-hover/card:scale-105 transition-transform">
                  <img src="/assets/serum_glass.png" alt="Serum" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-serif text-lg text-[#F9F7F2] font-medium mb-1">Deluxe Serum</h4>
                <p className="font-sans text-[11px] text-[#F9F7F2]/70 font-light mb-3">Glow concentrado 30ml</p>
                <span className="font-serif text-xl text-[#D9AE94] italic font-normal">$88.00</span>
              </div>

              {/* Circular Card 2 */}
              <div className="bg-[#FFFDF9]/10 p-6 rounded-3xl border border-[#F9F7F2]/15 flex flex-col items-center text-center group/card hover:bg-[#FFFDF9]/20 transition-all duration-300">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#D9AE94] mb-4 shadow-md group-hover/card:scale-105 transition-transform">
                  <img src="/assets/foundation.png" alt="Foundation" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-serif text-lg text-[#F9F7F2] font-medium mb-1">Silk Skin Fluid</h4>
                <p className="font-sans text-[11px] text-[#F9F7F2]/70 font-light mb-3">Tez satinada 35ml</p>
                <span className="font-serif text-xl text-[#D9AE94] italic font-normal">$115.00</span>
              </div>

              {/* Circular Card 3 */}
              <div className="bg-[#FFFDF9]/10 p-6 rounded-3xl border border-[#F9F7F2]/15 flex flex-col items-center text-center group/card hover:bg-[#FFFDF9]/20 transition-all duration-300">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#D9AE94] mb-4 shadow-md group-hover/card:scale-105 transition-transform">
                  <img src="/assets/balm_pot.png" alt="Balm Pot" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-serif text-lg text-[#F9F7F2] font-medium mb-1">Nectar Radiance</h4>
                <p className="font-sans text-[11px] text-[#F9F7F2]/70 font-light mb-3">Bálsamo nutrir 15g</p>
                <span className="font-serif text-xl text-[#D9AE94] italic font-normal">$46.00</span>
              </div>

            </div>

          </div>
        </div>

        {/* 2. CURATED MOMENTS ROW Header matching Image 1 */}
        <div className="mb-14 text-center max-w-xl mx-auto flex flex-col items-center">
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#8C5E41] font-light block mb-2">
            ✦ Curated Wellness Moments ✦
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#5D3A24] font-light tracking-wide">
            Momentos de Resplandor Curados
          </h3>
          <span className="font-script text-2xl text-[#8C5E41] mt-1 font-normal">
            ~ el arte de cuidar tu luz divina ~
          </span>
        </div>

        {/* 3 Horizontal Cards Grid with (+) Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((prod) => (
            <div 
              key={prod.id}
              className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#5D3A24]/10 shadow-sm flex items-center gap-5 group hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Square Image Thumbnail with Soft Sunlight Shadow */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#F9F7F2] shrink-0 border border-[#D9AE94]/40 relative">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Product Specs */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#5D3A24] leading-tight mb-1">
                    {prod.name}
                  </h4>
                  <p className="font-sans text-[11px] text-[#5D3A24]/75 font-light line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif text-lg italic text-[#5D3A24] font-normal">
                    {prod.priceFormatted}
                  </span>

                  {/* Round Plus Button matching Image 1 */}
                  <button
                    onClick={() => onAddToCart({
                      id: prod.id,
                      name: prod.name,
                      price: prod.price,
                      priceFormatted: prod.priceFormatted,
                      image: prod.image,
                      selectedShade: { name: 'Firma Glow', color: '#D9AE94' }
                    })}
                    className="w-9 h-9 rounded-full bg-[#5D3A24] text-[#F9F7F2] flex items-center justify-center hover:bg-[#8C5E41] transition-colors shadow-md transform hover:scale-110"
                    title="Añadir a la Bolsa"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
