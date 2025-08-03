import Link from 'next/link';
import { Service } from '@/types';
import { Button } from '@/components/atoms/Button/Button';
import { cn } from '@/utils/cn';

interface ServiceCardProps {
  service: Service;
  onRequestQuote?: (serviceId: string) => void;
  className?: string;
}

export function ServiceCard({ service, onRequestQuote, className }: ServiceCardProps) {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-200 overflow-hidden touch-manipulation',
      className
    )}>
      {/* Clickable service content */}
      <Link href={`/services/${service.id}`} prefetch={false} className="block p-4 sm:p-6 hover:bg-gray-50 transition-colors active:bg-gray-100">
        {/* Service Info */}
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 flex-1">
              {service.name}
            </h3>
            <span className="text-lg sm:text-xl font-bold text-blue-600 whitespace-nowrap">
              ${service.basePrice}
            </span>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm font-medium bg-gray-100 px-2 py-1 rounded-full inline-block">
            {service.category}
          </p>
          
          <p className="text-gray-700 text-sm sm:text-base line-clamp-3 leading-relaxed">
            {service.description}
          </p>
          
          {/* Provider Info */}
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
            <div className="text-xs sm:text-sm text-gray-500">
              by <span className="font-medium text-gray-700">{service.provider?.name || 'Provider'}</span>
            </div>
            
            <div className="text-xs text-blue-500 font-medium hidden sm:block">
              Tap to view details →
            </div>
          </div>
        </div>
      </Link>
      
      {/* Action buttons outside the link */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <Button
          variant="primary"
          size="md"
          className="w-full text-sm sm:text-base"
          onClick={() => onRequestQuote?.(service.id)}
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
}