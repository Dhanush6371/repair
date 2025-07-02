import { DeviceOption, BrandOption, ProblemOption } from '../types';

export const LAPTOP_CATEGORIES: DeviceOption[] = [
  {
    id: 'laptop',
    name: 'Ordinateurs Portables',
    icon: '💻',
    description: 'MacBook, PC portables, etc.'
  },
  {
    id: 'console',
    name: 'Consoles de Jeu',
    icon: '🎮',
    description: 'PlayStation, Xbox, Nintendo, etc.'
  }
];

export const LAPTOP_BRANDS: Record<string, BrandOption[]> = {
  laptop: [
    {
      id: 'apple',
      name: 'Apple',
      logo: '🍎',
      models: ['MacBook Pro 16" M3 Max', 'MacBook Pro 14" M3 Pro', 'MacBook Air 15" M2', 'MacBook Air 13" M2', 'MacBook Pro 16" M2 Max', 'MacBook Pro 14" M2 Pro', 'MacBook Air 13" M1']
    },
    {
      id: 'dell',
      name: 'Dell',
      logo: '💻',
      models: ['XPS 17', 'XPS 15', 'XPS 13', 'Inspiron 15 7000', 'Inspiron 14 5000', 'Latitude 9000', 'Precision 7000']
    },
    {
      id: 'hp',
      name: 'HP',
      logo: '🖥️',
      models: ['Spectre x360 16', 'Spectre x360 14', 'Envy 17', 'Envy 15', 'Pavilion 15', 'EliteBook 850', 'ProBook 450']
    },
    {
      id: 'lenovo',
      name: 'Lenovo',
      logo: '💻',
      models: ['ThinkPad X1 Carbon', 'ThinkPad T14', 'ThinkPad P1', 'IdeaPad 5', 'Legion 5', 'Yoga 9i', 'Yoga 7i']
    },
    {
      id: 'asus',
      name: 'ASUS',
      logo: '⚡',
      models: ['ROG Zephyrus G16', 'ROG Strix G15', 'ZenBook Pro 16X', 'ZenBook 14', 'VivoBook S15', 'TUF Gaming A15']
    },
    {
      id: 'acer',
      name: 'Acer',
      logo: '🌟',
      models: ['Swift X 14', 'Swift 3', 'Aspire 5', 'Predator Helios 300', 'Nitro 5', 'ConceptD 7']
    },
    {
      id: 'msi',
      name: 'MSI',
      logo: '🐉',
      models: ['GE78 Raider', 'GS77 Stealth', 'Creator Z17', 'Modern 15', 'Katana 15', 'Bravo 15']
    }
  ],
  console: [
    {
      id: 'sony',
      name: 'Sony PlayStation',
      logo: '🎮',
      models: ['PlayStation 5', 'PlayStation 5 Digital', 'PlayStation 4 Pro', 'PlayStation 4', 'PlayStation 4 Slim']
    },
    {
      id: 'microsoft',
      name: 'Microsoft Xbox',
      logo: '🎮',
      models: ['Xbox Series X', 'Xbox Series S', 'Xbox One X', 'Xbox One S', 'Xbox One']
    },
    {
      id: 'nintendo',
      name: 'Nintendo',
      logo: '🎮',
      models: ['Nintendo Switch OLED', 'Nintendo Switch', 'Nintendo Switch Lite', 'Nintendo 3DS XL', 'Nintendo 3DS']
    },
    {
      id: 'steam',
      name: 'Steam Deck',
      logo: '🎮',
      models: ['Steam Deck 64GB', 'Steam Deck 256GB', 'Steam Deck 512GB']
    }
  ]
};

export const LAPTOP_PROBLEMS: ProblemOption[] = [
  {
    id: 'screen-issue',
    title: 'Problème d\'Écran',
    description: 'Écran cassé, lignes, pixels morts ou rétroéclairage',
    estimatedPrice: '150€ - 500€',
    estimatedTime: '2-4 heures'
  },
  {
    id: 'keyboard-trackpad',
    title: 'Clavier/Trackpad',
    description: 'Touches qui ne fonctionnent pas ou trackpad défaillant',
    estimatedPrice: '80€ - 200€',
    estimatedTime: '1-3 heures'
  },
  {
    id: 'battery-charging',
    title: 'Batterie/Charge',
    description: 'Problème de batterie ou de chargeur',
    estimatedPrice: '100€ - 250€',
    estimatedTime: '1-2 heures'
  },
  {
    id: 'overheating',
    title: 'Surchauffe',
    description: 'Ordinateur qui chauffe trop ou ventilateur bruyant',
    estimatedPrice: '60€ - 150€',
    estimatedTime: '2-3 heures'
  },
  {
    id: 'performance-slow',
    title: 'Performance Lente',
    description: 'Ordinateur lent, freeze ou plantages',
    estimatedPrice: '50€ - 120€',
    estimatedTime: '1-2 heures'
  },
  {
    id: 'hard-drive',
    title: 'Disque Dur/SSD',
    description: 'Problème de stockage ou récupération de données',
    estimatedPrice: '80€ - 300€',
    estimatedTime: '2-6 heures'
  },
  {
    id: 'motherboard',
    title: 'Carte Mère',
    description: 'Problème de carte mère ou composants internes',
    estimatedPrice: '200€ - 600€',
    estimatedTime: '4-8 heures'
  },
  {
    id: 'virus-malware',
    title: 'Virus/Malware',
    description: 'Nettoyage de virus et optimisation système',
    estimatedPrice: '40€ - 80€',
    estimatedTime: '1-2 heures'
  },
  {
    id: 'other',
    title: 'Autre Problème',
    description: 'Décrivez votre problème spécifique',
    estimatedPrice: 'Sur devis',
    estimatedTime: 'Variable'
  }
];