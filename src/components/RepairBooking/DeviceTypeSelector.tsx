import React from 'react';
import { Smartphone, Tablet, Laptop, Gamepad2 } from 'lucide-react';

interface DeviceTypeSelectorProps {
  deviceType: 'mobile' | 'laptop';
  selectedCategory: string;
  onSelect: (category: string) => void;
  onNext: () => void;
}

const DeviceTypeSelector: React.FC<DeviceTypeSelectorProps> = ({
  deviceType,
  selectedCategory,
  onSelect,
  onNext
}) => {
  const mobileCategories = [
    {
      id: 'smartphone',
      name: 'Smartphone',
      icon: <Smartphone className="h-8 w-8" />,
      description: 'iPhone, Android, etc.'
    },
    {
      id: 'tablet',
      name: 'Tablette',
      icon: <Tablet className="h-8 w-8" />,
      description: 'iPad, Android tablets, etc.'
    }
  ];

  const laptopCategories = [
    {
      id: 'laptop',
      name: 'Ordinateur Portable',
      icon: <Laptop className="h-8 w-8" />,
      description: 'MacBook, PC portables, etc.'
    },
    {
      id: 'console',
      name: 'Console de Jeu',
      icon: <Gamepad2 className="h-8 w-8" />,
      description: 'PlayStation, Xbox, Nintendo, etc.'
    }
  ];

  const categories = deviceType === 'mobile' ? mobileCategories : laptopCategories;

  const handleSelect = (categoryId: string) => {
    onSelect(categoryId);
  };

  const handleNext = () => {
    if (selectedCategory) {
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Quel type d'appareil souhaitez-vous faire réparer ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelect(category.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedCategory === category.id
                ? 'border-yellow-400 bg-yellow-400/10'
                : 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`${selectedCategory === category.id ? 'text-yellow-400' : 'text-gray-400'}`}>
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedCategory}
          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default DeviceTypeSelector;