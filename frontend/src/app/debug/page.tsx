'use client';

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Debug Info</h1>
        
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
