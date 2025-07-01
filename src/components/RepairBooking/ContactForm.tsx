import React from 'react';
import { User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { BookingData } from './index';

interface ContactFormProps {
  customerInfo: BookingData['customerInfo'];
  onUpdate: (field: keyof BookingData['customerInfo'], value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  customerInfo,
  onUpdate,
  onNext,
  onBack
}) => {
  const handleNext = () => {
    if (customerInfo.name && customerInfo.email && customerInfo.phone) {
      onNext();
    }
  };

  const isFormValid = customerInfo.name && customerInfo.email && customerInfo.phone;

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Informations de contact
      </h2>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={customerInfo.name}
              onChange={(e) => onUpdate('name', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Entrez votre nom complet"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Adresse email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              value={customerInfo.email}
              onChange={(e) => onUpdate('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Numéro de téléphone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => onUpdate('phone', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="+33 1 23 45 67 89"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Adresse
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <textarea
              value={customerInfo.address}
              onChange={(e) => onUpdate('address', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
              placeholder="Votre adresse complète (requis pour la collecte à domicile)"
              rows={3}
            />
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-white text-sm font-medium mb-4">
            Méthode de contact préférée
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'phone', label: 'Téléphone', icon: <Phone className="h-4 w-4" /> },
              { id: 'email', label: 'Email', icon: <Mail className="h-4 w-4" /> },
              { id: 'sms', label: 'SMS', icon: <MessageSquare className="h-4 w-4" /> }
            ].map((method) => (
              <button
                key={method.id}
                onClick={() => onUpdate('preferredContact', method.id)}
                className={`p-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                  customerInfo.preferredContact === method.id
                    ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                    : 'border-gray-600 hover:border-gray-500 bg-gray-700/50 text-white'
                }`}
              >
                {method.icon}
                <span className="font-medium text-sm">{method.label}</span>
              </button>
            ))}
          </div>
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
          onClick={handleNext}
          disabled={!isFormValid}
          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default ContactForm;