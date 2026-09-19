export type ProductCategory =
  | 'all'
  | 'aerostar'
  | 'steelbird-flip'
  | 'ignyte'
  | 'vega'
  | 'steelbird-open'
  | 'steelbird-vintage'
  | 'steelbird-drx'
  | 'steelbird-full'
  | 'studds'
  | 'lubricants'
  | 'spares'
  | 'riding-gear';

export type NavTab = 'home' | 'helmets' | 'engine-oils' | 'bike-spares' | 'riding-gear' | 'store-info';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  secondaryCategories: string[];
  brand: string;
  type: string;
  badge: string;
  badgeType?: 'best-seller' | 'hot-pick' | 'popular' | 'vintage' | 'dual-visor' | 'budget' | 'genuine' | 'endurance' | 'ignition' | 'dot';
  certBadge: string;
  inStock: boolean;
  stockCount?: number;
  description: string;
  features: string[];
  price: number;
  originalPrice?: number;
  priceDisplay?: string;
  savingsBadge?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  sizes?: string[];
  colors?: { name: string; hex?: string }[];
  bikeCompatibility?: string[];
  specifications?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}
