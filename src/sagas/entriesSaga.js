import { call, put, take, fork } from 'redux-saga/effects'
import entriesTypes from '../redux/actions/entries.actions'

async function fetchEntries() {
    let response = await fetch("http://localhost:3001/entries");
    let data = await response.json();
    return data;
}

// async function fetchValues(id) {
//     let response = await fetch(`http://localhost:3001/values/${id}`);
//     let data = await response.json();
//     return data;
// }

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

//getting values/descriptions
export function* entryValueDetails(id) {
    fetch(`http://localhost:3001/values/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data
        })
    yield put({ type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: { id, entry: data } });
}

export function* getAllEntryDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
    for (let i = 0; i < payload.length; i++) {
        const entry = payload[i];
        yield fork(entryValueDetails, entry.id)
    }
}