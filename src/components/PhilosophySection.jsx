import React from 'react';
import { Sparkles, Heart, Feather, Droplet } from 'lucide-react';

export const PhilosophySection = () => {
  return (
    <section id="filosofia" className="w-full py-20 sm:py-28 bg-[#F9F7F2] border-b border-[#5D3A24]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Subtitle Accent */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#8C5E41] font-light block mb-2">
            ✦ Arquitectura Botánica ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#5D3A24] font-light tracking-wide">
            Los 4 Pilares de la <span className="italic font-serif text-[#8C5E41]">Belleza Pura</span>
          </h2>
          <span className="font-script text-2xl text-[#8C5E41] mt-1 font-normal">
            ~ delicadeza, nutrición & resplandor ~
          </span>
        </div>

        {/* 4 Pillars Grid with Tender Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#FFFDF9] p-8 rounded-[35px] border border-[#D9AE94]/30 shadow-sm flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:border-[#D9AE94] transition-all duration-500">
            <div className="p-4 rounded-full bg-[#F4E8E1] text-[#8C5E41] mb-5 border border-[#D9AE94]/40 group-hover:scale-110 group-hover:bg-[#5D3A24] group-hover:text-[#F9F7F2] transition-all duration-500 shadow-sm">
              <Droplet className="w-6 h-6 animate-float-tender" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#5D3A24] mb-2 tracking-wide">
              Sérums Botánicos
            </h3>
            <p className="font-sans text-xs text-[#5D3A24]/75 font-light leading-relaxed">
              Infusiones de aceites silvestres de prensado frío que penetran las capas más profundas de la piel.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FFFDF9] p-8 rounded-[35px] border border-[#D9AE94]/30 shadow-sm flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:border-[#D9AE94] transition-all duration-500">
            <div className="p-4 rounded-full bg-[#F4E8E1] text-[#8C5E41] mb-5 border border-[#D9AE94]/40 group-hover:scale-110 group-hover:bg-[#5D3A24] group-hover:text-[#F9F7F2] transition-all duration-500 shadow-sm">
              <Feather className="w-6 h-6 animate-float-tender" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#5D3A24] mb-2 tracking-wide">
              Arquitectura Facial
            </h3>
            <p className="font-sans text-xs text-[#5D3A24]/75 font-light leading-relaxed">
              Texturas sedosas que esculpen y elevan el contorno natural sin aportar peso ni residuos.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FFFDF9] p-8 rounded-[35px] border border-[#D9AE94]/30 shadow-sm flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:border-[#D9AE94] transition-all duration-500">
            <div className="p-4 rounded-full bg-[#F4E8E1] text-[#8C5E41] mb-5 border border-[#D9AE94]/40 group-hover:scale-110 group-hover:bg-[#5D3A24] group-hover:text-[#F9F7F2] transition-all duration-500 shadow-sm">
              <Heart className="w-6 h-6 animate-heartbeat text-[#8C5E41] group-hover:text-[#F9F7F2]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#5D3A24] mb-2 tracking-wide">
              Bálsamos Velvet
            </h3>
            <p className="font-sans text-xs text-[#5D3A24]/75 font-light leading-relaxed">
              Néctares artesanos con manteca de karité pura para unos labios y pómulos jugosos y Coquetos.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#FFFDF9] p-8 rounded-[35px] border border-[#D9AE94]/30 shadow-sm flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:border-[#D9AE94] transition-all duration-500">
            <div className="p-4 rounded-full bg-[#F4E8E1] text-[#8C5E41] mb-5 border border-[#D9AE94]/40 group-hover:scale-110 group-hover:bg-[#5D3A24] group-hover:text-[#F9F7F2] transition-all duration-500 shadow-sm">
              <Sparkles className="w-6 h-6 animate-shimmer" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#5D3A24] mb-2 tracking-wide">
              Rituales Holísticos
            </h3>
            <p className="font-sans text-xs text-[#5D3A24]/75 font-light leading-relaxed">
              Una experiencia sensorial completa concebida para restaurar tu serenidad y resplandor interior.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
