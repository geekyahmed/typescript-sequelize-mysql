import express, { Router } from 'express'
import { Route } from '../interfaces'
import { TodoController } from '../controllers'

class TodoRoute implements Route {
    public path = '/todos'
    public router = Router()
    public todoController = new TodoController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router
            .route(this.path)
            .get(this.todoController.getTodos)
            .post(this.todoController.createTodo)

        this.router
            .route(`${this.path}/:id`)
            .get(this.todoController.getTodoById)
            .put(this.todoController.updateTodo)
            .delete(this.todoController.deleteTodo)
    }
}

export { TodoRoute }