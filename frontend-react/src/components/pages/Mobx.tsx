import { observer } from "mobx-react";
import counterStore from "../../store/CounterStore";
import testStore from "../../store/TestStore";
import { useEffect } from "react";

const Mobx = observer(() => {
    useEffect(() => {
        testStore.fetchData()
    }, [])

    return <div>
        <h1>{counterStore.count}</h1>
        <button onClick={counterStore.increment}>+</button>
        <button onClick={counterStore.decrement}>-</button>
        <h2>{counterStore.doubleCount}</h2>
        <hr></hr>
        {testStore.loading ?
            'Загрузка'
            :
            (
                <>
                    <ol>
                        {
                            testStore.testData.map((item, ind) => (
                                <li key={ind}>
                                    {item.id} / {item.name} / {item.age}
                                </li>
                            ))
                        }
                    </ol>
                    {testStore.error ? null :testStore.dataLength}
                </>
            )
        }
        {testStore.error ? 'Ошибка' : null}
    </div>
});

export default Mobx;