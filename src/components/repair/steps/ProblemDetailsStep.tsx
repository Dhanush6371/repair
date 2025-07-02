import React from 'react';
import { URGENCY_LEVELS } from '../data/serviceData';

interface ProblemDetailsStepProps {
  problemDescription: string;
  urgency: string;
  onProblemDescriptionChange: (description: string) => void;
  onUrgencyChange: (urgency: string) => void;
}

const ProblemDetailsStep: React.FC<ProblemDetailsStepProps> = ({
  problemDescription,
  urgency,
  onProblemDescriptionChange,
  onUrgencyChange
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Décrivez votre problème en détail
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Plus vous nous donnez d'informations, mieux nous pourrons vous aider
        </p>
      </div>

      {/* Problem Description */}
      <div className="max-w-2xl mx-auto">
        <label className="block text-white text-sm font-medium mb-3">
          Description détaillée du problème <span className="text-red-500">*</span>
        </label>
        <textarea
          value={problemDescription}
          onChange={(e) => onProblemDescriptionChange(e.target.value)}
          placeholder="Décrivez ce qui ne fonctionne pas, quand le problème a commencé, les circonstances, etc..."
          rows={6}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
          required
        />
      </div>

      {/* Urgency Level */}
      <div className="max-w-4xl mx-auto">
        <label className="block text-white text-sm font-medium mb-4">
          Niveau d'urgence <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {URGENCY_LEVELS.map((level) => (
            <button
              key={level.id}
              type="button"
              onClick={() => onUrgencyChange(level.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                urgency === level.id
                  ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                  : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{level.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {level.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {level.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailsStep;