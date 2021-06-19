import axios from "axios";
import { call, put, take, takeLatest } from "redux-saga/effects";
import entriesTypes from '../redux/actions/entries.actions';

export function* addEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY_RESULT, addEntry);
}

function* addEntry(payload) {
    console.log(payload);
}