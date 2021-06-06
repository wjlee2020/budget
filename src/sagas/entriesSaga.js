import { call, take } from 'redux-saga/effects'
import entriesTypes from '../redux/actions/entries.actions'

async function fetchEntries() {
    let response = await fetch("http://localhost:3001/entries");
    let data = await response.json();
    return data;
}

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('need to get the data ')
    const response = yield call(fetchEntries)
    console.log(response);
}