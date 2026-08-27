import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  const phone = "573000000000";
  const defaultMessage = encodeURIComponent("¡Hola Johanía! Quisiera consultar sobre los productos de GROW y recibir asesoría personalizada.");
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 bg-[#5D3A24] text-[#F9F7F2] rounded-full shadow-2xl hover:bg-[#D9AE94] hover:text-[#5D3A24] transition-all duration-500 transform hover:scale-110 flex items-center justify-center border border-[#D9AE94]/40 group"
      aria-label="Contactar por WhatsApp"
      title="Asesoría Personalizada por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-sans text-xs uppercase tracking-widest pl-0 group-hover:pl-2 font-medium">
        WhatsApp Asesoría
      </span>
    </a>
  );
};
