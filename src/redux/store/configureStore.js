import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducer";

const rootReducer = combineReducers({
    entries: entriesReducer
})
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})

export default store;