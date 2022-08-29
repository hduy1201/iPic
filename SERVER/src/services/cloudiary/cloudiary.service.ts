import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

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
        let res = await v2.uploader.upload(imagePath, {
          folder: "iPic"
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
}
