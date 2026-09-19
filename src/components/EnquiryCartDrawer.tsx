import React from 'react';
import { DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/products';
import { CartItem } from '../types';

interface EnquiryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const EnquiryCartDrawer: React.FC<EnquiryCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalEstimate = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const generateWhatsappMessage = () => {
    let msg = `Hi Gears & Spares, I would like to place an inquiry / order for the following items from your Kolkata Store:\n\n`;
    cart.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name}\n`;
      msg += `   • Brand: ${item.product.brand}\n`;
      if (item.selectedSize) msg += `   • Size/Spec: ${item.selectedSize}\n`;
      if (item.selectedColor) msg += `   • Color: ${item.selectedColor}\n`;
      msg += `   • Qty: ${item.quantity} x ₹${item.product.price} = ₹${item.quantity * item.product.price}\n\n`;
    });
    msg += `Total Estimated Value: ₹${totalEstimate.toLocaleString('en-IN')}\n\n`;
    msg += `Please confirm stock availability and Kolkata delivery / store pickup.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white border-l border-gray-200 h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-red-600">shopping_cart</span>
            <h2 className="font-['Chivo'] font-bold text-lg text-gray-900 uppercase tracking-wide">
              Store Inquiry List ({cart.reduce((a, b) => a + b.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center px-4">
              <span className="material-symbols-outlined text-gray-300 text-[48px] mb-2">
                remove_shopping_cart
              </span>
              <p className="font-['Space_Grotesk'] font-bold text-gray-900 text-sm">
                Your store inquiry list is empty
              </p>
              <p className="font-['Space_Grotesk'] text-xs text-gray-500 mt-1 max-w-xs">
                Browse our helmets, Motul oils, and genuine spares and click "Add to Inquiry" or enquire directly on WhatsApp.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between px-1 text-xs text-gray-500">
                <span>Selected Items</span>
                <button
                  onClick={onClearCart}
                  className="text-red-600 hover:underline font-bold"
                >
                  Clear All
                </button>
              </div>

              {cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${idx}`}
                  className="bg-gray-50 p-3 rounded border border-gray-200 flex gap-3 items-center shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain bg-white border border-gray-200 rounded p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Chivo'] font-bold text-sm text-gray-900 truncate">
                      {item.product.name}
                    </h3>
                    <div className="text-[11px] text-gray-500 flex items-center gap-1.5 mt-0.5">
                      <span>{item.product.brand}</span>
                      {item.selectedSize && <span>• {item.selectedSize}</span>}
                      {item.selectedColor && <span>• {item.selectedColor}</span>}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-['Space_Grotesk'] font-bold text-sm text-gray-900">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white border border-gray-300 rounded px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-xs text-gray-700 hover:bg-gray-100 rounded"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-gray-900 px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-xs text-gray-700 hover:bg-gray-100 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="text-gray-400 hover:text-red-600 p-1 self-start"
                    title="Remove item"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer with WhatsApp Action */}
        {cart.length > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-gray-500">
                Estimated Total:
              </span>
              <span className="font-['Chivo'] font-black text-2xl text-gray-900">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsappMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#00a74c] hover:bg-[#15803d] text-white rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Send Complete Order to WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[10px] text-gray-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
                Original ISI / OEM Certified
              </span>
              <span>Fast Hotline: {DISPLAY_PHONE}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
