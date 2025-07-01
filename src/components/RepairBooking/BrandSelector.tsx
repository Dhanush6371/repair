import React from 'react';

interface BrandSelectorProps {
  deviceCategory: string;
  selectedBrand: string;
  onSelect: (brand: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const BrandSelector: React.FC<BrandSelectorProps> = ({
  deviceCategory,
  selectedBrand,
  onSelect,
  onNext,
  onBack
}) => {
  const getBrands = () => {
    switch (deviceCategory) {
      case 'smartphone':
        return [
          'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Huawei', 
          'Oppo', 'Vivo', 'Realme', 'Nothing', 'Sony', 'Motorola'
        ];
      case 'tablet':
        return [
          'Apple', 'Samsung', 'Microsoft', 'Lenovo', 'Huawei', 
          'Amazon', 'Google', 'Xiaomi', 'ASUS'
        ];
      case 'laptop':
        return [
          'Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI', 
          'Microsoft', 'Razer', 'Alienware', 'Framework', 'System76'
        ];
      case 'console':
        return [
          'Sony PlayStation', 'Microsoft Xbox', 'Nintendo', 'Steam Deck', 
          'ASUS ROG Ally', 'Logitech G Cloud'
        ];
      default:
        return [];
    }
  };

  const brands = getBrands();

  const handleNext = () => {
    if (selectedBrand) {
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Quelle est la marque de votre appareil ?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => onSelect(brand)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedBrand === brand
                ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                : 'border-gray-600 hover:border-gray-500 bg-gray-700/50 text-white'
            }`}
          >
            <span className="font-medium text-sm">{brand}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Retour
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedBrand}
          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default BrandSelector;