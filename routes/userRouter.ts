import { Router, Request, Response } from 'express';
import userController from '../controllers/userController';

const router = Router();

// Типизация параметров и тела запроса
router.get('/getUsers', async (req: Request, res: Response) => {
    await userController.getUsers(req, res);
});

// Для POST-запроса используем типизацию для тела запроса
interface ICreateUser {
    login: string;
    password: string;
    role?: string;
}

router.post('/createUser', async (req: Request<{}, {}, ICreateUser>, res: Response) => {
    await userController.createUser(req, res);
});

router.delete('/deleteUser/:login', async(req : Request, res : Response) => {
    await userController.deleteUser(req,res);
})
export default router;
