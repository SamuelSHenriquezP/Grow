import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MapPin, Clock, Send, Globe, Share2, Heart, ArrowUp, Leaf } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F9F7F2] text-[#5D3A24] relative pt-16 pb-12 overflow-hidden border-t border-[#5D3A24]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Main Footer Container Box directly matching Image 1 */}
        <div 
          className="bg-[#FFFDF9] border border-[#5D3A24]/15 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-lg mb-12"
          style={{ borderRadius: '40px' }}
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9AE94]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column (5 Cols): FIND US & GET IN TOUCH */}
            <div className="lg:col-span-5 flex flex-col items-start text-left border-b lg:border-b-0 lg:border-r border-[#5D3A24]/15 pb-8 lg:pb-0 lg:pr-10">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-[#8C5E41]" />
                <span className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#5D3A24] uppercase">
                  ENCUÉNTRANOS & CONTACTO
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C5E41] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-sm font-medium text-[#5D3A24]">ATELIER JOHANÍA BALLESTAS</h5>
                    <p className="font-sans text-xs text-[#5D3A24]/75 font-light">Calle Santo Domingo #3-45, Centro Histórico, Cartagena</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8C5E41] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-sm font-medium text-[#5D3A24]">HORARIO DE ATENCIÓN DE SPA</h5>
                    <p className="font-sans text-xs text-[#5D3A24]/75 font-light">Lunes a Sábado: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): JOIN OUR EXCLUSIVE CIRCLE */}
            <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-6">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#5D3A24] uppercase mb-2">
                ÚNETE A NUESTRO CÍRCULO EXCLUSIVO
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#5D3A24]/75 font-light leading-relaxed mb-6">
                Recibe secretos de belleza botánica, invitaciones privadas a catas sensoriales y acceso anticipado a nuestras ediciones limitadas.
              </p>

              {/* Newsletter Form directly matching Image 1 */}
              <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col sm:flex-row items-center gap-3">
                <input 
                  type="email" 
                  placeholder="Ingresa tu correo electrónico..."
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#F9F7F2] border border-[#5D3A24]/20 font-sans text-xs text-[#5D3A24] placeholder:text-[#5D3A24]/50 focus:outline-none focus:border-[#5D3A24]"
                  required
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#5D3A24] text-[#F9F7F2] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C5E41] transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  <span>SUSCRIBIRME</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Brand Logo, Social Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#5D3A24]/10 text-xs font-sans text-[#5D3A24]/70 font-light">
          
          <div className="flex items-center gap-4">
            <BrandLogo variant="dark" size="small" />
            <span>© {new Date().getFullYear()} GROW BY JOHANÍA BALLESTAS.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-[#FFFDF9] border border-[#5D3A24]/15 hover:bg-[#5D3A24] hover:text-[#F9F7F2] transition-colors" aria-label="Sitio Web">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#FFFDF9] border border-[#5D3A24]/15 hover:bg-[#5D3A24] hover:text-[#F9F7F2] transition-colors" aria-label="Compartir">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#FFFDF9] border border-[#5D3A24]/15 hover:bg-[#5D3A24] hover:text-[#F9F7F2] transition-colors" aria-label="Favoritos">
              <Heart className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#5D3A24] transition-colors uppercase tracking-wider font-medium text-[11px]"
          >
            <span>Volver Arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
