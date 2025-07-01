import React from 'react';
import { AlertCircle, Clock, Home, MapPin } from 'lucide-react';

interface IssueSelectorProps {
  deviceCategory: string;
  selectedIssues: string[];
  urgency: string;
  serviceType: string;
  notes: string;
  onIssuesChange: (issues: string[]) => void;
  onUrgencyChange: (urgency: string) => void;
  onServiceTypeChange: (serviceType: string) => void;
  onNotesChange: (notes: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const IssueSelector: React.FC<IssueSelectorProps> = ({
  deviceCategory,
  selectedIssues,
  urgency,
  serviceType,
  notes,
  onIssuesChange,
  onUrgencyChange,
  onServiceTypeChange,
  onNotesChange,
  onNext,
  onBack
}) => {
  const getIssues = () => {
    switch (deviceCategory) {
      case 'smartphone':
      case 'tablet':
        return [
          'Écran cassé/fissuré', 'Problème de batterie', 'Problème de charge',
          'Caméra défectueuse', 'Haut-parleur/Micro', 'Boutons défectueux',
          'Problème tactile', 'Dégât des eaux', 'Problème logiciel',
          'Port de charge défectueux', 'Problème WiFi/Bluetooth', 'Autre'
        ];
      case 'laptop':
        return [
          'Écran cassé/défectueux', 'Clavier défectueux', 'Trackpad/Souris',
          'Problème de batterie', 'Surchauffe', 'Problème de charge',
          'Disque dur/SSD défectueux', 'Mémoire RAM', 'Virus/Malware',
          'Système d\'exploitation', 'Ventilateur bruyant', 'Ports USB/HDMI',
          'Problème WiFi', 'Performance lente', 'Autre'
        ];
      case 'console':
        return [
          'Ne s\'allume pas', 'Surchauffe', 'Problème de lecture disque',
          'Manette défectueuse', 'Problème HDMI/Affichage', 'Ventilateur bruyant',
          'Problème réseau', 'Mise à jour système', 'Stockage défectueux',
          'Problème audio', 'Autre'
        ];
      default:
        return ['Autre'];
    }
  };

  const issues = getIssues();

  const urgencyOptions = [
    { id: 'low', label: 'Pas urgent', description: '5-7 jours ouvrables' },
    { id: 'medium', label: 'Modéré', description: '2-3 jours ouvrables' },
    { id: 'high', label: 'Urgent', description: 'Même jour/24h' }
  ];

  const serviceOptions = [
    {
      id: 'drop-off',
      label: 'Dépôt en magasin',
      icon: <MapPin className="h-5 w-5" />,
      description: 'Apportez votre appareil à notre magasin'
    },
    {
      id: 'pickup',
      label: 'Collecte à domicile',
      icon: <Home className="h-5 w-5" />,
      description: 'Nous venons récupérer votre appareil'
    }
  ];

  const toggleIssue = (issue: string) => {
    if (selectedIssues.includes(issue)) {
      onIssuesChange(selectedIssues.filter(i => i !== issue));
    } else {
      onIssuesChange([...selectedIssues, issue]);
    }
  };

  const handleNext = () => {
    if (selectedIssues.length > 0 && urgency && serviceType) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      {/* Issues Selection */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Quels problèmes rencontrez-vous ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {issues.map((issue) => (
            <button
              key={issue}
              onClick={() => toggleIssue(issue)}
              className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                selectedIssues.includes(issue)
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                  : 'border-gray-600 hover:border-gray-500 bg-gray-700/50 text-white'
              }`}
            >
              <span className="font-medium text-sm">{issue}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Urgency Selection */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Clock className="h-5 w-5 mr-2 text-yellow-400" />
          Niveau d'urgence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {urgencyOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onUrgencyChange(option.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                urgency === option.id
                  ? 'border-yellow-400 bg-yellow-400/10'
                  : 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
              }`}
            >
              <div className="text-left">
                <h4 className={`font-semibold ${urgency === option.id ? 'text-yellow-400' : 'text-white'}`}>
                  {option.label}
                </h4>
                <p className="text-gray-400 text-sm">{option.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Service Type Selection */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">
          Comment souhaitez-vous procéder ?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {serviceOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onServiceTypeChange(option.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                serviceType === option.id
                  ? 'border-yellow-400 bg-yellow-400/10'
                  : 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`${serviceType === option.id ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {option.icon}
                </div>
                <div className="text-left">
                  <h4 className={`font-semibold ${serviceType === option.id ? 'text-yellow-400' : 'text-white'}`}>
                    {option.label}
                  </h4>
                  <p className="text-gray-400 text-sm">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">
          Notes supplémentaires (optionnel)
        </h3>
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Décrivez plus en détail le problème ou ajoutez des informations importantes..."
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-vertical"
          rows={4}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Retour
        </button>
        <button
          onClick={handleNext}
          disabled={selectedIssues.length === 0 || !urgency || !serviceType}
          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Continuer
        </button>
      </div>
    </div>
  );
};

export default IssueSelector;