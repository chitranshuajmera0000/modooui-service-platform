import Link from 'next/link';
import { Button } from '@/components/atoms/Button/Button';

export default function ServiceNotFound() {
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
