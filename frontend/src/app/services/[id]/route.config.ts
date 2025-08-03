// This page uses dynamic segments that cannot be statically generated
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate static params for the most common service IDs (optional)
export async function generateStaticParams() {
  // Return empty array to force all routes to be dynamic
  return [];
}
