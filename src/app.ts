import express, { Request, Response, NextFunction } from 'express'
import { json, urlencoded } from 'body-parser'

import { connection } from './config'
import { Route } from './interfaces'

class App {
    public app: express.Application
    public port: string | number
    public env: string

    constructor(routes: Route[]) {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.env = process.env.NODE_ENV || 'development'

        this.connectDatabase()
        this.initializeMiddlewares()
        this.initializeRoutes(routes)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`=================================`);
            console.log(`======= CURRENT ENV: ${this.env} =======`);
            console.log(`🚀 App listening on the port ${this.port} 🚀`);
            console.log(`=================================`);
        });
    }

    public getServer() {
        return this.app;
    }

    private connectDatabase() {
        connection
            .sync()
            .then(() => {
                console.log(`=================================`);
                console.log(`🚀 Connected to ${process.env.DB_NAME} database successfully 🚀`);
                console.log(`=================================`);
            })
            .catch((err: Error) => {
                console.error(err)
            })
    }

    private initializeMiddlewares() {
        this.app.use(json())

        this.app.use(urlencoded({
            extended: true
        }))

        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            return res.status(500).json({
                message: err.message
            })
        })
    }

    private initializeRoutes(routes: Route[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
}

export { App }