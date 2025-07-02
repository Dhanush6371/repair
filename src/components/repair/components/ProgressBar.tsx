import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepTitles }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-8">
      {/* Progress Bar */}
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ease-out"
          />
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-between">
          {stepTitles.map((title, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    isCompleted
                      ? 'bg-yellow-400 text-gray-900'
                      : isCurrent
                      ? 'bg-yellow-400 text-gray-900 ring-4 ring-yellow-400/30'
                      : 'bg-gray-600 text-gray-400'
                  }`}
                >
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <span
                  className={`mt-2 text-xs text-center max-w-20 ${
                    isCurrent ? 'text-yellow-400 font-medium' : 'text-gray-400'
                  }`}
                >
                  {title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;