import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Sparkles, Check, Printer } from 'lucide-react';
import { CartItem, Flavor } from '../types';
import { CanIllustration } from './CanIllustration';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToCheckout: (appliedDiscount?: number, isNotaDeVenta?: boolean) => void;
  onAddUpsell: (flavor: Flavor) => void;
  upsellFlavor?: Flavor;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onAddUpsell,
  upsellFlavor,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null);

  // Free shipping threshold ($50)
  const FREE_SHIPPING_THRESHOLD = 50.0;

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => {
    const itemPrice = item.purchaseType === 'subscription' ? item.flavor.subscriptionPrice : item.flavor.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingAmount = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : 5.99;
  const total = Math.max(0, subtotal - discountAmount + shippingAmount);

  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SIP15' || clean === 'WELCOME15' || clean === 'GUTHEALTH') {
      setDiscountPercent(15);
      setPromoMessage({ text: 'Promo code applied: 15% OFF!' });
    } else if (clean === 'OLIPOP20') {
      setDiscountPercent(20);
      setPromoMessage({ text: 'Promo code applied: 20% OFF!' });
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try "SIP15"', error: true });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FFFDF7] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8DEC9] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Header */}
        <div className="p-5 border-b border-[#E8DEC9] flex items-center justify-between bg-[#FBF8F2]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-black text-[#183B2B]">Your Bag</span>
            <span className="text-xs font-black text-[#183B2B] bg-[#FDE68A] px-2.5 py-0.5 rounded-full">
              {items.reduce((acc, it) => acc + it.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EADBCE] text-[#183B2B] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* 2. Free Shipping Progress Bar */}
        <div className="px-5 py-3.5 bg-[#F4EFE6] border-b border-[#E8DEC9]">
          <div className="flex items-center justify-between text-xs font-bold text-[#183B2B] mb-1.5">
            {remainingForFreeShipping > 0 ? (
              <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> more for <strong>FREE SHIPPING</strong>!</span>
            ) : (
              <span className="text-[#15803D] flex items-center gap-1">
                <span>🎉</span>
                <span>You unlocked <strong>FREE SHIPPING!</strong></span>
              </span>
            )}
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full bg-[#DDD3C2] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#183B2B] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 3. Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F3EDE2] text-[#8FA397] flex items-center justify-center mx-auto text-2xl">
                🥤
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-[#183B2B]">Your bag is empty</h4>
                <p className="text-xs text-[#52796F] mt-1 max-w-xs mx-auto">
                  Looks like you haven't picked your favorite prebiotic flavor yet!
                </p>
              </div>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#183B2B] text-white text-xs font-black uppercase tracking-wider"
              >
                Shop Flavors Now
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemPrice = item.purchaseType === 'subscription' ? item.flavor.subscriptionPrice : item.flavor.price;
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-[#E8DEC9] flex gap-3 shadow-xs"
                >
                  {/* Can Thumbnail */}
                  <div className="w-16 h-24 bg-[#F8F3EA] rounded-xl flex items-center justify-center shrink-0 border border-[#EAE1D2]">
                    <CanIllustration flavor={item.flavor} size="sm" />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-1">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#183B2B]">
                          {item.flavor.name}
                        </h4>
                        <div className="text-[11px] font-semibold text-[#52796F]">
                          12 Cans · {item.purchaseType === 'subscription' ? 'Subscribe & Save (15%)' : 'One-Time'}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#94A3B8] hover:text-[#EF4444] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#DDD2C0] rounded-xl bg-[#FAF7F0]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#183B2B] hover:bg-[#EADDC9] rounded-l-xl"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#183B2B] hover:bg-[#EADDC9] rounded-r-xl"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Total Line Price */}
                      <div className="text-right">
                        <span className="font-black text-sm text-[#183B2B] tabular-nums">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Upsell Recommendation Card */}
          {upsellFlavor && items.length > 0 && !items.some(i => i.flavor.id === upsellFlavor.id) && (
            <div className="p-3.5 rounded-2xl bg-[#FFF6EA] border border-[#F3DFC1] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#E65A28] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  🥤
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#183B2B]">Add {upsellFlavor.name}?</div>
                  <div className="text-[10px] text-[#52796F]">${upsellFlavor.subscriptionPrice.toFixed(2)} / case</div>
                </div>
              </div>
              <button
                onClick={() => onAddUpsell(upsellFlavor)}
                className="px-3 py-1.5 rounded-xl bg-[#183B2B] hover:bg-[#122E22] text-white text-xs font-black"
              >
                + Add
              </button>
            </div>
          )}
        </div>

        {/* 4. Footer & Express Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E8DEC9] bg-[#FBF8F2] space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8FA397]" />
                <input
                  type="text"
                  placeholder="Discount code (try: SIP15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-[#DDD2C0] rounded-xl font-medium focus:outline-none focus:border-[#183B2B] uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-[#183B2B] hover:bg-[#122E22] text-white text-xs font-bold rounded-xl transition-colors"
              >
                Apply
              </button>
            </form>

            {promoMessage && (
              <div className={`text-xs font-bold ${promoMessage.error ? 'text-[#DC2626]' : 'text-[#16A34A]'}`}>
                {promoMessage.text}
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#2F5242]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#183B2B] tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#15803D] font-bold">
                  <span>Promo Discount ({discountPercent}%)</span>
                  <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-bold tabular-nums">
                  {shippingAmount === 0 ? <span className="text-[#15803D]">FREE</span> : `$${shippingAmount.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E4DAC7] text-base font-extrabold text-[#183B2B]">
                <span>Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Primary Checkout & Nota de Venta CTAs */}
            <div className="space-y-2">
              <button
                onClick={() => onProceedToCheckout(discountPercent, false)}
                className="w-full py-4 rounded-2xl bg-[#183B2B] hover:bg-[#122E22] text-white font-black text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>PROCEDER AL PAGO · ${total.toFixed(2)}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onProceedToCheckout(discountPercent, true)}
                className="w-full py-3 rounded-2xl bg-[#FBBF24] hover:bg-[#F59E0B] text-[#183B2B] font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer border border-[#E9C893]"
              >
                <Printer size={15} />
                <span>Pagar con Nota de Venta / Imprimir Ticket</span>
              </button>
            </div>

            {/* Express Checkout Pills Bar */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {/* Shop Pay */}
              <button
                onClick={() => onProceedToCheckout(discountPercent)}
                className="py-2.5 px-2 bg-[#5A31F4] hover:bg-[#4C28D6] text-white rounded-xl text-xs font-black tracking-tight flex items-center justify-center shadow-xs transition-colors"
                title="Pay with Shop Pay"
              >
                <span>shop</span>
                <span className="bg-[#4823DE] text-white px-1 ml-0.5 rounded text-[10px]">pay</span>
              </button>

              {/* PayPal */}
              <button
                onClick={() => onProceedToCheckout(discountPercent)}
                className="py-2.5 px-2 bg-[#FFC439] hover:bg-[#F2BA32] text-[#003087] rounded-xl text-xs font-black tracking-tight flex items-center justify-center shadow-xs transition-colors"
                title="Pay with PayPal"
              >
                <span className="font-sans italic">Pay</span>
                <span className="font-sans italic text-[#0079C1]">Pal</span>
              </button>

              {/* GPay / Apple Pay */}
              <button
                onClick={() => onProceedToCheckout(discountPercent)}
                className="py-2.5 px-2 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-black tracking-tight flex items-center justify-center shadow-xs transition-colors"
                title="Pay with Google Pay or Apple Pay"
              >
                <span>Pay</span>
              </button>
            </div>

            {/* Trust markers */}
            <div className="flex items-center justify-center gap-3 text-[11px] text-[#64748B] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#10B981]" />
                <span>256-Bit SSL Encrypted</span>
              </span>
              <span>·</span>
              <span>100% Happiness Guarantee</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
