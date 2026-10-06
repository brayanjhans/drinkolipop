import React from 'react';
import { Heart, Sparkles, ShieldCheck, Award } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Visual Story Editorial Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-[#FFFDF7] rounded-3xl border border-[#E4DAC7] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDE68A] rounded-bl-full opacity-40" />

            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#183B2B] text-white flex items-center justify-center font-serif text-3xl font-black">
                O
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D7385E]">
                  FOUNDED BY BEN & DAVID
                </span>
                <h3 className="font-serif text-3xl font-extrabold text-[#183B2B] mt-1">
                  10+ Years of Microbiome Obsession.
                </h3>
              </div>

              <blockquote className="border-l-2 border-[#183B2B] pl-4 italic text-[#2F5242] text-sm leading-relaxed">
                “We asked ourselves: why does drinking what tastes good have to mean drinking 39 grams of liquid sugar? We knew we could use cutting-edge microbiome science to make soda functional, restorative, and unforgettable.”
              </blockquote>

              <div className="pt-2 text-xs font-bold text-[#183B2B]">
                — Ben Goodwin & David Lester, Co-Founders
              </div>

              {/* Key Milestones */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#EAE0CD] text-center">
                <div className="p-3 bg-[#F8F2E6] rounded-xl">
                  <div className="font-serif text-2xl font-black text-[#183B2B]">50,000+</div>
                  <div className="text-[10px] font-bold text-[#64748B]">5-Star Reviews</div>
                </div>
                <div className="p-3 bg-[#F8F2E6] rounded-xl">
                  <div className="font-serif text-2xl font-black text-[#183B2B]">25,000+</div>
                  <div className="text-[10px] font-bold text-[#64748B]">Retail Stores Nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The 3 Core Pillars */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#D7385E]">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#183B2B] tracking-tight mt-2 text-balance">
              Nourishing Your Gut Shouldn’t Taste Like a Chore.
            </h2>
            <p className="text-[#3E6152] text-base sm:text-lg font-medium leading-relaxed mt-4">
              Your gut microbiome influences your mood, digestion, sleep, and overall vitality. Yet over 95% of Americans fall short of their daily recommended dietary fiber intake.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-[#FFFDF7] rounded-2xl border border-[#E8DEC9] flex items-start gap-4">
              <div className="p-2.5 bg-[#183B2B] text-white rounded-xl shrink-0 mt-0.5">
                <Sparkles size={20} className="text-[#FBBF24]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#183B2B]">
                  Prebiotics That Feed Good Bacteria
                </h4>
                <p className="text-xs sm:text-sm text-[#52796F] mt-1 leading-relaxed">
                  Unlike probiotics (live bacteria that can die on store shelves), prebiotics are complex plant fibers that selectively nourish the healthy bacteria already flourishing in your gut.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#FFFDF7] rounded-2xl border border-[#E8DEC9] flex items-start gap-4">
              <div className="p-2.5 bg-[#D7385E] text-white rounded-xl shrink-0 mt-0.5">
                <Heart size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#183B2B]">
                  No Weird Sweetener Aftertaste
                </h4>
                <p className="text-xs sm:text-sm text-[#52796F] mt-1 leading-relaxed">
                  We don’t use sickeningly sweet artificial sugar alcohols or bitter stevia extracts. We sweeten with cassava root syrup, cold-pressed fruit juices, and real spice botanicals.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#FFFDF7] rounded-2xl border border-[#E8DEC9] flex items-start gap-4">
              <div className="p-2.5 bg-[#10B981] text-white rounded-xl shrink-0 mt-0.5">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#183B2B]">
                  Rigorous University Collaborations
                </h4>
                <p className="text-xs sm:text-sm text-[#52796F] mt-1 leading-relaxed">
                  Tested alongside top digestive researchers at Purdue, Baylor College of Medicine, and Michigan State University to ensure real digestive wellness benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
