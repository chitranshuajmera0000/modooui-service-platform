import { apiService } from '@/services/api';
import { Service, ServiceForm } from '@/types';

export class ServicesService {
  // Get all services
  async getAllServices(category?: string): Promise<{ services: Service[] }> {
    const params = category ? { category } : {};
    return apiService.get<{ services: Service[] }>('/services', { params });
  }

  // Get service by ID
  async getServiceById(id: string): Promise<{ service: Service }> {
    return apiService.get<{ service: Service }>(`/services/${id}`);
  }

  // Create new service (providers only)
  async createService(serviceData: ServiceForm): Promise<{ service: Service; message: string }> {
    return apiService.post<{ service: Service; message: string }>('/services', serviceData);
  }

  // Get my services (provider's services)
  async getMyServices(): Promise<{ services: Service[] }> {
    return apiService.get<{ services: Service[] }>('/services/my');
  }

  // Update service
  async updateService(id: string, serviceData: Partial<ServiceForm>): Promise<{ service: Service; message: string }> {
    return apiService.put<{ service: Service; message: string }>(`/services/${id}`, serviceData);
  }

  // Delete service
  async deleteService(id: string): Promise<{ message: string }> {
    return apiService.delete<{ message: string }>(`/services/${id}`);
  }
}

export const servicesService = new ServicesService();