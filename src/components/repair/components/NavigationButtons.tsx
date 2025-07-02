import React from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  canProceed: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  isSubmitting,
  canProceed,
  onPrevious,
  onNext,
  onSubmit
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex justify-between items-center pt-8 border-t border-gray-700">
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
          isFirstStep
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-gray-700 hover:bg-gray-600 text-white hover:scale-105'
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Précédent</span>
      </button>

      {/* Step Counter */}
      <div className="text-center">
        <span className="text-gray-400 text-sm">
          Étape {currentStep} sur {totalSteps}
        </span>
      </div>

      {/* Next/Submit Button */}
      {isLastStep ? (
        <button
          type="submit"
          onClick={onSubmit}
          disabled={!canProceed || isSubmitting}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            !canProceed || isSubmitting
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
              <span>Envoi...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Soumettre</span>
            </>
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            !canProceed
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:scale-105'
          }`}
        >
          <span>Suivant</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;