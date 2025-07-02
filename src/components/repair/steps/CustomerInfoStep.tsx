import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

interface CustomerInfoStepProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  onFirstNameChange: (firstName: string) => void;
  onLastNameChange: (lastName: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
}

const CustomerInfoStep: React.FC<CustomerInfoStepProps> = ({
  firstName,
  lastName,
  email,
  phone,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Vos informations de contact
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Nous avons besoin de ces informations pour vous contacter concernant votre réparation
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Prénom <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={firstName}
                onChange={(e) => onFirstNameChange(e.target.value)}
                placeholder="Votre prénom"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={lastName}
                onChange={(e) => onLastNameChange(e.target.value)}
                placeholder="Votre nom"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Adresse email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="votre.email@exemple.com"
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Numéro de téléphone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder="+33 1 23 45 67 89"
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoStep;