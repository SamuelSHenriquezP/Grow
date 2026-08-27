import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RefreshCw, ShoppingBag } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const GlowQuizModal = ({ isOpen, onClose, onAddToCart }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    skinType: '',
    finishPreference: '',
    routineLength: ''
  });

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      title: '¿Cuál es la naturaleza actual de tu piel?',
      key: 'skinType',
      options: [
        { label: 'Seca o deshidratada', desc: 'Busco máxima nutrición y barrera lipídica.' },
        { label: 'Mixta o equilibrada', desc: 'Busco luminosidad sin exceso de brillo.' },
        { label: 'Sensible o reactiva', desc: 'Busco calmar y proteger con fórmulas puras.' }
      ]
    },
    {
      id: 2,
      title: '¿Qué acabado deseas reflejar?',
      key: 'finishPreference',
      options: [
        { label: 'Resplandor Satinado Dewy', desc: 'Piel jugosa y con luz húmeda natural.' },
        { label: 'Efecto Segunda Piel Mate Terciopelo', desc: 'Textura suave como la seda.' },
        { label: 'Luz Solar Cálida Bronceada', desc: 'Toque de sol radiante en pómulos.' }
      ]
    },
    {
      id: 3,
      title: '¿Cuánto tiempo dedicas a tu ritual diario?',
      key: 'routineLength',
      options: [
        { label: '2 Minutos Minimalista', desc: 'Un solo paso clave de belleza inmediata.' },
        { label: '5 a 10 Minutos Curado', desc: 'Suero, base ligera y toque de labios.' },
        { label: 'Ritual Completo de Arquitectura', desc: 'Preparación, color y fijación satinada.' }
      ]
    }
  ];

  const handleSelectOption = (key, optionLabel) => {
    setAnswers(prev => ({ ...prev, [key]: optionLabel }));
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      setStep(4); // Results step
    }
  };

  const getRecommendation = () => {
    if (answers.skinType.includes('Seca') || answers.finishPreference.includes('Dewy')) {
      return {
        title: 'Ritual Iluminación Intensa Botanical Serum',
        product: {
          id: 'serum-01',
          name: 'Botanical Radiance Serum',
          price: 88.00,
          priceFormatted: '$88.00',
          image: '/assets/serum.png',
          selectedShade: { name: 'Amber Dew', color: '#E8A87C' }
        },
        description: 'Basado en tus respuestas, tu piel anhela lípidos botánicos puros que restauren la barrera natural mientras reflejan la luz de manera celestial.'
      };
    } else if (answers.finishPreference.includes('Terciopelo') || answers.routineLength.includes('Minimalista')) {
      return {
        title: 'Ritual Dúo Terciopelo Velvet Lips & Balm',
        product: {
          id: 'lipstick-02',
          name: 'Velvet Lip Kiss',
          price: 46.00,
          priceFormatted: '$46.00',
          image: '/assets/lipstick.png',
          selectedShade: { name: 'Cocoa Nude', color: '#5D3A24' }
        },
        description: 'Tu perfil es sofisticado y práctico. Una pincelada de labial orgánico enriquecido con manteca de karité otorgará ese sello distintivo sin esfuerzo.'
      };
    } else {
      return {
        title: 'Ritual Arquitectónico Completo Sanctuary Set',
        product: {
          id: 'bundle-sanctuary',
          name: 'The Sanctuary Glow Set',
          price: 185.00,
          priceFormatted: '$185.00',
          image: '/assets/bundle_sanctuary.png',
          selectedShade: { name: 'Ritual Completo', color: '#D9AE94' }
        },
        description: 'La solución óptima para ti es el Sanctuary Set completo: armonía perfecta entre suero nutritivo, base fluida invisible y bálsamo iluminador.'
      };
    }
  };

  const recommendation = getRecommendation();

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ skinType: '', finishPreference: '', routineLength: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#5D3A24]/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#F9F7F2] w-full max-w-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#D9AE94]/40"
        style={{ borderRadius: '60px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full text-[#5D3A24] hover:bg-[#5D3A24]/10 transition-colors"
          aria-label="Cerrar test"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <BrandLogo size="small" className="mb-2" />
          <h3 className="font-serif text-3xl text-[#5D3A24]">
            Encuentra Tu <span className="italic">Ritual Glow</span>
          </h3>
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#8C5E41] block mt-1">
            Diagnóstico Estético Personalizado
          </span>
        </div>

        {/* Progress Bar */}
        {step <= 3 && (
          <div className="w-full h-1 bg-[#5D3A24]/10 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-[#5D3A24] transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Questions Step */}
        {step <= 3 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs text-[#8C5E41] font-light">Paso 0{step} de 03</span>
              <span className="font-script text-2xl text-[#5D3A24]">Pregunta {step}</span>
            </div>

            <h4 className="font-serif text-2xl text-[#5D3A24] mb-6">
              {questions[step - 1].title}
            </h4>

            <div className="space-y-4">
              {questions[step - 1].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(questions[step - 1].key, opt.label)}
                  className="w-full text-left p-5 rounded-organic-sm bg-[#FFFDF9] border border-[#5D3A24]/10 hover:border-[#D9AE94] hover:bg-[#D9AE94]/10 transition-all duration-300 group flex items-start justify-between"
                >
                  <div>
                    <span className="block font-serif text-lg text-[#5D3A24] group-hover:text-[#5D3A24] font-normal">
                      {opt.label}
                    </span>
                    <span className="font-sans text-xs text-[#5D3A24]/70 font-light mt-1 block">
                      {opt.desc}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D9AE94] group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Step */}
        {step === 4 && (
          <div className="text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#D9AE94]/30 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-[#5D3A24]" />
            </div>

            <span className="font-sans text-xs uppercase tracking-widest text-[#8C5E41] block mb-2">
              Tu Diagnóstico Firma GROW
            </span>
            <h4 className="font-serif text-3xl text-[#5D3A24] mb-3">
              {recommendation.title}
            </h4>
            <p className="font-sans text-sm text-[#5D3A24]/80 font-light leading-relaxed mb-6 max-w-lg mx-auto">
              {recommendation.description}
            </p>

            {/* Recommended Product Box */}
            <div className="bg-[#FFFDF9] p-6 rounded-organic-md border border-[#5D3A24]/10 flex items-center gap-6 mb-8 text-left">
              <img 
                src={recommendation.product.image} 
                alt={recommendation.product.name}
                className="w-24 h-24 object-cover rounded-organic-sm shrink-0"
              />
              <div className="flex-1">
                <span className="font-serif text-2xl text-[#5D3A24] block">
                  {recommendation.product.name}
                </span>
                <span className="font-serif italic text-xl text-[#5D3A24] block mt-1">
                  {recommendation.product.priceFormatted}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  onAddToCart(recommendation.product);
                  onClose();
                }}
                className="btn-pill-cocoa w-full sm:w-auto"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Añadir Recomendación</span>
              </button>

              <button
                onClick={resetQuiz}
                className="btn-pill-outline w-full sm:w-auto flex items-center justify-center gap-2 text-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Repetir Test</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
