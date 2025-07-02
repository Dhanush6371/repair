import React from 'react';
import { ProblemOption } from '../types';

interface ProblemSelectionStepProps {
  problems: ProblemOption[];
  selectedProblem: string;
  onProblemSelect: (problemId: string) => void;
}

const ProblemSelectionStep: React.FC<ProblemSelectionStepProps> = ({
  problems,
  selectedProblem,
  onProblemSelect
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Quel est le problème avec votre appareil ?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Sélectionnez le problème qui correspond le mieux à votre situation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {problems.map((problem) => (
          <button
            key={problem.id}
            onClick={() => onProblemSelect(problem.id)}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-left ${
              selectedProblem === problem.id
                ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {problem.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {problem.description}
            </p>
            <div className="flex justify-between items-center text-xs">
              <span className="text-yellow-400 font-medium">
                {problem.estimatedPrice}
              </span>
              <span className="text-gray-500">
                {problem.estimatedTime}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProblemSelectionStep;