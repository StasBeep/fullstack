import { useContext } from "react";
import { TodoStoreContext } from "../../store/store";
import { observer } from "mobx-react";

const WatchTodo = observer(() => {
    const store = useContext(TodoStoreContext);

    return <ul>
        {store.todos.map((item) => (
            <li key={item.title}>
                {item.title}
            </li>
        ))}
    </ul>
});

export default WatchTodo;