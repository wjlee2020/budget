import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriesTypes from '../redux/actions/entries.actions'

export function* deleteEntrySaga() {
    while (true) {
        const { id } = yield take(entriesTypes.REMOVE_ENTRY);
        console.log(id)
        yield call(deleteEntry, id);
        yield put({ type: 'REMOVE_ENTRY_RESULT', id });
    }
}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`);
    await axios.delete(`http://localhost:3001/values/${id}`);
}