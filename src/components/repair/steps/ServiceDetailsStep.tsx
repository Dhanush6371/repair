import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { SERVICE_TYPES, TIME_SLOTS } from '../data/serviceData';

interface ServiceDetailsStepProps {
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  onServiceTypeChange: (serviceType: string) => void;
  onPreferredDateChange: (date: string) => void;
  onPreferredTimeChange: (time: string) => void;
}

const ServiceDetailsStep: React.FC<ServiceDetailsStepProps> = ({
  serviceType,
  preferredDate,
  preferredTime,
  onServiceTypeChange,
  onPreferredDateChange,
  onPreferredTimeChange
}) => {
  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Détails du service
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Choisissez le type de service et planifiez votre rendez-vous
        </p>
      </div>

      {/* Service Type Selection */}
      <div className="max-w-4xl mx-auto">
        <label className="block text-white text-sm font-medium mb-4">
          Type de service <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SERVICE_TYPES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onServiceTypeChange(service.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-left ${
                serviceType === service.id
                  ? 'border-yellow-400 bg-yellow-400/10 shadow-lg'
                  : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {service.name}
                </h3>
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  service.price.includes('+') ? 'bg-red-500/20 text-red-400' :
                  service.price.includes('-') ? 'bg-green-500/20 text-green-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {service.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                {service.description}
              </p>
              <p className="text-yellow-400 text-sm font-medium">
                Délai: {service.duration}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Date Selection */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Date préférée <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => onPreferredDateChange(e.target.value)}
                min={today}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Heure préférée <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={preferredTime}
                onChange={(e) => onPreferredTimeChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
                required
              >
                <option value="">Sélectionner une heure</option>
                {TIME_SLOTS.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsStep;