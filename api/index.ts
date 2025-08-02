import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Simple test response
  const { method, url } = req;
  
  if (method === 'POST' && url?.includes('/auth/login')) {
    const { email, password } = req.body || {};
    
    // Mock login response for testing
    if (email && password) {
      return res.status(200).json({
        user: {
          id: '1',
          email,
          name: 'Test User'
        },
        token: 'mock-jwt-token',
        message: 'Login successful (mock)'
      });
    } else {
      return res.status(400).json({
        error: 'Email and password required'
      });
    }
  }

  // Default response
  return res.status(200).json({
    message: 'ServiceHub API is running on Vercel!',
    method,
    url,
    timestamp: new Date().toISOString()
  });
}
