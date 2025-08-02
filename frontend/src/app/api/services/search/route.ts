import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || '';
    
    // Mock services data
    const mockServices = [
      {
        id: '1',
        name: 'Web Development',
        category: 'Technology',
        description: 'Professional web development services',
        basePrice: 500,
        provider: {
          id: '1',
          name: 'John Developer',
          email: 'john@example.com'
        }
      },
      {
        id: '2',
        name: 'Graphic Design',
        category: 'Design',
        description: 'Creative graphic design solutions',
        basePrice: 300,
        provider: {
          id: '2',
          name: 'Jane Designer',
          email: 'jane@example.com'
        }
      },
      {
        id: '3',
        name: 'Digital Marketing',
        category: 'Marketing',
        description: 'Comprehensive digital marketing services',
        basePrice: 400,
        provider: {
          id: '3',
          name: 'Mike Marketer',
          email: 'mike@example.com'
        }
      }
    ];
    
    // Filter services based on query and category
    let filteredServices = mockServices;
    
    if (query) {
      filteredServices = filteredServices.filter(service => 
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    if (category) {
      filteredServices = filteredServices.filter(service => 
        service.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    return NextResponse.json({
      services: filteredServices,
      total: filteredServices.length
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
