import React from 'react';
import { BrandOption } from '../types';

interface BrandSelectionStepProps {
  brands: BrandOption[];
  selectedBrand: string;
  onBrandSelect: (brandId: string) => void;
  categoryName: string;
}

const BrandSelectionStep: React.FC<BrandSelectionStepProps> = ({
  brands,
  selectedBrand,
  onBrandSelect,
  categoryName
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Quelle est la marque de votre {categoryName.toLowerCase()} ?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Sélectionnez la marque de votre appareil
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onBrandSelect(brand.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedBrand === brand.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{brand.logo}</div>
              <h3 className="text-sm sm:text-base font-semibold text-white">
                {brand.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {brand.models.length} modèles
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandSelectionStep;