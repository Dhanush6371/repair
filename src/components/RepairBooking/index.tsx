import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import DeviceTypeSelector from './DeviceTypeSelector';
import BrandSelector from './BrandSelector';
import ModelSelector from './ModelSelector';
import IssueSelector from './IssueSelector';
import ContactForm from './ContactForm';
import BookingSummary from './BookingSummary';

export interface BookingData {
  deviceCategory: string;
  brand: string;
  model: string;
  issues: string[];
  urgency: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    preferredContact: string;
  };
  serviceType: string;
  notes: string;
}

interface RepairBookingProps {
  deviceType: 'mobile' | 'laptop';
  onBackToHome: () => void;
}

const RepairBooking: React.FC<RepairBookingProps> = ({ deviceType, onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    deviceCategory: '',
    brand: '',
    model: '',
    issues: [],
    urgency: '',
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      preferredContact: 'phone'
    },
    serviceType: 'drop-off',
    notes: ''
  });

  const totalSteps = 6;

  const updateBookingData = (field: keyof BookingData, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateCustomerInfo = (field: keyof BookingData['customerInfo'], value: string) => {
    setBookingData(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DeviceTypeSelector
            deviceType={deviceType}
            selectedCategory={bookingData.deviceCategory}
            onSelect={(category) => updateBookingData('deviceCategory', category)}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <BrandSelector
            deviceCategory={bookingData.deviceCategory}
            selectedBrand={bookingData.brand}
            onSelect={(brand) => updateBookingData('brand', brand)}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <ModelSelector
            brand={bookingData.brand}
            selectedModel={bookingData.model}
            onSelect={(model) => updateBookingData('model', model)}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <IssueSelector
            deviceCategory={bookingData.deviceCategory}
            selectedIssues={bookingData.issues}
            urgency={bookingData.urgency}
            serviceType={bookingData.serviceType}
            notes={bookingData.notes}
            onIssuesChange={(issues) => updateBookingData('issues', issues)}
            onUrgencyChange={(urgency) => updateBookingData('urgency', urgency)}
            onServiceTypeChange={(serviceType) => updateBookingData('serviceType', serviceType)}
            onNotesChange={(notes) => updateBookingData('notes', notes)}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 5:
        return (
          <ContactForm
            customerInfo={bookingData.customerInfo}
            onUpdate={updateCustomerInfo}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 6:
        return (
          <BookingSummary
            bookingData={bookingData}
            onBack={prevStep}
            onConfirm={() => {
              alert('Réservation confirmée ! Nous vous contacterons bientôt.');
              onBackToHome();
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBackToHome}
            className="mr-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Réservation de Réparation {deviceType === 'mobile' ? 'Mobile' : 'Ordinateur Portable'}
            </h1>
            <p className="text-gray-400 mt-1">
              Étape {currentStep} sur {totalSteps}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-800 rounded-xl p-6 sm:p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default RepairBooking;