import { Sequelize } from "sequelize-typescript"
import { Todos } from '../models'

const connection = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    models: [Todos],
})

export { connection }