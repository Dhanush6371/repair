import React from 'react';
import { RepairType } from './types';

interface RepairTypeSelectorProps {
  repairTypes: RepairType[];
  selectedRepairType: string;
  onRepairTypeSelect: (repairTypeId: string) => void;
}

const RepairTypeSelector: React.FC<RepairTypeSelectorProps> = ({
  repairTypes,
  selectedRepairType,
  onRepairTypeSelect
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Facile';
      case 'medium': return 'Moyen';
      case 'hard': return 'Difficile';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
        Type de réparation nécessaire
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {repairTypes.map((repair) => (
          <button
            key={repair.id}
            onClick={() => onRepairTypeSelect(repair.id)}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-left ${
              selectedRepairType === repair.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-base sm:text-lg font-semibold text-white">{repair.name}</h4>
              <span className={`text-xs sm:text-sm font-medium ${getDifficultyColor(repair.difficulty)}`}>
                {getDifficultyText(repair.difficulty)}
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">{repair.description}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">{repair.estimatedPrice}</span>
              <span className="text-gray-300 text-xs sm:text-sm">⏱️ {repair.estimatedTime}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RepairTypeSelector;