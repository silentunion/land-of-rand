import { takeLatest } from "redux-saga/effects";
import { handleGetNames } from "./handlers/names";
import { GET_NAMES } from "../ducks/names";

export function* watcherSaga() {
    yield takeLatest(GET_NAMES, handleGetNames);
};