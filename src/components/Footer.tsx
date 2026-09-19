import React from 'react';
import { 
  BRAND_LOGO, 
  DISPLAY_PHONE, 
  GOOGLE_MAPS_LINK, 
  STORE_ADDRESS, 
  STORE_EMAIL,
  STORE_OPERATING_HOURS, 
  WHATSAPP_NUMBER 
} from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 pt-12 pb-8 border-t border-gray-200 text-gray-700">
      <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-200">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img
                alt="Gears & Spares Brand Logo"
                className="h-10 w-10 shrink-0 rounded-full object-contain shadow-xs"
                src={BRAND_LOGO}
                referrerPolicy="no-referrer"
              />
              <span className="font-['Chivo'] font-bold text-lg text-gray-900 tracking-tight uppercase">
                Gears &amp; Spares
              </span>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 max-w-sm leading-relaxed">
              High-octane motorcycle gear and authentic parts. Genuine OEM spares, track-spec lubricants, and rigorously certified impact protection helmets.
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
              <span className="font-['Space_Grotesk'] text-xs text-emerald-700 uppercase font-bold tracking-wider">
                100% Genuine Certified Dealer
              </span>
            </div>
          </div>

          {/* Kolkata Store & Depot */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">
              Kolkata Store &amp; Depot
            </span>
            <div className="flex items-start gap-2 text-gray-600">
              <span className="material-symbols-outlined text-gray-400 text-[18px] shrink-0 mt-0.5">location_on</span>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Space_Grotesk'] text-xs leading-relaxed hover:text-red-600 transition-colors"
                title="View on Google Maps"
              >
                {STORE_ADDRESS}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <span className="material-symbols-outlined text-gray-400 text-[18px] shrink-0">schedule</span>
              <span className="font-['Space_Grotesk'] text-xs">
                {STORE_OPERATING_HOURS}
              </span>
            </div>
          </div>

          {/* Rapid Hotline */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">
              Rapid Hotline
            </span>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="material-symbols-outlined text-gray-400 text-[18px] shrink-0">call</span>
              <span className="font-['Space_Grotesk'] text-xs font-bold text-gray-900">{DISPLAY_PHONE}</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors mt-1"
            >
              <span className="material-symbols-outlined text-[18px] shrink-0">chat</span>
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider">
                Instant WhatsApp Mechanics
              </span>
            </a>
            <a 
              href={`mailto:${STORE_EMAIL}`}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mt-1 group"
            >
              <span className="material-symbols-outlined text-gray-400 group-hover:text-red-600 text-[18px] shrink-0">mail</span>
              <span className="font-['Space_Grotesk'] text-xs">{STORE_EMAIL}</span>
            </a>
          </div>

          {/* Authorized Brands */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">
              Authorized Brands
            </span>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 mb-1">
              Direct warehouse-stocked authentic partner products.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['STUDDS', 'STEELBIRD', 'VEGA', 'IGNYTE', 'AEROSTAR', 'MOTUL', 'CASTROL'].map((b) => (
                <span key={b} className="px-2 py-0.5 bg-white border border-gray-300 font-['Space_Grotesk'] text-[10px] font-bold text-gray-800 rounded shadow-2xs">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal and ISO registration */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="font-['Space_Grotesk'] text-xs text-gray-500">
            © 2024 Gears &amp; Spares Precision Automotive. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="font-['Space_Grotesk'] text-xs text-gray-500 uppercase tracking-wider">
              ISO 9001:2015 Registered
            </span>
            <span className="font-['Space_Grotesk'] text-xs text-red-600 uppercase tracking-wider font-bold">
              Track-Tested Fitment Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
