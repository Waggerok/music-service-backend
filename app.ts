import dotenv from 'dotenv';
import express from 'express';
const models = require('./models/models');
import {sequelize} from './data/database';
import userRouter from './routes/userRouter';
import musicRouter from './routes/musicRouter';
import cors from 'cors'
import path from 'path';

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000
const app = express();

app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(express.json())
app.use('/api/user', userRouter);
app.use('/api/music', musicRouter)

const start = async() => {
    try {
        console.log("Attempting to connect to the database...");
        await sequelize.authenticate();
        console.log("Database connection successful.");
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}


start();