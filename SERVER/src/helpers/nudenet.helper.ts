import { Injectable } from "@nestjs/common";
const imageToBase64 = require('image-to-base64');
import axios from 'axios';
import * as path from 'path';
import { NudeNet } from "src/models/nude.model";

const URL_NUDE_NET = 'http://localhost:8080/sync';
const _IMAGE_PATH = `../../../uploads/images/`

@Injectable()
export class NudeNetClass {
    constructor() { }

    public async nudePost(file) {
        const _imagePath = path.join(
            _IMAGE_PATH + file.filename,
        );

        let image = await imageToBase64(_imagePath);

        let request = {
            data: {},
        };

        request.data['undefined'] = image;
        try {
            let result: NudeNet = await (
                await axios.post(URL_NUDE_NET, request)
            ).data;

            console.log(result);

            if (result.prediction.undefined.unsafe > 0.7) {
                return 'Warning 18+';
            } else {
                return 'Safe';
            }
        } catch (error) {
            return error;
        }
    }
}