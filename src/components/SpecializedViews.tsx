import React from 'react';
import { 
  DISPLAY_PHONE, 
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_LINK, 
  STORE_ADDRESS, 
  STORE_HOURS_DISPLAY, 
  STORE_LANDMARK, 
  STORE_OPERATING_HOURS, 
  STORE_PIN, 
  WHATSAPP_NUMBER 
} from '../data/products';
import { NavTab, Product } from '../types';
import { ProductCard } from './ProductCard';

interface TabViewProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenSizing: () => void;
  onOpenVinModal: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export const HelmetsView: React.FC<TabViewProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onOpenSizing,
}) => {
  const helmetProducts = products.filter(
    (p) => p.secondaryCategories.includes('helmets') || p.type.toLowerCase().includes('face') || p.type.toLowerCase().includes('vintage')
  );

  return (
    <div className="w-full px-4 sm:px-8 py-8 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Helmet Category Banner */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-red-600 text-xs uppercase font-bold tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">sports_motorsports</span>
            <span>ISI:4151 &amp; DOT Certified Helmets</span>
          </div>
          <h1 className="font-['Chivo'] font-black text-2xl sm:text-3xl uppercase text-gray-900">
            High-Performance Two-Wheeler Helmets
          </h1>
          <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            Explore authentic Studds, Steelbird, Vega, and Ignyte headgear. Direct from manufacturer warehouses to our Kolkata store.
          </p>
        </div>

        <button
          onClick={onOpenSizing}
          className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 shadow-sm shrink-0 cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">straighten</span>
          <span>Free Head Sizing Tool</span>
        </button>
      </div>

      {/* Helmets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {helmetProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export const EngineOilsView: React.FC<TabViewProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onOpenVinModal,
}) => {
  const oilProducts = products.filter((p) => p.category === 'lubricants');

  return (
    <div className="w-full px-4 sm:px-8 py-8 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Engine Oils Banner */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs uppercase font-bold tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">water_drop</span>
            <span>100% Genuine Ester Synthetics</span>
          </div>
          <h1 className="font-['Chivo'] font-black text-2xl sm:text-3xl uppercase text-gray-900">
            Motorcycle Engine Oils &amp; Performance Lubricants
          </h1>
          <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            Guaranteed tamper-evident seals and laser QR authenticity. Factory fresh batches for optimum wet-clutch performance and high-heat protection.
          </p>
        </div>

        <button
          onClick={onOpenVinModal}
          className="px-4 py-2.5 bg-white hover:bg-gray-50 border border-emerald-600 text-emerald-700 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 shadow-2xs shrink-0 cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">two_wheeler</span>
          <span>Find Oil by Bike Model</span>
        </button>
      </div>

      {/* Oil Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {oilProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Authenticity Verification Box */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-emerald-600 text-[36px]">qr_code_scanner</span>
          <div>
            <h3 className="font-['Chivo'] font-bold text-base text-gray-900">
              100% Anti-Counterfeit Verification
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600">
              Every single bottle features Motul / Castrol genuine hologram and QR code you can scan directly on delivery.
            </p>
          </div>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20need%20engine%20oil%20for%20my%20bike.`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#00a74c] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded whitespace-nowrap shadow-xs transition-colors"
        >
          Ask Oil Recommendation on WhatsApp
        </a>
      </div>
    </div>
  );
};

export const BikeSparesView: React.FC<TabViewProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onOpenVinModal,
}) => {
  const sparesProducts = products.filter((p) => p.category === 'spares');

  return (
    <div className="w-full px-4 sm:px-8 py-8 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Bike Spares Banner */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-red-600 text-xs uppercase font-bold tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">build</span>
            <span>Genuine OEM Drive &amp; Ignition Parts</span>
          </div>
          <h1 className="font-['Chivo'] font-black text-2xl sm:text-3xl uppercase text-gray-900">
            Performance Bike Spares &amp; Drive Train
          </h1>
          <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            Rolon heavy-duty brass chains, NGK laser iridium spark plugs, and sintered racing brake pads tested on track and road.
          </p>
        </div>

        <button
          onClick={onOpenVinModal}
          className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 shadow-sm shrink-0 cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">search</span>
          <span>Match Exact Part by Bike Model</span>
        </button>
      </div>

      {/* Spares Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sparesProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export const RidingGearView: React.FC<TabViewProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onOpenSizing,
}) => {
  return (
    <div className="w-full px-4 sm:px-8 py-8 max-w-7xl mx-auto flex flex-col gap-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-2xs">
        <div className="flex items-center gap-2 text-red-600 text-xs uppercase font-bold tracking-wider mb-1">
          <span className="material-symbols-outlined text-[16px]">shield</span>
          <span>Rider Protection &amp; Gear</span>
        </div>
        <h1 className="font-['Chivo'] font-black text-2xl sm:text-3xl uppercase text-gray-900">
          Riding Gear &amp; Touring Essentials
        </h1>
        <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
          Complete your track and touring kit. In addition to certified helmets, our Kolkata store stocks touch-screen riding gloves, knee guards, helmet visors, anti-fog pinlock inserts, and waterproof luggage bungees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded bg-red-50 flex items-center justify-center text-red-600 mb-3">
              <span className="material-symbols-outlined text-[28px]">sports_handball</span>
            </div>
            <h3 className="font-['Chivo'] font-bold text-lg text-gray-900">
              All-Weather Riding Gloves
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 mt-2">
              Carbon knuckle protectors, perforated airflow palms, and touch-screen conductive index fingertips for GPS navigation.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20am%20looking%20for%20riding%20gloves.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-2 bg-[#00a74c] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded text-center shadow-xs transition-colors"
          >
            Enquire Glove Sizes on WhatsApp
          </a>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded bg-amber-50 flex items-center justify-center text-amber-600 mb-3">
              <span className="material-symbols-outlined text-[28px]">visibility</span>
            </div>
            <h3 className="font-['Chivo'] font-bold text-lg text-gray-900">
              Replacement Visors &amp; Spoilers
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 mt-2">
              Rainbow mirror, smoke tint, clear optical, and anti-fog pinlock visors for Studds, Steelbird, Vega &amp; Ignyte models.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20need%20a%20replacement%20visor%20for%20my%20helmet.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-2 bg-[#00a74c] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded text-center shadow-xs transition-colors"
          >
            Match Helmet Visor on WhatsApp
          </a>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
              <span className="material-symbols-outlined text-[28px]">cleaning_services</span>
            </div>
            <h3 className="font-['Chivo'] font-bold text-lg text-gray-900">
              Helmet Care &amp; Sanitizer Spray
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 mt-2">
              Antibacterial foaming interior foam wash, visor rain repellent spray, and micro-fiber drying cloths for crystal clear vision.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20need%20helmet%20care%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-2 bg-[#00a74c] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded text-center shadow-xs transition-colors"
          >
            Order Care Kit on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export const StoreInfoView: React.FC<TabViewProps> = ({ onOpenVinModal }) => {
  return (
    <div className="w-full px-4 sm:px-8 py-8 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Store Header */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-2xs">
        <div className="flex items-center gap-2 text-red-600 text-xs uppercase font-bold tracking-wider mb-1">
          <span className="material-symbols-outlined text-[16px]">storefront</span>
          <span>Kolkata Store &amp; Service Desk</span>
        </div>
        <h1 className="font-['Chivo'] font-black text-2xl sm:text-3xl uppercase text-gray-900">
          Store Location &amp; Mechanics Desk
        </h1>
        <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
          Visit our local walk-in shop in Thakurpukur, Kolkata. Experience full helmet trials with laser head measurement, direct chain slack inspection, and instant store collection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-gray-200 shadow-2xs flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Chivo'] font-bold text-xl text-gray-900">
              Walk-in Experience &amp; On-Site Services
            </h2>
            <ul className="text-xs text-gray-600 space-y-2 mt-2 font-['Space_Grotesk']">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0">check_circle</span>
                <span><strong>Laser Circumference Trial:</strong> Test fitments across all 570mm, 580mm, and 600mm shell dimensions before purchasing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0">check_circle</span>
                <span><strong>Chain Slack Inspection:</strong> Complimentary drive-chain tension check by our on-site track mechanics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0">check_circle</span>
                <span><strong>Instant Pickup:</strong> Save delivery waiting times by picking up reserved stock right from the store.</span>
              </li>
            </ul>

            {/* Address Banner Card */}
            <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded text-xs font-['Space_Grotesk'] text-gray-700 flex flex-col gap-1">
              <span className="font-bold text-gray-900 uppercase tracking-wider text-[10px]">Shop Address:</span>
              <span className="font-semibold text-gray-900">{STORE_ADDRESS}</span>
              <span className="text-gray-500 text-[11px]">Landmark: {STORE_LANDMARK} • PIN: {STORE_PIN}</span>
            </div>
          </div>

          {/* Interactive Google Map with exact Coordinates Pin */}
          <div className="w-full h-64 rounded-lg overflow-hidden relative shadow-inner border border-gray-200 bg-gray-100">
            <iframe
              title="Gears & Spares Kolkata Location Map"
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-2 right-2">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 border border-gray-200 px-3.5 py-1.5 rounded flex items-center gap-1.5 shadow-md hover:border-red-600 transition-colors cursor-pointer text-gray-900 font-['Space_Grotesk'] text-xs font-bold"
              >
                <span className="material-symbols-outlined text-red-600 text-[16px]">location_on</span>
                <span>Open in Google Maps (Get Directions)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-2xs flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-gray-500 uppercase tracking-wider">
              Operating Schedule
            </span>
            <div className="bg-white p-4 rounded border border-gray-200 shadow-2xs">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Open Every Day</span>
              <span className="font-['Chivo'] font-bold text-xl text-gray-900">Monday – Sunday</span>
              <span className="text-xs text-red-600 font-bold block mt-0.5">09:30 AM – 10:00 PM IST</span>
              <span className="text-[11px] text-gray-500 mt-1 block">No weekly off. Open on all 7 days.</span>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200 shadow-2xs">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Hotline &amp; WhatsApp Direct</span>
              <span className="font-['Chivo'] font-bold text-xl text-emerald-700">{DISPLAY_PHONE}</span>
              <span className="text-xs text-gray-500 block mt-0.5">Response time: &lt; 3 minutes on WhatsApp</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20am%20planning%20to%20visit%20your%20Kolkata%20store.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#00a74c] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Notify Mechanic Before Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
};
