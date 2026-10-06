import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Heart, ShieldCheck } from 'lucide-react';
import { Flavor } from '../types';
import { CanIllustration } from './CanIllustration';
import { WaveDivider } from './WaveDivider';

interface HeroProps {
  flavors: Flavor[];
  onAddToCart: (flavor: Flavor, purchaseType: 'one-time' | 'subscription') => void;
  onSelectFlavor: (flavor: Flavor) => void;
  onExploreFlavors: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  flavors,
  onAddToCart,
  onSelectFlavor,
  onExploreFlavors,
  onOpenQuiz,
}) => {
  // Highlight top popular hero cans
  const heroFlavors = flavors.filter((f) =>
    ['vintage-cola', 'strawberry-vanilla', 'orange-squeeze', 'crisp-apple', 'classic-root-beer'].includes(f.slug)
  );

  const [activeFlavor, setActiveFlavor] = useState<Flavor>(heroFlavors[0] || flavors[0]);
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscription'>('subscription');
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = () => {
    onAddToCart(activeFlavor, purchaseType);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#EADFCB] bg-[#FBF8F2]">
      {/* Decorative organic background aura */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: activeFlavor.canColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Copy & Primary Actions */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left z-10">
            {/* Pill kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B2B]/5 text-[#183B2B] text-xs font-bold tracking-wider uppercase border border-[#183B2B]/10">
              <span className="w-2 h-2 rounded-full bg-[#15803D] animate-ping" />
              <span>THE #1 PREBIOTIC SODA IN AMERICA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#183B2B] tracking-tight leading-[1.08] text-balance">
              A New Kind <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#D7385E]">of Soda.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#2F5242] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              A deliciously sparkling tonic crafted with plant fiber, prebiotics, and natural botanicals to nurture your digestive health. All the nostalgia of classic soda, with only 2–5g of sugar.
            </p>

            {/* Quick Nutrient Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-bold text-[#183B2B]">
              <div className="flex items-center gap-2 bg-[#FFFDF9] px-3.5 py-2 rounded-xl border border-[#E7DFCE] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span>9g PREBIOTIC FIBER</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFDF9] px-3.5 py-2 rounded-xl border border-[#E7DFCE] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span>2-5g LOW SUGAR</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFDF9] px-3.5 py-2 rounded-xl border border-[#E7DFCE] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                <span>NON-GMO VERIFIED</span>
              </div>
            </div>

            {/* Purchase CTA Box for the featured can */}
            <div className="p-5 sm:p-6 bg-[#FFFDF7] rounded-3xl border border-[#EADFCB] shadow-md max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between pb-4 border-b border-[#EFE7D8]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#183B2B]">
                    {activeFlavor.name} 12-Pack
                  </h3>
                  <p className="text-xs text-[#52796F] font-medium mt-0.5">
                    {activeFlavor.tagline}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-[#183B2B] tabular-nums">
                    ${purchaseType === 'subscription' ? activeFlavor.subscriptionPrice.toFixed(2) : activeFlavor.price.toFixed(2)}
                  </span>
                  {purchaseType === 'subscription' && (
                    <span className="block text-[11px] text-[#15803D] font-bold">
                      SAVE 15%
                    </span>
                  )}
                </div>
              </div>

              {/* Purchase options toggle */}
              <div className="grid grid-cols-2 gap-2 my-4 p-1 bg-[#F4EFE6] rounded-2xl">
                <button
                  onClick={() => setPurchaseType('subscription')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                    purchaseType === 'subscription'
                      ? 'bg-[#183B2B] text-white shadow-sm'
                      : 'text-[#183B2B] hover:text-black'
                  }`}
                >
                  Subscribe & Save 15%
                </button>
                <button
                  onClick={() => setPurchaseType('one-time')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                    purchaseType === 'one-time'
                      ? 'bg-[#183B2B] text-white shadow-sm'
                      : 'text-[#183B2B] hover:text-black'
                  }`}
                >
                  One-Time Purchase
                </button>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleQuickAdd}
                  className="flex-1 py-3.5 px-6 rounded-2xl font-extrabold text-sm text-white bg-[#183B2B] hover:bg-[#122E22] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {justAdded ? (
                    <>
                      <Check size={18} className="text-[#34D399]" />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <span>ADD {activeFlavor.name.toUpperCase()} TO BAG</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <button
                  onClick={() => onSelectFlavor(activeFlavor)}
                  className="py-3.5 px-5 rounded-2xl font-bold text-xs text-[#183B2B] bg-[#F2EDE2] hover:bg-[#E9E1D2] border border-[#DDD3C2] transition-colors"
                >
                  NUTRITION FACTS
                </button>
              </div>
            </div>

            {/* Secondary Link Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs font-bold text-[#183B2B]">
              <button
                onClick={onExploreFlavors}
                className="hover:text-[#D7385E] underline underline-offset-4 transition-colors"
              >
                Explore All 16 Flavors & Variety Packs
              </button>
              <span className="text-[#CBD5E1]">|</span>
              <button
                onClick={onOpenQuiz}
                className="hover:text-[#D7385E] flex items-center gap-1 transition-colors"
              >
                <Sparkles size={13} className="text-[#D97706]" />
                <span>Not sure where to start? Take the Quiz</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Flavor Carousel / Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Main Stage Display */}
            <div className="relative w-full max-w-sm flex items-center justify-center py-6">
              
              {/* Highlight Ring Badge */}
              <div
                className="absolute w-72 h-72 rounded-full border-2 border-dashed transition-colors duration-500"
                style={{ borderColor: activeFlavor.accentColor }}
              />

              {/* The Interactive Can Illustration */}
              <div
                onClick={() => onSelectFlavor(activeFlavor)}
                className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                title="Click for full nutrition details"
              >
                <CanIllustration flavor={activeFlavor} size="xl" isFloating={true} />
              </div>

              {/* Callout Floating Badge */}
              <div className="absolute -bottom-2 -left-2 bg-[#FFFDF7] p-3 rounded-2xl border border-[#E7DFCE] shadow-lg flex items-center gap-3 animate-pulse-subtle">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs"
                  style={{ backgroundColor: activeFlavor.canColor }}
                >
                  {activeFlavor.fiber}g
                </div>
                <div className="text-left text-xs">
                  <div className="font-extrabold text-[#183B2B]">Plant Fiber</div>
                  <div className="text-[#64748B] text-[10px]">Per 12 fl oz can</div>
                </div>
              </div>

              <div className="absolute top-4 -right-2 bg-[#FFFDF7] p-3 rounded-2xl border border-[#E7DFCE] shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center font-bold text-white text-xs">
                  {activeFlavor.sugar}g
                </div>
                <div className="text-left text-xs">
                  <div className="font-extrabold text-[#183B2B]">Total Sugar</div>
                  <div className="text-[#64748B] text-[10px]">Zero stevia taste</div>
                </div>
              </div>
            </div>

            {/* Flavor Switcher Thumbnails */}
            <div className="mt-8 flex items-center gap-3 overflow-x-auto p-2 max-w-full">
              {heroFlavors.map((fl) => {
                const isActive = fl.id === activeFlavor.id;
                return (
                  <button
                    key={fl.id}
                    onClick={() => setActiveFlavor(fl)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#183B2B] text-white shadow-md scale-105'
                        : 'bg-[#FFFDF7] text-[#183B2B] hover:bg-[#F2EDE2] border border-[#EADFCB]'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                      style={{ backgroundColor: fl.canColor }}
                    >
                      {fl.name[0]}
                    </div>
                    <span className="text-[11px] font-bold whitespace-nowrap px-1">
                      {fl.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wavy Border Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none">
        <WaveDivider fillColor="#FAF6EE" />
      </div>
    </section>
  );
};
