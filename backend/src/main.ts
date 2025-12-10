import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser"
import type { NextFunction } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Cookies:', req);
  console.log('Headers:', req.headers);
  next();
});
  app.enableCors({
    origin: "https://aura-research.vercel.app",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
