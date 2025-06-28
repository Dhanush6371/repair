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
      name: 'Mobile Phone',
      icon: <Smartphone className="h-12 w-12" />,
      type: 'mobile'
    },
    {
      id: 'laptop',
      name: 'Laptop',
      icon: <Laptop className="h-12 w-12" />,
      type: 'laptop'
    }
  ];

  // State initialization - start at step 1 if no deviceType, step 2 if deviceType provided
  const [currentStep, setCurrentStep] = useState(deviceType ? 2 : 1);
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
    // Laptop models
    {
      id: 'macbook-pro',
      name: 'MacBook Pro 16"',
      image: '💻',
      brandId: 'apple',
      deviceType: 'laptop'
    },
    {
      id: 'macbook-air',
      name: 'MacBook Air 13"',
      image: '💻',
      brandId: 'apple',
      deviceType: 'laptop'
    },
    {
      id: 'dell-xps',
      name: 'Dell XPS 13',
      image: '💻',
      brandId: 'dell',
      deviceType: 'laptop'
    },
    {
      id: 'hp-pavilion',
      name: 'HP Pavilion 15',
      image: '💻',
      brandId: 'hp',
      deviceType: 'laptop'
    },
    {
      id: 'lenovo-thinkpad',
      name: 'ThinkPad X1 Carbon',
      image: '💻',
      brandId: 'lenovo',
      deviceType: 'laptop'
    }
  ];

  const repairServices: RepairService[] = [
    // Mobile services
    {
      id: 'mobile-screen',
      name: 'Compatible LCD screen',
      description: '1-hour workshop repair. 3-month warranty.',
      price: 299.00,
      duration: '1 hour',
      warranty: '3 months',
      eligible: true,
      deviceType: 'mobile'
    },
    {
      id: 'sim-drawer',
      name: 'SIM drawer',
      description: 'Quick replacement service.',
      price: 10.00,
      duration: '15 minutes',
      warranty: '1 month',
      deviceType: 'mobile'
    },
    {
      id: 'mobile-battery',
      name: 'Battery replacement',
      description: 'Original battery with 6-month warranty.',
      price: 89.00,
      duration: '30 minutes',
      warranty: '6 months',
      deviceType: 'mobile'
    },
    {
      id: 'charging-port',
      name: 'Charging port repair',
      description: 'Complete charging port replacement.',
      price: 79.00,
      duration: '45 minutes',
      warranty: '3 months',
      deviceType: 'mobile'
    },
    // Laptop services
    {
      id: 'laptop-screen',
      name: 'LCD Screen Replacement',
      description: 'Professional screen replacement with warranty.',
      price: 450.00,
      duration: '2-3 hours',
      warranty: '6 months',
      eligible: true,
      deviceType: 'laptop'
    },
    {
      id: 'laptop-battery',
      name: 'Laptop Battery Replacement',
      description: 'High-quality battery replacement.',
      price: 120.00,
      duration: '1 hour',
      warranty: '12 months',
      deviceType: 'laptop'
    },
    {
      id: 'keyboard-repair',
      name: 'Keyboard Repair/Replacement',
      description: 'Individual key or full keyboard replacement.',
      price: 180.00,
      duration: '1-2 hours',
      warranty: '6 months',
      deviceType: 'laptop'
    },
    {
      id: 'motherboard-repair',
      name: 'Motherboard Repair',
      description: 'Complex motherboard diagnostics and repair.',
      price: 350.00,
      duration: '3-5 days',
      warranty: '3 months',
      deviceType: 'laptop'
    },
    {
      id: 'hard-drive-replacement',
      name: 'Hard Drive/SSD Upgrade',
      description: 'Storage upgrade with data migration.',
      price: 200.00,
      duration: '2-4 hours',
      warranty: '12 months',
      deviceType: 'laptop'
    },
    // Common services
    {
      id: 'data-recovery',
      name: 'Data recovery',
      description: 'Professional data recovery service.',
      price: 150.00,
      duration: '2-3 days',
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

  const filteredModels = models.filter(model => 
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

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    // Allow going back to previous step, but handle special cases
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
        setSelectedBrand(null);
        setSelectedModel(null);
        setSelectedServices([]);
      } else if (newStep === 3) {
        setSelectedModel(null);
        setSelectedServices([]);
      } else if (newStep === 4) {
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

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-4 md:mb-8 overflow-x-auto py-2">
      <div className="flex items-center space-x-2 md:space-x-4 px-2">
        {[1, 2, 3, 4, 5].map((step) => (
          <React.Fragment key={step}>
            <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 ${
              step <= currentStep 
                ? 'bg-yellow-400 border-yellow-400 text-gray-900' 
                : 'border-gray-300 text-gray-400'
            }`}>
              {step < currentStep ? <Check className="h-4 w-4 md:h-5 md:w-5" /> : step}
            </div>
            {step < 5 && (
              <div className={`w-6 md:w-12 h-0.5 ${
                step < currentStep ? 'bg-yellow-400' : 'bg-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderStepLabels = () => (
    <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto">
      <div className="grid grid-cols-5 gap-2 md:gap-8 text-center text-xs md:text-sm px-2">
        <div className={`min-w-[60px] ${currentStep === 1 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
          Device
        </div>
        <div className={`min-w-[60px] ${currentStep === 2 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
          Brand
        </div>
        <div className={`min-w-[60px] ${currentStep === 3 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
          Model
        </div>
        <div className={`min-w-[60px] ${currentStep === 4 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
          Services
        </div>
        <div className={`min-w-[60px] ${currentStep === 5 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}>
          Appointment
        </div>
      </div>
    </div>
  );

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
    <section className="py-8 md:py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back to Home Button */}
        {onBackToHome && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
          </motion.div>
        )}

        {/* Device Type Header */}
        {selectedDevice && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-lg">
              <div className="text-yellow-400">
                {selectedDevice.icon}
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                {selectedDevice.name} Repair Booking
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
                className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8"
              >
                What type of device needs repair?
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto"
              >
                {devices.map((device) => (
                  <motion.button
                    key={device.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedDevice(device);
                      nextStep();
                    }}
                    className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-xl p-6 transition-all duration-300 group"
                  >
                    <div className="text-yellow-400 mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {device.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{device.name}</h3>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Step 2: Brand Selection */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
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
                className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8"
              >
                What is your brand?
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6 md:mb-8"
              >
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                  <input
                    type="text"
                    placeholder="Search for a brand"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto"
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
                    className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-lg md:rounded-xl p-4 md:p-6 transition-all duration-300 group"
                  >
                    <div className="text-3xl md:text-4xl mb-2 md:mb-4">{brand.logo}</div>
                    <h3 className="text-sm md:text-lg font-semibold text-white">{brand.name}</h3>
                  </motion.button>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 md:mt-8"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white mx-auto transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 3: Model Selection */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
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
                className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8"
              >
                What is your model?
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6 md:mb-8"
              >
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                  <input
                    type="text"
                    placeholder="Search for a model"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
              >
                {filteredModels.map((model) => (
                  <motion.button
                    key={model.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedModel(model);
                      nextStep();
                    }}
                    className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-lg p-3 md:p-4 transition-all duration-300 group"
                  >
                    <div className="text-3xl md:text-4xl mb-2 md:mb-3">{model.image}</div>
                    <h3 className="text-xs md:text-sm font-semibold text-white text-center line-clamp-2">{model.name}</h3>
                  </motion.button>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 md:mt-8"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white mx-auto transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 4: Repair Services Selection */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6 md:mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                  Select the repairs to be carried out
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  All our prices are up to date as of {new Date().toLocaleDateString()} and are quoted inclusive of VAT, parts and labor.
                </p>
              </motion.div>

              {/* Discount Banners */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-green-600 text-white p-3 md:p-4 rounded-lg"
                >
                  <div className="text-xl md:text-2xl font-bold">25€</div>
                  <div className="text-xs md:text-sm">
                    <strong>IMMEDIATE DISCOUNT!</strong><br />
                    THANKS TO THE QUALIREPAR BONUS*<br />
                    <em>no action required on your part</em>
                  </div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="bg-purple-600 text-white p-3 md:p-4 rounded-lg"
                >
                  <div className="text-xl md:text-2xl font-bold">20€</div>
                  <div className="text-xs md:text-sm">
                    <strong>DISCOUNT ON YOUR SECOND REPAIR</strong><br />
                    <em>offer can be combined with the qualified bonus</em>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-cyan-500 text-white p-3 md:p-4 rounded-lg mb-6 md:mb-8 text-center"
              >
                <h3 className="text-lg md:text-xl font-bold">
                  {selectedBrand?.name} {selectedModel?.name} Repairs
                </h3>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3 md:space-y-4"
              >
                {availableServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.005 }}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:border-yellow-400 transition-colors"
                  >
                    <div className="flex items-start space-x-3 md:space-x-4 mb-2 sm:mb-0">
                      <button
                        onClick={() => toggleService(service.id)}
                        className={`w-5 h-5 md:w-6 md:h-6 border-2 rounded flex-shrink-0 mt-1 ${
                          selectedServices.includes(service.id)
                            ? 'bg-yellow-400 border-yellow-400'
                            : 'border-gray-400'
                        }`}
                      >
                        {selectedServices.includes(service.id) && (
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-gray-900 mx-auto" />
                        )}
                      </button>
                      <div>
                        <h4 className="text-white font-semibold text-sm md:text-base">{service.name}</h4>
                        <p className="text-gray-400 text-xs md:text-sm">{service.description}</p>
                        {service.eligible && (
                          <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mt-1">
                            Eligible repair bonus*
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-white font-bold text-sm md:text-base ml-8 sm:ml-0">
                      {service.price.toFixed(2)} €
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 md:mt-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-4"
              >
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>
                <div className="text-white text-center sm:text-right">
                  <span className="text-base md:text-lg">Quote amount: </span>
                  <span className="text-xl md:text-2xl font-bold text-yellow-400">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>
                <button
                  onClick={nextStep}
                  disabled={selectedServices.length === 0}
                  className={`bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto ${
                    selectedServices.length === 0 ? 'cursor-not-allowed' : ''
                  }`}
                >
                  Make an appointment
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 5: Appointment Booking */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6 md:mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                  Book Your Appointment
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Complete your booking by filling in your details
                </p>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
              >
                {/* Summary */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gray-800 p-4 md:p-6 rounded-lg order-2 lg:order-1"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Summary</h3>
                  <div className="space-y-2 text-gray-300 text-sm md:text-base">
                    <p><strong>Device:</strong> {selectedDevice?.name}</p>
                    <p><strong>Model:</strong> {selectedBrand?.name} {selectedModel?.name}</p>
                    <div>
                      <strong>Services:</strong>
                      <ul className="ml-4 mt-1 md:mt-2 space-y-1">
                        {selectedServices.map(serviceId => {
                          const service = availableServices.find(s => s.id === serviceId);
                          return service ? (
                            <li key={serviceId} className="flex justify-between">
                              <span>{service.name}</span>
                              <span>{service.price.toFixed(2)} €</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                    <div className="border-t border-gray-700 pt-2 mt-3 md:mt-4">
                      <p className="text-cyan-400 font-bold text-base md:text-lg">
                        TOTAL (incl. VAT): {totalPrice.toFixed(2)} €
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Appointment Form */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gray-800 p-4 md:p-6 rounded-lg order-1 lg:order-2"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Appointment</h3>
                  <form className="space-y-3 md:space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-white text-xs md:text-sm font-medium mb-1">
                          Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="date"
                            value={appointmentData.date}
                            onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-xs md:text-sm font-medium mb-1">
                          Available time slot <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <select
                            value={appointmentData.time}
                            onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
                          >
                            <option value="">Choose a time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-white text-xs md:text-sm font-medium mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="text"
                            value={appointmentData.name}
                            onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-xs md:text-sm font-medium mb-1">
                          First name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="text"
                            value={appointmentData.firstName}
                            onChange={(e) => setAppointmentData({...appointmentData, firstName: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-white text-xs md:text-sm font-medium mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="email"
                            value={appointmentData.email}
                            onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-xs md:text-sm font-medium mb-1">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="tel"
                            value={appointmentData.phone}
                            onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 pt-3 md:pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
                      >
                        Confirm Appointment
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