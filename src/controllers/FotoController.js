import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    // função responsável por armazenar a foto
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const aluno = await Aluno.findByPk(aluno_id);
        if (!aluno) {
          return res.status(400).json({
            errors: ['the student id do not exist'],
          });
        }
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new FotoController();
