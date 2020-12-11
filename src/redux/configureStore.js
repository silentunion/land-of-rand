import { combineReducers, createStore } from 'redux';
import tabSelectReducer from "./ducks/namegenTabSelect";

const reducer = combineReducers({
    tabSelect: tabSelectReducer
});

const store = createStore(reducer);

export default store;