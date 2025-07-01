import React from 'react';
import { DeviceType } from './types';

interface DeviceTypeSelectorProps {
  deviceTypes: DeviceType[];
  selectedType: string;
  onTypeSelect: (typeId: string) => void;
  title: string;
}

const DeviceTypeSelector: React.FC<DeviceTypeSelectorProps> = ({
  deviceTypes,
  selectedType,
  onTypeSelect,
  title
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {deviceTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeSelect(type.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedType === type.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{type.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{type.name}</h4>
              <p className="text-gray-400 text-sm">{type.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeviceTypeSelector;