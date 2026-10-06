import React, { useState } from 'react';
import { ArrowRight, Check, Heart, ShieldCheck, Instagram, Twitter } from 'lucide-react';
import { EXTERNAL_LINKS, INTERNAL_ROUTES } from '../utils/routes';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLocator: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLocator,
  onOpenQuiz,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#183B2B] text-[#FBF8F2] pt-16 pb-12 border-t border-[#133023]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Newsletter & Wordmark Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#244E3B]">
          
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
              JOIN THE SODA REVOLUTION
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FBF8F2]">
              Get 15% off your first order.
            </h3>
            <p className="text-sm text-[#A7F3D0] max-w-md">
              Plus early access to limited edition flavor drops, prebiotic recipes, and gut microbiome research.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md lg:ml-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-sm text-[#FBF8F2] placeholder:text-white/60 focus:outline-none focus:border-[#FBBF24]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl bg-[#FBBF24] hover:bg-[#F59E0B] text-[#183B2B] font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                {subscribed ? (
                  <>
                    <Check size={16} />
                    <span>SUBSCRIBED!</span>
                  </>
                ) : (
                  <>
                    <span>SIGN UP</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          
          {/* Col 1: Shop */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FBBF24]">Shop</h4>
            <ul className="space-y-2.5 text-xs text-[#E1EFE7] font-medium">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  All 19 Flavors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('variety-packs')} className="hover:text-white transition-colors">
                  Variety Packs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('best-sellers')} className="hover:text-white transition-colors">
                  Best Sellers Lineup
                </button>
              </li>
              <li>
                <button onClick={onOpenQuiz} className="hover:text-[#FBBF24] transition-colors flex items-center gap-1">
                  <span>Flavor Finder Quiz</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenLocator} className="hover:text-white transition-colors">
                  Find In Store Near You
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Learn & Science */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FBBF24]">Digestive Health</h4>
            <ul className="space-y-2.5 text-xs text-[#E1EFE7] font-medium">
              <li>
                <button onClick={() => onNavigate('science')} className="hover:text-white transition-colors">
                  Why Prebiotics Matter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ingredients')} className="hover:text-white transition-colors">
                  Our 7 Plant Botanicals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">
                  Founder Story (Ben & David)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-white transition-colors">
                  50,000+ Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FBBF24]">Company</h4>
            <ul className="space-y-2.5 text-xs text-[#E1EFE7] font-medium">
              <li>
                <a href={EXTERNAL_LINKS.officialSite} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Official Website
                </a>
              </li>
              <li>
                <a href={EXTERNAL_LINKS.supportEmail} className="hover:text-white transition-colors">
                  Contact & Support
                </a>
              </li>
              <li>
                <button onClick={onOpenLocator} className="hover:text-white transition-colors">
                  Wholesale & Retailers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Values & Certifications */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FBBF24]">Our Standards</h4>
            <div className="space-y-2 text-xs text-[#A7F3D0]">
              <p>🌱 100% Non-GMO Project Verified</p>
              <p>♻️ Infinitely Recyclable Aluminum Cans</p>
              <p>🌾 Gluten-Free & Vegan Certified</p>
              <p>🚫 No Artificial Preservatives or Dyes</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-[#244E3B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A7F3D0]">
          <div>
            © 2026 OLIPOP Inc. All rights reserved. A New Kind of Soda®.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href={INTERNAL_ROUTES.privacy} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={INTERNAL_ROUTES.terms} className="hover:text-white transition-colors">Terms of Use</a>
            <a href={INTERNAL_ROUTES.accessibility} className="hover:text-white transition-colors">Accessibility</a>
            <a href={EXTERNAL_LINKS.officialSite} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">drinkolipop.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
