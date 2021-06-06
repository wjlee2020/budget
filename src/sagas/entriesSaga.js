import { take } from 'redux-saga/effects'
import entriesTypes from '../redux/actions/entries.actions'


export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('need to get the data ')
}