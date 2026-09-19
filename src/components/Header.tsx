import React, { useState } from 'react';
import { BRAND_LOGO, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/products';
import { NavTab } from '../types';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSizing: () => void;
  onOpenVinModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  onOpenSizing,
  onOpenVinModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="h-20 w-full px-4 sm:px-8 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => { onSelectTab('home'); }} 
          className="flex items-center gap-3 shrink-0 cursor-pointer group"
          id="header-brand-logo"
        >
          <img
            alt="Gears & Spares Brand Logo"
            className="h-11 w-11 shrink-0 rounded-full object-contain transition-transform group-hover:scale-105 shadow-md"
            src={BRAND_LOGO}
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-['Chivo'] font-bold text-lg sm:text-xl text-gray-900 tracking-tight uppercase leading-none">
              Gears &amp; Spares
            </span>
            <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] text-red-600 font-bold tracking-widest uppercase mt-0.5">
              Performance Parts &amp; Gear
            </span>
          </div>
        </div>

        {/* Search Bar with VIN Button */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full flex items-center bg-gray-100 rounded border border-gray-300 focus-within:border-red-600 focus-within:bg-white transition-colors px-3 py-1.5">
            <span className="material-symbols-outlined text-gray-500 text-[20px] mr-2">search</span>
            <input
              id="global-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search helmets, engine oils, genuine OEM spares..."
              className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')} 
                className="text-xs text-gray-400 hover:text-gray-700 mr-2"
                title="Clear search"
              >
                ✕
              </button>
            )}
            <button
              onClick={onOpenVinModal}
              id="spec-vin-search-btn"
              className="text-[10px] font-bold tracking-wider uppercase text-gray-800 bg-white px-2 py-1 rounded border border-gray-300 hover:bg-gray-900 hover:text-white transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 shadow-2xs"
              title="Filter parts by Bike Model / VIN"
            >
              <span className="material-symbols-outlined text-[14px]">two_wheeler</span>
              <span>SPEC / VIN</span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" id="main-desktop-navigation">
          <button
            onClick={() => onSelectTab('helmets')}
            id="nav-helmets-btn"
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              currentTab === 'helmets'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Helmets
          </button>
          <button
            onClick={() => onSelectTab('engine-oils')}
            id="nav-oils-btn"
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              currentTab === 'engine-oils'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Engine Oils
          </button>
          <button
            onClick={() => onSelectTab('bike-spares')}
            id="nav-spares-btn"
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              currentTab === 'bike-spares'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Bike Spares
          </button>
          <button
            onClick={() => onSelectTab('riding-gear')}
            id="nav-gear-btn"
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              currentTab === 'riding-gear'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Riding Gear
          </button>
          <button
            onClick={() => onSelectTab('store-info')}
            id="nav-store-btn"
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              currentTab === 'store-info'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Store Info
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Sizing Tool Button */}
          <button
            onClick={onOpenSizing}
            id="helmet-sizing-quick-btn"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 rounded text-xs font-bold uppercase tracking-wider transition-all"
            title="Free Helmet Head Size Calculator"
          >
            <span className="material-symbols-outlined text-[16px] text-red-600">straighten</span>
            <span className="hidden md:inline">Sizing Guide</span>
          </button>

          {/* Cart / Inquiry Drawer Trigger */}
          <button
            onClick={onOpenCart}
            id="cart-drawer-trigger-btn"
            className="relative p-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300 transition-all flex items-center justify-center"
            title="View Inquiry List"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct Hotline Link */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20am%20calling%20from%20Kolkata%20for%20helmets%20and%20spares%20inquiry`}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-call-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00a74c] hover:bg-[#15803d] text-white rounded text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>{DISPLAY_PHONE}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-toggle-btn"
            className="xl:hidden p-2 text-gray-800 hover:bg-gray-100 rounded"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 py-4 flex flex-col gap-3 shadow-md">
          <div className="relative w-full flex items-center bg-gray-100 rounded border border-gray-200 px-3 py-2">
            <span className="material-symbols-outlined text-gray-500 text-[20px] mr-2">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search helmets, oils, spares..."
              className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => { onSelectTab('helmets'); setMobileMenuOpen(false); }}
              className="px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded text-xs font-bold uppercase tracking-wider text-left flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-red-600 text-[18px]">sports_motorsports</span>
              Helmets
            </button>
            <button
              onClick={() => { onSelectTab('engine-oils'); setMobileMenuOpen(false); }}
              className="px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded text-xs font-bold uppercase tracking-wider text-left flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-amber-600 text-[18px]">water_drop</span>
              Engine Oils
            </button>
            <button
              onClick={() => { onSelectTab('bike-spares'); setMobileMenuOpen(false); }}
              className="px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded text-xs font-bold uppercase tracking-wider text-left flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">build</span>
              Bike Spares
            </button>
            <button
              onClick={() => { onSelectTab('riding-gear'); setMobileMenuOpen(false); }}
              className="px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded text-xs font-bold uppercase tracking-wider text-left flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-blue-600 text-[18px]">shield</span>
              Riding Gear
            </button>
            <button
              onClick={() => { onSelectTab('store-info'); setMobileMenuOpen(false); }}
              className="px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded text-xs font-bold uppercase tracking-wider text-left flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-purple-600 text-[18px]">storefront</span>
              Store Depot
            </button>
            <button
              onClick={() => { onOpenSizing(); setMobileMenuOpen(false); }}
              className="px-3 py-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 rounded text-xs font-bold uppercase tracking-wider text-left flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">straighten</span>
              Sizing Guide
            </button>
          </div>
          <button
            onClick={() => { onOpenVinModal(); setMobileMenuOpen(false); }}
            className="w-full py-2 bg-gray-900 text-white hover:bg-black text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">two_wheeler</span>
            Lookup Parts by Bike Model / VIN
          </button>
        </div>
      )}
    </header>
  );
};
