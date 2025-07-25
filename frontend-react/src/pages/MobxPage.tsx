import { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { TodoStoreContext } from "../store/store";

import {
    Box
} from "@mui/material";

import CreateTodo from "../components/mobx-page/CreateTodo";
import ItemsTodo from "../components/mobx-page/ItemsTodo";
import WatchTodo from "../components/mobx-page/WatchTodo";

const MobxPage = observer(() => {
    const store = useContext(TodoStoreContext);

    useEffect(() => {
        store.fetchTodo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Box
        sx={{
            width: '1000px',
            m: "0 auto"
        }}
    >
        <CreateTodo />
        {store.loading ?
            <Box>Loading...</Box>
            :
            <Box>
                {store.todos.map((todo) => (
                    <ItemsTodo key={todo.id} todo={todo} />
                ))}
            </Box>
        }
        {store.loading ?
            <Box>Loading...</Box>
            :
            <WatchTodo />
        }
    </Box>
});

export default MobxPage;