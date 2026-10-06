import { Flavor, Review, RetailStore } from '../types';

export const FLAVORS_DATA: Flavor[] = [
  {
    id: 'vintage-cola',
    slug: 'vintage-cola',
    name: 'Vintage Cola',
    tagline: 'Warm spice, real vanilla, and pure nostalgic kola flavor.',
    description: 'A modern take on classic American cola. Old-fashioned spices blend with real vanilla bean and authentic kola nut extract for that rich, satisfying cola taste without 39 grams of sugar.',
    flavorNotes: ['Kola Nut', 'Bourbon Vanilla', 'Cinnamon Bark', 'Nutmeg'],
    canColor: '#8C1D26', // Deep classic cola crimson
    accentColor: '#F7C844', // Warm gold
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 35,
    fiber: 9,
    sugar: 2,
    netCarbs: 2,
    isBestSeller: true,
    category: 'classics',
    rating: 4.9,
    reviewsCount: 14230,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Cassava Root Syrup',
      'Apple Juice Concentrate',
      'Lime Juice',
      'Organic Natural Cola Flavor',
      'Alpha Galangal Root',
      'Green Tea Caffeine (50mg)',
      'Himalayan Pink Salt',
      'Stevia Leaf Extract'
    ],
    nutritionFacts: {
      calories: 35,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '2g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'strawberry-vanilla',
    slug: 'strawberry-vanilla',
    name: 'Strawberry Vanilla',
    tagline: 'Sun-ripened summer strawberries swirled with smooth vanilla cream.',
    description: 'A sweet dessert in a sparkling can. Ripe strawberry purée meets Madagascar vanilla for a creamy, refreshing treat that tastes just like strawberry shortcake.',
    flavorNotes: ['Ripe Strawberry', 'Vanilla Bean', 'Creamy Finish', 'Lemon Zing'],
    canColor: '#D7385E', // Berry pink
    accentColor: '#FDF1D6', // Cream
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 3,
    netCarbs: 3,
    isBestSeller: true,
    category: 'fruity',
    rating: 4.9,
    reviewsCount: 18450,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Strawberry Juice Concentrate',
      'Cassava Root Syrup',
      'Lemon Juice Concentrate',
      'Natural Strawberry Flavor',
      'Vanilla Extract',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '3g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'classic-root-beer',
    slug: 'classic-root-beer',
    name: 'Classic Root Beer',
    tagline: 'Rich wintergreen, sweet birch, and toasted marshmallow notes.',
    description: 'Our botanically brewed root beer hits every nostalgic chord with rich sassafras notes, sweet birch bark, burdock root, and real vanilla bean.',
    flavorNotes: ['Sweet Birch', 'Wintergreen', 'Burdock Root', 'Vanilla'],
    canColor: '#4A2511', // Deep dark root beer brown
    accentColor: '#E8A349', // Warm amber
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 35,
    fiber: 9,
    sugar: 2,
    netCarbs: 2,
    isBestSeller: true,
    category: 'classics',
    rating: 4.9,
    reviewsCount: 12900,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Cassava Root Syrup',
      'Apple Juice Concentrate',
      'Organic Natural Root Beer Flavor',
      'Burdock Root Extract',
      'Birch Bark Oil',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 35,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '2g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'orange-squeeze',
    slug: 'orange-squeeze',
    name: 'Orange Squeeze',
    tagline: 'Juicy Clementine and Mandarin citrus burst with sunny fizz.',
    description: 'Like peeling a sweet, sun-drenched clementine on a summer morning. Made with real Mandarin and Clementine orange juices for a crisp, tangy, refreshing lift.',
    flavorNotes: ['Clementine', 'Mandarin Juice', 'Meyer Lemon', 'Sweet Citrus'],
    canColor: '#E65A28', // Radiant orange
    accentColor: '#FFF275', // Citrus yellow
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 45,
    fiber: 9,
    sugar: 5,
    netCarbs: 4,
    isBestSeller: true,
    category: 'fruity',
    rating: 4.8,
    reviewsCount: 11200,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Clementine Juice Concentrate',
      'Mandarin Juice Concentrate',
      'Apple Juice',
      'Lemon Juice',
      'Natural Orange Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 45,
      totalFat: '0g',
      sodium: '35mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '5g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'lemon-lime',
    slug: 'lemon-lime',
    name: 'Lemon Lime',
    tagline: 'Bright, crisp, and bubbly with freshly squeezed citrus zest.',
    description: 'Clean, effervescent, and electric. A blend of real Key lime and tart California lemon juice that quenches thirst like no soda before it.',
    flavorNotes: ['Key Lime', 'Eureka Lemon', 'Lime Zest', 'Crisp Sparkle'],
    canColor: '#7DBA28', // Bright lime green
    accentColor: '#FFF45C', // Lemon yellow
    textColor: '#183B2B',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 4,
    netCarbs: 3,
    category: 'classics',
    rating: 4.8,
    reviewsCount: 9400,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Lemon Juice Concentrate',
      'Key Lime Juice Concentrate',
      'Apple Juice Concentrate',
      'Natural Citrus Extracts',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'crisp-apple',
    slug: 'crisp-apple',
    name: 'Crisp Apple',
    tagline: 'Biting into a cold Honeycrisp apple plucked straight from the orchard.',
    description: 'Bright and juicy Honeycrisp apple taste with just the right touch of tartness. Light, sparkling, and infinitely refreshing.',
    flavorNotes: ['Honeycrisp Apple', 'Autumn Cider', 'Tart Green Skin', 'Clean Fizz'],
    canColor: '#2C8C4E', // Crisp orchard green
    accentColor: '#F7E752', // Apple gold
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 4,
    netCarbs: 3,
    category: 'fruity',
    rating: 4.9,
    reviewsCount: 8850,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Honeycrisp Apple Juice Concentrate',
      'Cassava Root Syrup',
      'Lemon Juice',
      'Natural Apple Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'cherry-cola',
    slug: 'cherry-cola',
    name: 'Cherry Cola',
    tagline: 'Dark tart cherries kissed by spiced cola effervescence.',
    description: 'Rich Bing cherries meet our spiced botanical cola base. It has that authentic soda fountain cherry-kick with just 2 grams of sugar.',
    flavorNotes: ['Bing Cherries', 'Spiced Kola', 'Vanilla Bean', 'Tart Cherry'],
    canColor: '#6B1724', // Deep cherry maroon
    accentColor: '#F08A9B', // Cherry blossom pink
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 35,
    fiber: 9,
    sugar: 2,
    netCarbs: 2,
    isBestSeller: true,
    category: 'classics',
    rating: 4.9,
    reviewsCount: 15300,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Tart Cherry Juice Concentrate',
      'Cassava Root Syrup',
      'Organic Natural Cola Flavor',
      'Green Tea Caffeine (50mg)',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 35,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '2g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'tropical-punch',
    slug: 'tropical-punch',
    name: 'Tropical Punch',
    tagline: 'Island paradise in a can with passionfruit, pineapple, and guava.',
    description: 'Sun-kissed pineapple, tangy passion fruit, and luscious pink guava come together in a vibrant, nostalgia-packed Hawaiian fruit punch revival.',
    flavorNotes: ['Passionfruit', 'Golden Pineapple', 'Pink Guava', 'Mandarin'],
    canColor: '#E84A5F', // Tropical coral
    accentColor: '#FFD369', // Golden mango
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 3,
    netCarbs: 3,
    category: 'fruity',
    rating: 4.8,
    reviewsCount: 7600,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Pineapple Juice Concentrate',
      'Passionfruit Juice Concentrate',
      'Guava Puree',
      'Natural Tropical Flavors',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '3g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'banana-cream',
    slug: 'banana-cream',
    name: 'Banana Cream',
    tagline: 'Silky banana pudding and sweet vanilla whip nostalgia.',
    description: 'Sweet, comforting, and wonderfully unexpected. Real banana purée combines with velvety Madagascar vanilla for a creamy soda parlor dream.',
    flavorNotes: ['Ripe Banana', 'Sweet Custard', 'Vanilla Whip', 'Pastry Crust'],
    canColor: '#E6B800', // Warm custard yellow
    accentColor: '#FFF8DC', // Cream
    textColor: '#183B2B',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 45,
    fiber: 9,
    sugar: 4,
    netCarbs: 4,
    category: 'modern',
    rating: 4.7,
    reviewsCount: 6200,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Banana Puree',
      'Cassava Root Syrup',
      'Lemon Juice',
      'Natural Banana & Cream Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 45,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'doctor-goodwin',
    slug: 'doctor-goodwin',
    name: 'Doctor Goodwin',
    tagline: 'Bold blackberries, prunes, tart cherries, and savory spice blend.',
    description: 'Our cheeky tribute to Dr. Pepper lovers. Crafted with dark berries, French prunes, and 12 proprietary botanicals for a deep, complex, spicy fizz.',
    flavorNotes: ['Blackberry', 'Prune', 'Tart Cherry', 'Allspice'],
    canColor: '#4E1A3D', // Deep plum wine
    accentColor: '#E29755', // Spiced copper
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 35,
    fiber: 9,
    sugar: 3,
    netCarbs: 3,
    isBestSeller: true,
    category: 'classics',
    rating: 4.9,
    reviewsCount: 16800,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Blackberry Juice Concentrate',
      'Prune Juice Concentrate',
      'Natural Botanical Spice Extracts',
      'Green Tea Caffeine (50mg)',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 35,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '3g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'watermelon-lime',
    slug: 'watermelon-lime',
    name: 'Watermelon Lime',
    tagline: 'Chilled summer watermelon with a sharp, lip-smacking lime twist.',
    description: 'Bursting with crisp watermelon sweetness and finished with cold-pressed Key lime zest. It feels like an endless sunny beach vacation.',
    flavorNotes: ['Crisp Watermelon', 'Key Lime', 'Melon Rind', 'Refreshing Fizz'],
    canColor: '#E35D6A', // Watermelon pink
    accentColor: '#8AC926', // Bright lime
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 4,
    netCarbs: 3,
    category: 'fruity',
    rating: 4.8,
    reviewsCount: 8900,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Watermelon Juice Concentrate',
      'Key Lime Juice',
      'Natural Watermelon Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'ginger-ale',
    slug: 'ginger-ale',
    name: 'Ginger Ale',
    tagline: 'Warm ginger heat with fresh lime juice and apple cider sweetness.',
    description: 'Real ginger root extract delivers an authentic gentle bite balanced by subtle apple cider sweetness and clean lime bubbles to settle the stomach.',
    flavorNotes: ['Fresh Ginger Root', 'Apple Cider', 'Lime Juice', 'Gentle Heat'],
    canColor: '#C49A45', // Warm antique gold
    accentColor: '#F5E6BE', // Wheat cream
    textColor: '#183B2B',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 35,
    fiber: 9,
    sugar: 3,
    netCarbs: 3,
    category: 'classics',
    rating: 4.8,
    reviewsCount: 7100,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Ginger Root Extract',
      'Apple Juice Concentrate',
      'Lime Juice',
      'Natural Ginger Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 35,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '3g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'ridge-rush',
    slug: 'ridge-rush',
    name: 'Ridge Rush',
    tagline: 'Electrifying mountain citrus soda with clean green tea caffeine.',
    description: 'Our tribute to extreme mountain citrus soda. A powerhouse rush of lemon, lime, and orange paired with 50mg of clean caffeine from green tea.',
    flavorNotes: ['Mountain Citrus', 'Orange Tangerine', 'Green Tea Caffeine', 'Electric Fizz'],
    canColor: '#107E3D', // Electric racing pine
    accentColor: '#A3E635', // Neon lime
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 4,
    netCarbs: 3,
    isNew: true,
    category: 'modern',
    rating: 4.9,
    reviewsCount: 5200,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Lemon & Lime Juices',
      'Orange Juice Concentrate',
      'Green Tea Caffeine (50mg)',
      'Natural Citrus Extracts',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'cream-soda',
    slug: 'cream-soda',
    name: 'Cream Soda',
    tagline: 'Velvety vanilla bourbon froth and decadent sweet cream.',
    description: 'An old-fashioned soda shop masterpiece. Rich Tahitian vanilla and subtle burnt sugar notes blend into a smooth, frothy, guilt-free pour.',
    flavorNotes: ['Tahitian Vanilla', 'Bourbon Froth', 'Caramelized Sugar', 'Silky Bubbles'],
    canColor: '#D49D42', // Warm butterscotch
    accentColor: '#FFFDD0', // Cream
    textColor: '#183B2B',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 3,
    netCarbs: 3,
    category: 'classics',
    rating: 4.8,
    reviewsCount: 6900,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Cassava Root Syrup',
      'Bourbon Vanilla Bean Extract',
      'Natural Cream Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '3g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'classic-grape',
    slug: 'classic-grape',
    name: 'Classic Grape',
    tagline: 'Sweet Concord grape orchard nostalgia without purple dye.',
    description: 'Remember classic purple grape soda from childhood? We remade it with real tart Concord grape juice, lime, and plant fiber—with zero artificial dyes.',
    flavorNotes: ['Concord Grapes', 'Vine Ripened', 'Lime Twist', 'Juicy Fizz'],
    canColor: '#582C6A', // Concord grape purple
    accentColor: '#93C5FD', // Ice blue
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 45,
    fiber: 9,
    sugar: 4,
    netCarbs: 4,
    category: 'fruity',
    rating: 4.8,
    reviewsCount: 8100,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Concord Grape Juice Concentrate',
      'Tartaric Acid',
      'Natural Grape Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 45,
      totalFat: '0g',
      sodium: '25mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'peaches-and-cream',
    slug: 'peaches-and-cream',
    name: 'Peaches & Cream',
    tagline: 'Juicy Georgia peaches swirled with sweet whipped cream.',
    description: 'Sweet, velvety, and sun-drenched. Fresh yellow peach purée combined with comforting vanilla bean for a refreshing soda with southern charm.',
    flavorNotes: ['Georgia Peach', 'Sweet Cream', 'Meyer Lemon', 'Ripe Stonefruit'],
    canColor: '#E67E51', // Warm peach terracotta
    accentColor: '#FEF08A', // Butter yellow
    textColor: '#FFFFFF',
    price: 35.99,
    subscriptionPrice: 30.59,
    singlePrice: 3.29,
    calories: 40,
    fiber: 9,
    sugar: 4,
    netCarbs: 3,
    isNew: true,
    category: 'fruity',
    rating: 4.9,
    reviewsCount: 4800,
    ingredients: [
      'Carbonated Water',
      'OLISMART® (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)',
      'Yellow Peach Puree',
      'Lemon Juice',
      'Natural Peach & Vanilla Cream Flavor',
      'Himalayan Pink Salt',
      'Stevia Leaf'
    ],
    nutritionFacts: {
      calories: 40,
      totalFat: '0g',
      sodium: '30mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  // VARIETY PACKS
  {
    id: 'the-sampler-variety-pack',
    slug: 'the-sampler-variety-pack',
    name: 'The Sampler (6 Best Sellers)',
    tagline: 'Can’t decide? Taste all our highest rated crowd favorites.',
    description: 'Includes 2 cans each of Vintage Cola, Strawberry Vanilla, Classic Root Beer, Orange Squeeze, Crisp Apple, and Doctor Goodwin. The ultimate introduction to a new kind of soda.',
    flavorNotes: ['Vintage Cola', 'Strawberry Vanilla', 'Classic Root Beer', 'Orange Squeeze', 'Crisp Apple', 'Doctor Goodwin'],
    canColor: '#183B2B', // Deep forest green
    accentColor: '#FBBF24', // Sun yellow
    textColor: '#FFFFFF',
    price: 37.99,
    subscriptionPrice: 32.29,
    singlePrice: 3.16,
    calories: 38,
    fiber: 9,
    sugar: 3,
    netCarbs: 3,
    isBestSeller: true,
    isVarietyPack: true,
    varietyPackFlavors: ['vintage-cola', 'strawberry-vanilla', 'classic-root-beer', 'orange-squeeze', 'crisp-apple', 'doctor-goodwin'],
    category: 'variety',
    rating: 5.0,
    reviewsCount: 28400,
    ingredients: [
      'Includes an assorted 12-pack of our 6 best-selling prebiotic soda flavors. Each can packed with 9g plant fiber and OLISMART® digestive support.'
    ],
    nutritionFacts: {
      calories: 38,
      totalFat: '0g',
      sodium: '28mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '3g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'soda-fountain-favorites-pack',
    slug: 'soda-fountain-favorites-pack',
    name: 'Soda Fountain Favorites Pack',
    tagline: 'All the nostalgic classics you grew up drinking, remastered.',
    description: '3 cans each of Vintage Cola, Classic Root Beer, Cream Soda, and Doctor Goodwin. Everything you love about diner soda fountains, minus the sugar crashes.',
    flavorNotes: ['Vintage Cola', 'Classic Root Beer', 'Cream Soda', 'Doctor Goodwin'],
    canColor: '#8C1D26', // Classic diner red
    accentColor: '#E8A349', // Diner amber
    textColor: '#FFFFFF',
    price: 37.99,
    subscriptionPrice: 32.29,
    singlePrice: 3.16,
    calories: 37,
    fiber: 9,
    sugar: 2,
    netCarbs: 2,
    isVarietyPack: true,
    varietyPackFlavors: ['vintage-cola', 'classic-root-beer', 'cream-soda', 'doctor-goodwin'],
    category: 'variety',
    rating: 4.9,
    reviewsCount: 19100,
    ingredients: [
      'Assorted 12-pack featuring our nostalgic fountain sodas brewed with prebiotics, botanical extracts, and real Madagascar vanilla.'
    ],
    nutritionFacts: {
      calories: 37,
      totalFat: '0g',
      sodium: '27mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '2g',
      addedSugars: '0g',
      protein: '0g'
    }
  },
  {
    id: 'fruity-favorites-pack',
    slug: 'fruity-favorites-pack',
    name: 'Fruity Favorites 12-Pack',
    tagline: 'Sunny, juicy, thirst-quenching real fruit soda bliss.',
    description: '3 cans each of Strawberry Vanilla, Orange Squeeze, Crisp Apple, and Watermelon Lime. Made with real cold-pressed juices and sparkling prebiotic bubbles.',
    flavorNotes: ['Strawberry Vanilla', 'Orange Squeeze', 'Crisp Apple', 'Watermelon Lime'],
    canColor: '#E65A28', // Radiant citrus coral
    accentColor: '#7DBA28', // Lime
    textColor: '#FFFFFF',
    price: 37.99,
    subscriptionPrice: 32.29,
    singlePrice: 3.16,
    calories: 42,
    fiber: 9,
    sugar: 4,
    netCarbs: 3,
    isVarietyPack: true,
    varietyPackFlavors: ['strawberry-vanilla', 'orange-squeeze', 'crisp-apple', 'watermelon-lime'],
    category: 'variety',
    rating: 4.9,
    reviewsCount: 16750,
    ingredients: [
      'Assorted 12-pack loaded with cold-pressed real fruit juices and 9g soluble fiber to support everyday digestive wellness.'
    ],
    nutritionFacts: {
      calories: 42,
      totalFat: '0g',
      sodium: '31mg',
      totalCarb: '16g',
      dietaryFiber: '9g',
      totalSugars: '4g',
      addedSugars: '0g',
      protein: '0g'
    }
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    city: 'Austin',
    state: 'TX',
    rating: 5,
    date: '2 days ago',
    flavorName: 'Vintage Cola',
    title: 'I never thought a healthy soda could taste this good!',
    comment: 'I drank Diet Coke for 15 years and always felt awful afterward. Vintage Cola blew my mind—it has that authentic spiced cola bite with only 2g of sugar! My gut feels completely transformed.',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    author: 'David L.',
    city: 'Seattle',
    state: 'WA',
    rating: 5,
    date: '4 days ago',
    flavorName: 'Strawberry Vanilla',
    title: 'Literally tastes like dessert in a can.',
    comment: 'The strawberry vanilla flavor is like a dreamy strawberry shortcake with cream. It has 9 grams of plant fiber which easily helps me hit my daily goal without taking weird chalky supplements.',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    author: 'Chloe G.',
    city: 'Chicago',
    state: 'IL',
    rating: 5,
    date: '1 week ago',
    flavorName: 'Classic Root Beer',
    title: 'Better than A&W, hands down.',
    comment: 'The birch bark and wintergreen notes are so deep and authentic. Put this in a frosty glass with a scoop of coconut vanilla gelato and you have the best root beer float on planet earth.',
    verifiedBuyer: true
  },
  {
    id: 'rev-4',
    author: 'Marcus B.',
    city: 'Denver',
    state: 'CO',
    rating: 5,
    date: '1 week ago',
    flavorName: 'Doctor Goodwin',
    title: 'The dark berry spices are perfection.',
    comment: 'If you love Dr. Pepper, you will fall in love with Doctor Goodwin. Dark blackberries, prune sweetness, and subtle herbs. We have a monthly subscription now so our fridge is never empty.',
    verifiedBuyer: true
  },
  {
    id: 'rev-5',
    author: 'Elena R.',
    city: 'Miami',
    state: 'FL',
    rating: 5,
    date: '2 weeks ago',
    flavorName: 'The Sampler (6 Best Sellers)',
    title: 'Every single guest asks where I got these!',
    comment: 'Stocked the fridge for a weekend party and all 12 cans vanished in 2 hours. Everyone was stunned that there is NO stevia aftertaste and only 35 calories per can.',
    verifiedBuyer: true
  }
];

export const STORES_DATA: RetailStore[] = [
  {
    id: 'store-1',
    name: 'Whole Foods Market',
    chain: 'Whole Foods',
    address: '525 N Lamar Blvd',
    city: 'Austin',
    state: 'TX',
    zip: '78703',
    distance: '0.8 miles away',
    phone: '(512) 476-1206',
    inStockFlavors: ['Vintage Cola', 'Strawberry Vanilla', 'Classic Root Beer', 'Orange Squeeze', 'Crisp Apple']
  },
  {
    id: 'store-2',
    name: 'Target - Downtown',
    chain: 'Target',
    address: '865 E 41st St',
    city: 'Austin',
    state: 'TX',
    zip: '78751',
    distance: '2.4 miles away',
    phone: '(512) 459-4211',
    inStockFlavors: ['Vintage Cola', 'Strawberry Vanilla', 'Cherry Cola', 'Doctor Goodwin', 'The Sampler']
  },
  {
    id: 'store-3',
    name: 'Sprouts Farmers Market',
    chain: 'Sprouts',
    address: '4001 S Lamar Blvd',
    city: 'Austin',
    state: 'TX',
    zip: '78704',
    distance: '3.1 miles away',
    phone: '(512) 448-0056',
    inStockFlavors: ['Lemon Lime', 'Orange Squeeze', 'Ridge Rush', 'Ginger Ale', 'Banana Cream']
  },
  {
    id: 'store-4',
    name: 'Kroger Fresh Fare',
    chain: 'Kroger',
    address: '1420 W 5th St',
    city: 'Austin',
    state: 'TX',
    zip: '78703',
    distance: '1.5 miles away',
    phone: '(512) 478-8921',
    inStockFlavors: ['Vintage Cola', 'Classic Root Beer', 'Cream Soda', 'Strawberry Vanilla']
  }
];
