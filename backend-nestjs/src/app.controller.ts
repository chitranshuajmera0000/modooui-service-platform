import { Controller, Get, Options, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Options('*')
  handleGlobalOptions(@Res() res: Response) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept, Origin');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204);
  }

  @Get('test-cors')
  testCors(@Res() res: Response) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({ 
      message: 'CORS test successful',
      timestamp: new Date().toISOString(),
      headers: res.getHeaders()
    });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'ServiceHub API',
      version: '1.0.0',
      endpoints: {
        auth: '/auth',
        services: '/services',
        users: '/users',
        quotations: '/quotations'
      }
    };
  }

  @Get('api')
  getApiInfo() {
    return {
      name: 'ServiceHub API',
      version: '1.0.0',
      description: 'Service marketplace platform API',
      documentation: '/api/docs',
      health: '/health',
      endpoints: [
        'GET /health - API health check',
        'POST /auth/register - User registration',
        'POST /auth/login - User login',
        'GET /auth/me - Get current user',
        'GET /services - Get all services',
        'GET /services/:id - Get service by ID',
        'POST /services - Create service (providers only)',
        'GET /quotations - Get quotations',
        'POST /quotations - Create quotation request'
      ]
    };
  }
}
