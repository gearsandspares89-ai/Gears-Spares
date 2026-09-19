import React, { useState } from 'react';
import { MOTORCYCLE_DATABASE, WHATSAPP_NUMBER } from '../data/products';
import { ProductCategory } from '../types';

interface VinLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterByCategory: (cat: ProductCategory) => void;
}

export const VinLookupModal: React.FC<VinLookupModalProps> = ({
  isOpen,
  onClose,
  onFilterByCategory,
}) => {
  const [selectedBike, setSelectedBike] = useState(MOTORCYCLE_DATABASE[0]);
  const [customVinText, setCustomVinText] = useState('');

  if (!isOpen) return null;

  const whatsappMsg = encodeURIComponent(
    customVinText.trim()
      ? `Hi Gears & Spares, I want to find genuine spares for my bike (VIN / Model: ${customVinText.trim()}). Please share compatible oil, chain sprocket, and helmet recommendations.`
      : `Hi Gears & Spares, I ride a ${selectedBike.make} ${selectedBike.model}. Please check stock for the recommended ${selectedBike.oil} and ${selectedBike.chain}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-red-600 text-[22px]">two_wheeler</span>
            <h2 className="font-['Chivo'] font-bold text-lg text-gray-900 uppercase tracking-wide">
              Bike Compatibility &amp; SPEC / VIN Lookup
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex flex-col gap-6">
          {/* Quick Bike Selector */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-gray-900 tracking-wider">
              Select Motorcycle Make &amp; Model:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MOTORCYCLE_DATABASE.map((bike) => (
                <button
                  key={`${bike.make}-${bike.model}`}
                  onClick={() => setSelectedBike(bike)}
                  className={`p-2 rounded text-left border transition-all flex flex-col ${
                    selectedBike.model === bike.model
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-[10px] text-gray-500 uppercase font-bold">{bike.make}</span>
                  <span className="font-['Space_Grotesk'] text-xs font-bold truncate">{bike.model}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compatibility Specs Card */}
          <div className="bg-white p-5 rounded border border-gray-200 shadow-2xs flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-['Chivo'] font-bold text-xl text-gray-900">
                {selectedBike.make} {selectedBike.model}
              </span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 font-['Space_Grotesk'] text-[10px] font-bold uppercase rounded border border-emerald-200">
                OEM Match Verified
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded border border-gray-200 flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-amber-600">water_drop</span>
                  Engine Oil
                </span>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-gray-900">
                  {selectedBike.oil}
                </span>
                <button
                  onClick={() => {
                    onFilterByCategory('lubricants');
                    onClose();
                  }}
                  className="text-[10px] text-amber-700 hover:underline font-bold mt-1 text-left"
                >
                  View Motul / Oils →
                </button>
              </div>

              <div className="bg-gray-50 p-3 rounded border border-gray-200 flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-emerald-600">link</span>
                  Chain &amp; Sprocket
                </span>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-gray-900">
                  {selectedBike.chain}
                </span>
                <button
                  onClick={() => {
                    onFilterByCategory('spares');
                    onClose();
                  }}
                  className="text-[10px] text-emerald-700 hover:underline font-bold mt-1 text-left"
                >
                  View Rolon Kits →
                </button>
              </div>

              <div className="bg-gray-50 p-3 rounded border border-gray-200 flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-red-600">bolt</span>
                  Spark Plug
                </span>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-gray-900">
                  {selectedBike.plug}
                </span>
                <button
                  onClick={() => {
                    onFilterByCategory('spares');
                    onClose();
                  }}
                  className="text-[10px] text-red-600 hover:underline font-bold mt-1 text-left"
                >
                  View NGK Iridium →
                </button>
              </div>
            </div>
          </div>

          {/* Custom VIN or Part Code input */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200 flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-gray-900 tracking-wider">
              Have a Specific VIN / RC Number or Damaged Part Code?
            </span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customVinText}
                onChange={(e) => setCustomVinText(e.target.value)}
                placeholder="Enter Chassis / VIN / Bike name (e.g. ME4JF50... or Hunter 350)"
                className="flex-1 bg-white border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:outline-none"
              />
            </div>
            <span className="text-[11px] text-gray-500">
              Send your RC photo directly to our mechanics on WhatsApp for 100% error-free part matching.
            </span>
          </div>

          {/* WhatsApp Direct Match CTA */}
          <div className="flex flex-col gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00a74c] hover:bg-[#15803d] text-white rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Ask Mechanic to Match Part on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
