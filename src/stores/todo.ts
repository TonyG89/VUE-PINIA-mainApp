import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

export interface Todo {
    id: string
    title: string
    description: string
    done: boolean
    createdAt: Date
    updateAt: Date
}

export interface TodoAdd {
    title: string
    description: string
}

export interface TodoState {
    list: Todo[] | undefined[]
    isLoading: boolean
}

export interface TodoUpdate {
    title?: string,
    done?: boolean,
}

const defaultToDoList = {
    isLoading: true,
}

const state = (): TodoState => ({
    list: [],
    isLoading: defaultToDoList.isLoading,
})

const actions = {
    add(newTodo: TodoAdd) {
        const todo: Todo = {
            id: uuid(),
            ...newTodo,
            done: false,
            createdAt: new Date(),
            updateAt: new Date(),
        }
        this.list.push(todo)
    },
    remove(id: string) {
        this.list.filter((item: Todo) => item.id !== id)
    },
    update(id: string, update: TodoUpdate) {
        this.list = this.list.map((item: Todo) => item.id === id ? { ...item, ...update, updatedAt: new Date() } : item)
    },
}

const getters = {
    getById: (state: TodoState) => (id: string) => {
        return state.list.find((item: Todo) => item.id === id)
    },
    getOrderedTodoList: (state: TodoState) =>
        state.list.sort((a: Todo, b: Todo) =>
            a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds()
        ),

}


export const useTodoStore = defineStore('todoStore', {
    state,
    actions,
    getters
})