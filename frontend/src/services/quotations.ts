import { apiService } from './api';

export interface CreateQuotationRequest {
  serviceId: string;
  description: string;
  budget?: number;
  location: string;
}

export interface QuotationResponse {
  id: string;
  serviceId: string;
  customerId: string;
  providerId: string;
  message: string;
  budget?: number;
  timeline?: string;
  requirements?: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  providerResponse?: string;
  createdAt: string;
  updatedAt: string;
  service: {
    id: string;
    name: string;
    category: string;
    basePrice: number;
  };
  customer: {
    id: string;
    name: string;
    email: string;
  };
  provider: {
    id: string;
    name: string;
    email: string;
  };
}

class QuotationService {
  // Get all quotations for current user (both sent and received)
  async getQuotations(): Promise<{ quotations: QuotationResponse[] }> {
    try {
      const [received, sent] = await Promise.all([
        apiService.get<{ quotations: any[] }>('/quotations/received'),
        apiService.get<{ quotations: any[] }>('/quotations/sent')
      ]);
      
      // Combine and transform quotations
      const allQuotations = [
        ...received.quotations.map(q => this.transformBackendQuotation(q)),
        ...sent.quotations.map(q => this.transformBackendQuotation(q))
      ];
      
      return { quotations: allQuotations };
    } catch (error: any) {
      console.error('Failed to fetch quotations:', error);
      // Return mock data for development
      return {
        quotations: [
          {
            id: '1',
            serviceId: 'service-1',
            customerId: 'customer-1',
            providerId: 'provider-1',
            message: 'I need a modern, responsive website for my small business. Should include contact forms and basic SEO.',
            budget: 2500,
            timeline: '4 weeks',
            requirements: 'Responsive design, Contact forms, SEO optimization',
            status: 'pending',
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
            updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            service: {
              id: 'service-1',
              name: 'Professional Website Development',
              category: 'Web Development',
              basePrice: 2000,
            },
            customer: {
              id: 'customer-1',
              name: 'John Doe',
              email: 'john@example.com',
            },
            provider: {
              id: 'provider-1',
              name: 'Tech Solutions',
              email: 'tech@solutions.com',
            },
          },
        ]
      };
    }
  }

  // Helper method to transform backend quotation data
  private transformBackendQuotation(backendQuotation: any): QuotationResponse {
    return {
      id: backendQuotation.id,
      serviceId: backendQuotation.request?.service?.id || 'unknown',
      customerId: backendQuotation.request?.user?.id || backendQuotation.request?.userId || 'unknown',
      providerId: backendQuotation.provider?.id || backendQuotation.providerId,
      message: backendQuotation.request?.description || backendQuotation.description,
      budget: backendQuotation.request?.budget,
      timeline: backendQuotation.estimatedDuration,
      requirements: undefined,
      status: backendQuotation.status?.toLowerCase() || 'pending',
      createdAt: backendQuotation.createdAt,
      updatedAt: backendQuotation.updatedAt || backendQuotation.createdAt,
      service: {
        id: backendQuotation.request?.service?.id || 'unknown',
        name: backendQuotation.request?.service?.name || 'Unknown Service',
        category: backendQuotation.request?.service?.category || 'Unknown',
        basePrice: backendQuotation.price || 0,
      },
      customer: {
        id: backendQuotation.request?.user?.id || backendQuotation.request?.userId || 'unknown',
        name: backendQuotation.request?.user?.name || 'Unknown Customer',
        email: backendQuotation.request?.user?.email || 'customer@example.com',
      },
      provider: {
        id: backendQuotation.provider?.id || backendQuotation.providerId,
        name: backendQuotation.provider?.name || 'Unknown Provider',
        email: backendQuotation.provider?.email || 'provider@example.com',
      },
    };
  }

  // Get quotations for a specific service
  async getServiceQuotations(serviceId: string): Promise<{ quotations: QuotationResponse[] }> {
    try {
      return await apiService.get<{ quotations: QuotationResponse[] }>(`/quotations/service/${serviceId}`);
    } catch (error: any) {
      console.error('Failed to fetch service quotations:', error);
      return { quotations: [] };
    }
  }

