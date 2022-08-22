import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryProvider } from './providers/cloudiary.provider';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  cloudinary.config(CloudinaryProvider.useFactory());
  admin.initializeApp({
    credential: admin.credential.cert(require('../admin-key.json')),
  });
  await app.listen(3000);
}
bootstrap();
