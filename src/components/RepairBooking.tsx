import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { RepairBookingProps } from './repair/types';
import { useRepairForm } from './repair/hooks/useRepairForm';

// Data imports
import { MOBILE_CATEGORIES, MOBILE_BRANDS, MOBILE_PROBLEMS } from './repair/data/mobileData';
import { LAPTOP_CATEGORIES, LAPTOP_BRANDS, LAPTOP_PROBLEMS } from './repair/data/laptopData';

// Component imports
import ProgressBar from './repair/components/ProgressBar';
import NavigationButtons from './repair/components/NavigationButtons';
import DeviceCategoryStep from './repair/steps/DeviceCategoryStep';
import BrandSelectionStep from './repair/steps/BrandSelectionStep';
import ModelSelectionStep from './repair/steps/ModelSelectionStep';
import ProblemSelectionStep from './repair/steps/ProblemSelectionStep';
import ProblemDetailsStep from './repair/steps/ProblemDetailsStep';
import CustomerInfoStep from './repair/steps/CustomerInfoStep';
import ServiceDetailsStep from './repair/steps/ServiceDetailsStep';
import AdditionalInfoStep from './repair/steps/AdditionalInfoStep';
import ReviewStep from './repair/steps/ReviewStep';

const RepairBooking: React.FC<RepairBookingProps> = ({ deviceType, onBackToHome }) => {
  const {
    formData,
    currentStep,
    isSubmitting,
    updateFormData,
    nextStep,
    previousStep,
    submitForm
  } = useRepairForm();

  // Get data based on device type
  const categories = deviceType === 'mobile' ? MOBILE_CATEGORIES : LAPTOP_CATEGORIES;
  const allBrands = deviceType === 'mobile' ? MOBILE_BRANDS : LAPTOP_BRANDS;
  const problems = deviceType === 'mobile' ? MOBILE_PROBLEMS : LAPTOP_PROBLEMS;

  // Get brands for selected category
  const brands = formData.deviceCategory ? allBrands[formData.deviceCategory] || [] : [];
  
  // Get models for selected brand
  const selectedBrand = brands.find(brand => brand.id === formData.deviceBrand);
  const models = selectedBrand ? selectedBrand.models : [];

  // Get category name for display
  const selectedCategory = categories.find(cat => cat.id === formData.deviceCategory);
  const categoryName = selectedCategory ? selectedCategory.name : '';

  // Get brand name for display
  const brandName = selectedBrand ? selectedBrand.name : '';

  const stepTitles = [
    'Catégorie',
    'Marque',
    'Modèle',
    'Problème',
    'Détails',
    'Contact',
    'Service',
    'Infos',
    'Révision'
  ];

  const totalSteps = stepTitles.length;

  // Validation for each step
  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1: return !!formData.deviceCategory;
      case 2: return !!formData.deviceBrand;
      case 3: return !!formData.deviceModel;
      case 4: return !!formData.problemType;
      case 5: return !!formData.problemDescription && !!formData.urgency;
      case 6: return !!formData.firstName && !!formData.lastName && !!formData.email && !!formData.phone;
      case 7: return !!formData.serviceType && !!formData.preferredDate && !!formData.preferredTime;
      case 8: return true; // Additional info is optional
      case 9: return formData.agreeToTerms;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    const result = await submitForm();
    if (result.success) {
      alert('Votre demande de réparation a été soumise avec succès ! Nous vous contacterons bientôt.');
      onBackToHome();
    } else {
      alert('Une erreur est survenue lors de la soumission. Veuillez réessayer.');
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DeviceCategoryStep
            categories={categories}
            selectedCategory={formData.deviceCategory}
            onCategorySelect={(categoryId) => updateFormData({ 
              deviceCategory: categoryId,
              deviceBrand: '', // Reset dependent fields
              deviceModel: ''
            })}
            deviceType={deviceType}
          />
        );

      case 2:
        return (
          <BrandSelectionStep
            brands={brands}
            selectedBrand={formData.deviceBrand}
            onBrandSelect={(brandId) => updateFormData({ 
              deviceBrand: brandId,
              deviceModel: '' // Reset dependent field
            })}
            categoryName={categoryName}
          />
        );

      case 3:
        return (
          <ModelSelectionStep
            models={models}
            selectedModel={formData.deviceModel}
            onModelSelect={(model) => updateFormData({ deviceModel: model })}
            brandName={brandName}
          />
        );

      case 4:
        return (
          <ProblemSelectionStep
            problems={problems}
            selectedProblem={formData.problemType}
            onProblemSelect={(problemId) => updateFormData({ problemType: problemId })}
          />
        );

      case 5:
        return (
          <ProblemDetailsStep
            problemDescription={formData.problemDescription}
            urgency={formData.urgency}
            onProblemDescriptionChange={(description) => updateFormData({ problemDescription: description })}
            onUrgencyChange={(urgency) => updateFormData({ urgency })}
          />
        );

      case 6:
        return (
          <CustomerInfoStep
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            phone={formData.phone}
            onFirstNameChange={(firstName) => updateFormData({ firstName })}
            onLastNameChange={(lastName) => updateFormData({ lastName })}
            onEmailChange={(email) => updateFormData({ email })}
            onPhoneChange={(phone) => updateFormData({ phone })}
          />
        );

      case 7:
        return (
          <ServiceDetailsStep
            serviceType={formData.serviceType}
            preferredDate={formData.preferredDate}
            preferredTime={formData.preferredTime}
            onServiceTypeChange={(serviceType) => updateFormData({ serviceType })}
            onPreferredDateChange={(date) => updateFormData({ preferredDate: date })}
            onPreferredTimeChange={(time) => updateFormData({ preferredTime: time })}
          />
        );

      case 8:
        return (
          <AdditionalInfoStep
            hasWarranty={formData.hasWarranty}
            warrantyDetails={formData.warrantyDetails}
            additionalNotes={formData.additionalNotes}
            onHasWarrantyChange={(hasWarranty) => updateFormData({ hasWarranty })}
            onWarrantyDetailsChange={(details) => updateFormData({ warrantyDetails: details })}
            onAdditionalNotesChange={(notes) => updateFormData({ additionalNotes: notes })}
          />
        );

      case 9:
        return (
          <ReviewStep
            formData={formData}
            agreeToTerms={formData.agreeToTerms}
            agreeToMarketing={formData.agreeToMarketing}
            onAgreeToTermsChange={(agree) => updateFormData({ agreeToTerms: agree })}
            onAgreeToMarketingChange={(agree) => updateFormData({ agreeToMarketing: agree })}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Réservation de Réparation {deviceType === 'mobile' ? 'Mobile' : 'Ordinateur'}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Processus simple en {totalSteps} étapes
            </p>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Main Form Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl">
            {/* Progress Bar */}
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepTitles={stepTitles}
            />

            {/* Step Content */}
            <div className="min-h-[400px] flex items-center justify-center">
              {renderCurrentStep()}
            </div>

            {/* Navigation */}
            <NavigationButtons
              currentStep={currentStep}
              totalSteps={totalSteps}
              isSubmitting={isSubmitting}
              canProceed={canProceedToNextStep()}
              onPrevious={previousStep}
              onNext={nextStep}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairBooking;