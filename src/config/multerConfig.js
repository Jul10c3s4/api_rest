import multer from 'multer';
import { extname, resolve } from 'path';
// função para diminuir a possibilidade de ter dois arquivos com o mesmo nome
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// função responsável por nomear os arquivo de imagens para que eles não possuam nome iguais
export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
