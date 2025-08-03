import { apiService } from '@/services/api';
import { Service, ServiceForm } from '@/types';

// Mock data for development
const mockServices: Service[] = [
  {
    id: '1',
    name: 'Professional Website Development',
    category: 'Web Development',
    description: 'I will create a modern, responsive website for your business using the latest technologies.',
    basePrice: 1500,
    providerId: 'provider1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    provider: {
      id: 'provider1',
      name: 'John Developer',
      email: 'john@example.com',
      bio: 'Full-stack developer with 5+ years experience'
    }
  },
  {
    id: '2',
    name: 'Mobile App Development',
    category: 'Mobile Development',
    description: 'Native iOS and Android app development with modern UI/UX design.',
    basePrice: 2500,
    providerId: 'provider2',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    provider: {
      id: 'provider2',
      name: 'Sarah Mobile',
      email: 'sarah@example.com',
      bio: 'Mobile app specialist'
    }
  },
  {
    id: '3',
    name: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand identity package including logo, colors, typography, and brand guidelines.',
    basePrice: 800,
    providerId: 'provider3',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    provider: {
      id: 'provider3',
      name: 'Mike Designer',
      email: 'mike@example.com',
      bio: 'Creative designer with passion for branding'
    }
  },
  {
    id: '4',
    name: 'Digital Marketing Strategy',
    category: 'Marketing',
    description: 'Comprehensive digital marketing strategy to grow your online presence and reach your target audience.',
    basePrice: 1200,
    providerId: 'provider4',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    provider: {
      id: 'provider4',
      name: 'Lisa Marketing',
      email: 'lisa@example.com',
      bio: 'Digital marketing expert'
    }
  },
  {
    id: '5',
    name: 'Technical Writing Services',
    category: 'Writing',
    description: 'Professional technical documentation, API docs, user guides, and technical blog posts.',
    basePrice: 600,
    providerId: 'provider5',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    provider: {
      id: 'provider5',
      name: 'Alex Writer',
      email: 'alex@example.com',
      bio: 'Technical writer with engineering background'
    }
  },
  {
    id: '6',
    name: 'Business Consulting',
    category: 'Consulting',
    description: 'Strategic business consulting to help optimize your operations and drive growth.',
    basePrice: 2000,
    providerId: 'provider6',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    provider: {
      id: 'provider6',
      name: 'Robert Consultant',
      email: 'robert@example.com',
      bio: 'Business strategist with 10+ years experience'
    }
  }
];

export class ServicesService {
  // Get all services
  async getAllServices(category?: string): Promise<{ services: Service[] }> {
    console.log('🔥 API_BASE_URL:', process.env.NEXT_PUBLIC_API_URL);
    try {
      const params = category ? { category } : {};
      const result = await apiService.get<{ services: Service[] }>('/services', { params });
      console.log('✅ API call successful:', result);
      return result;
    } catch (error) {
      console.error('❌ API call failed:', error);
      throw error; // Don't use mock data, throw the error
    }
  }

  // Get service by ID
  async getServiceById(id: string): Promise<{ service: Service }> {
    console.log('🔥 Getting service by ID:', id);
    try {
      const result = await apiService.get<{ service: Service }>(`/services/${id}`);
      console.log('✅ Service API call successful:', result);
      return result;
    } catch (error) {
      console.error('❌ Service API call failed:', error);
      throw error; // Don't use mock data, throw the error
    }
  }

  // Create new service (providers only)
  async createService(serviceData: ServiceForm): Promise<{ service: Service; message: string }> {
    try {
      return await apiService.post<{ service: Service; message: string }>('/services', serviceData);
    } catch (error) {
      console.warn('Backend not available:', error);
      throw error;
    }
  }

  // Get my services (provider's services)
  async getMyServices(): Promise<{ services: Service[] }> {
    try {
      return await apiService.get<{ services: Service[] }>('/services/my');
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      // Return empty for now, or mock user's services
      return { services: [] };
    }
  }

  // Update service
  async updateService(id: string, serviceData: Partial<ServiceForm>): Promise<{ service: Service; message: string }> {
    try {
      return await apiService.put<{ service: Service; message: string }>(`/services/${id}`, serviceData);
    } catch (error) {
      console.warn('Backend not available:', error);
      throw error;
    }
  }

  // Delete service
  async deleteService(id: string): Promise<{ message: string }> {
    try {
      return await apiService.delete<{ message: string }>(`/services/${id}`);
    } catch (error) {
      console.warn('Backend not available:', error);
      throw error;
    }
  }
}

export const servicesService = new ServicesService();