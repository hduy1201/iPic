import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  admin.initializeApp({
    credential: admin.credential.cert(require('../admin-key.json')),
  });
  await app.listen(3000);
}
bootstrap();
