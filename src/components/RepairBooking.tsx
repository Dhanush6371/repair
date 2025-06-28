import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Laptop, Check, Search, Calendar, Clock, User, Mail, Phone } from 'lucide-react';

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
}

const RepairBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
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
    {
      id: 'iphone-15',
      name: 'iPhone 15 Pro',
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
      id: 'macbook-pro',
      name: 'MacBook Pro 16"',
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
    }
  ];

  const repairServices: RepairService[] = [
    {
      id: 'screen',
      name: 'Compatible LCD screen',
      description: '1-hour workshop repair. 3-month warranty.',
      price: 299.00,
      duration: '1 hour',
      warranty: '3 months',
      eligible: true
    },
    {
      id: 'sim-drawer',
      name: 'SIM drawer',
      description: 'Quick replacement service.',
      price: 10.00,
      duration: '15 minutes',
      warranty: '1 month'
    },
    {
      id: 'battery',
      name: 'Battery replacement',
      description: 'Original battery with 6-month warranty.',
      price: 89.00,
      duration: '30 minutes',
      warranty: '6 months'
    },
    {
      id: 'charging-port',
      name: 'Charging port repair',
      description: 'Complete charging port replacement.',
      price: 79.00,
      duration: '45 minutes',
      warranty: '3 months'
    },
    {
      id: 'data-recovery',
      name: 'Data recovery',
      description: 'Professional data recovery service.',
      price: 150.00,
      duration: '2-3 days',
      warranty: 'N/A'
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

  const totalPrice = selectedServices.reduce((total, serviceId) => {
    const service = repairServices.find(s => s.id === serviceId);
    return total + (service ? service.price : 0);
  }, 0);

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4, 5].map((step) => (
          <React.Fragment key={step}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              step <= currentStep 
                ? 'bg-yellow-400 border-yellow-400 text-gray-900' 
                : 'border-gray-300 text-gray-400'
            }`}>
              {step < currentStep ? <Check className="h-5 w-5" /> : step}
            </div>
            {step < 5 && (
              <div className={`w-12 h-0.5 ${
                step < currentStep ? 'bg-yellow-400' : 'bg-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderStepLabels = () => (
    <div className="flex justify-center mb-8">
      <div className="grid grid-cols-5 gap-8 text-center text-sm">
        <div className={currentStep === 1 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}>
          Device
        </div>
        <div className={currentStep === 2 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}>
          Brand
        </div>
        <div className={currentStep === 3 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}>
          Model
        </div>
        <div className={currentStep === 4 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}>
          Breakdown
        </div>
        <div className={currentStep === 5 ? 'text-yellow-400 font-semibold' : 'text-gray-400'}>
          Intervention
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {renderStepIndicator()}
        {renderStepLabels()}

        {/* Step 1: Device Selection */}
        {currentStep === 1 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              What type of device needs repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => {
                    setSelectedDevice(device);
                    nextStep();
                  }}
                  className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-xl p-8 transition-all duration-300 group"
                >
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {device.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{device.name}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Brand Selection */}
        {currentStep === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              What is your brand?
            </h2>
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for a brand"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {filteredBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => {
                    setSelectedBrand(brand);
                    nextStep();
                  }}
                  className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{brand.logo}</div>
                  <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Model Selection */}
        {currentStep === 3 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              What is your role model?
            </h2>
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for a model"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    setSelectedModel(model);
                    nextStep();
                  }}
                  className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-yellow-400 rounded-xl p-4 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3">{model.image}</div>
                  <h3 className="text-sm font-semibold text-white text-center">{model.name}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Repair Services Selection */}
        {currentStep === 4 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Select the repairs to be carried out
              </h2>
              <p className="text-gray-400">
                All our prices are up to date as of {new Date().toLocaleDateString()} and are quoted inclusive of VAT, parts and labor.
              </p>
            </div>

            {/* Discount Banners */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">25€</div>
                <div className="text-sm">
                  <strong>IMMEDIATE DISCOUNT!</strong><br />
                  THANKS TO THE QUALIREPAR BONUS*<br />
                  <em>no action required on your part</em>
                </div>
              </div>
              <div className="bg-purple-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">20€</div>
                <div className="text-sm">
                  <strong>DISCOUNT ON YOUR SECOND REPAIR</strong><br />
                  <em>offer can be combined with the qualified bonus</em>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500 text-white p-4 rounded-lg mb-8 text-center">
              <h3 className="text-xl font-bold">
                {selectedBrand?.name} {selectedModel?.name} Repairs
              </h3>
            </div>

            <div className="space-y-4">
              {repairServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleService(service.id)}
                      className={`w-6 h-6 border-2 rounded ${
                        selectedServices.includes(service.id)
                          ? 'bg-yellow-400 border-yellow-400'
                          : 'border-gray-400'
                      }`}
                    >
                      {selectedServices.includes(service.id) && (
                        <Check className="h-4 w-4 text-gray-900" />
                      )}
                    </button>
                    <div>
                      <h4 className="text-white font-semibold">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                      {service.eligible && (
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mt-1">
                          Eligible repair bonus*
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-white font-bold">
                    {service.price.toFixed(2)} € including tax
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={prevStep}
                className="flex items-center space-x-2 text-gray-400 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <div className="text-white">
                <span className="text-lg">Quote amount: </span>
                <span className="text-2xl font-bold text-yellow-400">
                  {totalPrice.toFixed(2)} €
                </span>
              </div>
              <button
                onClick={nextStep}
                disabled={selectedServices.length === 0}
                className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Make an appointment
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Appointment Booking */}
        {currentStep === 5 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Book Your Appointment
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Summary */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Model:</strong> {selectedBrand?.name} {selectedModel?.name}</p>
                  <div>
                    <strong>Services:</strong>
                    <ul className="ml-4 mt-2">
                      {selectedServices.map(serviceId => {
                        const service = repairServices.find(s => s.id === serviceId);
                        return service ? (
                          <li key={serviceId} className="flex justify-between">
                            <span>{service.name}</span>
                            <span>{service.price.toFixed(2)} €</span>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-4">
                    <p className="text-cyan-400 font-bold text-lg">
                      TOTAL (incl. VAT): {totalPrice.toFixed(2)} €
                    </p>
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Appointment</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={appointmentData.date}
                        onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Available time slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={appointmentData.time}
                        onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Choose a time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={appointmentData.name}
                        onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={appointmentData.firstName}
                        onChange={(e) => setAppointmentData({...appointmentData, firstName: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={appointmentData.email}
                        onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={appointmentData.phone}
                        onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RepairBooking;