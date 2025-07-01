import React from 'react';
import { Model } from './types';

interface ModelSelectorProps {
  models: Model[];
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({
  models,
  selectedModel,
  onModelSelect
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
        Sélectionnez le modèle
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => onModelSelect(model.id)}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedModel === model.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <div className="text-center">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4"
                loading="lazy"
              />
              <h4 className="text-base sm:text-lg font-semibold text-white">{model.name}</h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;