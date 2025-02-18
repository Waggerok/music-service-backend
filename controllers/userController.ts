// import { Request, Response } from "express";
// import { where } from "sequelize";
// import model from "../models/models";

// class UserController {
//     async getUsers(req : Request,res : Response) {
//         try {
//             const users = await model.User.findAll()

//             if (users.length > 0) {
//                 res.status(200).json({users})
//             } else {
//                 res.status(404).json({ message : 'Пользователи не найдены' })
//             }
//         } catch(error) {
//             console.error()
//         }
//     }
// }