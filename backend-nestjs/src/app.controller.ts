import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
