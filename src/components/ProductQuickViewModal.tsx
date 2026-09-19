import React, { useState } from 'react';
import { DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/products';
import { Product } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onOpenSizing: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizing,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0].name : ''
  );
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Gears & Spares, I want to order/enquire about ${product.name} (Brand: ${product.brand}). Size: ${selectedSize || 'Standard'}, Color: ${selectedColor || 'Standard'}. Price: ₹${product.price}. Please confirm stock.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-white font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-wider rounded">
              {product.badge}
            </span>
            <span className="px-2 py-0.5 bg-white text-gray-800 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-wider rounded border border-gray-300 shadow-2xs">
              {product.certBadge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Image Stage */}
          <div className="md:col-span-6 flex flex-col items-center justify-center bg-[#f8f9fb] rounded border border-gray-200 p-4">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="max-h-72 w-full object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 flex items-center justify-between w-full text-xs text-gray-600 border-t border-gray-200 pt-3">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                100% Genuine Certified
              </span>
              <span className="flex items-center gap-1 text-red-600 font-bold">
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                Depot Ready Stock
              </span>
            </div>
          </div>

          {/* Right Column: Spec & Selection */}
          <div className="md:col-span-6 flex flex-col justify-between gap-4">
            <div>
              <span className="font-['Space_Grotesk'] text-xs text-gray-500 uppercase tracking-wider font-semibold">
                {product.brand} • {product.type}
              </span>
              <h2 className="font-['Chivo'] font-bold text-xl sm:text-2xl text-gray-900 mt-0.5">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-['Chivo'] font-bold text-2xl text-gray-900">
                  {product.priceDisplay ? product.priceDisplay : `₹${product.price.toLocaleString('en-IN')}`}
                </span>
                {product.originalPrice && (
                  <span className="font-['Space_Grotesk'] text-sm text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.savingsBadge && (
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {product.savingsBadge}
                  </span>
                )}
              </div>

              <p className="font-['Space_Grotesk'] text-xs text-gray-600 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Sizes Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-['Space_Grotesk'] text-xs text-gray-900 font-bold uppercase tracking-wider">
                      Select Size / Variant:
                    </span>
                    <button
                      onClick={onOpenSizing}
                      className="text-[11px] text-red-600 hover:underline flex items-center gap-1 font-bold"
                    >
                      <span className="material-symbols-outlined text-[14px]">straighten</span>
                      Sizing Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 rounded text-xs font-['Space_Grotesk'] font-bold transition-all ${
                          selectedSize === s
                            ? 'bg-red-600 text-white shadow-xs'
                            : 'bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <span className="font-['Space_Grotesk'] text-xs text-gray-900 font-bold uppercase tracking-wider block mb-1.5">
                    Select Color / Finish:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 rounded text-xs font-['Space_Grotesk'] flex items-center gap-1.5 transition-all ${
                          selectedColor === c.name
                            ? 'bg-red-50 border border-red-500 text-red-700 font-bold'
                            : 'bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {c.hex && (
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-gray-300 shadow-2xs"
                            style={{ backgroundColor: c.hex }}
                          />
                        )}
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              {product.specifications && (
                <div className="mt-4 bg-gray-50 p-3 rounded border border-gray-200">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase font-bold text-red-600 block mb-2 tracking-wider">
                    Technical Specifications
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase">{key}</span>
                        <span className="text-gray-900 font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#00a74c] hover:bg-[#15803d] text-white rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Confirm Availability on WhatsApp</span>
              </a>

              <button
                onClick={handleAdd}
                className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {addedFeedback ? 'done' : 'add_shopping_cart'}
                </span>
                <span>{addedFeedback ? 'Added to Inquiry List!' : 'Add to Inquiry List'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
