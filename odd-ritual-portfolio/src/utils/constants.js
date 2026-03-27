// Application constants

export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  FEATURED: 'featured',
  COMMUNITY: 'community',
  GALLERY: 'gallery',
  PARTNERS: 'partners',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Community', href: '#community' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Partners', href: '#partners' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Placeholder images (to be replaced with actual images)
export const PLACEHOLDER_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
    'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80',
    'https://images.unsplash.com/photo-1593111774240-d529f12a3e64?w=800&q=80',
    'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80',
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
  ],
};

export const PARTNERS_DATA = [
  {
    id: 1,
    name: 'Partner One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Partner Two',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    id: 3,
    name: 'Partner Three',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  },
  {
    id: 4,
    name: 'Partner Four',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
];
