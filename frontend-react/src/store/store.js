import { makeAutoObservable } from 'mobx';
import { createContext } from "react";
import { createDataTodo, getTodo, deleteDataTodoId, editDataTodoId } from '../api/controllers/todo-controller';

class Todo {
    title = '';
    checked = false;

    constructor(title) {
        makeAutoObservable(this);
        this.title = title;
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
        const newElement = new Todo(title);

        createDataTodo(newElement)
            .then(() => {
                this.todos.push(new Todo(title));
            })
            .catch((e) => console.log(e));
    }

    removeTodo(id) {
        deleteDataTodoId(id)
            .then(() => {
                this.todos = this.todos.filter((todo) => todo.id !== id);
            })
            .catch((e) => console.log(e));
    }

    toggleCompleted(id) {
        let element = this.todos.filter((todo) => todo.id === id);

        element[0].checked = !element[0].checked;

        editDataTodoId(id, element[0])
            .then((response) => {
                this.checked = response.data.checked;
            })
            .catch((e) => console.log(e));
    }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);