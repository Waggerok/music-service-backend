import { Request, Response, Router } from "express";
import musicController from "../controllers/musicController";
import IMusic from "../Interfaces/Interfaces";

const router = Router();

router.post('/addMusic', async(req : Request<IMusic> , res : Response) => {
    musicController.addMusic(req,res)
});

router.get('/getMusic', async(req : Request ,res : Response) => {
    musicController.getMusic(req,res);
})

router.get('/:id', async(req : Request, res : Response) => {
    musicController.getMusicById(req,res);
})

router.delete('/deleteMusic/:id', async(req : Request, res : Response) => {
    musicController.deleteMusic(req,res);
})

export default router;