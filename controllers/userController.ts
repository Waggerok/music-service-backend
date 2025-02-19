import { Request, Response } from "express";
import model from "../models/models";
import ICreateUser from '../Interfaces/Interfaces';


class UserController{
    async getUsers(req : Request,res : Response) {
        try {
            const users = await model.User.findAll()

            if (users.length > 0) {
                res.status(200).json({users})
            } else {
                res.status(404).json({ message : 'Пользователи не найдены' })
            }
        } catch(error) {
            console.error('Error during getting all users', error);
            res.status(500).json({ message : 'Произошла ошибка на сервере' })
        }
    }
    async createUser(req : Request<ICreateUser>, res : Response) {
        try {
            const {login, password, role} = req.body;

            if (!login || !password) {
                return res.status(400).json({ message : 'Не все данные введены' })
            }

            const newUser = await model.User.create({ login, password, role })
            return res.status(201).json(newUser)
        } catch (error) {
            console.error('Error during creating user', error);
            res.status(500).json({ message : 'Произошла ошибка при создании пользователя' })
        }
    }
    async deleteUser(req : Request, res : Response) {
        try {
            const {login} = req.params;

            const user = await model.User.findOne({ where : { login } })
            if (!user) {
                return res.status(404).json({ message : 'Пользователь не найден или не существует' })
            }

            await user.destroy();

            return res.status(200).json({ message : 'Пользователь успешно удален из базы данных'})
        } catch (error) {
            console.error('Error during deleting user', error);
            res.status(500).json({ message : 'Ошибка при удалении пользователя' })
        }
    }
}

export default new UserController();