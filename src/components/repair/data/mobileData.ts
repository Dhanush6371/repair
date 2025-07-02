import { DeviceOption, BrandOption, ProblemOption } from '../types';

export const MOBILE_CATEGORIES: DeviceOption[] = [
  {
    id: 'smartphone',
    name: 'Smartphones',
    icon: '📱',
    description: 'iPhone, Android, etc.'
  },
  {
    id: 'tablet',
    name: 'Tablettes',
    icon: '📱',
    description: 'iPad, Android tablets, etc.'
  }
];

export const MOBILE_BRANDS: Record<string, BrandOption[]> = {
  smartphone: [
    {
      id: 'apple',
      name: 'Apple',
      logo: '🍎',
      models: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11', 'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X', 'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7']
    },
    {
      id: 'samsung',
      name: 'Samsung',
      logo: '📱',
      models: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23', 'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22', 'Galaxy Note 20 Ultra', 'Galaxy Note 20', 'Galaxy A54', 'Galaxy A34', 'Galaxy A14', 'Galaxy Z Fold 5', 'Galaxy Z Flip 5']
    },
    {
      id: 'google',
      name: 'Google',
      logo: '🔍',
      models: ['Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro', 'Pixel 7', 'Pixel 6 Pro', 'Pixel 6', 'Pixel 5', 'Pixel 4 XL', 'Pixel 4']
    },
    {
      id: 'xiaomi',
      name: 'Xiaomi',
      logo: '📱',
      models: ['Mi 13 Ultra', 'Mi 13 Pro', 'Mi 13', 'Mi 12 Ultra', 'Mi 12 Pro', 'Mi 12', 'Redmi Note 12 Pro', 'Redmi Note 12', 'Redmi Note 11 Pro', 'Redmi Note 11']
    },
    {
      id: 'oneplus',
      name: 'OnePlus',
      logo: '1️⃣',
      models: ['OnePlus 12', 'OnePlus 11', 'OnePlus 10 Pro', 'OnePlus 10T', 'OnePlus 9 Pro', 'OnePlus 9', 'OnePlus 8 Pro', 'OnePlus 8T']
    },
    {
      id: 'huawei',
      name: 'Huawei',
      logo: '📱',
      models: ['P60 Pro', 'P60', 'P50 Pro', 'P50', 'Mate 50 Pro', 'Mate 50', 'Nova 11', 'Nova 10']
    }
  ],
  tablet: [
    {
      id: 'apple',
      name: 'Apple',
      logo: '🍎',
      models: ['iPad Pro 12.9" (6e gen)', 'iPad Pro 11" (4e gen)', 'iPad Air (5e gen)', 'iPad (10e gen)', 'iPad mini (6e gen)', 'iPad Pro 12.9" (5e gen)', 'iPad Pro 11" (3e gen)', 'iPad Air (4e gen)', 'iPad (9e gen)']
    },
    {
      id: 'samsung',
      name: 'Samsung',
      logo: '📱',
      models: ['Galaxy Tab S9 Ultra', 'Galaxy Tab S9+', 'Galaxy Tab S9', 'Galaxy Tab S8 Ultra', 'Galaxy Tab S8+', 'Galaxy Tab S8', 'Galaxy Tab A8', 'Galaxy Tab A7']
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: '🪟',
      models: ['Surface Pro 9', 'Surface Pro 8', 'Surface Go 3', 'Surface Pro X']
    },
    {
      id: 'lenovo',
      name: 'Lenovo',
      logo: '💻',
      models: ['Tab P12 Pro', 'Tab P11 Plus', 'Tab M10 Plus', 'Tab M8']
    }
  ]
};

export const MOBILE_PROBLEMS: ProblemOption[] = [
  {
    id: 'screen-broken',
    title: 'Écran Cassé/Fissuré',
    description: 'Écran fissuré, cassé ou ne répond pas au toucher',
    estimatedPrice: '80€ - 350€',
    estimatedTime: '1-2 heures'
  },
  {
    id: 'battery-issue',
    title: 'Problème de Batterie',
    description: 'Batterie qui se décharge rapidement ou ne charge pas',
    estimatedPrice: '60€ - 120€',
    estimatedTime: '30-60 minutes'
  },
  {
    id: 'water-damage',
    title: 'Dégât des Eaux',
    description: 'Appareil mouillé ou endommagé par l\'eau',
    estimatedPrice: '100€ - 250€',
    estimatedTime: '2-4 heures'
  },
  {
    id: 'charging-port',
    title: 'Port de Charge Défaillant',
    description: 'Problème avec le port de charge ou le câble',
    estimatedPrice: '50€ - 100€',
    estimatedTime: '1-2 heures'
  },
  {
    id: 'camera-issue',
    title: 'Problème de Caméra',
    description: 'Caméra floue, ne fonctionne pas ou objectif cassé',
    estimatedPrice: '70€ - 180€',
    estimatedTime: '1-3 heures'
  },
  {
    id: 'speaker-microphone',
    title: 'Haut-parleur/Microphone',
    description: 'Problèmes audio ou de microphone',
    estimatedPrice: '40€ - 90€',
    estimatedTime: '1-2 heures'
  },
  {
    id: 'software-issue',
    title: 'Problème Logiciel',
    description: 'Bugs, lenteur, problèmes de système',
    estimatedPrice: '30€ - 80€',
    estimatedTime: '30-90 minutes'
  },
  {
    id: 'other',
    title: 'Autre Problème',
    description: 'Décrivez votre problème spécifique',
    estimatedPrice: 'Sur devis',
    estimatedTime: 'Variable'
  }
];