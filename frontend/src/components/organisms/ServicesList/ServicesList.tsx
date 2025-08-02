import { Service } from '@/types';
import { ServiceCard } from '@/components/molecules/ServiceCard/ServiceCard';
import { cn } from '@/utils/cn';

interface ServicesListProps {
  services: Service[];
  loading?: boolean;
  onRequestQuote?: (serviceId: string) => void;
  className?: string;
}

export function ServicesList({ 
  services, 
  loading, 
  onRequestQuote, 
  className 
}: ServicesListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md border p-4 sm:p-6 animate-pulse">
            <div className="h-5 sm:h-6 bg-gray-200 rounded mb-3 sm:mb-4"></div>
            <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-12 sm:h-16 bg-gray-200 rounded mb-3 sm:mb-4"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-6xl sm:text-8xl mb-4">🔍</div>
        <p className="text-gray-500 text-base sm:text-lg mb-2">No services found</p>
        <p className="text-gray-400 text-sm">Try adjusting your search or browse all categories</p>
      </div>
    );
  }

  return (
    <div className={cn(
      'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',
      className
    )}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onRequestQuote={onRequestQuote}
        />
      ))}
    </div>
  );
}