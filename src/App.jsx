import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProductShowcase } from './components/ProductShowcase';
import { BundlesSection } from './components/BundlesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GlowQuizModal } from './components/GlowQuizModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedShade?.name === product.selectedShade?.name
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F7F2] text-[#5D3A24] font-sans selection:bg-[#D9AE94] selection:text-[#5D3A24]">
      
      {/* Navigation Header */}
      <Navbar 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Page Architecture */}
      <main className="w-full">
        {/* Section 1: Hero split screen with GROW overlap & wave transition */}
        <HeroSection onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* Section 2: Brand Philosophy with Pebble Containers & 0.5px dividers */}
        <PhilosophySection />

        {/* Section 3: Editorial Product Showcase (Sage inspired asymmetric grid) */}
        <ProductShowcase 
          onAddToCart={handleAddToCart}
        />

        {/* Section 4: Experience Bundles (60px rounded floating card system) */}
        <BundlesSection 
          onAddToCart={handleAddToCart}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Section 5: Social Proof & Aesthetic Wall (Masonry grid + script badge) */}
        <SocialProofSection />
      </main>

      {/* Section 6: Footer with Cocoa background & single-line newsletter */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloat />

      {/* Interactive Modals */}
      <GlowQuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}

export default App;

