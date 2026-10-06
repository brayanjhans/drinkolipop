import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#FAF6EE] border-t border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Endorsements Bar */}
        <div className="mb-16 pb-12 border-b border-[#E8DEC9]">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#64748B] mb-8">
            PRAISED BY THE TASTEMAKERS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-85">
            <div className="text-center font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183B2B]">
              The New York Times
            </div>
            <div className="text-center font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183B2B]">
              Forbes
            </div>
            <div className="text-center font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183B2B]">
              BON APPÉTIT
            </div>
            <div className="text-center font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183B2B]">
              FOOD & WINE
            </div>
          </div>
        </div>

        {/* Reviews Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-1 text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-[#F59E0B]" />
            ))}
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#183B2B] tracking-tight">
            50,000+ 5-Star Reviews
          </h2>
          <p className="text-[#3E6152] text-base sm:text-lg font-medium">
            Hear why millions of soda lovers swapped their daily soda habit for OLIPOP.
          </p>
        </div>

        {/* Featured Review Spotlight */}
        <div className="max-w-4xl mx-auto bg-[#FFFDF7] rounded-3xl border border-[#E8DEC9] p-8 sm:p-12 shadow-xl relative">
          <Quote className="absolute top-6 right-8 text-[#E8DEC9] w-16 h-16 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Stars & Flavor Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex text-[#F59E0B]">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#183B2B] bg-[#F2EDE2] px-3 py-1 rounded-full border border-[#E0D5C1]">
                Flavor: {reviews[currentIndex].flavorName}
              </span>
            </div>

            {/* Review Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#183B2B]">
              “{reviews[currentIndex].title}”
            </h3>

            {/* Comment */}
            <p className="text-base sm:text-lg text-[#2F5242] leading-relaxed italic">
              {reviews[currentIndex].comment}
            </p>

            {/* Reviewer Details */}
            <div className="flex items-center justify-between pt-4 border-t border-[#EAE0CD]">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#183B2B] text-white flex items-center justify-center font-bold text-sm">
                  {reviews[currentIndex].author[0]}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#183B2B] flex items-center gap-1.5">
                    <span>{reviews[currentIndex].author}</span>
                    <CheckCircle size={14} className="text-[#10B981]" />
                    <span className="text-[10px] text-[#10B981] font-semibold">Verified Buyer</span>
                  </div>
                  <div className="text-xs text-[#8FA397]">
                    {reviews[currentIndex].city}, {reviews[currentIndex].state} · {reviews[currentIndex].date}
                  </div>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2.5 rounded-full border border-[#DDD2C0] bg-[#FFFDF7] hover:bg-[#F2EDE2] text-[#183B2B] transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2.5 rounded-full border border-[#DDD2C0] bg-[#FFFDF7] hover:bg-[#F2EDE2] text-[#183B2B] transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
