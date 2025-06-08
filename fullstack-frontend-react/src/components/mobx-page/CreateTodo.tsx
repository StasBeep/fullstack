import { useContext, useState } from "react";
import { TodoStoreContext } from "../../store/store";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const store = useContext(TodoStoreContext);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (title.trim()) {
            store.addTodo(title.trim());
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    border: '1px solid red',
                    padding: '5px 20px'
                }}
            />
            <button
                type="submit"
                style={{
                    border: '1px solid green',
                    padding: '5px 20px',
                    marginLeft: '10px'
                }}
            >
                Add
            </button>
        </form>
    );
}

export default CreateTodo;