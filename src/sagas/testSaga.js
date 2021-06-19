// test sagas

import { call, cancel, cancelled, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'

// every exported generator functions will go to the index.js initSaga and run

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

function* infinitiySaga() {
    console.log(`start infinite saga`);
    let i = 0;
    while (true) {
        i++;
        try {
            console.log(`inside infinite saga loop ${i}`);
            yield delay(1000);
        } catch (e) {
            console.error(`error: ${e}`);
        } finally {
            // instructs saga to return whether true or not (cancelled or not)
            //then you could use if(canclled), and run execute only on cancellation, auto flags
            console.log('The fork was cancelled? ', yield cancelled());
        }
    }
    // won't reach this console.log since cancelled returns true, and takeLatest starts it again
    // console.log(`end infinite saga`);
}

export function* testSagaCancelled() {
    yield take("TEST_MESSAGE_4");
    const handleCancel = yield fork(infinitiySaga);
    yield delay(3000);
    // cancel will cancel the forked infinitySaga function after amount of delay
    yield cancel(handleCancel);
}

export function* testSagaTakeLatest() {
    yield takeLatest("TEST_MESSAGE_5", infinitiySaga);
}

export function* dispatchTest() {
    let index = 1;
    // yield put({ type: "TEST_MESSAGE_4", payload: index })
    while (true) {
        yield delay(5000);
        //dispatch the type 
        yield put({ type: "TEST_MESSAGE_5", payload: index })
        index++;
    }
}

function double(num) {
    return num * 2;
}