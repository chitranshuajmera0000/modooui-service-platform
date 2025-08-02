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
  
  // Base styles that all buttons share
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2';
  
  // Variant styles (colors)
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
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
        <div className="flex items-center gap-2">
          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
}