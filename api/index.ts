import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../backend-nestjs/src/app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';

let app: any;

async function createNestServer(expressInstance: express.Express) {
  const adapter = new ExpressAdapter(expressInstance);
  const nestApp = await NestFactory.create(AppModule, adapter);
  
  // Enhanced CORS for Vercel deployment
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://modooui-service-platform.vercel.app'
  ];
  
  nestApp.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });
  
  // Don't set global prefix here since it's already handled by Vercel routing
  await nestApp.init();
  
  return nestApp.getHttpAdapter().getInstance();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!app) {
    const server = express();
    app = await createNestServer(server);
  }
  
  return app(req, res);
}
