import Link from 'next/link';
import { Button } from '@/components/atoms/Button/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page might have been moved, deleted, or the URL might be incorrect.
        </p>
        
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg">
              Go Home
            </Button>
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link href="/" className="text-blue-600 hover:text-blue-500">
              ← Back to ServiceHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
