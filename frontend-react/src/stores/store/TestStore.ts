import { makeObservable, observable, action, runInAction, computed } from 'mobx';
import { testData } from '../../api/controllers/common-controller';
import { testDataDto } from '../../types/testData';
import { RootStore } from '../RootStore';

export class TestStore {
    testData: testDataDto[] = [];
    loading = false;
    error = false;

    constructor(private rootStore: RootStore) {
        makeObservable(this, {
            testData: observable,
            loading: observable,
            error: observable,
            dataLength: computed,
            fetchData: action
        });
    }

    fetchData = async () => {
        this.loading = true;

        await testData()
            .then((response) => {
                runInAction(() => {
                    this.testData = response.data;
                    this.loading = false;
                })
            })
            .catch((error) => {
                console.log(error);
                runInAction(() => {
                    this.error = true;
                    this.loading = false;
                })
            })
    };

    get dataLength() {
        return this.testData.length;
    }

    // Пример использования другого хранилища
    get countFromCounterStore() {
        return this.rootStore.counterStore.count;
    }
}