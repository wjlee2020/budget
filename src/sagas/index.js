import * as testSaga from './testSaga';
// import * as entriesSaga from './entriesSaga';

export function initSagas(sagaMiddleWare) {
    Object.values(testSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    // Object.values(entriesSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
}