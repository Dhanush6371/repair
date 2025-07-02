export interface RepairFormData {
  // Device Selection
  deviceCategory: string;
  deviceBrand: string;
  deviceModel: string;
  
  // Problem Details
  problemType: string;
  problemDescription: string;
  urgency: string;
  
  // Customer Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Service Details
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  
  // Additional Information
  hasWarranty: boolean;
  warrantyDetails: string;
  additionalNotes: string;
  
  // Terms
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

export interface DeviceOption {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface BrandOption {
  id: string;
  name: string;
  logo: string;
  models: string[];
}

export interface ProblemOption {
  id: string;
  title: string;
  description: string;
  estimatedPrice: string;
  estimatedTime: string;
}

export interface RepairBookingProps {
  deviceType: 'mobile' | 'laptop';
  onBackToHome: () => void;
}