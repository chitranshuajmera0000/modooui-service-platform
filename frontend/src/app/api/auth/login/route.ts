import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // Mock authentication for testing
    if (email && password) {
      return NextResponse.json({
        user: {
          id: '1',
          email,
          name: 'Test User',
          isServiceProvider: false
        },
        token: 'mock-jwt-token-' + Date.now(),
        message: 'Login successful'
      });
    } else {
      return NextResponse.json(
        { error: 'Email and password required' },
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

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
