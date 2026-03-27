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

// Placeholder images - Using reliable Picsum photos
export const PLACEHOLDER_IMAGES = {
  hero: 'https://picsum.photos/id/1043/1920/1080',
  about: 'https://picsum.photos/id/1047/1920/1080',
  gallery: [
    'https://picsum.photos/id/1015/600/800',
    'https://picsum.photos/id/1018/600/800',
    'https://picsum.photos/id/1019/600/800',
    'https://picsum.photos/id/1022/600/800',
    'https://picsum.photos/id/1025/600/800',
    'https://picsum.photos/id/1029/600/800',
    'https://picsum.photos/id/1035/600/800',
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
