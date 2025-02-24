import multer from 'multer'
import path from 'path';
import fs from 'fs'

const createFolder = (folderPath: string) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
};


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = "uploads/";

        // Определяем папку по типу файла
        if (file.mimetype.startsWith("image/")) {
            folder += "image/";
        } else if (file.mimetype.startsWith("audio/")) {
            folder += "audio/";
        } else {
            folder += "other/"; // Для других типов файлов
        }

        createFolder(folder); // Создаём папку, если её нет
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({storage})

export default upload;