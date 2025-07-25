import { makeObservable, observable, action, computed } from 'mobx';

class CounterStore {
    count = 0;

    constructor() {
        makeObservable(this, {
            count: observable, // отслеживание переменной
            increment: action, // метод изменения данных
            decrement: action,
            doubleCount: computed // производные значения (просмотр) на основе данных, хранящихся в class
        });
    }

    increment = () => {
        this.count++;
    };

    decrement = () => {
        this.count--;
    };

    get doubleCount() { // используется для просмотра количества элементов в массиве, или другие данные, которые пересчитываются на основе переменных используемые в class
        return this.count * 2;
    }
}

const counterStore = new CounterStore();
export default counterStore;