import { ButtonProps } from '@/types';
import { cn } from '@/utils/cn'; // We'll create this utility

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  className 
}: ButtonProps) {
  
  // Base styles that all buttons share - enhanced for mobile
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 select-none touch-manipulation';
  
  // Variant styles (colors)
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
  };
  
  // Size styles - enhanced for mobile touch targets
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm min-h-[36px]', // Minimum touch target 36px
    md: 'px-4 py-2.5 text-base min-h-[44px]', // Recommended touch target 44px
    lg: 'px-6 py-3 text-lg min-h-[48px]', // Large touch target 48px
  };
  
  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed active:scale-100';
  
  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) && disabledStyles,
        className
      )}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
          <span className="sr-only sm:not-sr-only">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}