import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { watcherSaga } from './sagas/rootSaga';

import namesReducer from "./ducks/names";

const reducer = combineReducers({
    names: namesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;