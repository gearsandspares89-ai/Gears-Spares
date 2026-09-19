import React from 'react';
import { WHATSAPP_NUMBER } from '../data/products';

interface HeroProps {
  onOpenSizing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSizing }) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#edf0f5] via-[#f7f8fa] to-[#f8f9fa] overflow-hidden border-b border-gray-200">
      {/* Ambient Paddock Glow Backdrop */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-red-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 py-10 sm:py-14 relative z-10 flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Status Overline */}
        <div className="flex items-center gap-1.5 text-gray-600 font-['Space_Grotesk'] text-xs uppercase font-bold">
          <span className="material-symbols-outlined text-[16px] text-emerald-600">verified_user</span>
          <span>100% Original ISI:4151 &amp; DOT Approved</span>
        </div>

        {/* Main Headline & Quick Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h1 className="font-['Chivo'] font-black text-3xl sm:text-5xl lg:text-[54px] uppercase tracking-tight text-gray-900 leading-[1.05]">
              PREMIUM TWO-WHEELER <span className="text-red-600">HELMETS</span> &amp; GENUINE SPARES
            </h1>
            <p className="font-['Space_Grotesk'] text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              100% Genuine ISI &amp; DOT Certified Helmets, Pure Engine Oils &amp; Authentic Bike Accessories. Expert fitment advice and lightning WhatsApp booking directly with certified mechanics.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-fast-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20want%20to%20enquire%20about%20helmets%20and%20spares`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#00a74c] hover:bg-[#15803d] text-white rounded transition-all transform hover:scale-[1.02] shadow-sm font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Fast WhatsApp Consultation</span>
              </a>

              <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded shadow-2xs">
                <span className="material-symbols-outlined text-amber-600 text-[18px]">bolt</span>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-amber-700 font-bold">
                    Response Time
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-gray-900 font-semibold">
                    &lt; 3 Minutes on WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Highlight Bento */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <div className="bg-gray-50 hover:bg-white p-3.5 rounded flex flex-col gap-1 border border-gray-200 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                  Authorized
                </span>
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">shield</span>
              </div>
              <span className="font-['Chivo'] font-bold text-lg sm:text-xl text-gray-900">5+ Top Brands</span>
              <span className="font-['Space_Grotesk'] text-xs text-gray-600">Studds, Steelbird, Vega, Ignyte &amp; Aerostar</span>
            </div>

            <div className="bg-gray-50 hover:bg-white p-3.5 rounded flex flex-col gap-1 border border-gray-200 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                  Authenticity
                </span>
                <span className="material-symbols-outlined text-red-600 text-[18px]">workspace_premium</span>
              </div>
              <span className="font-['Chivo'] font-bold text-lg sm:text-xl text-red-600">ISI / DOT</span>
              <span className="font-['Space_Grotesk'] text-xs text-gray-600">Strict Track &amp; Road safety standards</span>
            </div>

            <div className="bg-gray-50 hover:bg-white p-3.5 rounded flex flex-col gap-1 border border-gray-200 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                  Customer Satisfaction
                </span>
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">sentiment_very_satisfied</span>
              </div>
              <span className="font-['Chivo'] font-bold text-lg sm:text-xl text-gray-900">100% Guaranteed</span>
              <span className="font-['Space_Grotesk'] text-xs text-gray-600">Dedicated rider support &amp; genuine quality promise</span>
            </div>

            <div 
              onClick={onOpenSizing}
              className="bg-red-50/50 hover:bg-red-50 p-3.5 rounded flex flex-col gap-1 border border-red-200 cursor-pointer transition-colors group shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-[10px] text-red-700 uppercase tracking-wider font-bold">
                  Fitment Desk
                </span>
                <span className="material-symbols-outlined text-red-600 text-[18px]">handyman</span>
              </div>
              <span className="font-['Chivo'] font-bold text-lg sm:text-xl text-red-700">Free Sizing</span>
              <span className="font-['Space_Grotesk'] text-xs text-red-950/70">Precise circumference laser verification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
