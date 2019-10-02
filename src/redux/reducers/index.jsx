import { DRAG_START, DRAG_END, RESIZE_START, RESIZE_END } from "../actionTypes";

const initialState = {
    is_dragging: false,
    is_resizing: false
};

function rootReducer(state = initialState, action){
    console.log('reducer', action);
    switch(action.type) {
        case DRAG_START:
            return {
                is_dragging: true,
                is_resizing: false
            };
        case DRAG_END: {
            return {
                is_dragging: false,
                is_resizing: false
            };
        }
        case RESIZE_START: {
            return {
                is_dragging: false,
                is_resizing: true
            };
        }
        case RESIZE_END: {
            return {
                is_dragging: false,
                is_resizing: false,
            }
        }
        default:
            return state;
    }
};

export default rootReducer;
