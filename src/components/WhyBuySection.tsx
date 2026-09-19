import React from 'react';

interface WhyBuySectionProps {
  onOpenSizing: () => void;
}

export const WhyBuySection: React.FC<WhyBuySectionProps> = ({ onOpenSizing }) => {
  return (
    <section className="w-full bg-[#f1f3f6] py-14 border-t border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-red-600 font-bold">
              Engineered For Riders
            </span>
            <h2 className="font-['Chivo'] font-black text-2xl sm:text-3xl uppercase text-gray-900 tracking-tight">
              Why Buy From Gears &amp; Spares?
            </h2>
          </div>
          <p className="font-['Space_Grotesk'] text-sm text-gray-600 max-w-md leading-relaxed">
            Every single helmet, oil canister, and sprocket kit in our store is individually verified for ISI/DOT seal authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col gap-3 hover:border-red-200 hover:shadow-md transition-all shadow-2xs">
            <div className="w-12 h-12 rounded bg-red-50 flex items-center justify-center text-red-600">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <h3 className="font-['Space_Grotesk'] font-bold text-base text-gray-900">
              100% Genuine Brands
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 leading-relaxed">
              Direct brand warehouse tie-ups with Studds, Steelbird, Vega, Ignyte &amp; Aerostar. Zero counterfeit tolerance.
            </p>
          </div>

          {/* Feature 2: Free Helmet Sizing with interactive click */}
          <div 
            onClick={onOpenSizing}
            className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col gap-3 hover:border-red-500 hover:shadow-md transition-all shadow-2xs cursor-pointer group"
          >
            <div className="w-12 h-12 rounded bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[28px]">straighten</span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] font-bold text-base text-gray-900 group-hover:text-red-600 transition-colors">
                Free Helmet Sizing
              </h3>
              <span className="material-symbols-outlined text-[16px] text-red-600">arrow_forward</span>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 leading-relaxed">
              Confused between 570mm, 580mm, or 600mm? Open our sizing calculator for laser-accurate fitment advice.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col gap-3 hover:border-emerald-200 hover:shadow-md transition-all shadow-2xs">
            <div className="w-12 h-12 rounded bg-emerald-50 flex items-center justify-center text-emerald-600">
              <span className="material-symbols-outlined text-[28px]">science</span>
            </div>
            <h3 className="font-['Space_Grotesk'] font-bold text-base text-gray-900">
              Pure Engine Oils
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 leading-relaxed">
              Tamper-evident seal guaranteed on all Motul, Castrol, and synthetic grade motorcycle lubricants.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col gap-3 hover:border-blue-200 hover:shadow-md transition-all shadow-2xs">
            <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-[28px]">speed</span>
            </div>
            <h3 className="font-['Space_Grotesk'] font-bold text-base text-gray-900">
              Fast Dispatch &amp; Pickup
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-gray-600 leading-relaxed">
              Same-day dispatch across Kolkata or direct store pickup at our Thakurpukur outlet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
