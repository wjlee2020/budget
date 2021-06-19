// test sagas

import { call, delay, fork, put, take, takeEvery } from 'redux-saga/effects'

export function* testSaga() {
    while (true) {
        console.log('Starting the saga');
        // take wait for specified message
        yield take('TEST_MESSAGE');
        const a = yield call(double, 3);
        console.log(a)
        const b = yield double(2);
        console.log(b)
        console.log("towards the end of saga function");
    }
}

function* doNothing() {
    console.log("do nothing pre!")
    yield delay(1000);
    console.log("i'm doing nothing")
}

export function* testSagaFork() {
    while (true) {
        yield take("TEST_MESSAGE_2")
        // fork: non - blocking, following fn won't wait for fork to finish (call waits for the result)
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

export function* testSagaTakeEveryProcess({ payload = 1 }) {
    console.log(`Start process for index ${payload}`)
    yield delay(3000);
    console.log(`End process for index ${payload}`)
}

export function* testSagaTakeEvery() {
    // takeEvery: getting many index, and if need to fetch each index use takeEvery. 
    // takeEvery runs the second param function once dispatched| check console for both start/end
    const { payload } = yield takeEvery("TEST_MESSAGE_3", testSagaTakeEveryProcess);
    console.log("Finished TakeEvery for index" + " " + payload)
}

export function* dispatchTest() {
    let index = 1;
    while (true) {
        yield delay(500);
        yield put({ type: "TEST_MESSAGE_3", payload: index })
        index++;
    }
}

function double(num) {
    return num * 2;
}