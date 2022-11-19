import { Table, Model, Column, DataType } from "sequelize-typescript"
import { ITodo } from '../interfaces'

@Table({
    timestamps: true,
    tableName: "todos"
})

class Todos extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description!: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    isDone!: boolean
}

export { Todos }