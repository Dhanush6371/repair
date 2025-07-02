import React from 'react';
import { DeviceOption } from '../types';

interface DeviceCategoryStepProps {
  categories: DeviceOption[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  deviceType: 'mobile' | 'laptop';
}

const DeviceCategoryStep: React.FC<DeviceCategoryStepProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  deviceType
}) => {
  const getTitle = () => {
    return deviceType === 'mobile' 
      ? 'Quel type d\'appareil mobile souhaitez-vous réparer ?'
      : 'Quel type d\'appareil souhaitez-vous réparer ?';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {getTitle()}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Sélectionnez la catégorie qui correspond à votre appareil
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedCategory === category.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {category.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeviceCategoryStep;