'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button/Button';
import { useAuthStore } from '@/stores';
import { useMyServices } from '@/domains/services/hooks/useServices';
import { useReceivedQuotations } from '@/domains/quotations/hooks/useQuotations';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');
  
  const { data: servicesData, isLoading: servicesLoading } = useMyServices();
  const { data: quotationsData, isLoading: quotationsLoading } = useReceivedQuotations();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'services', name: 'My Services', icon: '🛠️' },
    { id: 'requests', name: 'Quote Requests', icon: '📋' },
    { id: 'profile', name: 'Profile', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600">ServiceHub</h1>
            </Link>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-gray-700 text-sm sm:text-base hidden sm:block">
                Welcome, {user?.name}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Exit</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Sidebar - Mobile Optimized */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              {/* User Profile Section */}
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm sm:text-lg">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {user?.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {user?.isServiceProvider ? 'Service Provider' : 'Customer'}
                  </p>
                </div>
              </div>

              {/* Navigation - Mobile Optimized */}
              <nav className="space-y-1 sm:space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors touch-manipulation ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2 sm:mr-3">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content - Mobile Optimized */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {activeTab === 'overview' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Dashboard Overview</h2>
                  
                  {/* Stats Grid - Mobile Optimized */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-medium">📊</span>
                          </div>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <p className="text-xs sm:text-sm font-medium text-blue-600">Total Services</p>
                          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                            {servicesData?.services?.length || 0}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                            <span className="text-green-600 text-sm font-medium">💬</span>
                          </div>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <p className="text-xs sm:text-sm font-medium text-green-600">Active Requests</p>
                          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                            {quotationsData?.quotations?.filter(q => q.status === 'pending').length || 0}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                            <span className="text-purple-600 text-sm font-medium">💰</span>
                          </div>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <p className="text-xs sm:text-sm font-medium text-purple-600">Total Earnings</p>
                          <p className="text-xl sm:text-2xl font-semibold text-gray-900">$2,450</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity - Mobile Optimized */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Recent Activity</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">New quote request received</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">Service &ldquo;Web Development&rdquo; was published</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">Profile updated successfully</p>
                          <p className="text-xs text-gray-500">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">My Services</h2>
                  {user?.isServiceProvider && (
                    <Button className="w-full sm:w-auto">Add New Service</Button>
                  )}
                </div>

                {servicesLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading services...</p>
                  </div>
                ) : servicesData?.services && servicesData.services.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {servicesData.services.map((service: { id: string; name: string; basePrice: number; description: string; category: string }) => (
                      <div key={service.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex-1 pr-2">
                            {service.name}
                          </h3>
                          <span className="text-base sm:text-lg font-bold text-green-600 whitespace-nowrap">
                            ${service.basePrice}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {service.category}
                          </span>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Edit</Button>
                            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">View</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No services found</p>
                    {user?.isServiceProvider && (
                      <Button>Create Your First Service</Button>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'requests' && (
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quote Requests</h2>
                
                {quotationsLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading quote requests...</p>
                  </div>
                ) : quotationsData?.quotations && quotationsData.quotations.length > 0 ? (
                  <div className="space-y-3 sm:space-y-4">
                    {quotationsData.quotations.map((quotation) => (
                      <div key={quotation.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1 pr-2">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                              {quotation.service.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                              From: {quotation.customer.name}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {quotation.customer.email}
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                            quotation.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : quotation.status === 'accepted'
                              ? 'bg-green-100 text-green-800'
                              : quotation.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                          </span>
                        </div>
                        
                        <div className="mb-3">
                          <p className="text-gray-700 text-sm mb-2">
                            <strong>Message:</strong> {quotation.message}
                          </p>
                          {quotation.budget && (
                            <p className="text-gray-600 text-sm">
                              <strong>Budget:</strong> ${quotation.budget.toLocaleString()}
                            </p>
                          )}
                          {quotation.timeline && (
                            <p className="text-gray-600 text-sm">
                              <strong>Timeline:</strong> {quotation.timeline}
                            </p>
                          )}
                          {quotation.requirements && (
                            <p className="text-gray-600 text-sm">
                              <strong>Requirements:</strong> {quotation.requirements}
                            </p>
                          )}
                        </div>

                        {quotation.providerResponse && (
                          <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm font-medium text-blue-900 mb-1">Your Response:</p>
                            <p className="text-sm text-blue-800">{quotation.providerResponse}</p>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                          <span className="text-xs sm:text-sm text-gray-500">
                            Requested: {new Date(quotation.createdAt).toLocaleDateString()}
                          </span>
                          <div className="flex space-x-2">
                            {quotation.status === 'pending' ? (
                              <>
                                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                                  Reject
                                </Button>
                                <Button size="sm" className="flex-1 sm:flex-none">
                                  Accept & Respond
                                </Button>
                              </>
                            ) : (
                              <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                                View Details
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">📋</div>
                    <p className="text-gray-500 text-lg mb-2">No quote requests yet</p>
                    <p className="text-gray-400 text-sm">
                      Quote requests from customers will appear here
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Profile Settings</h2>
                
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm min-h-[44px] touch-manipulation text-gray-900"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm min-h-[44px] touch-manipulation text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue={user?.phone || ''}
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm min-h-[44px] touch-manipulation text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm min-h-[100px] touch-manipulation resize-y text-gray-900"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button type="submit" className="w-full sm:w-auto">Save Changes</Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
