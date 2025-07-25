import { makeObservable } from 'mobx';
import { TestStore } from './store/TestStore';
import { CounterStore } from './store/CounterStore';

export class RootStore {
    testStore: TestStore;
    counterStore: CounterStore;

    constructor() {
        // Передаем текущий экземпляр RootStore в дочерние хранилища
        this.testStore = new TestStore(this);
        this.counterStore = new CounterStore(this);

        //  Настройка MobX наблюдение
        // - this: наблюдаемый объект
        // - {}: нет полей для наблюдения (они в дочерних хранилищах)
        // - { autoBind: true }: автоматическая привязка методов
        makeObservable(this, {}, { autoBind: true });
    }
}

// Создаем экземпляр корневого хранилища
const rootStore = new RootStore();
export default rootStore;