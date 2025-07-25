import { makeObservable, observable, action } from 'mobx';

class CounterStore {
    count = 0;

    constructor() {
        makeObservable(this, {
            count: observable, // отслеживание переменной
            increment: action, // метод изменения данных
            decrement: action
        });
    }

    increment = () => {
        this.count++;
    };

    decrement = () => {
        this.count--;
    };
}

const counterStore = new CounterStore();
export default counterStore;