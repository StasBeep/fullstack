import { makeAutoObservable } from 'mobx';
import { createContext } from "react";
import { getTodo } from '../api/controllers/todo-controller';

class Todo {
    title = '';
    completed = false;

    constructor(title) {
        makeAutoObservable(this);
        this.title = title;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class TodoStore {
    todos = [];
    loading = true;

    async fetchTodo() {
        await getTodo()
            .then((response) => {
                this.loading = false;
                this.todos = response.data;
            })
            .catch((e) => {
                console.log(e);
                this.loading = true;
            })
    }

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(title) {
        this.todos.push(new Todo(title));
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);