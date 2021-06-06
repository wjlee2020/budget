import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducer";
import modalReducer from "../reducers/modalReducer";
import createSagaMiddleWare from 'redux-saga';
import { initSagas } from '../../sagas'
// import { testSaga } from "../../sagas/testSaga";

const sagaMiddleWare = createSagaMiddleWare();
const middlewares = [sagaMiddleWare];

const rootReducer = combineReducers({
    entries: entriesReducer,
    modals: modalReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
store.subscribe(() => {
    // console.log(store.getState());
})
// sagaMiddleWare.run(testSaga)

//initiating all testSaga functions
initSagas(sagaMiddleWare);

export default store;