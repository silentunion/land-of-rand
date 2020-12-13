export const GET_NAMES = "GET_NAMES";
const SET_NAMES = "SET_NAMES";

export const getNames = (req) => ({
    type: GET_NAMES,
    ...req
});

export const setNames = (data) => ({
    type: SET_NAMES,
    data: data
});

export const initialState = {
    data: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAMES:
            const { data } = action;
            return { ...state, data: data };
        default:
            return state;
   } 
};