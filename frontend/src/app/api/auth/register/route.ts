import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, phone, location } = body;
    
    // Mock registration for testing
    if (email && password && name) {
      return NextResponse.json({
        user: {
          id: '2',
          email,
          name,
          phone: phone || null,
          location: location || null,
          isServiceProvider: false
        },
        token: 'mock-jwt-token-' + Date.now(),
        message: 'Registration successful'
      });
    } else {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
