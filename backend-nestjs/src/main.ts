import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enhanced CORS for Vercel deployment
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://modooui-service-platform.vercel.app'
  ];
  
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });
  
  // Vercel compatibility
  const port = process.env.PORT ?? 3001;
  await app.listen(port, '0.0.0.0');
  
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Backend server running on http://localhost:${port}`);
  }
}

// Export for Vercel serverless functions
export default bootstrap;

// Start the application
if (require.main === module) {
  bootstrap();
}
