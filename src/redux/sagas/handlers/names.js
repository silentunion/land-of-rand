import { call, put } from 'redux-saga/effects';
import { setNames } from '../../ducks/names';
import { requestGetNames } from '../requests/names';

export function* handleGetNames(state) {
    try {
        var response = yield call(requestGetNames, state);
        var { data } = response;
        yield put(setNames(data));
    } catch (error) {
        console.log(error);
    };
};