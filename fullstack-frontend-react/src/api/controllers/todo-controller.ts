import { $api, config } from "../index";
// import { dataTodo } from "../../types/todo/todo.types";

export const getTodo = () => {
    return $api.get('/api/data-todo', { headers: config() });
}