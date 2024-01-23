import { DataSource } from "typeorm";
import { User } from "./entities/Users";
require("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})