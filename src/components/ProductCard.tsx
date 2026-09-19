import React from 'react';
import { WHATSAPP_NUMBER } from '../data/products';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const whatsappText = encodeURIComponent(
    `Hi Gears & Spares, I am interested in ${product.name} (${product.brand} - ₹${product.price}). Please share live availability and fitment advice.`
  );

  return (
    <article
      id={`product-card-${product.id}`}
      className="product-card flex flex-col bg-white rounded border border-gray-200 overflow-hidden shadow-xs transition-all duration-200 hover:shadow-md hover:border-gray-300 group"
    >
      {/* Product Image Stage */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative w-full h-64 bg-[#f8f9fb] flex items-center justify-center p-3 overflow-hidden cursor-pointer"
      >
        {/* Top Badges */}
        <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-red-600 text-white font-['Space_Grotesk'] text-[10px] uppercase font-bold tracking-wider rounded shadow-2xs">
          {product.badge}
        </span>

        <span className="absolute top-2 right-2 z-10 px-2 py-0.5 bg-white text-gray-900 font-['Space_Grotesk'] text-[10px] uppercase font-bold tracking-wider rounded border border-gray-300 shadow-2xs">
          {product.certBadge}
        </span>

        {/* Hotlinked Image */}
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Quick View Hover Cue */}
        <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="bg-white/95 text-gray-900 border border-gray-200 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1.5 shadow-md">
            <span className="material-symbols-outlined text-[16px] text-red-600">visibility</span>
            Quick Specs
          </span>
        </div>
      </div>

      {/* Product Card Details */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-['Space_Grotesk'] text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
              {product.brand} • {product.type}
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-emerald-700 font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              In Stock
            </span>
          </div>

          <h2 
            onClick={() => onQuickView(product)}
            className="font-['Chivo'] font-bold text-lg text-gray-900 leading-snug cursor-pointer hover:text-red-600 transition-colors"
          >
            {product.name}
          </h2>

          <p className="font-['Space_Grotesk'] text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Size or Spec Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 border border-gray-200 px-2 py-0.5 font-['Space_Grotesk'] text-[10px] text-gray-700 rounded font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing and WhatsApp Action */}
        <div className="pt-2 flex flex-col gap-2.5 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="font-['Chivo'] font-bold text-xl sm:text-2xl text-gray-900">
                {product.priceDisplay ? product.priceDisplay : `₹${product.price.toLocaleString('en-IN')}`}
              </span>
              {product.originalPrice && (
                <span className="font-['Space_Grotesk'] text-xs text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.savingsBadge && (
              <span className="font-['Space_Grotesk'] text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded tracking-wider">
                {product.savingsBadge}
              </span>
            )}
          </div>

          <div className="grid grid-cols-12 gap-1.5">
            <a
              id={`whatsapp-enquire-btn-${product.id}`}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-9 inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#00a74c] hover:bg-[#15803d] text-white rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="truncate">Enquire on WhatsApp</span>
            </a>

            <button
              onClick={() => onAddToCart(product)}
              id={`add-inquiry-btn-${product.id}`}
              className="col-span-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-['Space_Grotesk'] text-xs font-bold flex items-center justify-center border border-gray-300 transition-colors"
              title="Add to Inquiry List"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
