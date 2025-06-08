import { useContext } from "react";
import { observer } from "mobx-react";
import { TodoStoreContext } from "../store/store";

import { Box } from "@mui/material";
import CreateTodo from "../components/mobx-page/CreateTodo";
import ItemsTodo from "../components/mobx-page/ItemsTodo";

const MobxPage = observer(() => {
    const store = useContext(TodoStoreContext);

    return <Box
        sx={{
            width: '1000px',
            m: "0 auto"
        }}
    >
        <CreateTodo />
        <Box>
            {store.todos.map((todo) => (
                <ItemsTodo key={todo.id} todo={todo} />
            ))}
        </Box>
    </Box>
});

export default MobxPage;