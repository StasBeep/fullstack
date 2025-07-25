import { Box } from "@mui/material";
import { observer } from "mobx-react";
import { useContext } from "react";
import { TodoStoreContext } from "../../store/store";


const ItemsTodo = observer(({ todo }) => {
    const store = useContext(TodoStoreContext);

    return <Box>
        <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => store.toggleCompleted(todo.id)}
            style={{
                marginRight: '8px'
            }}
        />
        <span
            style={{
                fontSize: '18px'
            }}
        >
            {todo.title}
        </span>
        <button
            onClick={() => store.removeTodo(todo.id)}
            style={{
                border: '1px solid red',
                padding: '2px 10px',
                marginLeft: '8px'
            }}
        >
            Remove
        </button>
    </Box>
});

export default ItemsTodo;