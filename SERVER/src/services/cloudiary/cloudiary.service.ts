import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import * as path from 'path';

@Injectable()
export class CloudiaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise(async (resolve, reject) => {
      const imagePath = path.join(
        __dirname,
        '../../../uploads/images/' + file.filename,
      );
      console.log(imagePath);
      try {
        let res = await cloudinary.uploader.upload(imagePath);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
}
