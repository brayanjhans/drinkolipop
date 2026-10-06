import React from 'react';
import { CheckCircle, Truck, Package, ArrowRight, Printer, Sparkles, MapPin } from 'lucide-react';
import { OrderConfirmation } from '../types';
import { CanIllustration } from './CanIllustration';

interface OrderConfirmationModalProps {
  order: OrderConfirmation | null;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
}) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFDF7] rounded-3xl max-w-2xl w-full border border-[#E8DEC9] shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Celebration Header */}
        <div className="p-8 bg-[#183B2B] text-white text-center space-y-3 relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle size={36} />
          </div>

          <span className="text-xs font-bold text-[#FBBF24] tracking-widest uppercase block">
            ORDER CONFIRMED
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FBF8F2]">
            Thank You, {order.customer.firstName}!
          </h2>

          <p className="text-sm text-[#A7F3D0] max-w-md mx-auto">
            Your soda is being packed with love and kept cool for shipment. A receipt and tracking link has been sent to <strong>{order.customer.email}</strong>.
          </p>

          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold mt-2">
            Order Reference: {order.orderNumber}
          </div>
        </div>

        {/* Shipping & Delivery Status */}
        <div className="p-6 bg-[#F6F0E4] border-b border-[#E8DEC9] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-[#DDD2C0] text-[#183B2B]">
              <Truck size={18} />
            </div>
            <div>
              <div className="font-bold text-[#183B2B]">Estimated Delivery</div>
              <div className="text-[#52796F] mt-0.5">{order.estimatedDelivery}</div>
              <div className="text-[11px] font-mono text-[#64748B] mt-1">Tracking: {order.trackingNumber}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-[#DDD2C0] text-[#183B2B]">
              <MapPin size={18} />
            </div>
            <div>
              <div className="font-bold text-[#183B2B]">Shipping To</div>
              <div className="text-[#52796F] mt-0.5">
                {order.customer.address}, {order.customer.city}, {order.customer.state} {order.customer.zip}
              </div>
            </div>
          </div>
        </div>

        {/* Ordered Items Preview */}
        <div className="p-6 space-y-4 max-h-60 overflow-y-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
            Items In This Order
          </h4>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E8DEC9]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-14 bg-[#FAF7F0] rounded-lg flex items-center justify-center shrink-0">
                    <CanIllustration flavor={item.flavor} size="sm" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-[#183B2B]">
                      {item.flavor.name}
                    </h5>
                    <div className="text-[11px] text-[#52796F]">
                      Quantity: {item.quantity} case(s) · {item.purchaseType === 'subscription' ? 'Subscribe & Save' : 'Standard'}
                    </div>
                  </div>
                </div>
                <span className="font-bold text-xs text-[#183B2B] tabular-nums">
                  ${((item.purchaseType === 'subscription' ? item.flavor.subscriptionPrice : item.flavor.price) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="p-6 bg-[#FAF6EE] border-t border-[#E8DEC9] space-y-2 text-xs text-[#2F5242]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold text-[#183B2B] tabular-nums">${order.subtotal.toFixed(2)}</span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-[#15803D] font-bold">
              <span>Discount</span>
              <span className="tabular-nums">-${order.discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-bold tabular-nums">
              {order.shipping === 0 ? <span className="text-[#15803D]">FREE</span> : `$${order.shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Sales Tax</span>
            <span className="font-bold text-[#183B2B] tabular-nums">${order.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#E8DEC9] text-base font-black text-[#183B2B]">
            <span>Total Paid</span>
            <span className="tabular-nums">${order.total.toFixed(2)}</span>
          </div>
          <div className="text-[11px] text-[#64748B] pt-1">
            Payment Method: {order.paymentMethod.replace('_', ' ').toUpperCase()} (ending in {order.paymentLast4})
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-6 bg-[#FFFDF7] border-t border-[#E8DEC9] flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3.5 px-6 rounded-2xl bg-[#183B2B] hover:bg-[#122E22] text-white text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
          >
            <span>Back to Soda Shop</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => window.print()}
            className="py-3.5 px-5 rounded-2xl bg-[#F2EDE2] hover:bg-[#E9E1D2] text-[#183B2B] text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <Printer size={16} />
            <span>Print Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
};
