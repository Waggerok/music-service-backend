import { Router, Request, Response } from 'express';
import userController from '../controllers/userController';
import ICreateUser from '../Interfaces/Interfaces'

const router = Router();

router.get('/getUsers', async (req: Request, res: Response) => {
    await userController.getUsers(req, res);
});

router.post('/createUser', async (req: Request<ICreateUser>, res: Response) => {
    await userController.createUser(req, res);
});

router.delete('/deleteUser/:login', async(req : Request, res : Response) => {
    await userController.deleteUser(req,res);
})
export default router;
