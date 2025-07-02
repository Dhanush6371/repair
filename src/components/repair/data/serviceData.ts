export const SERVICE_TYPES = [
  {
    id: 'express',
    name: 'Service Express',
    description: 'Réparation prioritaire (même jour)',
    price: '+30€',
    duration: 'Même jour'
  },
  {
    id: 'standard',
    name: 'Service Standard',
    description: 'Réparation normale (1-3 jours)',
    price: 'Inclus',
    duration: '1-3 jours'
  },
  {
    id: 'economy',
    name: 'Service Économique',
    description: 'Réparation économique (3-7 jours)',
    price: '-20€',
    duration: '3-7 jours'
  }
];

export const URGENCY_LEVELS = [
  {
    id: 'urgent',
    name: 'Urgent',
    description: 'J\'ai besoin de mon appareil aujourd\'hui',
    icon: '🚨'
  },
  {
    id: 'normal',
    name: 'Normal',
    description: 'Je peux attendre quelques jours',
    icon: '⏰'
  },
  {
    id: 'flexible',
    name: 'Flexible',
    description: 'Je ne suis pas pressé',
    icon: '📅'
  }
];

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];