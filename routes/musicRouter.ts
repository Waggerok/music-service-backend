import { Request, Response, Router } from "express";
import musicController from "../controllers/musicController";
import IMusic from "../Interfaces/Interfaces";
import upload from "../middleware/uploads";

const router = Router();

router.post("/addMusic", upload.fields([{ name: "image" }, { name: "audio" }]), (req, res) => {
    musicController.addMusic(req as Request, res as Response);
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