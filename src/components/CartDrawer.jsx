import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Sparkles, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BrandLogo } from './BrandLogo';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 150;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setIsCheckingOut(true);

    // Format WhatsApp Order Message
    const phone = "573000000000"; // Brand WhatsApp contact
    const itemsList = cartItems.map(item => 
      `• *${item.name}* ${item.selectedShade ? `(Tono: ${item.selectedShade.name})` : ''} - Cantidad: ${item.quantity} → $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const whatsappMessage = `✨ *NUEVO PEDIDO DE LUJO - GROW BY JOHANÍA BALLESTAS* ✨\n\n` +
      `Hola Johanía! Me gustaría realizar la orden de los siguientes productos:\n\n` +
      `${itemsList}\n\n` +
      `💳 *Total a pagar:* $${subtotal.toFixed(2)}\n` +
      `🚚 *Envío Expreso:* Gratis\n\n` +
      `Quedo atenta para coordinar la dirección de envío y los datos de pago. ¡Gracias!`;

    const encodedUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#5D3A24', '#D9AE94', '#DFB277', '#F9F7F2']
    });

    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      window.open(encodedUrl, '_blank');
      onClearCart();
    }, 1200);
  };

  const handleCloseAll = () => {
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-[#5D3A24]/50 backdrop-blur-sm transition-opacity duration-500"
        onClick={handleCloseAll}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F9F7F2] shadow-2xl flex flex-col justify-between p-6 sm:p-8 rounded-l-[40px] border-l border-[#D9AE94]/30 relative overflow-hidden">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#5D3A24]/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#5D3A24]" />
                <h3 className="font-serif text-2xl text-[#5D3A24]">Cesta de Lujo</h3>
                <span className="font-sans text-xs text-[#8C5E41]">({cartItems.reduce((a, b) => a + b.quantity, 0)})</span>
              </div>
              <button
                onClick={handleCloseAll}
                className="p-2 rounded-full text-[#5D3A24] hover:bg-[#5D3A24]/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Luxury Sample Progress Bar */}
            {!orderComplete && (
              <div className="mt-6 p-4 rounded-organic-sm bg-[#FFFDF9] border border-[#5D3A24]/10">
                <div className="flex items-center justify-between text-xs font-sans mb-2">
                  <span className="text-[#5D3A24] font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9AE94]" />
                    {subtotal >= freeShippingThreshold 
                      ? '¡Has desbloqueado el Regalo de Lujo Exclusivo!' 
                      : `Agrega $${(freeShippingThreshold - subtotal).toFixed(2)} más para Muestra Gratis`}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#5D3A24]/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#5D3A24] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Content */}
          {orderComplete ? (
            <div className="my-auto text-center p-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#D9AE94]/30 flex items-center justify-center mx-auto mb-4 text-[#5D3A24]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <BrandLogo size="small" className="mb-4" />
              <h4 className="font-serif text-3xl text-[#5D3A24] mb-2">
                ¡Pedido Confirmado!
              </h4>
              <p className="font-sans text-xs text-[#5D3A24]/80 font-light leading-relaxed mb-6">
                Gracias por permitir a GROW formar parte de tu arquitectura diaria de belleza. 
                Recibirás la confirmación y guía de rastreo en tu correo electrónico.
              </p>
              <button
                onClick={handleCloseAll}
                className="btn-pill-cocoa w-full text-xs"
              >
                Continuar Explorando
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="my-auto text-center p-6">
              <ShoppingBag className="w-12 h-12 text-[#5D3A24]/30 mx-auto mb-4" />
              <h4 className="font-serif text-2xl text-[#5D3A24] mb-2">Tu cesta está vacía</h4>
              <p className="font-sans text-xs text-[#5D3A24]/70 font-light mb-6">
                Descubre nuestra selección de productos botánicos y rituales firma.
              </p>
              <button
                onClick={onClose}
                className="btn-pill-outline text-xs"
              >
                Ver Colección
              </button>
            </div>
          ) : (
            <div className="flex-1 my-6 overflow-y-auto pr-1 space-y-4">
              {cartItems.map((item, idx) => (
                <div 
                  key={`${item.id}-${idx}`}
                  className="bg-[#FFFDF9] p-4 rounded-organic-sm border border-[#5D3A24]/10 flex items-center gap-4 relative group"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-organic-sm"
                  />
                  <div className="flex-1">
                    <h5 className="font-serif text-lg text-[#5D3A24] leading-tight">
                      {item.name}
                    </h5>
                    {item.selectedShade && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: item.selectedShade.color }} />
                        <span className="font-sans text-[10px] uppercase text-[#8C5E41]">{item.selectedShade.name}</span>
                      </div>
                    )}
                    <span className="font-serif italic text-sm text-[#5D3A24] mt-1 block">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex items-center gap-2 bg-[#F9F7F2] px-2 py-1 rounded-pill border border-[#5D3A24]/10">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-[#5D3A24] hover:text-[#D9AE94]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-sans text-xs font-medium text-[#5D3A24] w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-[#5D3A24] hover:text-[#D9AE94]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-[#5D3A24]/40 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Footer Checkout Summary */}
          {!orderComplete && cartItems.length > 0 && (
            <div className="pt-6 border-t border-[#5D3A24]/15">
              <div className="flex items-center justify-between mb-2 font-sans text-xs text-[#5D3A24]/80">
                <span>Subtotal:</span>
                <span className="font-serif text-lg text-[#5D3A24]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between mb-4 font-sans text-xs text-[#5D3A24]/80">
                <span>Envío Lujo Expreso:</span>
                <span className="text-[#8C5E41]">Gratis</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full btn-pill-cocoa flex items-center justify-center gap-2 py-4 shadow-lg hover:shadow-2xl transition-all"
              >
                {isCheckingOut ? (
                  <span>Transfiriendo a WhatsApp...</span>
                ) : (
                  <>
                    <span>Enviar Pedido a WhatsApp (${subtotal.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
