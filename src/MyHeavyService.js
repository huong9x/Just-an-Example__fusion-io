import {singleton} from '@fusion.io/framework';

@singleton()
export default class MyHeavyService {
    provideData() {
        return new Promise(resolve => setTimeout(() => {resolve(new Date())}, 3000));
    }
}
