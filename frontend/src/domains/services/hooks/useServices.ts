import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { servicesService } from '@/domains/auth/services/services.service';
import { ServiceForm } from '@/types';

// Get all services
export function useServices(category?: string) {
    return useQuery({
        queryKey: ['services', category], // Cache key
        queryFn: () => servicesService.getAllServices(category),
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
}

// Get single service by ID
export function useServiceById(id: string) {
    return useQuery({
        queryKey: ['service', id],
        queryFn: () => servicesService.getServiceById(id),
        enabled: !!id, // Only run if ID exists
    });
}

// Create new service
export function useCreateService() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ServiceForm) => servicesService.createService(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] });
        },
    });
}


// Get my services (provider's services)
export function useMyServices() {
    return useQuery({
        queryKey: ['my-services'],
        queryFn: () => servicesService.getMyServices(),
    });
}

// Update service
export function useUpdateService() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: Partial<ServiceForm> }) =>
            servicesService.updateService(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] });
            queryClient.invalidateQueries({ queryKey: ['my-services'] });
        },
    });
}

// Delete service
export function useDeleteService() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => servicesService.deleteService(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] });
            queryClient.invalidateQueries({ queryKey: ['my-services'] });
        },
    });
}