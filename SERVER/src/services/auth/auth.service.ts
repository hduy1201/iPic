import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor() {}
  async verifyToken(idToken: string) {
    return await admin.auth().verifyIdToken(idToken);
  }
}
