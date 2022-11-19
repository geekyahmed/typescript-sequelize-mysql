import express, { Router } from 'express'
import { Route } from '../interfaces'
import { TodoController } from '../controllers'

class TodoRoute implements Route {
    public path = '/auth'
    public router = Router()
    public todoController = new TodoController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router
            .route('/')
            .get(this.todoController.getTodos)
            .post(this.todoController.createTodo)

        this.router
            .route('/:id')
            .get(this.todoController.getTodoById)
            .put(this.todoController.updateTodo)
            .delete(this.todoController.deleteTodo)
    }
}

export { TodoRoute }