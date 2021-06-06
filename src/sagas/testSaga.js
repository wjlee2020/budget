import { take } from 'redux-saga/effects'

export function* testSaga() {
    while (true) {
        console.log('Starting the saga');
        yield take('TEST_MESSAGE');
        console.log("towards the end of saga function");
    }
}

export function* count() {
    yield 1
    yield 2
    yield 3
    yield 4
}