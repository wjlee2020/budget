import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducer";
import modalReducer from "../reducers/modalReducer";

const rootReducer = combineReducers({
    entries: entriesReducer,
    modals: modalReducer
})
const store = createStore(rootReducer, composeWithDevTools());
store.subscribe(() => {
    console.log(store.getState());
})

export default store;