import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, Check, ShoppingBag } from 'lucide-react';
import { Flavor } from '../types';
import { CanIllustration } from './CanIllustration';

interface FlavorQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  flavors: Flavor[];
  onAddToCart: (flavor: Flavor, purchaseType: 'one-time' | 'subscription') => void;
}

export const FlavorQuizModal: React.FC<FlavorQuizModalProps> = ({
  isOpen,
  onClose,
  flavors,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [matchedFlavor, setMatchedFlavor] = useState<Flavor | null>(null);
  const [justAdded, setJustAdded] = useState(false);

  const handleSelectOption = (optKey: string) => {
    const nextAnswers = { ...answers, [step]: optKey };
    setAnswers(nextAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate match
      const mood = nextAnswers[1];
      let matchSlug = 'vintage-cola';
      if (mood === 'nostalgia') matchSlug = 'vintage-cola';
      else if (mood === 'fruity') matchSlug = 'strawberry-vanilla';
      else if (mood === 'zesty') matchSlug = 'crisp-apple';
      else if (mood === 'creamy') matchSlug = 'classic-root-beer';

      const found = flavors.find((f) => f.slug === matchSlug) || flavors[0];
      setMatchedFlavor(found);
      setStep(4); // Result view
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({});
    setMatchedFlavor(null);
  };

  const handleAddMatchedToCart = () => {
    if (matchedFlavor) {
      onAddToCart(matchedFlavor, 'subscription');
      setJustAdded(true);
      setTimeout(() => {
        setJustAdded(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFDF7] rounded-3xl max-w-xl w-full border border-[#E8DEC9] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-[#183B2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#FBBF24]" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Find Your Flavor Match
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close quiz"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        {step <= 3 && (
          <div className="w-full bg-[#EADFCB] h-1.5">
            <div
              className="bg-[#D7385E] h-1.5 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#D7385E] uppercase tracking-wider">
                Question 1 of 3
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#183B2B] mt-1">
                What soda flavor profile are you craving?
              </h4>
            </div>

            <div className="space-y-3">
              {[
                { key: 'nostalgia', label: 'Classic Diner Nostalgia (Warm cola spices, root beer, vanilla)' },
                { key: 'fruity', label: 'Juicy & Sun-Ripened (Sweet strawberries, fresh peaches, orange citrus)' },
                { key: 'zesty', label: 'Crisp, Tart & Electrifying (Honeycrisp apples, tangy lemon-lime)' },
                { key: 'creamy', label: 'Smooth & Creamy Float (Banana cream, butterscotch froth)' },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  className="w-full text-left p-4 rounded-2xl border border-[#EADFCB] bg-white hover:border-[#183B2B] hover:bg-[#F7F2E7] text-sm font-bold text-[#183B2B] transition-colors flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight size={16} className="text-[#8FA397] group-hover:text-[#183B2B] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#D7385E] uppercase tracking-wider">
                Question 2 of 3
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#183B2B] mt-1">
                What is your #1 health priority?
              </h4>
            </div>

            <div className="space-y-3">
              {[
                { key: 'sugar', label: 'Cutting out 39g of high-fructose corn syrup & sugar crashes' },
                { key: 'gut', label: 'Boosting my daily prebiotic plant fiber for healthy digestion' },
                { key: 'clean', label: 'No artificial chemicals, zero fake sweeteners or dyes' },
                { key: 'taste', label: 'I just want something that tastes incredible without guilt' },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  className="w-full text-left p-4 rounded-2xl border border-[#EADFCB] bg-white hover:border-[#183B2B] hover:bg-[#F7F2E7] text-sm font-bold text-[#183B2B] transition-colors flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight size={16} className="text-[#8FA397] group-hover:text-[#183B2B] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#D7385E] uppercase tracking-wider">
                Question 3 of 3
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#183B2B] mt-1">
                How do you like your carbonation?
              </h4>
            </div>

            <div className="space-y-3">
              {[
                { key: 'smooth', label: 'Smooth, mellow & frothy like a craft soda parlor pour' },
                { key: 'sparkling', label: 'Crisp, balanced bubbles that quench deep thirst' },
                { key: 'bold', label: 'Super fizzy and lively with clean citrus tickle' },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  className="w-full text-left p-4 rounded-2xl border border-[#EADFCB] bg-white hover:border-[#183B2B] hover:bg-[#F7F2E7] text-sm font-bold text-[#183B2B] transition-colors flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight size={16} className="text-[#8FA397] group-hover:text-[#183B2B] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result View */}
        {step === 4 && matchedFlavor && (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F6ED] text-[#15803D] text-xs font-black uppercase">
              <Sparkles size={13} />
              <span>99% FLAVOR MATCH!</span>
            </div>

            <div className="py-2 flex justify-center">
              <CanIllustration flavor={matchedFlavor} size="lg" isFloating={true} />
            </div>

            <div>
              <h3 className="font-serif text-3xl font-extrabold text-[#183B2B]">
                {matchedFlavor.name}
              </h3>
              <p className="text-sm font-medium text-[#52796F] max-w-md mx-auto mt-1">
                {matchedFlavor.tagline}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#183B2B] py-2 bg-[#F6F0E4] rounded-2xl max-w-sm mx-auto">
              <span>{matchedFlavor.fiber}g Plant Fiber</span>
              <span>·</span>
              <span>{matchedFlavor.sugar}g Sugar</span>
              <span>·</span>
              <span>{matchedFlavor.calories} Cal</span>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddMatchedToCart}
                className="w-full py-4 px-6 rounded-2xl font-black text-sm text-white bg-[#183B2B] hover:bg-[#122E22] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                {justAdded ? (
                  <>
                    <Check size={18} className="text-[#34D399]" />
                    <span>ADDED TO BAG!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>ADD TO BAG · ${matchedFlavor.subscriptionPrice.toFixed(2)} (SAVE 15%)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#183B2B]"
              >
                <RotateCcw size={13} />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
