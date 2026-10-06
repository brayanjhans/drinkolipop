/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ROUTING & ASSET PATH ADAPTER CONFIGURATION
 * 
 * This file centralizes all internal routes, external redirects, resource endpoints,
 * and asset paths for the OLIPOP application. When migrating to a custom domain,
 * a reverse proxy, or a Shopify/headless backend, modify the mappings in this file.
 */

// Primary application views for single-page client routing
export type AppView = 
  | 'home'
  | 'shop'
  | 'flavors'
  | 'variety-packs'
  | 'science'
  | 'story'
  | 'locator'
  | 'reviews'
  | 'quiz'
  | 'checkout'
  | 'confirmation';

// Internal route dictionary - adapted for SPA hash / pushState compatibility
export const INTERNAL_ROUTES = {
  home: '/',
  shop: '/#shop',
  flavors: '/#flavors',
  varietyPacks: '/#variety-packs',
  science: '/#science',
  digestiveHealth: '/#digestive-health',
  story: '/#story',
  ingredients: '/#ingredients',
  locator: '/#locator',
  reviews: '/#reviews',
  quiz: '/#quiz',
  cart: '/#cart',
  checkout: '/#checkout',
  account: '/#account',
  faq: '/#faq',
  privacy: '/#privacy',
  terms: '/#terms',
  accessibility: '/#accessibility',
} as const;

// External brand & official resource URLs (fallbacks & official social links)
export const EXTERNAL_LINKS = {
  officialSite: 'https://drinkolipop.com',
  instagram: 'https://instagram.com/drinkolipop',
  tiktok: 'https://tiktok.com/@drinkolipop',
  facebook: 'https://facebook.com/drinkolipop',
  twitter: 'https://twitter.com/drinkolipop',
  target: 'https://target.com',
  wholeFoods: 'https://wholefoodsmarket.com',
  kroger: 'https://kroger.com',
  walmart: 'https://walmart.com',
  sprouts: 'https://sprouts.com',
  bCorp: 'https://bcorporation.net',
  onePercentForPlanet: 'https://onepercentfortheplanet.org',
  supportEmail: 'mailto:hello@drinkolipop.com',
} as const;

/**
 * Route Adapter Function:
 * Resolves a given path or internal hash into safe in-app navigation or canonical external URL.
 */
export function resolveInternalRoute(routeKey: keyof typeof INTERNAL_ROUTES): string {
  return INTERNAL_ROUTES[routeKey] || '/';
}

/**
 * Asset Path Resolver:
 * Ensures all local assets, media, and SVGs are loaded from the proper CDN or relative path.
 */
export function resolveAssetPath(relativePath: string): string {
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    return relativePath;
  }
  const cleanPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  return cleanPath;
}
