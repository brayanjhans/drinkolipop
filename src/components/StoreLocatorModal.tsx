import React, { useState } from 'react';
import { X, Search, MapPin, Phone, ExternalLink, Check } from 'lucide-react';
import { RetailStore } from '../types';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  stores: RetailStore[];
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({
  isOpen,
  onClose,
  stores,
}) => {
  if (!isOpen) return null;

  const [searchZip, setSearchZip] = useState('78703');
  const [filteredStores, setFilteredStores] = useState<RetailStore[]>(stores);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchZip.trim()) {
      setFilteredStores(stores);
      return;
    }
    const q = searchZip.toLowerCase();
    const res = stores.filter(
      (s) =>
        s.zip.includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.chain.toLowerCase().includes(q)
    );
    setFilteredStores(res.length > 0 ? res : stores);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFDF7] rounded-3xl max-w-2xl w-full border border-[#E8DEC9] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#183B2B] text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#FBBF24] tracking-widest uppercase mb-1">
              <MapPin size={14} />
              <span>OVER 25,000 COOLERS NATIONWIDE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FBF8F2]">
              Find OLIPOP Near You
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close store locator"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 bg-[#F6F0E4] border-b border-[#E8DEC9]">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                placeholder="Enter ZIP code or City (e.g. 78703, Austin)"
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#DDD2C0] text-sm font-semibold text-[#183B2B] focus:outline-none focus:border-[#183B2B]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#183B2B] hover:bg-[#122E22] text-white text-xs font-black uppercase tracking-wider transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Stores List */}
        <div className="p-6 max-h-[420px] overflow-y-auto space-y-4">
          <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
            Stores Found ({filteredStores.length})
          </p>

          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-5 rounded-2xl bg-white border border-[#E8DEC9] shadow-xs hover:border-[#183B2B] transition-colors space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#183B2B]">
                    {store.name}
                  </h4>
                  <p className="text-xs text-[#52796F] mt-0.5">
                    {store.address}, {store.city}, {store.state} {store.zip}
                  </p>
                </div>
                <span className="text-xs font-black text-[#15803D] bg-[#E7F6ED] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {store.distance}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-bold text-[#64748B]">In Stock:</span>
                {store.inStockFlavors.map((fl, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold bg-[#F5ECE0] text-[#183B2B] px-2 py-0.5 rounded-md"
                  >
                    {fl}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#F2ECE0] text-xs font-bold">
                <a
                  href={`tel:${store.phone}`}
                  className="flex items-center gap-1 text-[#52796F] hover:text-[#183B2B]"
                >
                  <Phone size={13} />
                  <span>{store.phone}</span>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} ${store.address} ${store.city} ${store.state}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#183B2B] hover:text-[#D7385E]"
                >
                  <span>Directions</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F3E8] border-t border-[#E8DEC9] text-center text-xs text-[#52796F]">
          Can’t find OLIPOP at your local store? Ask the beverage manager to stock it!
        </div>
      </div>
    </div>
  );
};
