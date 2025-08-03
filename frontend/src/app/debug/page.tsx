'use client';

import { useState } from 'react';
import { servicesService } from '@/domains/auth/services/services.service';

export default function DebugPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testApiCall = async () => {
    setLoading(true);
    try {
      // Test getting all services first
      const result = await servicesService.getAllServices();
      setTestResult({ success: true, data: result });
    } catch (error) {
      setTestResult({ success: false, error: error instanceof Error ? error.message : String(error) });
    }
    setLoading(false);
  };

  const testSpecificService = async () => {
    setLoading(true);
    try {
      // Test getting a specific service - use one of the service IDs from the list
      const result = await servicesService.getServiceById('cmdu2qxin000avwdcu7pmbsr7');
      setTestResult({ success: true, data: result });
    } catch (error) {
      setTestResult({ success: false, error: error instanceof Error ? error.message : String(error) });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">API Debug Page</h1>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Environment Variables</h2>
            <pre className="text-sm bg-gray-100 p-2 rounded">
              {JSON.stringify({
                NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
                NODE_ENV: process.env.NODE_ENV,
                allPublicVars: Object.keys(process.env).filter(k => k.startsWith('NEXT_PUBLIC'))
              }, null, 2)}
            </pre>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Test API Calls</h2>
            <div className="space-x-4 mb-4">
              <button 
                onClick={testApiCall}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Test Get All Services'}
              </button>
              <button 
                onClick={testSpecificService}
                disabled={loading}
                className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Test Get Specific Service'}
              </button>
            </div>
            {testResult && (
              <pre className="text-sm bg-gray-100 p-2 rounded">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            )}
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Current Location</h2>
            <pre className="text-sm bg-gray-100 p-2 rounded">
              {typeof window !== 'undefined' ? JSON.stringify({
                href: window.location.href,
                origin: window.location.origin,
                pathname: window.location.pathname
              }, null, 2) : 'Server side'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
