import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));
  
  // Enhanced CORS for Railway deployment
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'https://modooui-service-platform.vercel.app'
  ];
  
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });
  
  // Railway uses PORT environment variable
  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  
  console.log(`🚀 NestJS Backend running on port ${port}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔗 CORS Origins: ${allowedOrigins.join(', ')}`);
}

bootstrap();
