import React from 'react';

interface ModelSelectorProps {
  brand: string;
  selectedModel: string;
  onSelect: (model: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({
  brand,
  selectedModel,
  onSelect,
  onNext,
  onBack
}) => {
  const getModels = () => {
    switch (brand.toLowerCase()) {
      case 'apple':
        return [
          'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
          'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
          'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini',
          'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 mini',
          'iPhone SE (3rd gen)', 'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
          'MacBook Pro 16"', 'MacBook Pro 14"', 'MacBook Air 15"', 'MacBook Air 13"',
          'iPad Pro 12.9"', 'iPad Pro 11"', 'iPad Air', 'iPad', 'iPad mini'
        ];
      case 'samsung':
        return [
          'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23 Ultra',
          'Galaxy S23+', 'Galaxy S23', 'Galaxy S23 FE', 'Galaxy S22 Ultra',
          'Galaxy Note 20 Ultra', 'Galaxy Z Fold 5', 'Galaxy Z Flip 5',
          'Galaxy A54', 'Galaxy A34', 'Galaxy A14', 'Galaxy Tab S9',
          'Galaxy Book 3 Pro', 'Galaxy Book 3', 'Galaxy Book 2 Pro'
        ];
      case 'google':
        return [
          'Pixel 8 Pro', 'Pixel 8', 'Pixel 7a', 'Pixel 7 Pro', 'Pixel 7',
          'Pixel 6a', 'Pixel 6 Pro', 'Pixel 6', 'Pixel Fold',
          'Pixelbook Go', 'Pixel Slate', 'Pixel Tablet'
        ];
      case 'dell':
        return [
          'XPS 13', 'XPS 15', 'XPS 17', 'Inspiron 15 3000', 'Inspiron 15 5000',
          'Latitude 7420', 'Latitude 9520', 'Alienware m15', 'Alienware x17',
          'Precision 5560', 'Vostro 15 3000'
        ];
      case 'hp':
        return [
          'Spectre x360 13', 'Spectre x360 16', 'Envy 13', 'Envy 15',
          'Pavilion 15', 'EliteBook 840', 'ProBook 450', 'Omen 15',
          'Omen 17', 'ZBook Studio'
        ];
      default:
        return [
          'Modèle Standard', 'Modèle Pro', 'Modèle Plus', 'Modèle Lite',
          'Série Gaming', 'Série Business', 'Autre modèle'
        ];
    }
  };

  const models = getModels();

  const handleNext = () => {
    if (selectedModel) {
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Quel est le modèle exact de votre {brand} ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 max-h-96 overflow-y-auto">
        {models.map((model) => (
          <button
            key={model}
            onClick={() => onSelect(model)}
            className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
              selectedModel === model
                ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                : 'border-gray-600 hover:border-gray-500 bg-gray-700/50 text-white'
            }`}
          >
            <span className="font-medium text-sm">{model}</span>
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
          disabled={!selectedModel}
          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default ModelSelector;