import dotenv from 'dotenv';
import express from 'express';
import {sequelize} from './data/database';

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000
const app = express();

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server is running on port${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();