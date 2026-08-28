import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Navbar = ({ cartCount, onOpenCart, onOpenQuiz }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Colección', href: '#coleccion' },
  ];

  const rightNavLinks = [
    { name: 'Rituales', href: '#rituales' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 flex justify-center transition-all duration-500 ease-out ${
        scrolled 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-12 pointer-events-none'
      }`}
    >
      <div 
        className="w-full max-w-7xl mx-auto rounded-pill px-6 sm:px-10 py-3 flex items-center justify-between gap-4 glass-panel shadow-xl bg-[#F9F7F2]/90 backdrop-blur-md border border-[#D9AE94]/40 transition-all duration-300"
      >
        {/* Left Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-sans tracking-[0.3em] uppercase text-[#5D3A24]">
          {leftNavLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-[#D9AE94] transition-colors relative group py-1 font-medium whitespace-nowrap text-center"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D9AE94] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Centered Brand Logo */}
        <a href="#" className="flex-shrink-0 mx-auto lg:mx-0">
          <BrandLogo size="medium" />
        </a>

        {/* Right Navigation Links & Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-8 text-[11px] font-sans tracking-[0.3em] uppercase text-[#5D3A24]">
            {rightNavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#D9AE94] transition-colors relative group py-1 font-medium whitespace-nowrap text-center"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D9AE94] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-[#5D3A24]/20" />

          {/* Glow Match Button with Sweet Shimmer */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center justify-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] text-[#5D3A24] transition-all bg-[#D9AE94]/30 hover:bg-[#D9AE94]/50 px-4 py-2 rounded-pill border border-[#D9AE94]/60 font-medium whitespace-nowrap text-center animate-shimmer hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5D3A24] animate-spin-slow" />
            <span>Glow Match</span>
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#5D3A24] hover:text-[#D9AE94] transition-colors rounded-full hover:bg-[#5D3A24]/5"
            aria-label="Cesta de compras"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#5D3A24] text-[#F9F7F2] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-sans font-semibold shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#5D3A24]"
            aria-label="Cesta de compras"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#5D3A24] text-[#F9F7F2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5D3A24]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 w-full max-w-md p-6 glass-panel rounded-organic-md flex flex-col items-center justify-center text-center gap-5 shadow-2xl bg-[#F9F7F2]/95 border border-[#D9AE94]/50">
          <nav className="flex flex-col items-center justify-center text-center gap-4 text-xs font-sans tracking-[0.3em] uppercase text-[#5D3A24] font-medium">
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#D9AE94] transition-colors py-1 text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuiz();
            }}
            className="w-full btn-pill-cocoa flex items-center justify-center text-center gap-2 text-xs py-3.5 tracking-[0.25em]"
          >
            <Sparkles className="w-4 h-4 text-[#D9AE94]" />
            <span>Descubrir mi Glow Match</span>
          </button>
        </div>
      )}
    </header>
  );
};

