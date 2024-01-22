"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "DB_HOST",
    port: "DB_PORT",
    username: "postgres",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
