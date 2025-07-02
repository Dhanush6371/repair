import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ModelSelectionStepProps {
  models: string[];
  selectedModel: string;
  onModelSelect: (model: string) => void;
  brandName: string;
}

const ModelSelectionStep: React.FC<ModelSelectionStepProps> = ({
  models,
  selectedModel,
  onModelSelect,
  brandName
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModels = models.filter(model =>
    model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Quel modèle {brandName} avez-vous ?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Recherchez et sélectionnez votre modèle exact
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Rechercher un modèle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Models Grid */}
      <div className="max-h-96 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {filteredModels.map((model) => (
            <button
              key={model}
              onClick={() => onModelSelect(model)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 text-left ${
                selectedModel === model
                  ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                  : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
              }`}
            >
              <h3 className="text-sm sm:text-base font-medium text-white">
                {model}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {filteredModels.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">
            Aucun modèle trouvé pour "{searchTerm}"
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Essayez un terme de recherche différent
          </p>
        </div>
      )}
    </div>
  );
};

export default ModelSelectionStep;