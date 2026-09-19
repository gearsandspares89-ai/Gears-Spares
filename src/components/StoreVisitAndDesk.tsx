import React from 'react';
import { 
  DISPLAY_PHONE, 
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_LINK, 
  STORE_ADDRESS, 
  STORE_HOURS_DISPLAY, 
  STORE_LANDMARK, 
  STORE_PIN, 
  WHATSAPP_NUMBER 
} from '../data/products';

interface StoreVisitAndDeskProps {
  onOpenVinModal: () => void;
}

export const StoreVisitAndDesk: React.FC<StoreVisitAndDeskProps> = ({ onOpenVinModal }) => {
  return (
    <section className="w-full bg-white py-14 border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-7xl mx-auto">
        {/* Store Location Card */}
        <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-red-600">
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">
                Kolkata Store &amp; Service Desk
              </span>
            </div>
            <h3 className="font-['Chivo'] font-bold text-2xl uppercase text-gray-900">
              Visit Our Kolkata Store
            </h3>
            <p className="font-['Space_Grotesk'] text-sm text-gray-600 leading-relaxed">
              Try on any full-face, flip-up, or open-face helmet in person. Get your bike's chain slack checked and consult with our on-site performance mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200 shadow-2xs flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                Store Location
              </span>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-gray-900 font-bold leading-snug">
                {STORE_ADDRESS}
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-gray-600 mt-0.5">
                Landmark: {STORE_LANDMARK} • PIN: {STORE_PIN}
              </span>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200 shadow-2xs flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                Operating Hours
              </span>
              <span className="font-['Space_Grotesk'] text-sm text-red-600 font-bold">
                Monday – Sunday
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-gray-600">
                {STORE_HOURS_DISPLAY}
              </span>
            </div>
          </div>

          {/* Interactive Google Map with exact Coordinates Pin */}
          <div className="w-full h-56 rounded-lg overflow-hidden relative shadow-inner border border-gray-200 bg-gray-100">
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
                className="bg-white/95 border border-gray-200 px-3 py-1.5 rounded flex items-center gap-1.5 shadow-md hover:border-red-500 transition-colors cursor-pointer group text-gray-900 font-['Space_Grotesk'] text-xs font-bold"
              >
                <span className="material-symbols-outlined text-red-600 text-[16px] group-hover:scale-110 transition-transform">location_on</span>
                <span>Open in Google Maps (Get Directions)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rapid WhatsApp Callout Action Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-red-50/40 via-white to-gray-50 p-6 sm:p-8 rounded-lg border border-red-200/80 flex flex-col justify-between gap-6 relative overflow-hidden shadow-xs">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex flex-col gap-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded w-fit text-emerald-800">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider font-bold">
                Direct WhatsApp Store Desk
              </span>
            </div>

            <h3 className="font-['Chivo'] font-bold text-2xl uppercase text-gray-900 leading-tight">
              Can't find your exact spare or size?
            </h3>

            <p className="font-['Space_Grotesk'] text-sm text-gray-600 leading-relaxed">
              Send us a snapshot of your bike's RC, damaged spare part, or preferred helmet model. Our mechanics match your VIN specification in seconds.
            </p>

            <div className="bg-white p-4 rounded border border-gray-200 shadow-2xs flex flex-col gap-1 my-1">
              <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                Hotline Direct WhatsApp
              </span>
              <span className="font-['Chivo'] font-black text-2xl text-emerald-700 tracking-tight">
                {DISPLAY_PHONE}
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-gray-600">
                Click below to start an instant WhatsApp consultation session:
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            <a
              id="desk-message-mechanic-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20need%20assistance%20finding%20a%20part%20or%20helmet%20for%20my%20bike.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00a74c] hover:bg-[#15803d] text-white rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-[1.01] shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Message Mechanic on WhatsApp</span>
            </a>

            <button
              onClick={onOpenVinModal}
              className="w-full py-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px]">directions_bike</span>
              <span>Check Compatibility by Bike Model</span>
            </button>

            <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 text-center uppercase tracking-widest mt-1 font-semibold">
              Instant photo sharing &amp; video walkthrough available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
