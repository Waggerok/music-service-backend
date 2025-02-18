import dotenv from 'dotenv';
import express from 'express';
const models = require('./models/models');
import {sequelize} from './data/database';

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000
const app = express();

console.log(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS);

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