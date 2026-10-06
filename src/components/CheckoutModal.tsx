import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle, CreditCard, ChevronDown, ArrowLeft, Truck, Sparkles, HelpCircle, Printer, FileText } from 'lucide-react';
import { CartItem, CheckoutCustomer, OrderConfirmation, PaymentMethodType } from '../types';
import { CanIllustration } from './CanIllustration';
import { NotaDeVentaModal } from './NotaDeVentaModal';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountPercent: number;
  initialPaymentMethod?: PaymentMethodType;
  onOrderComplete: (order: OrderConfirmation) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountPercent,
  initialPaymentMethod,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  // Form State
  const [customer, setCustomer] = useState<CheckoutCustomer>({
    email: 'alex.morgan@example.com',
    phone: '(555) 382-9012',
    firstName: 'Alex',
    lastName: 'Morgan',
    address: '742 Evergreen Terrace',
    apartment: 'Apt 4B',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    country: 'United States',
  });

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>(initialPaymentMethod || 'credit_card');

  React.useEffect(() => {
    if (initialPaymentMethod) {
      setSelectedPayment(initialPaymentMethod);
      if (initialPaymentMethod === 'nota_de_venta') {
        setShowNotaDeVenta(true);
      }
    }
  }, [initialPaymentMethod, isOpen]);

  // Credit Card Inputs
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('Alex Morgan');
  const [sameAsBilling, setSameAsBilling] = useState(true);

  // Modal Sub-States (e.g. Shop Pay modal simulation, processing spinner)
  const [isProcessing, setIsProcessing] = useState(false);
  const [showShopPayModal, setShowShopPayModal] = useState(false);
  const [showNotaDeVenta, setShowNotaDeVenta] = useState(false);
  const [shopPayCode, setShopPayCode] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Calculations
  const subtotal = items.reduce((sum, item) => {
    const itemPrice = item.purchaseType === 'subscription' ? item.flavor.subscriptionPrice : item.flavor.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingAmount = shippingMethod === 'express' ? 12.99 : subtotal >= 50 ? 0 : 5.99;
  const taxAmount = (subtotal - discountAmount) * 0.0825; // Texas 8.25% tax simulation
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingAmount + taxAmount);

  // Card detection
  const detectCardType = (num: string) => {
    const clean = num.replace(/\s+/g, '');
    if (clean.startsWith('4')) return 'Visa';
    if (/^5[1-5]/.test(clean)) return 'Mastercard';
    if (/^3[47]/.test(clean)) return 'Amex';
    if (clean.startsWith('6011')) return 'Discover';
    return 'Credit Card';
  };

  // Card formatting
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    let formatted = v.match(/.{1,4}/g)?.join(' ') || v;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) {
      v = `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    setCardExpiry(v);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCardCvv(v);
  };

  // Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!customer.email || !customer.email.includes('@')) errors.email = 'Valid email required';
    if (!customer.firstName) errors.firstName = 'First name required';
    if (!customer.lastName) errors.lastName = 'Last name required';
    if (!customer.address) errors.address = 'Street address required';
    if (!customer.city) errors.city = 'City required';
    if (!customer.zip) errors.zip = 'ZIP code required';

    if (selectedPayment === 'credit_card') {
      const cleanNum = cardNumber.replace(/\s+/g, '');
      if (cleanNum.length < 15) errors.cardNumber = 'Valid 15 or 16-digit card required';
      if (!cardExpiry || cardExpiry.length < 5) errors.cardExpiry = 'MM/YY required';
      if (!cardCvv || cardCvv.length < 3) errors.cardCvv = 'CVV required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Process Payment
  const executePayment = (method: PaymentMethodType) => {
    if (method === 'nota_de_venta') {
      setShowNotaDeVenta(true);
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const orderNumber = `OLI-${Math.floor(100000 + Math.random() * 900000)}`;
      const trackingNumber = `94001118992233${Math.floor(100000 + Math.random() * 900000)}`;

      const order: OrderConfirmation = {
        orderNumber,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        customer,
        items,
        subtotal,
        discount: discountAmount,
        shipping: shippingAmount,
        tax: taxAmount,
        total: totalAmount,
        paymentMethod: method,
        paymentLast4: method === 'credit_card' ? cardNumber.slice(-4) || '4242' : '8821',
        trackingNumber,
        estimatedDelivery: '3 to 5 business days (FedEx Priority Ground)',
      };

      onOrderComplete(order);
    }, 1500);
  };

  const handleCompleteViaNota = () => {
    setShowNotaDeVenta(false);
    const orderNumber = `OLI-${Math.floor(100000 + Math.random() * 900000)}`;
    const trackingNumber = `94001118992233${Math.floor(100000 + Math.random() * 900000)}`;
    const order: OrderConfirmation = {
      orderNumber,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      customer,
      items,
      subtotal,
      discount: discountAmount,
      shipping: shippingAmount,
      tax: taxAmount,
      total: totalAmount,
      paymentMethod: 'nota_de_venta',
      paymentLast4: 'TICKET-PAGADO',
      trackingNumber,
      estimatedDelivery: '3 to 5 business days (FedEx Priority Ground - Despacho tras verificación de pago)',
    };
    onOrderComplete(order);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      executePayment(selectedPayment);
    }
  };

  const handleExpressShopPay = () => {
    setShowShopPayModal(true);
  };

  const handleCompleteShopPay = () => {
    setShowShopPayModal(false);
    executePayment('shop_pay');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFDF7] rounded-3xl max-w-5xl w-full border border-[#E8DEC9] shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#FBF8F2] border-b border-[#E8DEC9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-[#52796F] hover:text-[#183B2B] flex items-center gap-1 text-xs font-bold"
            >
              <ArrowLeft size={16} />
              <span>Back to Store</span>
            </button>
            <span className="text-[#CBD5E1]">|</span>
            <span className="font-serif text-2xl font-black text-[#183B2B]">OLIPOP</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#15803D]">
            <Lock size={14} />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>

        {/* Checkout Content Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E8DEC9]">
          
          {/* Left Column: Form & Payment Gateways */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8">
            
            {/* Express Checkout Section */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block text-center">
                EXPRESS 1-CLICK CHECKOUT
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {/* Shop Pay */}
                <button
                  type="button"
                  onClick={handleExpressShopPay}
                  className="py-3 px-2 bg-[#5A31F4] hover:bg-[#4C28D6] text-white rounded-xl text-xs font-black tracking-tight flex items-center justify-center shadow-xs transition-colors"
                >
                  <span>shop</span>
                  <span className="bg-[#4823DE] text-white px-1 ml-0.5 rounded text-[10px]">pay</span>
                </button>

                {/* PayPal */}
                <button
                  type="button"
                  onClick={() => executePayment('paypal')}
                  className="py-3 px-2 bg-[#FFC439] hover:bg-[#F2BA32] text-[#003087] rounded-xl text-xs font-black tracking-tight flex items-center justify-center shadow-xs transition-colors"
                >
                  <span className="font-sans italic">Pay</span>
                  <span className="font-sans italic text-[#0079C1]">Pal</span>
                </button>

                {/* Apple Pay / Google Pay */}
                <button
                  type="button"
                  onClick={() => executePayment('apple_pay')}
                  className="py-3 px-2 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-black tracking-tight flex items-center justify-center shadow-xs transition-colors"
                >
                  <span>Pay</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E8DEC9]" />
              </div>
              <span className="relative bg-[#FFFDF7] px-3 text-[11px] font-bold text-[#8FA397] uppercase tracking-wider">
                OR CONTINUE BELOW
              </span>
            </div>

            {/* Standard Checkout Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Contact Information */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#183B2B]">
                  1. Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                    />
                    {formErrors.email && <span className="text-[10px] text-red-600 font-bold">{formErrors.email}</span>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone (for tracking SMS updates)"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#183B2B]">
                  2. Shipping Address
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    value={customer.firstName}
                    onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={customer.lastName}
                    onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Street Address"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                  />
                  <input
                    type="text"
                    placeholder="State (e.g. TX)"
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    value={customer.zip}
                    onChange={(e) => setCustomer({ ...customer, zip: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                  />
                </div>
              </div>

              {/* Shipping Method */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#183B2B]">
                  3. Delivery Method
                </h3>
                <div className="space-y-2">
                  <label
                    onClick={() => setShippingMethod('standard')}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer text-xs font-bold transition-all ${
                      shippingMethod === 'standard' ? 'border-[#183B2B] bg-[#F2EDE2]' : 'border-[#DDD2C0] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="accent-[#183B2B]"
                      />
                      <div>
                        <div>Standard Ground Delivery (3–5 Business Days)</div>
                        <div className="text-[11px] text-[#52796F] font-normal">FedEx Ground or UPS Carbon Neutral</div>
                      </div>
                    </div>
                    <span className="tabular-nums">
                      {subtotal >= 50 ? <span className="text-[#15803D]">FREE</span> : '$5.99'}
                    </span>
                  </label>

                  <label
                    onClick={() => setShippingMethod('express')}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer text-xs font-bold transition-all ${
                      shippingMethod === 'express' ? 'border-[#183B2B] bg-[#F2EDE2]' : 'border-[#DDD2C0] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="accent-[#183B2B]"
                      />
                      <div>
                        <div>Priority Chilled Express (1–2 Business Days)</div>
                        <div className="text-[11px] text-[#52796F] font-normal">Fast-track cold shipping dispatch</div>
                      </div>
                    </div>
                    <span className="tabular-nums">$12.99</span>
                  </label>
                </div>
              </div>

              {/* Payment Gateways & Secure Form */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#183B2B]">
                    4. Payment Information
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#15803D] font-bold">
                    <ShieldCheck size={14} />
                    <span>PCI-DSS Level 1 Certified</span>
                  </div>
                </div>

                {/* Payment Selection Tabs */}
                <div className="border border-[#DDD2C0] rounded-2xl overflow-hidden divide-y divide-[#EADFCB] bg-white">
                  
                  {/* Option A: Credit Card */}
                  <div>
                    <label
                      onClick={() => setSelectedPayment('credit_card')}
                      className={`flex items-center justify-between p-3.5 cursor-pointer text-xs font-bold ${
                        selectedPayment === 'credit_card' ? 'bg-[#F2EDE2]' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          checked={selectedPayment === 'credit_card'}
                          onChange={() => setSelectedPayment('credit_card')}
                          className="accent-[#183B2B]"
                        />
                        <span>Credit or Debit Card</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-[#64748B]">
                        <span className="font-mono font-bold bg-[#E8DEC9] px-1 rounded">VISA</span>
                        <span className="font-mono font-bold bg-[#E8DEC9] px-1 rounded">MC</span>
                        <span className="font-mono font-bold bg-[#E8DEC9] px-1 rounded">AMEX</span>
                        <span className="font-mono font-bold bg-[#E8DEC9] px-1 rounded">DISC</span>
                      </div>
                    </label>

                    {selectedPayment === 'credit_card' && (
                      <div className="p-4 bg-[#FBF8F2] space-y-3 border-t border-[#E8DEC9]">
                        <div>
                          <label className="text-[10px] font-bold uppercase text-[#64748B] block mb-1">
                            Card Number ({detectCardType(cardNumber)})
                          </label>
                          <div className="relative">
                            <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8FA397]" />
                            <input
                              type="text"
                              placeholder="4532 8920 1234 5678"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-mono font-bold focus:outline-none focus:border-[#183B2B]"
                            />
                          </div>
                          {formErrors.cardNumber && <span className="text-[10px] text-red-600 font-bold">{formErrors.cardNumber}</span>}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] font-bold uppercase text-[#64748B] block mb-1">
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM / YY"
                              value={cardExpiry}
                              onChange={handleExpiryChange}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-mono font-bold focus:outline-none focus:border-[#183B2B]"
                            />
                            {formErrors.cardExpiry && <span className="text-[10px] text-red-600 font-bold">{formErrors.cardExpiry}</span>}
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-[10px] font-bold uppercase text-[#64748B]">
                                Security Code (CVV)
                              </label>
                              <span title="3 digits on back or 4 on front for Amex">
                                <HelpCircle size={12} className="text-[#8FA397]" />
                              </span>
                            </div>
                            <input
                              type="password"
                              placeholder="CVC"
                              value={cardCvv}
                              onChange={handleCvvChange}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-mono font-bold focus:outline-none focus:border-[#183B2B]"
                            />
                            {formErrors.cardCvv && <span className="text-[10px] text-red-600 font-bold">{formErrors.cardCvv}</span>}
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase text-[#64748B] block mb-1">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            placeholder="Full name"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD2C0] bg-white text-xs font-semibold focus:outline-none focus:border-[#183B2B]"
                          />
                        </div>

                        <label className="flex items-center gap-2 text-xs font-semibold text-[#52796F] cursor-pointer pt-1">
                          <input
                            type="checkbox"
                            checked={sameAsBilling}
                            onChange={() => setSameAsBilling(!sameAsBilling)}
                            className="accent-[#183B2B] rounded"
                          />
                          <span>Billing address matches shipping address</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Option B: PayPal */}
                  <label
                    onClick={() => setSelectedPayment('paypal')}
                    className={`flex items-center justify-between p-3.5 cursor-pointer text-xs font-bold ${
                      selectedPayment === 'paypal' ? 'bg-[#F2EDE2]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        checked={selectedPayment === 'paypal'}
                        onChange={() => setSelectedPayment('paypal')}
                        className="accent-[#183B2B]"
                      />
                      <span>PayPal</span>
                    </div>
                    <span className="font-sans italic text-[#003087]">PayPal</span>
                  </label>

                  {/* Option C: Shop Pay */}
                  <label
                    onClick={() => setSelectedPayment('shop_pay')}
                    className={`flex items-center justify-between p-3.5 cursor-pointer text-xs font-bold ${
                      selectedPayment === 'shop_pay' ? 'bg-[#F2EDE2]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        checked={selectedPayment === 'shop_pay'}
                        onChange={() => setSelectedPayment('shop_pay')}
                        className="accent-[#183B2B]"
                      />
                      <span>Shop Pay (Installments available)</span>
                    </div>
                    <span className="text-[#5A31F4] font-black">shop pay</span>
                  </label>

                  {/* Option D: Nota de Venta / Comprobante Imprimible */}
                  <div>
                    <label
                      onClick={() => setSelectedPayment('nota_de_venta')}
                      className={`flex items-center justify-between p-3.5 cursor-pointer text-xs font-bold transition-all ${
                        selectedPayment === 'nota_de_venta' ? 'bg-[#F2EDE2]' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          checked={selectedPayment === 'nota_de_venta'}
                          onChange={() => setSelectedPayment('nota_de_venta')}
                          className="accent-[#183B2B]"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-extrabold text-[#183B2B]">Nota de Venta / Orden de Pago</span>
                            <span className="text-[10px] bg-[#183B2B] text-white px-2 py-0.5 rounded-full font-black">IMPRIMIBLE</span>
                          </div>
                          <span className="block text-[11px] text-[#52796F] font-medium mt-0.5">
                            Genera e imprime ticket con código de barras para pagar en ventanilla, agente bancario o contra entrega
                          </span>
                        </div>
                      </div>
                      <span className="text-[#183B2B] p-1.5 bg-[#FDE68A] rounded-xl flex items-center gap-1 text-[11px] font-bold shrink-0">
                        <Printer size={15} />
                        <span>TICKET</span>
                      </span>
                    </label>

                    {selectedPayment === 'nota_de_venta' && (
                      <div className="p-4 bg-[#FBF8F2] space-y-3 border-t border-[#E8DEC9]">
                        <p className="text-xs text-[#2F5242] leading-relaxed">
                          Al seleccionar esta opción o pulsar el botón inferior, se emitirá tu <strong>Nota de Venta oficial con código de barras, número de folio y referencia bancaria</strong> para que el cliente la imprima y realice el pago de inmediato.
                        </p>
                        <button
                          type="button"
                          onClick={() => setShowNotaDeVenta(true)}
                          className="w-full py-3 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#183B2B] font-black text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                        >
                          <Printer size={16} />
                          <span>Generar e Imprimir Nota de Venta Ahora</span>
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-[#183B2B] hover:bg-[#122E22] text-white font-black text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Secure Payment...</span>
                  </span>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>AUTHORIZE & PAY · ${totalAmount.toFixed(2)}</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-[#64748B]">
                By placing this order you agree to OLIPOP’s Terms of Service and Privacy Policy. Subscriptions can be paused or cancelled at any time.
              </div>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FAF6EE] flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#183B2B] mb-4">
                Order Summary ({items.reduce((a, b) => a + b.quantity, 0)} items)
              </h3>

              {/* Itemized Line Items */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1 mb-6">
                {items.map((item) => {
                  const price = item.purchaseType === 'subscription' ? item.flavor.subscriptionPrice : item.flavor.price;
                  return (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="w-12 h-16 bg-white rounded-lg flex items-center justify-center shrink-0 border border-[#E8DEC9] relative">
                        <CanIllustration flavor={item.flavor} size="sm" />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#183B2B] text-white text-[10px] font-black flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif text-xs font-bold text-[#183B2B] truncate">
                          {item.flavor.name}
                        </h5>
                        <div className="text-[10px] text-[#52796F]">
                          {item.purchaseType === 'subscription' ? 'Subscribe & Save (15%)' : '12-Pack Case'}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-[#183B2B] tabular-nums">
                          ${(price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-2 border-t border-[#E8DEC9] pt-4 text-xs text-[#2F5242]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#183B2B] tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#15803D] font-bold">
                    <span>Discount</span>
                    <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold tabular-nums">
                    {shippingAmount === 0 ? <span className="text-[#15803D]">FREE</span> : `$${shippingAmount.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Taxes (State & Local)</span>
                  <span className="font-bold text-[#183B2B] tabular-nums">${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#E8DEC9] text-lg font-black text-[#183B2B]">
                  <span>Total Due</span>
                  <span className="tabular-nums">${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Happiness & Trust Guarantee */}
            <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E8DEC9] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#183B2B]">
                <Sparkles size={14} className="text-[#F59E0B]" />
                <span>100% Olipop Happiness Guarantee</span>
              </div>
              <p className="text-[11px] text-[#52796F] leading-relaxed">
                If you don't fall completely in love with your first case, reach out within 30 days and we'll refund every single penny. No questions asked.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Simulated Shop Pay 1-Click Modal */}
      {showShopPayModal && (
        <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-5 shadow-2xl border border-[#DDD2C0]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-lg font-black text-[#5A31F4]">shop pay</span>
              <button onClick={() => setShowShopPayModal(false)} className="text-gray-400 hover:text-black">
                <X size={18} />
              </button>
            </div>
            <div className="text-center space-y-2">
              <h4 className="font-serif text-lg font-bold text-gray-900">
                Verify with Shop Pay
              </h4>
              <p className="text-xs text-gray-500">
                A 6-digit code was sent to <strong>(555) ***-9012</strong>.
              </p>
            </div>
            <input
              type="text"
              placeholder="1 2 3 4 5 6"
              maxLength={6}
              value={shopPayCode}
              onChange={(e) => setShopPayCode(e.target.value)}
              className="w-full text-center tracking-widest text-xl font-bold py-3 border-2 border-[#5A31F4] rounded-2xl focus:outline-none"
              autoFocus
            />
            <button
              onClick={handleCompleteShopPay}
              className="w-full py-3.5 bg-[#5A31F4] hover:bg-[#4C28D6] text-white font-bold text-xs rounded-xl transition-colors shadow"
            >
              Verify & Complete Purchase · ${totalAmount.toFixed(2)}
            </button>
          </div>
        </div>
      )}

      {/* Modal de Nota de Venta / Orden de Pago Oficial */}
      <NotaDeVentaModal
        isOpen={showNotaDeVenta}
        onClose={() => setShowNotaDeVenta(false)}
        items={items}
        customer={customer}
        subtotal={subtotal}
        discount={discountAmount}
        shipping={shippingAmount}
        tax={taxAmount}
        total={totalAmount}
        onMarkAsPaid={handleCompleteViaNota}
      />
    </div>
  );
};
