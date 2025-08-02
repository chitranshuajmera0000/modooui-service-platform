import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { quotationService } from '../../../services/quotations';
import type { CreateQuotationRequest, QuotationResponse } from '../../../services/quotations';

// Get all quotations for the current user
export function useQuotations() {
  return useQuery({
    queryKey: ['quotations'],
    queryFn: () => quotationService.getQuotations(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Get quotations for a specific service (for providers)
export function useServiceQuotations(serviceId: string) {
  return useQuery({
    queryKey: ['quotations', 'service', serviceId],
    queryFn: () => quotationService.getServiceQuotations(serviceId),
    enabled: !!serviceId,
    staleTime: 1000 * 60 * 5,
  });
}

// Get quotations received by provider
export function useReceivedQuotations() {
  return useQuery({
    queryKey: ['quotations', 'received'],
    queryFn: () => quotationService.getReceivedQuotations(),
    staleTime: 1000 * 60 * 2, // 2 minutes - more frequent updates for requests
  });
}

// Create a new quotation request
export function useCreateQuotation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateQuotationRequest) => quotationService.createQuotation(data),
    onSuccess: () => {
      // Invalidate and refetch quotations
      queryClient.invalidateQueries({ queryKey: ['quotations'] });
    },
  });
}

// Update quotation status (accept, reject, etc.)
export function useUpdateQuotationStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status, response }: { id: string; status: string; response?: string }) =>
      quotationService.updateQuotationStatus(id, status, response),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quotations'] });
    },
  });
}
