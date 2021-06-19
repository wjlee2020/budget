import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriesTypes from '../redux/actions/entries.actions'

export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
        console.log(payload)
        yield call(deleteEntrie, payload);
        yield put({ type: entriesTypes.REMOVE_ENTRY_RESULT, payload: { id: payload.id } });
    }
}

async function deleteEntrie(payload) {
    await axios.delete(`http://localhost:3001/entries/${payload}`);
    await axios.delete(`http://localhost:3001/values/${payload}`);
}