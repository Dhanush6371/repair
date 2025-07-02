import React from 'react';

interface AdditionalInfoStepProps {
  hasWarranty: boolean;
  warrantyDetails: string;
  additionalNotes: string;
  onHasWarrantyChange: (hasWarranty: boolean) => void;
  onWarrantyDetailsChange: (details: string) => void;
  onAdditionalNotesChange: (notes: string) => void;
}

const AdditionalInfoStep: React.FC<AdditionalInfoStepProps> = ({
  hasWarranty,
  warrantyDetails,
  additionalNotes,
  onHasWarrantyChange,
  onWarrantyDetailsChange,
  onAdditionalNotesChange
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Informations supplémentaires
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Ces informations nous aideront à mieux préparer votre réparation
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Warranty Information */}
        <div>
          <label className="block text-white text-sm font-medium mb-3">
            Votre appareil est-il encore sous garantie ?
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => onHasWarrantyChange(true)}
              className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                hasWarranty
                  ? 'border-yellow-400 bg-yellow-400/10 text-white'
                  : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500'
              }`}
            >
              Oui, sous garantie
            </button>
            <button
              type="button"
              onClick={() => onHasWarrantyChange(false)}
              className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                !hasWarranty
                  ? 'border-yellow-400 bg-yellow-400/10 text-white'
                  : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500'
              }`}
            >
              Non, hors garantie
            </button>
          </div>
        </div>

        {/* Warranty Details */}
        {hasWarranty && (
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Détails de la garantie
            </label>
            <textarea
              value={warrantyDetails}
              onChange={(e) => onWarrantyDetailsChange(e.target.value)}
              placeholder="Où avez-vous acheté l'appareil ? Quand ? Avez-vous la facture ?"
              rows={3}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
            />
          </div>
        )}

        {/* Additional Notes */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Notes supplémentaires (optionnel)
          </label>
          <textarea
            value={additionalNotes}
            onChange={(e) => onAdditionalNotesChange(e.target.value)}
            placeholder="Toute information supplémentaire qui pourrait nous aider..."
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoStep;