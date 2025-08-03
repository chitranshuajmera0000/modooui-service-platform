'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useServiceById } from '@/domains/services/hooks/useServices';
import { useCreateQuotation } from '@/domains/quotations/hooks/useQuotations';
import { Button } from '@/components/atoms/Button/Button';
import { useAuthStore } from '@/stores';

// This ensures the page is dynamically rendered
export const dynamic = 'force-dynamic';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.id as string;
  
  // All hooks must be called at the top level
  const { data, isLoading, error } = useServiceById(serviceId);
  const { isAuthenticated, user } = useAuthStore();
  const createQuotationMutation = useCreateQuotation();
  
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteRequest, setQuoteRequest] = useState({
    description: '',
    budget: '',
    location: ''
  });

  // Handle invalid service ID after hooks
  if (!serviceId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Service</h1>
          <p className="text-gray-600 mb-8">No service ID provided.</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error || !data?.service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const service = data.service;

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    try {
      await createQuotationMutation.mutateAsync({
        serviceId,
        description: quoteRequest.description,
        budget: quoteRequest.budget ? parseFloat(quoteRequest.budget) : undefined,
        location: quoteRequest.location,
      });
      
      // Show success message
      alert('Quote request submitted successfully! The provider will review your request.');
      setShowQuoteForm(false);
      setQuoteRequest({
        description: '',
        budget: '',
        location: ''
      });
    } catch (error) {
      console.error('Failed to submit quote request:', error);
      alert('Failed to submit quote request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ServiceHub</h1>
            </Link>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <span className="text-gray-700">Welcome, {user?.name}</span>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm">Login</Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-500">Services</span>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{service.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {service.category}
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ${service.basePrice}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Professional consultation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Detailed project planning</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Regular progress updates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Post-completion support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - Provider Info & Quote Request */}
          <div className="space-y-6">
            {/* Provider Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Service Provider
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {service.provider?.name?.charAt(0) || 'P'}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {service.provider?.name || 'Provider Name'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Professional Service Provider
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Response time:</span>
                  <span>Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span>5+ years</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {!showQuoteForm ? (
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Get a Custom Quote
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Request a personalized quote for your specific needs
                  </p>
                  <Button 
                    className="w-full"
                    onClick={() => setShowQuoteForm(true)}
                  >
                    Request Quote
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Request Quote
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description
                    </label>
                    <textarea
                      value={quoteRequest.description}
                      onChange={(e) => setQuoteRequest(prev => ({
                        ...prev,
                        description: e.target.value
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      rows={3}
                      placeholder="Describe your project requirements..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      value={quoteRequest.budget}
                      onChange={(e) => setQuoteRequest(prev => ({
                        ...prev,
                        budget: e.target.value
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="500">Under $500</option>
                      <option value="1000">$500 - $1,000</option>
                      <option value="5000">$1,000 - $5,000</option>
                      <option value="10000">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={quoteRequest.location}
                      onChange={(e) => setQuoteRequest(prev => ({
                        ...prev,
                        location: e.target.value
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      placeholder="City, State or Remote"
                      required
                    />
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowQuoteForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1"
                      loading={createQuotationMutation.isPending}
                      disabled={createQuotationMutation.isPending}
                    >
                      {createQuotationMutation.isPending ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
