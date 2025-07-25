import { makeObservable, observable, action, runInAction, computed } from 'mobx';
import { testData } from '../api/controllers/common-controller';
import { testDataDto } from '../types/testData';

class TestStore {
    testData: testDataDto[] = [];
    loading = false;
    error = false;

    constructor() {
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
        // try {
        //     const response = await fetch('https://api.example.com/users');
        //     const data = await response.json();

        //     runInAction(() => {
        //         this.users = data;
        //         this.loading = false;
        //     });
        // } catch (error) {
        //     runInAction(() => {
        //         this.loading = false;
        //     });
        // }
    };

    get dataLength() {
        return this.testData.length;
    }
}

const testStore = new TestStore();
export default testStore;