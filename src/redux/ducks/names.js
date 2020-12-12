export const GET_NAMES = "GET_NAMES";
const SET_NAMES = "SET_NAMES";

export const getNames = () => ({
    type: GET_NAMES
});

export const setNames = (data) => ({
    type: SET_NAMES,
    data: data 
});

export const initialState = {
    data: undefined
};

export default (state = initialState, action) => {
    console.log({action});
   switch (action.type) {
        case SET_NAMES:
            const { data } = action;
            return { ...state, data: data };
        default:
            return state;
   } 
};