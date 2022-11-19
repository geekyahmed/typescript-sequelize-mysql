import { Request, Response, NextFunction } from 'express'
import { TodoService } from '../services'
import { sendResponse } from '../utils'
import { HttpCodes } from '../constants'

class TodoController {
    public todoService = new TodoService()

    public createTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createdTodo = await this.todoService.createTodo(req.body)

            return sendResponse(res,
                HttpCodes.CREATED,
                'Todo created successfully',
                createdTodo
            )
        } catch (err) {
            next(err)
        }
    }

    public getTodos = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const todos = await this.todoService.getTodos()

            return sendResponse(res,
                HttpCodes.CREATED,
                'Todos retrieved successfully',
                todos
            )
        } catch (err) {
            next(err)
        }
    }

    public getTodoById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const todo = await this.todoService.getTodoById(req.params.id)

            return sendResponse(res,
                HttpCodes.CREATED,
                'Todo retrieved successfully',
                todo
            )
        } catch (err) {
            next(err)
        }
    }

    public updateTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.todoService.updateTodo(req.params.id, req.body)

            return sendResponse(res,
                HttpCodes.CREATED,
                'Todo updated successfully'
            )
        } catch (err) {
            next(err)
        }
    }

    public deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.todoService.deleteTodo(req.params.id)

            return sendResponse(res,
                HttpCodes.CREATED,
                'Todo deleted successfully'
            )
        } catch (err) {
            next(err)
        }
    }
}

export { TodoController }