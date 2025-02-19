import { Response, Request } from "express";
import model from "../models/models";
import IMusic from "../Interfaces/Interfaces";



class musicController {
    async addMusic(req : Request<IMusic>, res : Response) {
        try {
            const {title , author , image , audio} = req.body

            if (!title || !author || !image || !audio) {
                return res.status(400).json({ message : 'Не все данные введены' })
            }

            const newMusic = await model.Music.create({title, author, image, audio});
            return res.status(201).json(newMusic);
        } catch (error){
            console.error('Error during creating music', error);
            return res.status(500).json({ message : 'Ошибка при добавлении песни' })
        }
    }
    async getMusic(req : Request, res : Response) {
        try {
            const music= await model.Music.findAll()

            if (music.length > 0) {
                res.status(200).json({music})
            } else {
                res.status(404).json({ message : 'Музыка не найдена' })
            }

        } catch(error) {
            console.error('Error during getting all music', error);
            res.status(500).json({ message : 'Ошибка при получении песен' })
        }
    }
    async getMusicById (req : Request, res : Response) {
        try {
            const { id } = req.params;

            const music = await model.Music.findOne({ where : { id } });

            if (!music) {
                return res.status(404).json({ message : 'Такой песни не существует' })
            };

            res.status(200).json(music)        
        } catch(error) {
            console.error('Error during getting music by id', error);
            return res.status(500).json({ message : 'Ошибка при получении песни по его id' })
        }

    }
    async deleteMusic(req: Request, res: Response) {
        try {
            const { id } = req.params;
    
            const music = await model.Music.findOne({ where: { id } });
    
            if (!music) {
                return res.status(400).json({ message: 'Такой песни не существует' });
            }
    
            await music.destroy()
            res.status(200).json({ message: 'Музыка успешно удалена' });

        } catch (error) {
            console.error('Ошибка при удалении музыки:', error);
            res.status(500).json({ message: 'Ошибка сервера' });
        }
    }
    

}

export default new musicController()