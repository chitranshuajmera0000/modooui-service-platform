// Core entity types matching backend schema
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  location?: string;
  profileImage?: string;
  bio?: string;
  isServiceProvider: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  basePrice: number;
  providerId: string;
  createdAt: string;
  updatedAt: string;
  provider: {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
    bio?: string;
  };
  _count?: {
    quotationRequests: number;
  };
}

export interface QuotationRequest {
  id: string;
  userId: string;
  serviceId: string;
  description: string;
  budget?: number;
  location: string;
  status: RequestStatus;
  requestedAt: string;
  respondedAt?: string;
  user: Pick<User, 'name' | 'email'>;
  service: Pick<Service, 'name' | 'category'> & {
    provider: Pick<User, 'name' | 'email'>;
  };
}

export interface Quotation {
  id: string;
  requestId: string;
  providerId: string;
  price: number;
  description: string;
  estimatedDuration: string;
  status: QuotationStatus;
  validUntil?: string;
  createdAt: string;
  provider: Pick<User, 'id' | 'name' | 'email' | 'profileImage'>;
  request: {
    description: string;
    location: string;
    user: Pick<User, 'name' | 'email'>;
    service: Pick<Service, 'name' | 'category'>;
  };
}

// Enums
export enum RequestStatus {
  PENDING = 'PENDING',
  RESPONDED = 'RESPONDED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum QuotationStatus {
  SENT = 'SENT',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

// API Response types
export interface ApiResponse<T> {
  message?: string;
  data?: T;
  error?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  phone?: string;
  location?: string;
  isServiceProvider: boolean;
  bio?: string;
}

export interface ServiceForm {
  name: string;
  description: string;
  category: string;
  price: number;
}

export interface QuotationRequestForm {
  serviceId: string;
  description: string;
  budget?: number;
  location: string;
}

export interface QuotationResponseForm {
  requestId: string;
  price: number;
  description: string;
  estimatedDuration: string;
}

// UI Component types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
  border?: boolean;
}