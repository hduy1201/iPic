import { v2 } from 'cloudinary';
import { CLOUDINARY } from 'src/constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return CLOUDINARY.config({
      cloud_name: 'dloyx7aqb',
      api_key: '852787497283171',
      api_secret: 'oDBYO_TkYQKuuvhRLD85feqFVmY',
    });
  },
};