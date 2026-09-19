/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { EnquiryCartDrawer } from './components/EnquiryCartDrawer';
import { FilterBar } from './components/FilterBar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HelmetSizingModal } from './components/HelmetSizingModal';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import {
  BikeSparesView,
  EngineOilsView,
  HelmetsView,
  RidingGearView,
  StoreInfoView,
} from './components/SpecializedViews';
import { StoreVisitAndDesk } from './components/StoreVisitAndDesk';
import { VinLookupModal } from './components/VinLookupModal';
import { WhyBuySection } from './components/WhyBuySection';
import { PRODUCTS, WHATSAPP_NUMBER } from './data/products';
import { CartItem, NavTab, Product, ProductCategory } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSizingOpen, setIsSizingOpen] = useState<boolean>(false);
  const [isVinModalOpen, setIsVinModalOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, size?: string, color?: string) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }
      return [
        ...prev,
        {
          product,
          selectedSize: size || (product.sizes ? product.sizes[0] : undefined),
          selectedColor: color || (product.colors ? product.colors[0].name : undefined),
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCart((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' ||
        item.category === activeCategory ||
        item.secondaryCategories.includes(activeCategory);

      // Search query filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        (item.bikeCompatibility &&
          item.bikeCompatibility.some((b) => b.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Tab switcher
  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111827] font-['Space_Grotesk'] flex flex-col antialiased selection:bg-[#ff544b]/20 selection:text-[#b91c1c]">
      {/* Fixed Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
        onOpenVinModal={() => setIsVinModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1 flex flex-col">
        {currentTab === 'home' && (
          <>
            {/* HERO SHOWCASE SECTION */}
            <Hero onOpenSizing={() => setIsSizingOpen(true)} />

            {/* INTERACTIVE FILTER BAR */}
            <FilterBar
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              filteredCount={filteredProducts.length}
            />

            {/* STORE PRODUCT CATALOGUE GRID */}
            <section className="w-full px-4 sm:px-8 py-10 bg-[#f8f9fa] max-w-7xl mx-auto flex-1">
              {searchQuery && (
                <div className="mb-6 flex items-center justify-between bg-white px-4 py-2.5 rounded border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs text-gray-800">
                    <span className="text-gray-500">Search results for:</span>
                    <span className="font-bold text-red-600">"{searchQuery}"</span>
                    <span className="text-gray-500">({filteredProducts.length} items found)</span>
                  </div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-red-600 hover:underline font-bold"
                  >
                    Clear Filter
                  </button>
                </div>
              )}

              {filteredProducts.length === 0 ? (
                <div className="py-20 flex flex-col items-center justify-center text-center bg-white rounded border border-gray-200 shadow-sm">
                  <span className="material-symbols-outlined text-gray-400 text-[54px] mb-2">
                    inventory_2
                  </span>
                  <h3 className="font-['Chivo'] font-bold text-xl text-gray-900">
                    No Products Found
                  </h3>
                  <p className="font-['Space_Grotesk'] text-xs text-gray-500 mt-1 max-w-sm">
                    No items in our current stock match this filter. Contact our mechanics directly on WhatsApp to check off-catalog warehouse stock!
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20am%20looking%20for%20a%20part%20or%20helmet%20not%20found%20in%20catalog.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-[#00a74c] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* TRUST & SERVICES: WHY BUY FROM GEARS & SPARES */}
            <WhyBuySection onOpenSizing={() => setIsSizingOpen(true)} />

            {/* STORE VISIT & WHATSAPP PADDOCK DESK */}
            <StoreVisitAndDesk onOpenVinModal={() => setIsVinModalOpen(true)} />
          </>
        )}

        {currentTab === 'helmets' && (
          <HelmetsView
            products={PRODUCTS}
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
            onOpenSizing={() => setIsSizingOpen(true)}
            onOpenVinModal={() => setIsVinModalOpen(true)}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'engine-oils' && (
          <EngineOilsView
            products={PRODUCTS}
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
            onOpenSizing={() => setIsSizingOpen(true)}
            onOpenVinModal={() => setIsVinModalOpen(true)}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'bike-spares' && (
          <BikeSparesView
            products={PRODUCTS}
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
            onOpenSizing={() => setIsSizingOpen(true)}
            onOpenVinModal={() => setIsVinModalOpen(true)}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'riding-gear' && (
          <RidingGearView
            products={PRODUCTS}
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
            onOpenSizing={() => setIsSizingOpen(true)}
            onOpenVinModal={() => setIsVinModalOpen(true)}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'store-info' && (
          <StoreInfoView
            products={PRODUCTS}
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
            onOpenSizing={() => setIsSizingOpen(true)}
            onOpenVinModal={() => setIsVinModalOpen(true)}
            onSelectTab={handleSelectTab}
          />
        )}
      </main>

      {/* Floating WhatsApp Action Pill for Quick Order Access */}
      <aside className="fixed bottom-6 right-6 z-40">
        <a
          id="floating-whatsapp-order-btn"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gears%20%26%20Spares%2C%20I%20am%20looking%20to%20place%20an%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#00a74c] hover:bg-[#15803d] text-white rounded-full shadow-lg active:scale-95 transition-all font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider group cursor-pointer"
          title="Direct WhatsApp Order"
        >
          <span className="material-symbols-outlined text-[22px] group-hover:rotate-12 transition-transform">
            chat
          </span>
          <span className="hidden sm:inline">WhatsApp Order</span>
        </a>
      </aside>

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizing={() => {
          setQuickViewProduct(null);
          setIsSizingOpen(true);
        }}
      />

      {/* Helmet Sizing Tool Modal */}
      <HelmetSizingModal
        isOpen={isSizingOpen}
        onClose={() => setIsSizingOpen(false)}
      />

      {/* SPEC / VIN Compatibility Lookup Modal */}
      <VinLookupModal
        isOpen={isVinModalOpen}
        onClose={() => setIsVinModalOpen(false)}
        onFilterByCategory={(cat) => {
          setActiveCategory(cat);
          setCurrentTab('home');
        }}
      />

      {/* Slide-over Enquiry Cart Drawer */}
      <EnquiryCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
