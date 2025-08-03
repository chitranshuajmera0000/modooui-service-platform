'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useServices } from '@/domains/services/hooks/useServices';
import { Button } from '@/components/atoms/Button/Button';
import { SearchBar } from '@/components/molecules/SearchBar/SearchBar';
import { ServicesList } from '@/components/organisms/ServicesList/ServicesList';
import { useAuthStore } from '@/stores';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();
  
  // DEBUG: Log environment variable
  console.log('🔥 NEXT_PUBLIC_API_URL from page:', process.env.NEXT_PUBLIC_API_URL);
  console.log('🔥 All env vars:', Object.keys(process.env).filter(k => k.startsWith('NEXT_PUBLIC')));
  
  // Use our TanStack Query hook
  const { data, isLoading, error } = useServices(selectedCategory);
  const { isAuthenticated, user } = useAuthStore();

  const categories = [
    'Web Development',
    'Mobile Development', 
    'Design',
    'Marketing',
    'Writing',
    'Consulting'
  ];

  const handleRequestQuote = (serviceId: string) => {
    if (!isAuthenticated) {
      // Redirect to login with return URL
      router.push(`/login?redirect=/services/${serviceId}`);
      return;
    }
    // Navigate to service detail page for quote request
    router.push(`/services/${serviceId}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Clear category filter when searching
    if (query.trim()) {
      setSelectedCategory(undefined);
    }
  };

  // Filter services based on search query
  const filteredServices = data?.services?.filter(service => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      service.provider?.name.toLowerCase().includes(query)
    );
  }) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
                ServiceHub
              </h1>
            </div>
            
            {/* Navigation - Mobile Optimized */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="outline" size="sm" className="hidden sm:block">
                      Dashboard
                    </Button>
                  </Link>
                  {/* Mobile menu for authenticated users */}
                  <div className="sm:hidden">
                    <Button variant="outline" size="sm">
                      Menu
                    </Button>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base hidden sm:block">
                    Welcome, {user?.name}
                  </span>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="text-xs sm:text-sm">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Find the Perfect Service Provider
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-4">
            Connect with trusted professionals for all your needs. 
            From web development to design, find experts who deliver quality results.
          </p>
          
          {/* Search Bar in Hero - Mobile Optimized */}
          <div className="max-w-2xl mx-auto px-4">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="What service are you looking for?"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-2"
            />
          </div>
        </div>
      </section>

      {/* Categories Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            Browse by Category
          </h2>
          
          {/* Mobile-first category layout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Button
              variant={!selectedCategory ? 'primary' : 'outline'}
              onClick={() => {
                setSelectedCategory(undefined);
                setSearchQuery('');
              }}
              size="sm"
              className="text-xs sm:text-sm"
            >
              All Services
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery('');
                }}
                size="sm"
                className="text-xs sm:text-sm whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {searchQuery.trim() 
                    ? `Search Results: "${searchQuery}"` 
                    : selectedCategory 
                      ? `${selectedCategory} Services` 
                      : 'All Services'
                  }
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {filteredServices.length} services available
                  {searchQuery.trim() && filteredServices.length !== (data?.services?.length || 0) && 
                    ` (filtered from ${data?.services?.length || 0} total)`
                  }
                </p>
              </div>
              
              {/* Clear Search Button */}
              {searchQuery.trim() && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  className="w-full sm:w-auto"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </div>
          
          {/* Error State */}
          {error && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-red-600 mb-4 text-sm sm:text-base">Error loading services</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          )}
          
          {/* Services List using our Organism */}
          <ServicesList
            services={filteredServices}
            loading={isLoading}
            onRequestQuote={handleRequestQuote}
          />
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">ServiceHub</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Connecting people with trusted service providers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>Web Development</li>
                <li>Design</li>
                <li>Marketing</li>
                <li>Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>About Us</li>
                <li>Contact</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2025 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}