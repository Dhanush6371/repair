export interface DeviceType {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  models: Model[];
}

export interface Model {
  id: string;
  name: string;
  image: string;
  repairTypes: RepairType[];
}

export interface RepairType {
  id: string;
  name: string;
  description: string;
  estimatedPrice: string;
  estimatedTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface BookingFormData {
  deviceCategory: string;
  brand: string;
  model: string;
  repairType: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  appointmentDate: string;
  appointmentTime: string;
  urgency: 'standard' | 'express' | 'emergency';
  additionalNotes: string;
}

export interface RepairBookingProps {
  deviceType: 'mobile' | 'laptop';
  onBackToHome: () => void;
}