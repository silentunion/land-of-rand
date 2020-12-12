import { call, put } from 'redux-saga/effects';
import { setNames } from '../../ducks/names';
import { requestGetNames } from '../requests/names';

export function* handleGetNames(sends) {
    try {
        var response = yield call(requestGetNames, sends.isWeighted, sends.num, sends.template);
        var { data } = response;
        yield put(setNames(data));
    } catch (error) {
        console.log(error);
    };
};