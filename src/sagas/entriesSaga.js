import { call, put, take } from 'redux-saga/effects'
import entriesTypes from '../redux/actions/entries.actions'

async function fetchEntries() {
    let response = await fetch("http://localhost:3001/entries");
    let data = await response.json();
    return data;
}

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    // take: wait for specified message
    console.log('need to get the data ');
    // call: call a function w/ args (if any, separated by a comma)
    const response = yield call(fetchEntries);
    console.log(response);
    // put: dispatch an action to the store
    yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: response });
}