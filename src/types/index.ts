export type PurchaseType = 'one-time' | 'subscription';

export interface NutritionFacts {
  calories: number;
  totalFat: string;
  sodium: string;
  totalCarb: string;
  dietaryFiber: string;
  totalSugars: string;
  addedSugars: string;
  protein: string;
}

export interface Flavor {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  flavorNotes: string[];
  canColor: string; // Hex color of the can body
  accentColor: string; // Hex color for label accent
  textColor: string;
  price: number; // 12-pack price ($35.99)
  subscriptionPrice: number; // 15% off ($30.59)
  singlePrice: number; // Single can unit value ($3.29)
  calories: number;
  fiber: number; // grams of fiber
  sugar: number; // grams of sugar
  netCarbs: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isLimitedEdition?: boolean;
  isVarietyPack?: boolean;
  varietyPackFlavors?: string[];
  category: 'classics' | 'fruity' | 'variety' | 'modern';
  rating: number;
  reviewsCount: number;
  ingredients: string[];
  nutritionFacts: NutritionFacts;
}

export interface CartItem {
  id: string; // unique item id (flavorId + purchaseType)
  flavor: Flavor;
  quantity: number;
  purchaseType: PurchaseType;
  deliveryFrequency?: '2-weeks' | '4-weeks' | '8-weeks';
}

export interface Review {
  id: string;
  author: string;
  city: string;
  state: string;
  rating: number;
  date: string;
  flavorName: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
}

export interface RetailStore {
  id: string;
  name: string;
  chain: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  distance: string;
  phone: string;
  inStockFlavors: string[];
}

export type PaymentMethodType = 'shop_pay' | 'paypal' | 'apple_pay' | 'google_pay' | 'credit_card' | 'nota_de_venta';

export interface CheckoutCustomer {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface OrderConfirmation {
  orderNumber: string;
  date: string;
  customer: CheckoutCustomer;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  paymentMethod: PaymentMethodType;
  paymentLast4?: string;
  trackingNumber: string;
  estimatedDelivery: string;
}
