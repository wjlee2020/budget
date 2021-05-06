import { applyMiddleWare, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools';
import entriesReducer from './reducers/entries.reducers';
import modalReducer from './reducers/modals.reducer';
