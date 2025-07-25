import { observer } from "mobx-react";
import counterStore from "../../store/CounterStore";

const Mobx = observer(() => {
    return <div>
        <h1>{counterStore.count}</h1>
        <button onClick={counterStore.increment}>+</button>
        <button onClick={counterStore.decrement}>-</button>
    </div>
});

export default Mobx;