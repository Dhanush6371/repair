import { useState } from 'react';
import { RepairFormData } from '../types';

const initialFormData: RepairFormData = {
  deviceCategory: '',
  deviceBrand: '',
  deviceModel: '',
  problemType: '',
  problemDescription: '',
  urgency: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceType: '',
  preferredDate: '',
  preferredTime: '',
  hasWarranty: false,
  warrantyDetails: '',
  additionalNotes: '',
  agreeToTerms: false,
  agreeToMarketing: false
};

export const useRepairForm = () => {
  const [formData, setFormData] = useState<RepairFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (updates: Partial<RepairFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      resetForm();
      
      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    currentStep,
    isSubmitting,
    updateFormData,
    nextStep,
    previousStep,
    resetForm,
    submitForm
  };
};