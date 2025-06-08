import { $api, config } from "../index";
import { dataTodo } from "../../types/todo/todo.types";

export const getTodo = () => {
    return $api.get('/api/data-todo', { headers: config() });
}

export const getDataTodoId = (id: number) => {
    return $api.get(`/api/data-todo/${id}`, { headers: config() });
}

export const createDataTodo = (body: dataTodo) => {
    return $api.post(`/api/data-todo/`, body, { headers: config() });
}

export const editDataTodoId = (id: number, body: dataTodo) => {
    return $api.put(`/api/data-todo/${id}`, body, { headers: config() });
}

export const deleteDataTodoId = (id: number) => {
    return $api.delete(`/api/data-todo/${id}`, { headers: config() });
}