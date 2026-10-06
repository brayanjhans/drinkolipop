import React, { useState } from 'react';
import { X, Check, Star, ShieldCheck, Heart, Sparkles, RefreshCw, Truck } from 'lucide-react';
import { Flavor, PurchaseType } from '../types';
import { CanIllustration } from './CanIllustration';

interface ProductDetailModalProps {
  flavor: Flavor | null;
  onClose: () => void;
  onAddToCart: (flavor: Flavor, purchaseType: PurchaseType, quantity: number, frequency?: '2-weeks' | '4-weeks' | '8-weeks') => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  flavor,
  onClose,
  onAddToCart,
}) => {
  if (!flavor) return null;

  const [purchaseType, setPurchaseType] = useState<PurchaseType>('subscription');
  const [deliveryFrequency, setDeliveryFrequency] = useState<'2-weeks' | '4-weeks' | '8-weeks'>('4-weeks');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'nutrition' | 'ingredients'>('overview');
  const [isAdded, setIsAdded] = useState(false);

  const price = purchaseType === 'subscription' ? flavor.subscriptionPrice : flavor.price;

  const handleAdd = () => {
    onAddToCart(flavor, purchaseType, quantity, deliveryFrequency);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFDF7] rounded-3xl max-w-4xl w-full border border-[#E8DEC9] shadow-2xl overflow-hidden flex flex-col md:flex-row my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#F5ECE0] hover:bg-[#EADDC9] text-[#183B2B] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left Column: Visual Can Spotlight */}
        <div className="md:w-5/12 bg-[#F6F0E4] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#EADFCB]">
          <div
            className="absolute w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: flavor.canColor }}
          />

          <CanIllustration flavor={flavor} size="lg" isFloating={true} />

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {flavor.flavorNotes.map((note, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFFDF7] text-[#183B2B] border border-[#E4DAC7]"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module & Tabs */}
        <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#183B2B] mb-2">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#F59E0B]" />
                ))}
              </div>
              <span>{flavor.rating.toFixed(1)} / 5.0</span>
              <span className="text-[#8FA397]">({flavor.reviewsCount.toLocaleString()} reviews)</span>
            </div>

            {/* Title & Tagline */}
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#183B2B]">
              {flavor.name}
            </h2>
            <p className="text-sm font-medium text-[#52796F] mt-1">
              12 Cans (12 fl oz each) · {flavor.tagline}
            </p>

            {/* Navigation Tabs (Overview, Nutrition, Ingredients) */}
            <div className="flex items-center gap-2 border-b border-[#EADFCB] pt-4 pb-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 text-xs font-bold tracking-wider uppercase transition-colors relative ${
                  activeTab === 'overview' ? 'text-[#183B2B]' : 'text-[#8FA397] hover:text-[#183B2B]'
                }`}
              >
                Overview
                {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B2B]" />}
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`pb-2 text-xs font-bold tracking-wider uppercase transition-colors relative ${
                  activeTab === 'nutrition' ? 'text-[#183B2B]' : 'text-[#8FA397] hover:text-[#183B2B]'
                }`}
              >
                Nutrition Facts
                {activeTab === 'nutrition' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B2B]" />}
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-2 text-xs font-bold tracking-wider uppercase transition-colors relative ${
                  activeTab === 'ingredients' ? 'text-[#183B2B]' : 'text-[#8FA397] hover:text-[#183B2B]'
                }`}
              >
                Ingredients
                {activeTab === 'ingredients' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#183B2B]" />}
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="py-4 space-y-3">
                <p className="text-sm text-[#2F5242] leading-relaxed">
                  {flavor.description}
                </p>
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="p-2.5 rounded-xl bg-[#F7F2E7] text-center border border-[#E9DFCE]">
                    <div className="font-extrabold text-lg text-[#183B2B]">{flavor.fiber}g</div>
                    <div className="text-[10px] font-bold text-[#64748B]">Plant Fiber (32% DV)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7F2E7] text-center border border-[#E9DFCE]">
                    <div className="font-extrabold text-lg text-[#183B2B]">{flavor.sugar}g</div>
                    <div className="text-[10px] font-bold text-[#64748B]">Total Sugars</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7F2E7] text-center border border-[#E9DFCE]">
                    <div className="font-extrabold text-lg text-[#183B2B]">{flavor.calories}</div>
                    <div className="text-[10px] font-bold text-[#64748B]">Calories / Can</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Authentic FDA Nutrition Facts Panel */}
            {activeTab === 'nutrition' && (
              <div className="py-4">
                <div className="bg-white border-2 border-black p-4 rounded-xl font-sans text-black text-xs max-w-sm">
                  <div className="font-black text-xl border-b-8 border-black pb-1">Nutrition Facts</div>
                  <div className="py-1 border-b border-black">1 serving per container</div>
                  <div className="font-bold flex justify-between border-b-4 border-black pb-1">
                    <span>Serving size</span>
                    <span>1 can (355mL)</span>
                  </div>
                  <div className="flex justify-between items-baseline font-black border-b-8 border-black py-1">
                    <span className="text-sm">Amount Per Serving<br/><span className="text-2xl">Calories</span></span>
                    <span className="text-3xl">{flavor.nutritionFacts.calories}</span>
                  </div>
                  <div className="text-[11px] text-right font-bold py-0.5 border-b border-black">% Daily Value*</div>
                  <div className="flex justify-between border-b border-black py-0.5 font-bold">
                    <span>Total Fat <span className="font-normal">{flavor.nutritionFacts.totalFat}</span></span>
                    <span>0%</span>
                  </div>
                  <div className="flex justify-between border-b border-black py-0.5 font-bold">
                    <span>Sodium <span className="font-normal">{flavor.nutritionFacts.sodium}</span></span>
                    <span>1%</span>
                  </div>
                  <div className="flex justify-between border-b border-black py-0.5 font-bold">
                    <span>Total Carbohydrate <span className="font-normal">{flavor.nutritionFacts.totalCarb}</span></span>
                    <span>6%</span>
                  </div>
                  <div className="flex justify-between border-b border-black py-0.5 pl-4 font-bold">
                    <span>Dietary Fiber <span className="font-normal">{flavor.nutritionFacts.dietaryFiber}</span></span>
                    <span>32%</span>
                  </div>
                  <div className="flex justify-between border-b border-black py-0.5 pl-4">
                    <span>Total Sugars <span className="font-normal">{flavor.nutritionFacts.totalSugars}</span></span>
                    <span className="font-normal">Includes 0g Added Sugars (0%)</span>
                  </div>
                  <div className="flex justify-between py-0.5 font-bold border-b-4 border-black">
                    <span>Protein <span className="font-normal">{flavor.nutritionFacts.protein}</span></span>
                    <span>0%</span>
                  </div>
                  <div className="text-[9px] pt-1 text-gray-600">
                    * The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Olismart Ingredients */}
            {activeTab === 'ingredients' && (
              <div className="py-4 space-y-3 max-h-56 overflow-y-auto pr-2">
                <div className="text-xs font-bold text-[#183B2B] uppercase tracking-wide">
                  OLISMART® Prebiotic Plant Blend:
                </div>
                <div className="text-xs text-[#2F5242] leading-relaxed space-y-1">
                  <p><strong>Cassava Root Fiber & Chicory Root Inulin:</strong> Nourishes beneficial microbiome bacteria.</p>
                  <p><strong>Jerusalem Artichoke:</strong> High-density plant inulin prebiotic fuel.</p>
                  <p><strong>Marshmallow Root & Calendula:</strong> Soothing ancient botanicals supporting the gut mucosal lining.</p>
                  <p><strong>Nopal Cactus & Kudzu Root:</strong> Antioxidant-rich functional plants.</p>
                </div>
                <div className="text-xs font-bold text-[#183B2B] uppercase tracking-wide pt-2">
                  All Ingredients:
                </div>
                <p className="text-xs text-[#52796F]">
                  {flavor.ingredients.join(', ')}.
                </p>
              </div>
            )}

            {/* Purchase Options: Subscribe vs One-Time */}
            <div className="space-y-3 pt-2">
              <div
                onClick={() => setPurchaseType('subscription')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  purchaseType === 'subscription'
                    ? 'border-[#183B2B] bg-[#F2EDE2] shadow-xs'
                    : 'border-[#EADFCB] bg-[#FFFDF7] hover:bg-[#F9F5EC]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    purchaseType === 'subscription' ? 'border-[#183B2B] bg-[#183B2B]' : 'border-[#8FA397]'
                  }`}>
                    {purchaseType === 'subscription' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#183B2B] flex items-center gap-1.5">
                      <span>Subscribe & Save 15%</span>
                      <span className="text-[10px] bg-[#10B981] text-white px-2 py-0.5 rounded-md font-extrabold">BEST VALUE</span>
                    </div>
                    <div className="text-[11px] text-[#52796F]">Cancel, skip, or change flavors anytime.</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-black text-sm text-[#183B2B] tabular-nums">
                    ${flavor.subscriptionPrice.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-[#8FA397] line-through block tabular-nums">
                    ${flavor.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {purchaseType === 'subscription' && (
                <div className="px-3 py-2 bg-[#F6F0E4] rounded-xl flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#183B2B]">Deliver every:</span>
                  <select
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(e.target.value as any)}
                    className="bg-white border border-[#DDD2C0] rounded-lg px-2.5 py-1 text-xs font-bold text-[#183B2B] focus:outline-none"
                  >
                    <option value="2-weeks">2 Weeks (Most Popular)</option>
                    <option value="4-weeks">4 Weeks (Monthly)</option>
                    <option value="8-weeks">8 Weeks</option>
                  </select>
                </div>
              )}

              <div
                onClick={() => setPurchaseType('one-time')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  purchaseType === 'one-time'
                    ? 'border-[#183B2B] bg-[#F2EDE2] shadow-xs'
                    : 'border-[#EADFCB] bg-[#FFFDF7] hover:bg-[#F9F5EC]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    purchaseType === 'one-time' ? 'border-[#183B2B] bg-[#183B2B]' : 'border-[#8FA397]'
                  }`}>
                    {purchaseType === 'one-time' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#183B2B]">One-Time Purchase</div>
                    <div className="text-[11px] text-[#52796F]">Standard 12-can case delivery.</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-black text-sm text-[#183B2B] tabular-nums">
                    ${flavor.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quantity Stepper & Final Add To Bag */}
          <div className="pt-4 border-t border-[#EADFCB] flex items-center gap-3">
            <div className="flex items-center border border-[#DDD2C0] bg-white rounded-2xl p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center font-bold text-sm text-[#183B2B] hover:bg-[#F5ECE0] rounded-xl"
              >
                -
              </button>
              <span className="w-8 text-center text-xs font-black tabular-nums">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center font-bold text-sm text-[#183B2B] hover:bg-[#F5ECE0] rounded-xl"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 py-3.5 px-6 rounded-2xl font-black text-sm text-white bg-[#183B2B] hover:bg-[#122E22] transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {isAdded ? (
                <>
                  <Check size={18} className="text-[#34D399]" />
                  <span>ADDED TO BAG!</span>
                </>
              ) : (
                <>
                  <span>ADD TO BAG · ${(price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
