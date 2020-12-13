const SELECT = "select";

export const select = () => ({
    type: SELECT
});

export const initialState = {
    active: 0
};

export default (state = initialState, action, item) => {
   switch (action.type) {
        case SELECT:
           return { ...state, active: item };
        default:
            return state;
   } 
};