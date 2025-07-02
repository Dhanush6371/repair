import React from 'react';
import { RepairFormData } from '../types';

interface ReviewStepProps {
  formData: RepairFormData;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
  onAgreeToTermsChange: (agree: boolean) => void;
  onAgreeToMarketingChange: (agree: boolean) => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({
  formData,
  agreeToTerms,
  agreeToMarketing,
  onAgreeToTermsChange,
  onAgreeToMarketingChange
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Récapitulatif de votre demande
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Vérifiez les informations avant de soumettre votre demande
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device Information */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Appareil</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Catégorie:</span>
                <span className="text-white">{formData.deviceCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Marque:</span>
                <span className="text-white">{formData.deviceBrand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Modèle:</span>
                <span className="text-white">{formData.deviceModel}</span>
              </div>
            </div>
          </div>

          {/* Problem Information */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Problème</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="text-white">{formData.problemType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Urgence:</span>
                <span className="text-white">{formData.urgency}</span>
              </div>
              <div className="mt-3">
                <span className="text-gray-400">Description:</span>
                <p className="text-white mt-1 text-xs leading-relaxed">
                  {formData.problemDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Nom:</span>
                <span className="text-white">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Téléphone:</span>
                <span className="text-white">{formData.phone}</span>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Service</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="text-white">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Heure:</span>
                <span className="text-white">{formData.preferredTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-8 space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => onAgreeToTermsChange(e.target.checked)}
              className="mt-1 h-4 w-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              J'accepte les{' '}
              <a href="#" className="text-yellow-400 hover:underline">
                conditions générales de service
              </a>{' '}
              et la{' '}
              <a href="#" className="text-yellow-400 hover:underline">
                politique de confidentialité
              </a>
              . <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="marketing"
              checked={agreeToMarketing}
              onChange={(e) => onAgreeToMarketingChange(e.target.checked)}
              className="mt-1 h-4 w-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
            />
            <label htmlFor="marketing" className="text-sm text-gray-300">
              J'accepte de recevoir des communications marketing et des offres spéciales par email.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;