import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { CLOUDINARY_CONFIG } from './providers/cloudiary.provider';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  v2.config(CLOUDINARY_CONFIG);

  admin.initializeApp({
    credential: admin.credential.cert(require('../admin-key.json')),
  });

  await app.listen(3000);
}

bootstrap();
