export const GET_NAMES = "GET_NAMES";
const SET_NAMES = "SET_NAMES";

export const getNames = (isWeighted, num, template) => ({
    type: GET_NAMES,
    isWeighted, num, template
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
            console.log(state);
            const { data } = action;
            return { ...state, data: data };
        default:
            return state;
   } 
};