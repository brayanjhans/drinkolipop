import React, { useState } from 'react';
import { ShoppingBag, MapPin, Search, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { INTERNAL_ROUTES } from '../utils/routes';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLocator: () => void;
  onOpenQuiz: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenLocator,
  onOpenQuiz,
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* 1. Top Announcement Marquee Ticker */}
      <div className="bg-[#183B2B] text-[#FBF8F2] text-xs font-semibold py-2 px-4 overflow-hidden border-b border-[#133023]">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FBBF24]"></span>
            FREE SHIPPING ON ALL ORDERS OVER $50
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E7627D]"></span>
            SUBSCRIBE & SAVE 15% + EXCLUSIVE PERKS
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]"></span>
            9g PLANT FIBER • 2-5g SUGAR • ZERO WEIRD STUFF
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FBBF24]"></span>
            TAKE THE SODA QUIZ TO FIND YOUR PERFECT FLAVOR
          </span>
          {/* Duplicated for smooth loop */}
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FBBF24]"></span>
            FREE SHIPPING ON ALL ORDERS OVER $50
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E7627D]"></span>
            SUBSCRIBE & SAVE 15% + EXCLUSIVE PERKS
          </span>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#EADFCB] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#183B2B] hover:text-[#0F261C] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Left Zone: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#183B2B]">
            {/* Shop with quick hover menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('shop')}
                className="flex items-center gap-1.5 hover:text-[#D7385E] transition-colors focus:outline-none"
              >
                <span>SHOP</span>
                <ChevronDown size={15} className={`transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#FFFDF9] rounded-2xl shadow-xl border border-[#EADBCE] p-3 py-4 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => { onNavigate('shop'); setIsShopDropdownOpen(false); }}
                    className="text-left px-3 py-2 rounded-xl text-sm font-bold text-[#183B2B] hover:bg-[#F5EFE4] hover:text-[#D7385E] transition-colors"
                  >
                    All Flavors (16 Cans)
                  </button>
                  <button
                    onClick={() => { onNavigate('variety-packs'); setIsShopDropdownOpen(false); }}
                    className="text-left px-3 py-2 rounded-xl text-sm font-semibold text-[#183B2B] hover:bg-[#F5EFE4] hover:text-[#D7385E] transition-colors"
                  >
                    Variety Packs & Samplers
                  </button>
                  <button
                    onClick={() => { onNavigate('best-sellers'); setIsShopDropdownOpen(false); }}
                    className="text-left px-3 py-2 rounded-xl text-sm font-semibold text-[#183B2B] hover:bg-[#F5EFE4] hover:text-[#D7385E] transition-colors"
                  >
                    Best Sellers Lineup
                  </button>
                  <div className="h-px bg-[#EADBCE] my-1" />
                  <button
                    onClick={() => { onOpenQuiz(); setIsShopDropdownOpen(false); }}
                    className="text-left px-3 py-2 rounded-xl text-sm font-bold text-[#D7385E] bg-[#FFE4E8]/60 hover:bg-[#FFE4E8] flex items-center justify-between"
                  >
                    <span>Flavor Finder Quiz</span>
                    <Sparkles size={14} />
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('science')}
              className="hover:text-[#D7385E] transition-colors"
            >
              DIGESTIVE HEALTH
            </button>

            <button
              onClick={() => onNavigate('story')}
              className="hover:text-[#D7385E] transition-colors"
            >
              OUR STORY
            </button>

            <button
              onClick={onOpenLocator}
              className="flex items-center gap-1.5 hover:text-[#D7385E] transition-colors"
            >
              <MapPin size={15} />
              <span>FIND IN STORE</span>
            </button>
          </nav>

          {/* Center Zone: Iconic OLIPOP Wordmark */}
          <div className="flex-1 flex justify-center lg:flex-initial">
            <a
              href={INTERNAL_ROUTES.home}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="group flex items-center gap-1.5"
            >
              <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#183B2B] group-hover:scale-[1.02] transition-transform">
                OLIPOP
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#15803D] self-start mt-2 group-hover:animate-bounce" />
            </a>
          </div>

          {/* Right Zone: Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search toggler */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#183B2B] hover:text-[#D7385E] hover:bg-[#F5ECE0] rounded-full transition-colors"
              aria-label="Search flavors"
            >
              <Search size={20} />
            </button>

            {/* Quiz Button Pill */}
            <button
              onClick={onOpenQuiz}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF2DE] hover:bg-[#FFE6C2] text-[#183B2B] text-xs font-bold rounded-full border border-[#E9C893] transition-colors"
            >
              <Sparkles size={13} className="text-[#D97706]" />
              <span>SODA QUIZ</span>
            </button>

            {/* Store Locator on mobile */}
            <button
              onClick={onOpenLocator}
              className="lg:hidden p-2 text-[#183B2B] hover:text-[#D7385E] rounded-full transition-colors"
              aria-label="Find stores"
            >
              <MapPin size={20} />
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#183B2B] hover:bg-[#112A1F] text-[#FBF8F2] px-4 py-2.5 rounded-full font-bold text-xs tracking-wider transition-all shadow-sm hover:shadow"
              aria-label="Open cart"
            >
              <ShoppingBag size={17} />
              <span className="hidden sm:inline">BAG</span>
              <span className="bg-[#FBBF24] text-[#183B2B] text-xs px-2 py-0.5 rounded-full font-extrabold ml-0.5">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Search Input Bar */}
        {isSearchOpen && (
          <div className="border-t border-[#EADFCB] bg-[#FFFDF9] px-4 py-3 animate-in slide-in-from-top-2">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <Search size={18} className="text-[#64748B]" />
              <input
                type="text"
                placeholder="Search by flavor (Cola, Strawberry, Root Beer, Apple, Ginger...)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onNavigate(`search:${e.target.value}`);
                }}
                className="w-full bg-transparent text-sm font-medium text-[#183B2B] focus:outline-none placeholder:text-[#94A3B8]"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    onNavigate('shop');
                  }}
                  className="text-xs font-bold text-[#64748B] hover:text-[#183B2B]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EADFCB] bg-[#FBF8F2] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 shadow-xl">
            <button
              onClick={() => {
                onNavigate('shop');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 font-serif text-xl font-bold text-[#183B2B] border-b border-[#EADFCB]/60"
            >
              Shop All Flavors
            </button>
            <button
              onClick={() => {
                onNavigate('variety-packs');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 font-serif text-xl font-bold text-[#183B2B] border-b border-[#EADFCB]/60"
            >
              Variety Packs
            </button>
            <button
              onClick={() => {
                onNavigate('science');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 font-serif text-xl font-bold text-[#183B2B] border-b border-[#EADFCB]/60"
            >
              Digestive Health & Science
            </button>
            <button
              onClick={() => {
                onNavigate('story');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 font-serif text-xl font-bold text-[#183B2B] border-b border-[#EADFCB]/60"
            >
              Our Story
            </button>
            <button
              onClick={() => {
                onOpenLocator();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full text-left py-2 font-serif text-xl font-bold text-[#183B2B] border-b border-[#EADFCB]/60"
            >
              <MapPin size={20} className="text-[#D7385E]" />
              <span>Find in Store</span>
            </button>
            <button
              onClick={() => {
                onOpenQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#D7385E] text-white rounded-xl font-bold text-sm shadow"
            >
              <Sparkles size={16} />
              <span>Take the Soda Quiz</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
