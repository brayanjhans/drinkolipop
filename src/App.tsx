/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FLAVORS_DATA, REVIEWS_DATA, STORES_DATA } from './data/flavors';
import { CartItem, Flavor, OrderConfirmation, PurchaseType, PaymentMethodType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ComparisonTable } from './components/ComparisonTable';
import { OurStorySection } from './components/OurStorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { FlavorQuizModal } from './components/FlavorQuizModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { Footer } from './components/Footer';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  // Cart State (Initialized with 1 case so the user immediately experiences the real cart mechanics)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'vintage-cola-subscription',
      flavor: FLAVORS_DATA[0], // Vintage Cola
      quantity: 1,
      purchaseType: 'subscription',
      deliveryFrequency: '4-weeks',
    },
    {
      id: 'strawberry-vanilla-subscription',
      flavor: FLAVORS_DATA[1], // Strawberry Vanilla
      quantity: 1,
      purchaseType: 'subscription',
      deliveryFrequency: '4-weeks',
    },
  ]);

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocatorOpen, setIsLocatorOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmation | null>(null);

  // Catalog Category & Search Filter
  const [catalogCategory, setCatalogCategory] = useState<string>('all');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [checkoutInitialPayment, setCheckoutInitialPayment] = useState<PaymentMethodType>('credit_card');

  // Temporary Toast Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add item to bag handler
  const handleAddToCart = (
    flavor: Flavor,
    purchaseType: PurchaseType = 'subscription',
    quantity: number = 1,
    frequency: '2-weeks' | '4-weeks' | '8-weeks' = '4-weeks'
  ) => {
    const itemId = `${flavor.id}-${purchaseType}`;
    setCartItems((prev) => {
      const existing = prev.find((it) => it.id === itemId);
      if (existing) {
        return prev.map((it) =>
          it.id === itemId ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          flavor,
          quantity,
          purchaseType,
          deliveryFrequency: purchaseType === 'subscription' ? frequency : undefined,
        },
      ];
    });

    showToast(`Added ${quantity}x ${flavor.name} 12-pack to your bag!`);
    setIsCartOpen(true);
  };

  // Update item quantity
  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, quantity: newQty } : it))
    );
  };

  // Remove item
  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== itemId));
  };

  // Upsell add
  const handleAddUpsell = (flavor: Flavor) => {
    handleAddToCart(flavor, 'subscription', 1);
  };

  // Proceed from Cart to Checkout
  const handleProceedToCheckout = (discountPercent: number = 0, isNotaDeVenta: boolean = false) => {
    setAppliedDiscount(discountPercent);
    setCheckoutInitialPayment(isNotaDeVenta ? 'nota_de_venta' : 'credit_card');
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Complete Order
  const handleOrderComplete = (order: OrderConfirmation) => {
    setCartItems([]); // Clear bag upon completed purchase
    setIsCheckoutOpen(false);
    setOrderConfirmation(order);
  };

  // Navigation handling
  const handleNavigate = (target: string) => {
    if (target.startsWith('search:')) {
      const query = target.replace('search:', '').toLowerCase();
      // Scroll to shop
      const shopEl = document.getElementById('shop');
      if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (target === 'shop' || target === 'best-sellers' || target === 'variety-packs') {
      if (target === 'best-sellers') setCatalogCategory('best-sellers');
      else if (target === 'variety-packs') setCatalogCategory('variety-packs');
      else setCatalogCategory('all');

      const el = document.getElementById('shop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'science' || target === 'ingredients') {
      const el = document.getElementById('science');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'story') {
      const el = document.getElementById('story');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'reviews') {
      const el = document.getElementById('reviews');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen to hash changes in browser
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        handleNavigate(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const totalCartUnits = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#183B2B]">
      
      {/* 1. Header Navigation */}
      <Navbar
        cartCount={totalCartUnits}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLocator={() => setIsLocatorOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Hero Section with Interactive Flavor Showcase */}
      <main className="flex-1">
        <Hero
          flavors={FLAVORS_DATA}
          onAddToCart={handleAddToCart}
          onSelectFlavor={(fl) => setSelectedFlavor(fl)}
          onExploreFlavors={() => handleNavigate('shop')}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3. Catalog Section with Filtering */}
        <ProductCatalog
          flavors={FLAVORS_DATA}
          onAddToCart={handleAddToCart}
          onSelectFlavor={(fl) => setSelectedFlavor(fl)}
          selectedCategory={catalogCategory}
          onCategoryChange={(cat) => setCatalogCategory(cat)}
        />

        {/* 4. Comparison Table (OLIPOP vs Traditional Soda) */}
        <ComparisonTable />

        {/* 5. Our Story & Microbiome Science Section */}
        <OurStorySection />

        {/* 6. Customer & Press Reviews Carousel */}
        <ReviewsSection reviews={REVIEWS_DATA} />
      </main>

      {/* 7. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLocator={() => setIsLocatorOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* MODAL 1: Product Detail & FDA Nutrition Panel */}
      <ProductDetailModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
        onAddToCart={handleAddToCart}
      />

      {/* MODAL 2: Interactive Store Locator */}
      <StoreLocatorModal
        isOpen={isLocatorOpen}
        onClose={() => setIsLocatorOpen(false)}
        stores={STORES_DATA}
      />

      {/* MODAL 3: 3-Step Soda Flavor Quiz */}
      <FlavorQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        flavors={FLAVORS_DATA}
        onAddToCart={handleAddToCart}
      />

      {/* DRAWER: Slide-Out Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
        onAddUpsell={handleAddUpsell}
        upsellFlavor={FLAVORS_DATA.find((f) => f.slug === 'orange-squeeze')}
      />

      {/* MODAL 4: Complete Secure Checkout with Express & Card Payments */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountPercent={appliedDiscount}
        initialPaymentMethod={checkoutInitialPayment}
        onOrderComplete={handleOrderComplete}
      />

      {/* MODAL 5: Order Confirmation & Receipt */}
      <OrderConfirmationModal
        order={orderConfirmation}
        onClose={() => setOrderConfirmation(null)}
      />

      {/* Floating Action Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-60 bg-[#183B2B] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold border border-[#FDE68A]/30 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center text-white">
            <Check size={13} />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
