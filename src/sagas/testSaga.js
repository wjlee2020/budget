import { call, delay, put, take } from 'redux-saga/effects'

export function* testSaga() {
    while (true) {
        console.log('Starting the saga');
        yield take('TEST_MESSAGE');
        const a = yield call(double, 3);
        console.log(a)
        const b = yield double(2);
        console.log(b)
        console.log("towards the end of saga function");
    }
}

// export function* dispatchTest() {
//     while (true) {
//         yield delay(1000);
//         yield put({ type: "TEST_MESSAGE", payload: 1000 })
//     }
// }

function double(num) {
    return num * 2;
}