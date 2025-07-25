import { observer } from "mobx-react";
import { useEffect } from "react";
import { useStores } from "../../stores/RootStoreContext";

const Mobx = observer(() => {
    // Получаем хранилища через контекст
    const { testStore, counterStore } = useStores();

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
                    {testStore.error ? null : testStore.dataLength}
                </>
            )
        }
        {testStore.error ? 'Ошибка' : null}
    </div>
});

export default Mobx;