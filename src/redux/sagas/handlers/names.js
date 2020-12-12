import { call, put } from 'redux-saga/effects';
import { setNames } from '../../ducks/names';
import { requestGetNames } from '../requests/names';

export function* handleGetNames(action) {
    try {
        const response = yield call(requestGetNames);
        const { data } = response;
        yield put(setNames(data));
    } catch (error) {
        console.log(error);
    };
};