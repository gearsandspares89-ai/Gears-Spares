import React from 'react';
import { ProductCategory } from '../types';

interface FilterBarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  filteredCount: number;
}

const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'aerostar', label: 'Aerostar' },
  { id: 'steelbird-flip', label: 'Steelbird Flip Up' },
  { id: 'ignyte', label: 'Ignyte' },
  { id: 'vega', label: 'Vega' },
  { id: 'steelbird-open', label: 'Steelbird Open Face' },
  { id: 'steelbird-vintage', label: 'Steelbird Vintage' },
  { id: 'steelbird-drx', label: 'Steelbird DRX RF Glossy' },
  { id: 'steelbird-full', label: 'Steelbird Full Face' },
  { id: 'studds', label: 'Studds' },
  { id: 'lubricants', label: 'Engine Oils & Lubricants' },
  { id: 'spares', label: 'Bike Spares & Accessories' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  filteredCount,
}) => {
  return (
    <section className="w-full bg-white/95 backdrop-blur-md sticky top-20 z-30 shadow-xs border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 py-3 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 border border-gray-200/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-1.5 shrink-0 text-gray-500 font-['Space_Grotesk'] text-xs uppercase font-bold">
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span id="productCounter" className="text-red-600">{filteredCount} SKUs READY</span>
        </div>
      </div>
    </section>
  );
};
