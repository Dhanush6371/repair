import { DeviceType, Brand } from './types';

export const mobileDeviceTypes: DeviceType[] = [
  {
    id: 'smartphone',
    name: 'Smartphones',
    icon: '📱',
    description: 'iPhone, Android, et autres smartphones'
  },
  {
    id: 'tablet',
    name: 'Tablettes',
    icon: '📱',
    description: 'iPad, tablettes Android, et autres tablettes'
  }
];

export const laptopDeviceTypes: DeviceType[] = [
  {
    id: 'laptop',
    name: 'Ordinateurs Portables',
    icon: '💻',
    description: 'MacBook, PC portables, ultrabooks'
  },
  {
    id: 'console',
    name: 'Consoles de Jeu',
    icon: '🎮',
    description: 'PlayStation, Xbox, Nintendo Switch'
  }
];

export const mobileBrands: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    logo: '🍎',
    models: [
      {
        id: 'iphone-15-pro-max',
        name: 'iPhone 15 Pro Max',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'screen-replacement',
            name: 'Remplacement d\'écran',
            description: 'Écran cassé, fissuré ou qui ne répond pas',
            estimatedPrice: '299€ - 399€',
            estimatedTime: '2-3 heures',
            difficulty: 'medium'
          },
          {
            id: 'battery-replacement',
            name: 'Remplacement de batterie',
            description: 'Batterie qui se décharge rapidement ou ne tient plus la charge',
            estimatedPrice: '89€ - 129€',
            estimatedTime: '1-2 heures',
            difficulty: 'easy'
          },
          {
            id: 'camera-repair',
            name: 'Réparation caméra',
            description: 'Caméra floue, ne fonctionne pas ou objectif cassé',
            estimatedPrice: '149€ - 249€',
            estimatedTime: '2-4 heures',
            difficulty: 'medium'
          },
          {
            id: 'water-damage',
            name: 'Dégâts des eaux',
            description: 'Téléphone tombé dans l\'eau ou exposé à l\'humidité',
            estimatedPrice: '199€ - 399€',
            estimatedTime: '24-48 heures',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'iphone-14-pro',
        name: 'iPhone 14 Pro',
        image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'screen-replacement',
            name: 'Remplacement d\'écran',
            description: 'Écran cassé, fissuré ou qui ne répond pas',
            estimatedPrice: '279€ - 359€',
            estimatedTime: '2-3 heures',
            difficulty: 'medium'
          },
          {
            id: 'battery-replacement',
            name: 'Remplacement de batterie',
            description: 'Batterie qui se décharge rapidement',
            estimatedPrice: '89€ - 119€',
            estimatedTime: '1-2 heures',
            difficulty: 'easy'
          }
        ]
      }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '📱',
    models: [
      {
        id: 'galaxy-s24-ultra',
        name: 'Galaxy S24 Ultra',
        image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'screen-replacement',
            name: 'Remplacement d\'écran',
            description: 'Écran AMOLED cassé ou fissuré',
            estimatedPrice: '259€ - 339€',
            estimatedTime: '2-3 heures',
            difficulty: 'medium'
          },
          {
            id: 'battery-replacement',
            name: 'Remplacement de batterie',
            description: 'Problèmes de batterie et de charge',
            estimatedPrice: '79€ - 109€',
            estimatedTime: '1-2 heures',
            difficulty: 'easy'
          }
        ]
      }
    ]
  }
];

export const tabletBrands: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    logo: '🍎',
    models: [
      {
        id: 'ipad-pro-12',
        name: 'iPad Pro 12.9"',
        image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'screen-replacement',
            name: 'Remplacement d\'écran',
            description: 'Écran Liquid Retina cassé ou fissuré',
            estimatedPrice: '399€ - 599€',
            estimatedTime: '3-4 heures',
            difficulty: 'hard'
          },
          {
            id: 'battery-replacement',
            name: 'Remplacement de batterie',
            description: 'Batterie qui ne tient plus la charge',
            estimatedPrice: '149€ - 199€',
            estimatedTime: '2-3 heures',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];

export const laptopBrands: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    logo: '🍎',
    models: [
      {
        id: 'macbook-pro-16',
        name: 'MacBook Pro 16"',
        image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'screen-replacement',
            name: 'Remplacement d\'écran',
            description: 'Écran Retina cassé ou lignes sur l\'affichage',
            estimatedPrice: '599€ - 899€',
            estimatedTime: '4-6 heures',
            difficulty: 'hard'
          },
          {
            id: 'keyboard-replacement',
            name: 'Remplacement clavier',
            description: 'Touches qui ne fonctionnent pas ou clavier défaillant',
            estimatedPrice: '299€ - 449€',
            estimatedTime: '3-4 heures',
            difficulty: 'medium'
          },
          {
            id: 'battery-replacement',
            name: 'Remplacement de batterie',
            description: 'Batterie gonflée ou qui ne tient plus la charge',
            estimatedPrice: '199€ - 299€',
            estimatedTime: '2-3 heures',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'dell',
    name: 'Dell',
    logo: '💻',
    models: [
      {
        id: 'xps-15',
        name: 'XPS 15',
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'screen-replacement',
            name: 'Remplacement d\'écran',
            description: 'Écran LCD/OLED endommagé',
            estimatedPrice: '399€ - 699€',
            estimatedTime: '3-5 heures',
            difficulty: 'medium'
          },
          {
            id: 'motherboard-repair',
            name: 'Réparation carte mère',
            description: 'Problèmes de démarrage ou composants défaillants',
            estimatedPrice: '299€ - 599€',
            estimatedTime: '24-48 heures',
            difficulty: 'hard'
          }
        ]
      }
    ]
  }
];

export const consoleBrands: Brand[] = [
  {
    id: 'sony',
    name: 'Sony PlayStation',
    logo: '🎮',
    models: [
      {
        id: 'ps5',
        name: 'PlayStation 5',
        image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'disc-drive-repair',
            name: 'Réparation lecteur disque',
            description: 'Lecteur qui ne lit pas les disques ou fait du bruit',
            estimatedPrice: '149€ - 249€',
            estimatedTime: '2-4 heures',
            difficulty: 'medium'
          },
          {
            id: 'overheating-repair',
            name: 'Réparation surchauffe',
            description: 'Console qui s\'éteint à cause de la surchauffe',
            estimatedPrice: '99€ - 179€',
            estimatedTime: '2-3 heures',
            difficulty: 'easy'
          }
        ]
      }
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft Xbox',
    logo: '🎮',
    models: [
      {
        id: 'xbox-series-x',
        name: 'Xbox Series X',
        image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=400',
        repairTypes: [
          {
            id: 'disc-drive-repair',
            name: 'Réparation lecteur disque',
            description: 'Problèmes de lecture de disques',
            estimatedPrice: '139€ - 229€',
            estimatedTime: '2-4 heures',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];