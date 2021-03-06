import { createStore } from "redux";
import rootReducers from './redux/reducers/rootReducers';

const store = createStore(rootReducers);
console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})