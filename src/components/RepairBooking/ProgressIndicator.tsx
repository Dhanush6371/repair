import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  stepLabels
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {stepLabels.map((label, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-2 ${
              index < currentStep 
                ? 'bg-yellow-400 text-gray-900' 
                : index === currentStep 
                ? 'bg-yellow-400 text-gray-900' 
                : 'bg-gray-600 text-gray-400'
            }`}>
              {index + 1}
            </div>
            <span className={`text-xs text-center ${
              index <= currentStep ? 'text-yellow-400' : 'text-gray-400'
            }`}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;