import React from 'react';
import { Brand } from './types';

interface BrandSelectorProps {
  brands: Brand[];
  selectedBrand: string;
  onBrandSelect: (brandId: string) => void;
}

const BrandSelector: React.FC<BrandSelectorProps> = ({
  brands,
  selectedBrand,
  onBrandSelect
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
        Sélectionnez la marque
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onBrandSelect(brand.id)}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedBrand === brand.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{brand.logo}</div>
              <h4 className="text-sm sm:text-base font-semibold text-white">{brand.name}</h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandSelector;