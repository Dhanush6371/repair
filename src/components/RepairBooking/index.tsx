import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RepairBookingProps, BookingFormData } from './types';
import { 
  mobileDeviceTypes, 
  laptopDeviceTypes, 
  mobileBrands, 
  tabletBrands, 
  laptopBrands, 
  consoleBrands 
} from './data';
import DeviceTypeSelector from './DeviceTypeSelector';
import BrandSelector from './BrandSelector';
import ModelSelector from './ModelSelector';
import RepairTypeSelector from './RepairTypeSelector';
import BookingForm from './BookingForm';
import ProgressIndicator from './ProgressIndicator';

const RepairBooking: React.FC<RepairBookingProps> = ({ deviceType, onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    deviceCategory: '',
    brand: '',
    model: '',
    repairType: '',
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    appointmentDate: '',
    appointmentTime: '',
    urgency: 'standard',
    additionalNotes: ''
  });

  const deviceTypes = deviceType === 'mobile' ? mobileDeviceTypes : laptopDeviceTypes;
  const stepLabels = ['Type', 'Marque', 'Modèle', 'Réparation', 'Réservation'];

  const getBrandsForCategory = () => {
    if (deviceType === 'mobile') {
      return formData.deviceCategory === 'smartphone' ? mobileBrands : tabletBrands;
    } else {
      return formData.deviceCategory === 'laptop' ? laptopBrands : consoleBrands;
    }
  };

  const getSelectedBrand = () => {
    const brands = getBrandsForCategory();
    return brands.find(brand => brand.id === formData.brand);
  };

  const getSelectedModel = () => {
    const brand = getSelectedBrand();
    return brand?.models.find(model => model.id === formData.model);
  };

  const handleFormDataChange = (data: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < stepLabels.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDeviceTypeSelect = (typeId: string) => {
    handleFormDataChange({ 
      deviceCategory: typeId, 
      brand: '', 
      model: '', 
      repairType: '' 
    });
    handleNext();
  };

  const handleBrandSelect = (brandId: string) => {
    handleFormDataChange({ 
      brand: brandId, 
      model: '', 
      repairType: '' 
    });
    handleNext();
  };

  const handleModelSelect = (modelId: string) => {
    handleFormDataChange({ model: modelId, repairType: '' });
    handleNext();
  };

  const handleRepairTypeSelect = (repairTypeId: string) => {
    handleFormDataChange({ repairType: repairTypeId });
    handleNext();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Réservation confirmée ! Nous vous contacterons bientôt pour confirmer votre rendez-vous.');
    onBackToHome();
    setIsSubmitting(false);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.deviceCategory !== '';
      case 1: return formData.brand !== '';
      case 2: return formData.model !== '';
      case 3: return formData.repairType !== '';
      case 4: return formData.customerInfo.name && formData.customerInfo.email && formData.customerInfo.phone && formData.appointmentDate && formData.appointmentTime;
      default: return false;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <DeviceTypeSelector
            deviceTypes={deviceTypes}
            selectedType={formData.deviceCategory}
            onTypeSelect={handleDeviceTypeSelect}
            title={`Quel type de ${deviceType === 'mobile' ? 'appareil mobile' : 'appareil'} souhaitez-vous réparer ?`}
          />
        );
      case 1:
        return (
          <BrandSelector
            brands={getBrandsForCategory()}
            selectedBrand={formData.brand}
            onBrandSelect={handleBrandSelect}
          />
        );
      case 2:
        const selectedBrand = getSelectedBrand();
        return selectedBrand ? (
          <ModelSelector
            models={selectedBrand.models}
            selectedModel={formData.model}
            onModelSelect={handleModelSelect}
          />
        ) : null;
      case 3:
        const selectedModel = getSelectedModel();
        return selectedModel ? (
          <RepairTypeSelector
            repairTypes={selectedModel.repairTypes}
            selectedRepairType={formData.repairType}
            onRepairTypeSelect={handleRepairTypeSelect}
          />
        ) : null;
      case 4:
        return (
          <BookingForm
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Réservation de Réparation {deviceType === 'mobile' ? 'Mobile' : 'Ordinateur Portable'}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Suivez les étapes pour réserver votre réparation en quelques minutes
          </p>
        </div>

        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={stepLabels.length}
          stepLabels={stepLabels}
        />

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl">
          {renderCurrentStep()}

          {currentStep < stepLabels.length - 1 && (
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Précédent</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center space-x-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold rounded-lg transition-colors"
              >
                <span>Suivant</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RepairBooking;