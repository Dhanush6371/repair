import React from 'react';
import { Check, Clock, MapPin, Home, Phone, Mail, MessageSquare } from 'lucide-react';
import { BookingData } from './index';

interface BookingSummaryProps {
  bookingData: BookingData;
  onBack: () => void;
  onConfirm: () => void;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  bookingData,
  onBack,
  onConfirm
}) => {
  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'low': return 'Pas urgent (5-7 jours)';
      case 'medium': return 'Modéré (2-3 jours)';
      case 'high': return 'Urgent (même jour/24h)';
      default: return urgency;
    }
  };

  const getServiceTypeLabel = (serviceType: string) => {
    switch (serviceType) {
      case 'drop-off': return 'Dépôt en magasin';
      case 'pickup': return 'Collecte à domicile';
      default: return serviceType;
    }
  };

  const getContactMethodIcon = (method: string) => {
    switch (method) {
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'sms': return <MessageSquare className="h-4 w-4" />;
      default: return <Phone className="h-4 w-4" />;
    }
  };

  const getContactMethodLabel = (method: string) => {
    switch (method) {
      case 'phone': return 'Téléphone';
      case 'email': return 'Email';
      case 'sms': return 'SMS';
      default: return method;
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Récapitulatif de votre réservation
      </h2>

      <div className="space-y-6">
        {/* Device Information */}
        <div className="bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            Informations de l'appareil
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Type :</span>
              <span className="text-white ml-2 capitalize">{bookingData.deviceCategory}</span>
            </div>
            <div>
              <span className="text-gray-400">Marque :</span>
              <span className="text-white ml-2">{bookingData.brand}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-gray-400">Modèle :</span>
              <span className="text-white ml-2">{bookingData.model}</span>
            </div>
          </div>
        </div>

        {/* Issues */}
        <div className="bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            Problèmes identifiés
          </h3>
          <div className="flex flex-wrap gap-2">
            {bookingData.issues.map((issue, index) => (
              <span
                key={index}
                className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-400/30"
              >
                {issue}
              </span>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            Détails du service
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-400">Urgence :</span>
              <span className="text-white ml-2">{getUrgencyLabel(bookingData.urgency)}</span>
            </div>
            <div className="flex items-center">
              {bookingData.serviceType === 'pickup' ? 
                <Home className="h-4 w-4 text-gray-400 mr-2" /> : 
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              }
              <span className="text-gray-400">Service :</span>
              <span className="text-white ml-2">{getServiceTypeLabel(bookingData.serviceType)}</span>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            Informations de contact
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-400">Nom :</span>
              <span className="text-white ml-2">{bookingData.customerInfo.name}</span>
            </div>
            <div>
              <span className="text-gray-400">Email :</span>
              <span className="text-white ml-2">{bookingData.customerInfo.email}</span>
            </div>
            <div>
              <span className="text-gray-400">Téléphone :</span>
              <span className="text-white ml-2">{bookingData.customerInfo.phone}</span>
            </div>
            {bookingData.customerInfo.address && (
              <div>
                <span className="text-gray-400">Adresse :</span>
                <span className="text-white ml-2">{bookingData.customerInfo.address}</span>
              </div>
            )}
            <div className="flex items-center">
              {getContactMethodIcon(bookingData.customerInfo.preferredContact)}
              <span className="text-gray-400 ml-2">Contact préféré :</span>
              <span className="text-white ml-2">{getContactMethodLabel(bookingData.customerInfo.preferredContact)}</span>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        {bookingData.notes && (
          <div className="bg-gray-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              Notes supplémentaires
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{bookingData.notes}</p>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Prochaines étapes
          </h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>• Nous vous contacterons dans les 2 heures pour confirmer votre réservation</li>
            <li>• Un technicien évaluera votre appareil et vous fournira un devis détaillé</li>
            <li>• La réparation commencera après votre approbation du devis</li>
            <li>• Vous serez informé du statut de la réparation à chaque étape</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Retour
        </button>
        <button
          onClick={onConfirm}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center space-x-2"
        >
          <Check className="h-5 w-5" />
          <span>Confirmer la réservation</span>
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;