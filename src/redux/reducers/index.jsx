import { DRAG_START, DRAG_END } from "../actionTypes";

const initialState = {
    is_dragging: false
};

function rootReducer(state = initialState, action){
    console.log('reducer', action);
    switch(action.type) {
        case DRAG_START:
            return { is_dragging: true };
        case DRAG_END: {
            return { is_dragging: false };
        }
        default:
            return state;
    }
};

export default rootReducer;
