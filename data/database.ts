import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,
    {
        dialect : 'postgres',
        host : process.env.DB_HOST,
        port : process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
        logging : console.log
    }
)