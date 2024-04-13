import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// não deveria existir em uma api do mundo real
// router.get('/', loginRequired, userController.index);// lista usuários, oq não é legal em uma api
// router.get('/:id', userController.show);// lista um usuário, oq não é legal em uma api

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

// métodos padrão de controller:
/*
index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> apaga um usuário
show -> mostra um usuário
update -> atualiza um usuário
*/
