import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/products';

interface HelmetSizingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelmetSizingModal: React.FC<HelmetSizingModalProps> = ({ isOpen, onClose }) => {
  const [circumference, setCircumference] = useState<number>(58);

  if (!isOpen) return null;

  const getSizeRecommendation = (cm: number) => {
    if (cm <= 55) {
      return {
        label: 'Small (S) • 550mm - 560mm',
        fitDescription: 'Snug fit for narrow crown profiles. Ensures zero helmet lift at highway speeds.',
        idealBrands: ['Studds Professional', 'Vega Voyager'],
        color: '#ffb4ab'
      };
    } else if (cm <= 57) {
      return {
        label: 'Medium (M) • 570mm',
        fitDescription: 'Most common athletic fit for sporty street helmets with firm cheek contouring.',
        idealBrands: ['Studds Professional D2', 'Steelbird SBH-66', 'Vega Voyager DX'],
        color: '#c3f400'
      };
    } else if (cm <= 58.5) {
      return {
        label: 'Medium/Large (L) • 580mm',
        fitDescription: 'The standard size for ~65% of Indian riders. Comfortable pressure on temporal bones.',
        idealBrands: ['Steelbird SB-45 Flip-Up', 'Ignyte IGN-58', 'Steelbird SBH-73 DRX RF'],
        color: '#66ff8e'
      };
    } else if (cm <= 60.5) {
      return {
        label: 'Large/XL (XL) • 600mm',
        fitDescription: 'Spacious crown contouring designed to eliminate forehead pressure spots on longer tours.',
        idealBrands: ['Studds D2 Decor 600mm', 'Steelbird SB-45 XL', 'Ignyte EPP 600mm'],
        color: '#c3f400'
      };
    } else {
      return {
        label: 'Extra Large (2XL) • 610mm - 620mm',
        fitDescription: 'Expanded outer shell with deep EPS crown recess for maximum temple relief.',
        idealBrands: ['Custom Studds / Steelbird touring shell'],
        color: '#ff544b'
      };
    }
  };

  const rec = getSizeRecommendation(circumference);
  const whatsappMsg = encodeURIComponent(
    `Hi Gears & Spares, my measured head circumference is ${circumference} cm. Your fitment tool recommended ${rec.label}. Please recommend which helmets in stock match my fit.`
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
            <span className="material-symbols-outlined text-red-600 text-[22px]">straighten</span>
            <h2 className="font-['Chivo'] font-bold text-lg text-gray-900 uppercase tracking-wide">
              Free Helmet Sizing &amp; Fitment Desk
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
          {/* Circumference Selector */}
          <div className="bg-gray-50 p-5 rounded border border-gray-200 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-gray-900 tracking-wider">
                Head Circumference:
              </span>
              <span className="font-['Chivo'] font-black text-2xl text-red-600">
                {circumference} cm / {circumference * 10} mm
              </span>
            </div>

            <input
              type="range"
              min={54}
              max={62}
              step={0.5}
              value={circumference}
              onChange={(e) => setCircumference(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
            />

            {/* Quick Presets */}
            <div className="flex items-center justify-between gap-1 pt-1">
              {[55, 57, 58, 60, 62].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setCircumference(preset)}
                  className={`px-2.5 py-1 rounded text-xs font-['Space_Grotesk'] font-bold transition-all ${
                    circumference === preset
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {preset} cm
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Recommendation Card */}
          <div className="bg-white p-5 rounded border border-gray-200 shadow-2xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-[11px] uppercase font-bold text-gray-500 tracking-widest">
                Recommended Helmet Spec
              </span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 font-['Space_Grotesk'] text-[10px] font-bold uppercase rounded border border-emerald-200">
                Guaranteed Fitment
              </span>
            </div>

            <h3 className="font-['Chivo'] font-bold text-2xl text-gray-900 tracking-tight">
              {rec.label}
            </h3>

            <p className="font-['Space_Grotesk'] text-xs text-gray-600 leading-relaxed">
              {rec.fitDescription}
            </p>

            <div className="pt-2 border-t border-gray-200 flex flex-col gap-1">
              <span className="text-[11px] text-gray-500 uppercase font-bold">
                Compatible Models In Kolkata Store:
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {rec.idealBrands.map((brand) => (
                  <span
                    key={brand}
                    className="px-2 py-0.5 bg-gray-100 text-gray-800 border border-gray-200 rounded text-xs font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* How to Measure Instructions */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200 flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-gray-900 tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-red-600">info</span>
              How to Measure at Home (30 Seconds)
            </span>
            <ul className="text-xs text-gray-600 space-y-1.5 pl-5 list-decimal font-['Space_Grotesk'] leading-relaxed">
              <li>Use a flexible tailor measuring tape (or a string and ruler).</li>
              <li>Wrap it around the widest point of your head, approx 2 cm above your eyebrows and over your ears.</li>
              <li>Ensure the tape is level and snug without pulling tightly.</li>
              <li>Compare your reading in centimeters with the slider above.</li>
            </ul>
          </div>

          {/* WhatsApp Direct Mechanic Consultation CTA */}
          <div className="flex flex-col gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00a74c] hover:bg-[#15803d] text-white rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Confirm {rec.label} Fit with Mechanic on WhatsApp</span>
            </a>
            <span className="text-[11px] text-gray-500 text-center font-['Space_Grotesk']">
              Visit our Kolkata store for free in-person laser circumference verification!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
