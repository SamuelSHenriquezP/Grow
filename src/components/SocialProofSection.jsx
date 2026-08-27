import React from 'react';
import { Star, ShieldCheck, Sparkles, Compass } from 'lucide-react';

const reviewsData = [
  {
    id: 'rev-01',
    author: 'Valeria M.',
    role: 'Editora de Moda & Estilo',
    location: 'Bogotá, COL',
    rating: 5,
    quote: 'El Botanical Serum cambió por completo la textura de mi piel en 14 días. Es la primera vez que no necesito usar corrector de alta cobertura.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 'rev-02',
    author: 'Camila S.',
    role: 'Dermatóloga Holística',
    location: 'Medellín, COL',
    rating: 5,
    quote: 'La base Silk Skin Fluid tiene un acabado que imita la luz solar directa. Mis pacientes elogian constantemente la naturalidad del acabado.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 'rev-03',
    author: 'Isabella R.',
    role: 'Arquitecta de Interiores',
    location: 'Cartagena, COL',
    rating: 5,
    quote: 'El empaque en sí mismo es una escultura para el tocador. Y la fragancia botánica de rosa mosqueta transmite una paz inmediata.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop'
  }
];

export const SocialProofSection = () => {
  return (
    <section id="comunidad" className="w-full py-24 sm:py-32 bg-[#F9F7F2] text-[#5D3A24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* 1. OUR CRAFTED COLLECTIONS directly matching Image 1's "OUR LOCAL CRAFTED COLLECTIONS" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28">
          
          {/* Dark Container Box (5 Cols) */}
          <div 
            className="lg:col-span-5 bg-[#5D3A24] text-[#F9F7F2] p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            style={{ borderRadius: '40px' }}
          >
            <div className="relative z-10">
              <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#D9AE94] font-light block mb-3">
                Ediciones Limitadas & Artesanales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-[#F9F7F2] uppercase mb-2 leading-tight">
                NUESTRA COLECCIÓN <br />
                <span className="italic font-serif text-[#D9AE94]">ARTESANAL</span>
              </h2>
              <span className="font-script text-2xl text-[#D9AE94] block mb-4 font-normal">
                ~ formulada con calma en Colombia ~
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#F9F7F2]/80 font-light leading-relaxed mb-8">
                Fórmulas botánicas prensadas en frío y aceites esenciales purificados a mano por maestras artesanas en Cartagena.
              </p>
              <a 
                href="#coleccion" 
                className="py-3.5 px-8 rounded-full bg-[#D9AE94] text-[#5D3A24] font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#F9F7F2] transition-all transform hover:-translate-y-1 inline-block text-center shadow-lg"
              >
                EXPLORAR BOUTIQUE
              </a>
            </div>

            {/* 3 Icon Specs at Bottom */}
            <div className="pt-8 border-t border-[#F9F7F2]/15 grid grid-cols-3 gap-4 text-center mt-10 relative z-10">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-[#D9AE94] mb-1" />
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#F9F7F2]/80">Origen Orgánico</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-5 h-5 text-[#D9AE94] mb-1" />
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#F9F7F2]/80">Arte Botánico</span>
              </div>
              <div className="flex flex-col items-center">
                <Compass className="w-5 h-5 text-[#D9AE94] mb-1" />
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#F9F7F2]/80">Edición Limitada</span>
              </div>
            </div>

          </div>

          {/* 2 Large Photo Cards (7 Cols) matching Image 1 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Photo Card 1 */}
            <div 
              className="bg-[#FFFDF9] p-4 rounded-[40px] border border-[#5D3A24]/10 shadow-md flex flex-col group hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              <div className="w-full h-[280px] sm:h-[320px] rounded-[32px] overflow-hidden mb-4 bg-[#F9F7F2]">
                <img 
                  src="/assets/serum_glass.png" 
                  alt="Colección Botánica" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="px-3 pb-2 text-center">
                <h4 className="font-serif text-xl font-medium text-[#5D3A24]">Fórmulas Concentradas</h4>
                <p className="font-sans text-xs text-[#8C5E41] font-light mt-1 uppercase tracking-wider">Aceites Silvestres 30ml</p>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div 
              className="bg-[#FFFDF9] p-4 rounded-[40px] border border-[#5D3A24]/10 shadow-md flex flex-col group hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              <div className="w-full h-[280px] sm:h-[320px] rounded-[32px] overflow-hidden mb-4 bg-[#F9F7F2]">
                <img 
                  src="/assets/lipstick.png" 
                  alt="Velvet Lip Kiss" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="px-3 pb-2 text-center">
                <h4 className="font-serif text-xl font-medium text-[#5D3A24]">Tratamiento Labios</h4>
                <p className="font-sans text-xs text-[#8C5E41] font-light mt-1 uppercase tracking-wider">Pigmentación de Seda</p>
              </div>
            </div>

          </div>

        </div>

        {/* 2. REVIEWS SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#8C5E41] font-light block mb-2">
            Voces de Nuestra Comunidad
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#5D3A24] font-light tracking-wide">
            El Testimonio de la <span className="italic font-serif text-[#8C5E41]">Luz</span>
          </h2>
          <span className="font-script text-2xl text-[#8C5E41] mt-1 font-normal">
            ~ experiencias reales de resplandor ~
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFDF9] p-8 rounded-3xl border border-[#5D3A24]/10 shadow-sm flex flex-col justify-between text-center relative hover:shadow-md transition-shadow hover:-translate-y-1"
            >
              <div className="flex justify-center text-[#DFB277] mb-4 gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="font-serif italic text-lg text-[#5D3A24] leading-relaxed mb-6">
                "{rev.quote}"
              </p>

              <div className="pt-4 border-t border-[#5D3A24]/10 flex flex-col items-center">
                <img 
                  src={rev.avatar} 
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#D9AE94] mb-2"
                />
                <h4 className="font-serif text-base font-medium text-[#5D3A24]">{rev.author}</h4>
                <span className="font-sans text-[10px] text-[#8C5E41] uppercase tracking-wider">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
