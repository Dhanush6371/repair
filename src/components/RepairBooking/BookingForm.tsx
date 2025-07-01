import React from 'react';
import { BookingFormData } from './types';

interface BookingFormProps {
  formData: BookingFormData;
  onFormDataChange: (data: Partial<BookingFormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({
  formData,
  onFormDataChange,
  onSubmit,
  isSubmitting
}) => {
  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('customerInfo.')) {
      const customerField = field.split('.')[1];
      onFormDataChange({
        customerInfo: {
          ...formData.customerInfo,
          [customerField]: value
        }
      });
    } else {
      onFormDataChange({ [field]: value });
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
        Informations de réservation
      </h3>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Customer Information */}
        <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4">Informations personnelles</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.customerInfo.name}
                onChange={(e) => handleInputChange('customerInfo.name', e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.customerInfo.email}
                onChange={(e) => handleInputChange('customerInfo.email', e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="votre.email@exemple.com"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.customerInfo.phone}
                onChange={(e) => handleInputChange('customerInfo.phone', e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="+33 1 23 45 67 89"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Adresse
              </label>
              <input
                type="text"
                value={formData.customerInfo.address}
                onChange={(e) => handleInputChange('customerInfo.address', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Votre adresse complète"
              />
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4">Détails du rendez-vous</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Date souhaitée <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                min={getMinDate()}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Heure souhaitée <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.appointmentTime}
                onChange={(e) => handleInputChange('appointmentTime', e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
              >
                <option value="">Sélectionner l'heure</option>
                {generateTimeSlots().map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Urgence
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => handleInputChange('urgency', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
              >
                <option value="standard">Standard (2-3 jours)</option>
                <option value="express">Express (+50€, même jour)</option>
                <option value="emergency">Urgence (+100€, 2h)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4">Notes supplémentaires</h4>
          <textarea
            value={formData.additionalNotes}
            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
            placeholder="Décrivez le problème en détail, mentionnez si vous avez des accessoires (chargeur, étui, etc.), ou toute autre information importante..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                <span>Réservation en cours...</span>
              </>
            ) : (
              <>
                <span>📅</span>
                <span>Confirmer la réservation</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;