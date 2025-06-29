import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Laptop, Check, Search, Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Device {
  id: string;
  name: string;
  icon: React.ReactNode;
  type: 'mobile' | 'laptop';
}

interface Brand {
  id: string;
  name: string;
  logo: string;
  devices: string[];
}

interface Model {
  id: string;
  name: string;
  image: string;
  brandId: string;
  deviceType: 'mobile' | 'laptop';
}

interface RepairService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  warranty: string;
  eligible?: boolean;
  deviceType: 'mobile' | 'laptop' | 'both';
}

interface RepairBookingProps {
  deviceType?: 'mobile' | 'laptop';
  onBackToHome?: () => void;
}

const RepairBooking: React.FC<RepairBookingProps> = ({ deviceType, onBackToHome }) => {
  // Declare devices array first
  const devices: Device[] = [
    {
      id: 'mobile',
      name: 'Téléphone Mobile',
      icon: <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      type: 'mobile'
    },
    {
      id: 'laptop',
      name: 'Ordinateur Portable',
      icon: <Laptop className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      type: 'laptop'
    }
  ];

  // State initialization - for laptops, start at step 2 (model), for mobiles step 2 (brand), otherwise step 1
  const getInitialStep = () => {
    if (!deviceType) return 1;
    return 2; // Both start at step 2, but different content
  };

  const [currentStep, setCurrentStep] = useState(getInitialStep());
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(
    deviceType ? devices.find(d => d.type === deviceType) || null : null
  );
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    name: '',
    firstName: '',
    email: '',
    phone: ''
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const brands: Brand[] = [
    {
      id: 'apple',
      name: 'APPLE',
      logo: '🍎',
      devices: ['mobile', 'laptop']
    },
    {
      id: 'samsung',
      name: 'SAMSUNG',
      logo: '📱',
      devices: ['mobile', 'laptop']
    },
    {
      id: 'xiaomi',
      name: 'XIAOMI',
      logo: '📲',
      devices: ['mobile']
    },
    {
      id: 'dell',
      name: 'DELL',
      logo: '💻',
      devices: ['laptop']
    },
    {
      id: 'hp',
      name: 'HP',
      logo: '🖥️',
      devices: ['laptop']
    },
    {
      id: 'lenovo',
      name: 'LENOVO',
      logo: '💻',
      devices: ['laptop']
    }
  ];

  const models: Model[] = [
    // Mobile models
    {
      id: 'iphone-15',
      name: 'iPhone 15 Pro',
      image: '📱',
      brandId: 'apple',
      deviceType: 'mobile'
    },
    {
      id: 'iphone-14',
      name: 'iPhone 14',
      image: '📱',
      brandId: 'apple',
      deviceType: 'mobile'
    },
    {
      id: 'galaxy-s24',
      name: 'Galaxy S24 Ultra',
      image: '📱',
      brandId: 'samsung',
      deviceType: 'mobile'
    },
    {
      id: 'galaxy-tab-s9',
      name: 'Galaxy Tab S9 (X710/X716)',
      image: '📱',
      brandId: 'samsung',
      deviceType: 'mobile'
    },
    {
      id: 'xiaomi-13',
      name: 'Xiaomi 13 Pro',
      image: '📱',
      brandId: 'xiaomi',
      deviceType: 'mobile'
    },
    // Laptop models - All brands mixed together for laptops
    {
      id: 'macbook-pro-16',
      name: 'MacBook Pro 16" (2023)',
      image: '💻',
      brandId: 'apple',
      deviceType: 'laptop'
    },
    {
      id: 'macbook-pro-14',
      name: 'MacBook Pro 14" (2023)',
      image: '💻',
      brandId: 'apple',
      deviceType: 'laptop'
    },
    {
      id: 'macbook-air-15',
      name: 'MacBook Air 15" (2023)',
      image: '💻',
      brandId: 'apple',
      deviceType: 'laptop'
    },
    {
      id: 'macbook-air-13',
      name: 'MacBook Air 13" (M2)',
      image: '💻',
      brandId: 'apple',
      deviceType: 'laptop'
    },
    {
      id: 'dell-xps-13',
      name: 'Dell XPS 13 Plus',
      image: '💻',
      brandId: 'dell',
      deviceType: 'laptop'
    },
    {
      id: 'dell-xps-15',
      name: 'Dell XPS 15 (9530)',
      image: '💻',
      brandId: 'dell',
      deviceType: 'laptop'
    },
    {
      id: 'dell-inspiron',
      name: 'Dell Inspiron 15 3000',
      image: '💻',
      brandId: 'dell',
      deviceType: 'laptop'
    },
    {
      id: 'hp-pavilion-15',
      name: 'HP Pavilion 15-eh2000',
      image: '💻',
      brandId: 'hp',
      deviceType: 'laptop'
    },
    {
      id: 'hp-envy-x360',
      name: 'HP Envy x360 15',
      image: '💻',
      brandId: 'hp',
      deviceType: 'laptop'
    },
    {
      id: 'hp-spectre',
      name: 'HP Spectre x360 14',
      image: '💻',
      brandId: 'hp',
      deviceType: 'laptop'
    },
    {
      id: 'lenovo-thinkpad-x1',
      name: 'ThinkPad X1 Carbon Gen 11',
      image: '💻',
      brandId: 'lenovo',
      deviceType: 'laptop'
    },
    {
      id: 'lenovo-thinkpad-t14',
      name: 'ThinkPad T14 Gen 4',
      image: '💻',
      brandId: 'lenovo',
      deviceType: 'laptop'
    },
    {
      id: 'lenovo-ideapad',
      name: 'IdeaPad 5 Pro 16',
      image: '💻',
      brandId: 'lenovo',
      deviceType: 'laptop'
    },
    {
      id: 'samsung-galaxy-book',
      name: 'Galaxy Book3 Pro 360',
      image: '💻',
      brandId: 'samsung',
      deviceType: 'laptop'
    }
  ];

  const repairServices: RepairService[] = [
    // Mobile services
    {
      id: 'mobile-screen',
      name: 'Écran LCD compatible',
      description: 'Réparation en atelier 1 heure. Garantie 3 mois.',
      price: 299.00,
      duration: '1 heure',
      warranty: '3 mois',
      eligible: true,
      deviceType: 'mobile'
    },
    {
      id: 'sim-drawer',
      name: 'Tiroir SIM',
      description: 'Service de remplacement rapide.',
      price: 10.00,
      duration: '15 minutes',
      warranty: '1 mois',
      deviceType: 'mobile'
    },
    {
      id: 'mobile-battery',
      name: 'Remplacement de batterie',
      description: 'Batterie d\'origine avec garantie 6 mois.',
      price: 89.00,
      duration: '30 minutes',
      warranty: '6 mois',
      deviceType: 'mobile'
    },
    {
      id: 'charging-port',
      name: 'Réparation port de charge',
      description: 'Remplacement complet du port de charge.',
      price: 79.00,
      duration: '45 minutes',
      warranty: '3 mois',
      deviceType: 'mobile'
    },
    // Laptop services
    {
      id: 'laptop-screen',
      name: 'Remplacement Écran LCD',
      description: 'Remplacement d\'écran professionnel avec garantie.',
      price: 450.00,
      duration: '2-3 heures',
      warranty: '6 mois',
      eligible: true,
      deviceType: 'laptop'
    },
    {
      id: 'laptop-battery',
      name: 'Remplacement Batterie Ordinateur Portable',
      description: 'Remplacement de batterie haute qualité.',
      price: 120.00,
      duration: '1 heure',
      warranty: '12 mois',
      deviceType: 'laptop'
    },
    {
      id: 'keyboard-repair',
      name: 'Réparation/Remplacement Clavier',
      description: 'Remplacement de touche individuelle ou clavier complet.',
      price: 180.00,
      duration: '1-2 heures',
      warranty: '6 mois',
      deviceType: 'laptop'
    },
    {
      id: 'motherboard-repair',
      name: 'Réparation Carte Mère',
      description: 'Diagnostic et réparation complexe de carte mère.',
      price: 350.00,
      duration: '3-5 jours',
      warranty: '3 mois',
      deviceType: 'laptop'
    },
    {
      id: 'hard-drive-replacement',
      name: 'Mise à niveau Disque Dur/SSD',
      description: 'Mise à niveau de stockage avec migration de données.',
      price: 200.00,
      duration: '2-4 heures',
      warranty: '12 mois',
      deviceType: 'laptop'
    },
    {
      id: 'fan-cleaning',
      name: 'Nettoyage Ventilateur/Refroidissement',
      description: 'Nettoyage complet du système de refroidissement.',
      price: 80.00,
      duration: '1 heure',
      warranty: '3 mois',
      deviceType: 'laptop'
    },
    {
      id: 'port-repair',
      name: 'Réparation Ports USB/HDMI',
      description: 'Réparation ou remplacement des ports endommagés.',
      price: 150.00,
      duration: '2 heures',
      warranty: '6 mois',
      deviceType: 'laptop'
    },
    // Common services
    {
      id: 'data-recovery',
      name: 'Récupération de données',
      description: 'Service professionnel de récupération de données.',
      price: 150.00,
      duration: '2-3 jours',
      warranty: 'N/A',
      deviceType: 'both'
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const filteredBrands = brands.filter(brand => 
    selectedDevice ? brand.devices.includes(selectedDevice.id) : true
  ).filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // For laptops, show all laptop models regardless of brand
  // For mobiles, filter by selected brand
  const filteredModels = selectedDevice?.type === 'laptop'
    ? models.filter(model => model.deviceType === 'laptop')
        .filter(model => model.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : models.filter(model => 
        selectedBrand ? model.brandId === selectedBrand.id : true
      ).filter(model =>
        selectedDevice ? model.deviceType === selectedDevice.type : true
      ).filter(model =>
        model.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const availableServices = repairServices.filter(service => 
    selectedDevice ? 
      service.deviceType === selectedDevice.type || service.deviceType === 'both' 
      : true
  );

  const totalPrice = selectedServices.reduce((total, serviceId) => {
    const service = availableServices.find(s => s.id === serviceId);
    return total + (service ? service.price : 0);
  }, 0);

  // Get the maximum steps for the current device type
  const getMaxSteps = () => {
    return selectedDevice?.type === 'laptop' ? 4 : 5;
  };

  // Get the step number for services based on device type
  const getServicesStep = () => {
    return selectedDevice?.type === 'laptop' ? 3 : 4;
  };

  // Get the step number for appointment based on device type
  const getAppointmentStep = () => {
    return selectedDevice?.type === 'laptop' ? 4 : 5;
  };

  const nextStep = () => {
    const maxSteps = getMaxSteps();
    if (currentStep < maxSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      
      // If going back to step 1 but deviceType was provided, go to home instead
      if (newStep === 1 && deviceType && onBackToHome) {
        onBackToHome();
        return;
      }
      
      // Clear relevant state when going back
      if (newStep === 1) {
        setSelectedDevice(null);
        setSelectedBrand(null);
        setSelectedModel(null);
        setSelectedServices([]);
      } else if (newStep === 2) {
        if (selectedDevice?.type === 'mobile') {
          setSelectedBrand(null);
        }
        setSelectedModel(null);
        setSelectedServices([]);
      } else if (newStep === 3) {
        if (selectedDevice?.type === 'mobile') {
          setSelectedModel(null);
        }
        setSelectedServices([]);
      } else if (newStep === 4 && selectedDevice?.type === 'mobile') {
        setSelectedServices([]);
      }
      
      setCurrentStep(newStep);
      setSearchTerm(''); // Clear search term when going back
    }
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleModelSelection = (model: Model) => {
    setSelectedModel(model);
    
    // For laptops, automatically set the brand based on the selected model
    if (selectedDevice?.type === 'laptop') {
      const modelBrand = brands.find(brand => brand.id === model.brandId);
      if (modelBrand) {
        setSelectedBrand(modelBrand);
      }
    }
    
    nextStep();
  };

  const renderStepIndicator = () => {
    const maxSteps = getMaxSteps();
    const steps = Array.from({ length: maxSteps }, (_, i) => i + 1);
    
    return (
      <div className="flex justify-center mb-4 md:mb-8 overflow-x-auto py-2">
        <div className="flex items-center space-x-2 md:space-x-4 px-2">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 text-xs sm:text-sm ${
                step <= currentStep 
                  ? 'bg-yellow-400 border-yellow-400 text-gray-900' 
                  : 'border-gray-300 text-gray-400'
              }`}>
                {step < currentStep ? <Check className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" /> : step}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-4 sm:w-6 md:w-12 h-0.5 ${
                  step < currentStep ? 'bg-yellow-400' : 'bg-gray-300'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderStepLabels = () => {
    const isLaptop = selectedDevice?.type === 'laptop';
    
    return (
      <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
        <div className={`grid ${isLaptop ? 'grid-cols-4' : 'grid-cols-5'} gap-1 sm:gap-2 md:gap-8 text-center text-xs sm:text-sm px-2`}>
          <div className={`min-w-[50px] sm:min-w-[60px] ${currentStep === 1 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
            Appareil
          </div>
          {!isLaptop && (
            <div className={`min-w-[50px] sm:min-w-[60px] ${currentStep === 2 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
              Marque
            </div>
          )}
          <div className={`min-w-[50px] sm:min-w-[60px] ${(isLaptop && currentStep === 2) || (!isLaptop && currentStep === 3) ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
            Modèle
          </div>
          <div className={`min-w-[50px] sm:min-w-[60px] ${currentStep === getServicesStep() ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
            Services
          </div>
          <div className={`min-w-[50px] sm:min-w-[60px] ${currentStep === getAppointmentStep() ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
            Rendez-vous
          </div>
        </div>
      </div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back to Home Button */}
        {onBackToHome && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Retour à l'Accueil</span>
            </button>
          </motion.div>
        )}

        {/* Device Type Header */}
        {selectedDevice && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-4 sm:mb-6 md:mb-8"
          >
            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg">
              <div className="text-yellow-400">
                {selectedDevice.icon}
              </div>
              <h1 className="text-base sm:text-xl md:text-2xl font-bold text-white">
                Réservation Réparation {selectedDevice.name}
              </h1>
            </div>
          </motion.div>
        )}

        {renderStepIndicator()}
        {renderStepLabels()}

        {/* Step 1: Device Selection (skip if deviceType is provided) */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && !deviceType && (
            <motion.div
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-4"
              >
                Quel type d'appareil a besoin d'une réparation ?
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto"
              >
                {devices.map((device) => (
                  <motion.button
                    key={device.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedDevice(device);
                      setCurrentStep(2);
                    }}
                    className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-xl p-4 sm:p-6 transition-all duration-300 group"
                  >
                    <div className="text-yellow-400 mb-2 sm:mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {device.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{device.name}</h3>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Step 2: Brand Selection (only for mobiles) OR Model Selection (for laptops) */}
          {currentStep === 2 && selectedDevice?.type === 'mobile' && (
            <motion.div
              key="step2-mobile-brand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-4"
              >
                Quelle est votre marque ?
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                  <input
                    type="text"
                    placeholder="Rechercher une marque"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto"
              >
                {filteredBrands.map((brand) => (
                  <motion.button
                    key={brand.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedBrand(brand);
                      nextStep();
                    }}
                    className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 transition-all duration-300 group"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-4">{brand.logo}</div>
                    <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-white">{brand.name}</h3>
                  </motion.button>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 sm:mt-6 md:mt-8"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white mx-auto transition-colors text-sm sm:text-base"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Retour</span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 2: Model Selection (for laptops) */}
          {currentStep === 2 && selectedDevice?.type === 'laptop' && (
            <motion.div
              key="step2-laptop-model"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-4"
              >
                Quel est votre modèle d'ordinateur portable ?
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un modèle"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
              >
                {filteredModels.map((model) => {
                  const modelBrand = brands.find(brand => brand.id === model.brandId);
                  return (
                    <motion.button
                      key={model.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleModelSelection(model)}
                      className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-300 group"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">{model.image}</div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-2 mb-1">
                        {model.name}
                      </h3>
                      {modelBrand && (
                        <p className="text-xs text-gray-400 text-center">{modelBrand.name}</p>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 sm:mt-6 md:mt-8"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white mx-auto transition-colors text-sm sm:text-base"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Retour</span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 3: Model Selection (for mobiles) */}
          {currentStep === 3 && selectedDevice?.type === 'mobile' && (
            <motion.div
              key="step3-mobile-model"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-4"
              >
                Quel est votre modèle ?
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un modèle"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
              >
                {filteredModels.map((model) => (
                  <motion.button
                    key={model.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleModelSelection(model)}
                    className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-300 group"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">{model.image}</div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-2 mb-1">
                      {model.name}
                    </h3>
                  </motion.button>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 sm:mt-6 md:mt-8"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white mx-auto transition-colors text-sm sm:text-base"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Retour</span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Services Selection Step */}
          {currentStep === getServicesStep() && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-4 sm:mb-6 md:mb-8"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 px-4">
                  Sélectionnez les réparations à effectuer
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base px-4">
                  Tous nos prix sont à jour au {new Date().toLocaleDateString('fr-FR')} et sont indiqués TTC, pièces et main-d'œuvre comprises.
                </p>
              </motion.div>

              {/* Discount Banners */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-green-600 text-white p-2 sm:p-3 md:p-4 rounded-lg"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">25€</div>
                  <div className="text-xs sm:text-sm">
                    <strong>REMISE IMMÉDIATE !</strong><br />
                    GRÂCE AU BONUS QUALIREPAR*<br />
                    <em>aucune action requise de votre part</em>
                  </div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="bg-purple-600 text-white p-2 sm:p-3 md:p-4 rounded-lg"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">20€</div>
                  <div className="text-xs sm:text-sm">
                    <strong>REMISE SUR VOTRE DEUXIÈME RÉPARATION</strong><br />
                    <em>offre cumulable avec le bonus qualifié</em>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-cyan-500 text-white p-2 sm:p-3 md:p-4 rounded-lg mb-4 sm:mb-6 md:mb-8 text-center"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  Réparations {selectedBrand?.name || ''} {selectedModel?.name}
                </h3>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2 sm:space-y-3 md:space-y-4"
              >
                {availableServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.005 }}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:border-yellow-400 transition-colors"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-0 w-full sm:w-auto">
                      <button
                        onClick={() => toggleService(service.id)}
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 rounded flex-shrink-0 mt-1 ${
                          selectedServices.includes(service.id)
                            ? 'bg-yellow-400 border-yellow-400'
                            : 'border-gray-400'
                        }`}
                      >
                        {selectedServices.includes(service.id) && (
                          <Check className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 text-gray-900 mx-auto" />
                        )}
                      </button>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">{service.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
                        {service.eligible && (
                          <span className="inline-block bg-green-600 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded mt-1">
                            Réparation éligible bonus*
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-white font-bold text-xs sm:text-sm md:text-base ml-6 sm:ml-0 self-end sm:self-center">
                      {service.price.toFixed(2)} €
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-6 md:mt-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-3 sm:gap-4"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Retour</span>
                </button>
                <div className="text-white text-center sm:text-right">
                  <span className="text-sm sm:text-base md:text-lg">Montant du devis : </span>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>
                <button
                  onClick={nextStep}
                  disabled={selectedServices.length === 0}
                  className={`bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto text-xs sm:text-sm md:text-base ${
                    selectedServices.length === 0 ? 'cursor-not-allowed' : ''
                  }`}
                >
                  Prendre rendez-vous
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Appointment Booking Step */}
          {currentStep === getAppointmentStep() && (
            <motion.div
              key="appointment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-4 sm:mb-6 md:mb-8"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 px-4">
                  Réservez Votre Rendez-vous
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base px-4">
                  Complétez votre réservation en remplissant vos informations
                </p>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
              >
                {/* Summary */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg order-2 lg:order-1"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Résumé</h3>
                  <div className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
                    <p><strong>Appareil :</strong> {selectedDevice?.name}</p>
                    <p><strong>Modèle :</strong> {selectedBrand?.name || ''} {selectedModel?.name}</p>
                    <div>
                      <strong>Services :</strong>
                      <ul className="ml-3 sm:ml-4 mt-1 md:mt-2 space-y-1">
                        {selectedServices.map(serviceId => {
                          const service = availableServices.find(s => s.id === serviceId);
                          return service ? (
                            <li key={serviceId} className="flex justify-between text-xs sm:text-sm">
                              <span className="flex-1 pr-2">{service.name}</span>
                              <span className="font-medium">{service.price.toFixed(2)} €</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                    <div className="border-t border-gray-700 pt-2 mt-2 sm:mt-3 md:mt-4">
                      <p className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">
                        TOTAL (TTC) : {totalPrice.toFixed(2)} €
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Appointment Form */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg order-1 lg:order-2"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Rendez-vous</h3>
                  <form className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      <div>
                        <label className="block text-white text-xs sm:text-sm font-medium mb-1">
                          Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                          <input
                            type="date"
                            value={appointmentData.date}
                            onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-xs sm:text-sm font-medium mb-1">
                          Créneau horaire <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                          <select
                            value={appointmentData.time}
                            onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
                          >
                            <option value="">Choisir un horaire</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      <div>
                        <label className="block text-white text-xs sm:text-sm font-medium mb-1">
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                          <input
                            type="text"
                            value={appointmentData.name}
                            onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
                            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-xs sm:text-sm font-medium mb-1">
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                          <input
                            type="text"
                            value={appointmentData.firstName}
                            onChange={(e) => setAppointmentData({...appointmentData, firstName: e.target.value})}
                            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      <div>
                        <label className="block text-white text-xs sm:text-sm font-medium mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                          <input
                            type="email"
                            value={appointmentData.email}
                            onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-xs sm:text-sm font-medium mb-1">
                          Téléphone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                          <input
                            type="tel"
                            value={appointmentData.phone}
                            onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-2 sm:gap-3 pt-2 sm:pt-3 md:pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Retour</span>
                      </button>
                      <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto text-xs sm:text-sm md:text-base"
                      >
                        Confirmer le Rendez-vous
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RepairBooking;