  // Get quotations received by provider
  async getReceivedQuotations(): Promise<{ quotations: QuotationResponse[] }> {
    try {
      const response = await apiService.get<{ quotations: any[] }>('/quotations/received');
      return {
        quotations: response.quotations.map(q => this.transformBackendQuotation(q))
      };
    } catch (error: any) {
      console.error('Failed to fetch received quotations:', error);
      // Return mock data for development
      return {
        quotations: [
          {
            id: '1',
            serviceId: 'service-1',
            customerId: 'customer-1',
            providerId: 'provider-1',
            message: 'I need a modern, responsive website for my small business.',
            budget: 2500,
            timeline: '4 weeks',
            requirements: 'Responsive design, Contact forms, SEO optimization',
            status: 'pending',
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            service: {
              id: 'service-1',
              name: 'Professional Website Development',
              category: 'Web Development',
              basePrice: 2000,
            },
            customer: {
              id: 'customer-1',
              name: 'John Doe',
              email: 'john@example.com',
            },
            provider: {
              id: 'provider-1',
              name: 'Tech Solutions',
              email: 'tech@solutions.com',
            },
          }
        ]
      };
    }
  }

  // Create a new quotation request
  async createQuotation(data: CreateQuotationRequest): Promise<QuotationResponse> {
    try {
      // Use debug endpoint for testing
      const response = await apiService.post<{ message: string; request: any }>('/quotations/request-debug', data);
      
      console.log('Quotation response:', response);
      
      // Transform the backend response to match our frontend interface
      return {
        id: response.request?.id || `quote-${Date.now()}`,
        serviceId: data.serviceId,
        customerId: response.request?.userId || 'test-user-id',
        providerId: response.request?.service?.provider?.id || 'unknown',
        message: data.description,
        budget: data.budget,
        timeline: undefined,
        requirements: undefined,
        status: 'pending',
        createdAt: response.request?.createdAt || new Date().toISOString(),
        updatedAt: response.request?.updatedAt || new Date().toISOString(),
        service: {
          id: data.serviceId,
          name: response.request?.service?.name || 'Unknown Service',
          category: response.request?.service?.category || 'Unknown',
          basePrice: 0,
        },
        customer: {
          id: response.request?.userId || 'test-user-id',
          name: 'Current User',
          email: 'user@example.com',
        },
        provider: {
          id: response.request?.service?.provider?.id || 'unknown',
          name: response.request?.service?.provider?.name || 'Unknown Provider',
          email: response.request?.service?.provider?.email || 'provider@example.com',
        },
      };
    } catch (error: any) {
      console.error('Failed to create quotation:', error);
      
      // Check if it's a specific error we can handle
      if (error?.response?.status === 500) {
        console.error('Server error details:', error.response.data);
      }
      
      // Return mock success for development
      return {
        id: `quote-${Date.now()}`,
        serviceId: data.serviceId,
        customerId: 'current-user',
        providerId: 'provider-1',
        message: data.description,
        budget: data.budget,
        timeline: undefined,
        requirements: undefined,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        service: {
          id: data.serviceId,
          name: 'Sample Service',
          category: 'Web Development',
          basePrice: 2000,
        },
        customer: {
          id: 'current-user',
          name: 'Current User',
          email: 'user@example.com',
        },
        provider: {
          id: 'provider-1',
          name: 'Service Provider',
          email: 'provider@example.com',
        },
      };
    }
  }

  // Update quotation status
  async updateQuotationStatus(
    id: string, 
    status: string, 
    response?: string
  ): Promise<QuotationResponse> {
    try {
      return await apiService.put<QuotationResponse>(`/quotations/${id}/status`, {
        status,
        response,
      });
    } catch (error: any) {
      console.error('Failed to update quotation status:', error);
      throw error;
    }
  }
}

export const quotationService = new QuotationService();
