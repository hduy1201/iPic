import { diskStorage } from "multer";
import { extname } from "path";

export const storage = diskStorage({
    destination: "./public/tests",
    filename: (req, file, callback) => {
        console.log(file);
        callback(null, generateFilename(file));
    }
});

function generateFilename(file) {
    return `${file.originalname}`;
}