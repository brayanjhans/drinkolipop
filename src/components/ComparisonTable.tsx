import React from 'react';
import { Check, X, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="science" className="py-16 lg:py-24 bg-[#F2EDE2] border-y border-[#E4DAC7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D7385E]">
            REAL SCIENCE · REAL SODA
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#183B2B] tracking-tight">
            How Does OLIPOP Compare?
          </h2>
          <p className="text-[#3E6152] text-base sm:text-lg font-medium leading-relaxed">
            We spent years collaborating with the world’s leading microbiome researchers to build a delicious soda that loves your body back.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FFFDF7] rounded-3xl border border-[#E4DAC7] shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-[#E8DEC9]">
                  <th className="py-6 px-6 text-sm font-bold text-[#64748B] w-1/3">
                    NUTRITION & INGREDIENTS
                  </th>
                  <th className="py-6 px-6 bg-[#183B2B] text-white w-1/3 rounded-t-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-2xl font-black">OLIPOP</span>
                      <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                    </div>
                    <span className="text-[11px] text-[#A7F3D0] font-semibold">Prebiotic Soda</span>
                  </th>
                  <th className="py-6 px-6 text-sm font-bold text-[#64748B] w-1/3">
                    TRADITIONAL SODA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE7D8] text-sm">
                
                {/* Row 1: Sugar */}
                <tr className="hover:bg-[#FAF6EE] transition-colors">
                  <td className="py-5 px-6 font-bold text-[#183B2B]">
                    Total Sugar
                    <span className="block text-xs font-normal text-[#64748B]">Per 12 fl oz can</span>
                  </td>
                  <td className="py-5 px-6 bg-[#183B2B]/5 font-black text-[#15803D] text-base">
                    2–5g (Real Fruit Juice & Cassava)
                  </td>
                  <td className="py-5 px-6 text-[#991B1B] font-bold">
                    39g+ (High Fructose Corn Syrup)
                  </td>
                </tr>

                {/* Row 2: Dietary Fiber */}
                <tr className="hover:bg-[#FAF6EE] transition-colors">
                  <td className="py-5 px-6 font-bold text-[#183B2B]">
                    Plant Prebiotic Fiber
                    <span className="block text-xs font-normal text-[#64748B]">Daily microbiome fuel</span>
                  </td>
                  <td className="py-5 px-6 bg-[#183B2B]/5 font-black text-[#183B2B] text-base flex items-center gap-2">
                    <Check size={18} className="text-[#10B981]" />
                    <span>9g Plant Fiber (32% Daily Value)</span>
                  </td>
                  <td className="py-5 px-6 text-[#64748B] font-medium flex items-center gap-2">
                    <X size={18} className="text-[#EF4444]" />
                    <span>0g (Zero Fiber)</span>
                  </td>
                </tr>

                {/* Row 3: Calories */}
                <tr className="hover:bg-[#FAF6EE] transition-colors">
                  <td className="py-5 px-6 font-bold text-[#183B2B]">
                    Calories
                    <span className="block text-xs font-normal text-[#64748B]">Light and guilt-free</span>
                  </td>
                  <td className="py-5 px-6 bg-[#183B2B]/5 font-black text-[#183B2B]">
                    35–45 Calories
                  </td>
                  <td className="py-5 px-6 text-[#64748B] font-medium">
                    140–160 Calories
                  </td>
                </tr>

                {/* Row 4: Digestive Botanicals */}
                <tr className="hover:bg-[#FAF6EE] transition-colors">
                  <td className="py-5 px-6 font-bold text-[#183B2B]">
                    Functional Botanicals
                    <span className="block text-xs font-normal text-[#64748B]">Chicory, Marshmallow, Nopal, Calendula</span>
                  </td>
                  <td className="py-5 px-6 bg-[#183B2B]/5 font-black text-[#15803D] flex items-center gap-2">
                    <Check size={18} className="text-[#10B981]" />
                    <span>7 Science-Backed Botanicals</span>
                  </td>
                  <td className="py-5 px-6 text-[#64748B] font-medium flex items-center gap-2">
                    <X size={18} className="text-[#EF4444]" />
                    <span>None (Synthetic Flavorings)</span>
                  </td>
                </tr>

                {/* Row 5: Artificial Sweeteners */}
                <tr className="hover:bg-[#FAF6EE] transition-colors">
                  <td className="py-5 px-6 font-bold text-[#183B2B]">
                    Artificial Sweeteners
                    <span className="block text-xs font-normal text-[#64748B]">Aspartame, Sucralose, Acesulfame K</span>
                  </td>
                  <td className="py-5 px-6 bg-[#183B2B]/5 font-black text-[#183B2B]">
                    ZERO (100% Non-GMO Natural)
                  </td>
                  <td className="py-5 px-6 text-[#991B1B] font-medium">
                    High or Heavy Chemicals
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Botanical Highlights Pill Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E4DAC7]">
            <div className="font-serif text-lg font-bold text-[#183B2B]">Cassava Root</div>
            <div className="text-xs text-[#52796F] mt-1">Prebiotic fiber that feeds gut flora</div>
          </div>
          <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E4DAC7]">
            <div className="font-serif text-lg font-bold text-[#183B2B]">Marshmallow Root</div>
            <div className="text-xs text-[#52796F] mt-1">Soothes & coats the digestive tract</div>
          </div>
          <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E4DAC7]">
            <div className="font-serif text-lg font-bold text-[#183B2B]">Nopal Cactus</div>
            <div className="text-xs text-[#52796F] mt-1">Hydrating fiber & antioxidant power</div>
          </div>
          <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E4DAC7]">
            <div className="font-serif text-lg font-bold text-[#183B2B]">Calendula Flower</div>
            <div className="text-xs text-[#52796F] mt-1">Herbal tradition supporting gut health</div>
          </div>
        </div>

      </div>
    </section>
  );
};
