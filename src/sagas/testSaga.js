// test sagas

import { call, delay, fork, put, take } from 'redux-saga/effects'

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

// function* doNothing() {
//     console.log("do nothing pre!")
//     yield delay(1000);
//     console.log("i'm doing nothing")
// }

// export function* testSagaFork() {
//     while (true) {
//         yield take("TEST_MESSAGE_2")
//      fork: non-blocking, following fn won't wait for fork to finish
//         yield fork(doNothing);
//         yield fork(doNothing);
//         yield fork(doNothing);
//     }
// }

// export function* dispatchTest() {
//     while (true) {
//         yield delay(5000);
//         yield put({ type: "TEST_MESSAGE_2", payload: 1000 })
//     }
// }

function double(num) {
    return num * 2;
}