// import * as testSaga from './testSaga';
import * as entriesSaga from './entriesSaga';
import * as entriesSagaDeletion from './entriesSagaDeletion';
import * as entriesSagaAdd from './entriesSagaAdd';

export function initSagas(sagaMiddleWare) {
    // Object.values(testSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    Object.values(entriesSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    Object.values(entriesSagaDeletion).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
    Object.values(entriesSagaAdd).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
}