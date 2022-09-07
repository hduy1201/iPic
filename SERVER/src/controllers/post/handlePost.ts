import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ImagePost } from "src/models/imageNude.model";
import { CloudiaryService } from '../../services/cloudiary/cloudiary.service'
import { TagService } from '../../services/tag/tag.service';
import * as path from 'path';
import axios from "axios";
import { NudeNet } from "src/models/nude.model";
const imageToBase64 = require('image-to-base64');

@Injectable()
export class handlePostService {

    constructor(
        private CloudiaryService: CloudiaryService,
        private TagService: TagService
    ) { }

    public checkValidate() {
        throw new HttpException(
            'Please enter field required',
            HttpStatus.BAD_REQUEST,
        );
    }

    isValidUser() {
        throw new HttpException(
            'Please login',
            HttpStatus.BAD_REQUEST,
        );
    }

    isValidImages() {
        throw new HttpException(
            'Please choose at least one picture!',
            HttpStatus.BAD_REQUEST,
        );
    }

    async uploadImages(files) {
        const _imagePath: Array<ImagePost> = [];


        for (let i = 0; i < files.length; i++) {
            let pathImage = await this.CloudiaryService.uploadImage(files[i]);

            _imagePath.push({
                url: pathImage.url,
                hashTag: await this.nudeNet(files[i])
            });
        }

        return _imagePath;
    }



    async handleTags(tags, idPost) {

        const _tags = tags.split(',');

        _tags.forEach(async element => {
            await this.TagService.addPostToTag(element, idPost);
        });

    }


    public async nudeNet(file) {

        const NUDE_NET_ENDPOINT = "https://nudenet.trongpham.dev/sync";

        const _imagePath = path.join(
            __dirname, "../../../uploads/images/" + file.filename,
        );

        let image = await imageToBase64(_imagePath);

        let request = {
            data: {},
        };

        request.data['undefined'] = image;
        try {
            let result: NudeNet = await (
                await axios.post(NUDE_NET_ENDPOINT, request)
            ).data;

            const RATE_TEST = 0.7; //safe neu safe test < 0.7;

            if (result.prediction.undefined.unsafe > RATE_TEST) {
                return this.waringImage();
            } else {
                return this.notWaringImage();
            }
        } catch (error) {
            return error;
        }
    }

    waringImage() {
        return "Warning 18+";
    }

    notWaringImage() {
        return "Not Warning 18+";
    }

}
