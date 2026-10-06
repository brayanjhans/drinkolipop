import React, { useState } from 'react';
import { Sparkles, Star, Plus, Check, Eye } from 'lucide-react';
import { Flavor } from '../types';
import { CanIllustration } from './CanIllustration';

interface ProductCatalogProps {
  flavors: Flavor[];
  onAddToCart: (flavor: Flavor, purchaseType: 'one-time' | 'subscription') => void;
  onSelectFlavor: (flavor: Flavor) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  flavors,
  onAddToCart,
  onSelectFlavor,
  selectedCategory = 'all',
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  const handleQuickAdd = (flavor: Flavor, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(flavor, 'subscription'); // Default to subscribe & save
    setAddedIds((prev) => ({ ...prev, [flavor.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [flavor.id]: false }));
    }, 1800);
  };

  // Filter flavors
  const filteredFlavors = flavors.filter((f) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'best-sellers') return f.isBestSeller;
    if (activeCategory === 'variety-packs') return f.isVarietyPack;
    if (activeCategory === 'classics') return f.category === 'classics';
    if (activeCategory === 'fruity') return f.category === 'fruity';
    return true;
  });

  const getFlavorCardBg = (slug: string) => {
    switch (slug) {
      case 'vintage-cola': return 'bg-[#FAF2EF] border-[#F0D5CD]';
      case 'strawberry-vanilla': return 'bg-[#FDF0F3] border-[#F8D2DA]';
      case 'classic-root-beer': return 'bg-[#FAF4EB] border-[#ECDDC6]';
      case 'orange-squeeze': return 'bg-[#FFF5EC] border-[#FCE1CA]';
      case 'lemon-lime': return 'bg-[#F8FEE8] border-[#E1F7B8]';
      case 'crisp-apple': return 'bg-[#F0FDF4] border-[#D1F7DB]';
      case 'cherry-cola': return 'bg-[#FAF0F2] border-[#F2D4DA]';
      case 'tropical-punch': return 'bg-[#FFF2F4] border-[#FCD6DD]';
      case 'banana-cream': return 'bg-[#FEFCE8] border-[#FCF4B6]';
      case 'doctor-goodwin': return 'bg-[#FAF5FF] border-[#EEDCFF]';
      case 'watermelon-lime': return 'bg-[#FFF1F2] border-[#FDD5D9]';
      case 'ginger-ale': return 'bg-[#FAF6EC] border-[#EFE3C4]';
      case 'ridge-rush': return 'bg-[#F1FCEF] border-[#CEF5C8]';
      case 'cream-soda': return 'bg-[#FDF8EC] border-[#F8ECC6]';
      case 'classic-grape': return 'bg-[#F8F4FA] border-[#E7D6EE]';
      case 'peaches-and-cream': return 'bg-[#FFF4EC] border-[#FBD8C0]';
      case 'the-sampler-variety-pack': return 'bg-[#F0F7F3] border-[#D0EADB]';
      case 'soda-fountain-favorites-pack': return 'bg-[#FAF1EC] border-[#EED7CB]';
      case 'fruity-favorites-pack': return 'bg-[#FFF6EA] border-[#F7DFC1]';
      default: return 'bg-[#FFFDF7] border-[#EAE1D1]';
    }
  };

  return (
    <section id="shop" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-bold tracking-widest uppercase text-[#D7385E]">
          MEET THE LINEUP
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#183B2B] tracking-tight text-balance">
          Better Soda for Everyone.
        </h2>
        <p className="text-[#3E6152] text-base sm:text-lg font-medium leading-relaxed">
          From timeless fountain classics to juicy fruit refreshes, every can delivers 9g of prebiotic fiber, 2–5g of sugar, and zero artificial sweeteners.
        </p>
      </div>

      {/* Filter Tabs / Segmented Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {[
          { id: 'all', label: 'All Flavors (19)' },
          { id: 'best-sellers', label: 'Best Sellers' },
          { id: 'variety-packs', label: 'Variety Packs' },
          { id: 'classics', label: 'Classics & Colas' },
          { id: 'fruity', label: 'Fruit & Tangy' },
        ].map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleCategoryClick(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-[#183B2B] text-[#FBF8F2] shadow-sm'
                  : 'bg-[#FFFDF7] text-[#183B2B] hover:bg-[#F2ECE0] border border-[#E8DEC9]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredFlavors.map((flavor) => {
          const isAdded = addedIds[flavor.id];
          const cardStyle = getFlavorCardBg(flavor.slug);
          return (
            <div
              key={flavor.id}
              onClick={() => onSelectFlavor(flavor)}
              className={`group cursor-pointer rounded-3xl p-6 border shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative ${cardStyle}`}
            >
              {/* Top Badges / Metadata */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {flavor.isBestSeller && (
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#183B2B] bg-[#FDE68A] px-2.5 py-1 rounded-md">
                      Best Seller
                    </span>
                  )}
                  {flavor.isNew && (
                    <span className="text-[11px] font-black uppercase tracking-wider text-white bg-[#D7385E] px-2.5 py-1 rounded-md">
                      New
                    </span>
                  )}
                  {flavor.isVarietyPack && (
                    <span className="text-[11px] font-black uppercase tracking-wider text-white bg-[#183B2B] px-2.5 py-1 rounded-md">
                      Variety 12-Pack
                    </span>
                  )}
                </div>

                {/* Rating badge */}
                <div className="flex items-center gap-1 text-xs font-bold text-[#183B2B]">
                  <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{flavor.rating.toFixed(1)}</span>
                  <span className="text-[#8FA397] text-[10px]">({(flavor.reviewsCount / 1000).toFixed(1)}k)</span>
                </div>
              </div>

              {/* Can Illustration Container */}
              <div className="py-6 flex items-center justify-center relative min-h-[260px]">
                {/* Background color glow halo */}
                <div
                  className="absolute w-36 h-36 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: flavor.canColor }}
                />

                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <CanIllustration flavor={flavor} size="md" />
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-4 border-t border-[#F2ECE0] space-y-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#183B2B] group-hover:text-[#D7385E] transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-xs text-[#52796F] line-clamp-1 mt-1 font-medium">
                    {flavor.tagline}
                  </p>
                </div>

                {/* Nutrition Highlights */}
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#183B2B] bg-[#F7F2E7] p-2 rounded-xl">
                  <span>{flavor.fiber}g Plant Fiber</span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span>{flavor.sugar}g Sugar</span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span>{flavor.calories} Calories</span>
                </div>

                {/* Pricing & Add To Bag */}
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-[#183B2B] tabular-nums">
                      ${flavor.subscriptionPrice.toFixed(2)}
                    </span>
                    <span className="text-xs text-[#8FA397] line-through ml-1.5 tabular-nums">
                      ${flavor.price.toFixed(2)}
                    </span>
                    <div className="text-[10px] font-bold text-[#15803D]">
                      Subscribe & Save 15%
                    </div>
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => handleQuickAdd(flavor, e)}
                    className="py-2.5 px-4 rounded-xl text-xs font-black tracking-wide text-white bg-[#183B2B] hover:bg-[#122E22] transition-colors flex items-center gap-1.5 shadow-xs"
                    aria-label={`Add ${flavor.name} to bag`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={14} className="text-[#34D399]" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        <span>ADD</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
