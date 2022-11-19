import createHttpError from 'http-errors'
import { Todos } from '../models'
import { ITodo } from '../interfaces'
import { HttpCodes } from '../constants'

class TodoService {
    public todos = Todos

    public createTodo = async (payload: ITodo): Promise<Todos> => {
        const newTodo = this.todos.create(payload)

        return newTodo
    }

    public getTodos = async (): Promise<Todos[]> => {
        const todos = this.todos.findAll()

        return todos
    }

    public getTodoById = async (id: string): Promise<Todos> => {
        const singleTodo = await this.todos.findByPk(id)

        if (!singleTodo) throw createHttpError(HttpCodes.BAD_REQUEST, 'Todo bearing this id not found')

        return singleTodo
    }

    public updateTodo = async (id: string, payload: ITodo) => {
        await this.getTodoById(id)

        const updatedTodo = await this.todos.update({ ...payload }, {
            where: {
                id
            }
        })

        return updatedTodo
    }

    public deleteTodo = async (id: string) => {
        await this.getTodoById(id)

        return this.todos.destroy({
            where: {
                id
            }
        })
    }
}

export { TodoService }
