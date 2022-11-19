import express, { Router } from 'express'

const router = express.Router()

interface Route {
    path: string
    route: Router
}

const routes: Route[] = {

}

export { routes }