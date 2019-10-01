import {
    DRAG_START,
    DRAG_END
} from "./actionTypes";

export const dragStart = () => ({
    type: DRAG_START
    /* payload: {
     *     is_dragging: true
     * } */
});

export const dragEnd = () => ({
    type: DRAG_END
    /* payload: {
     *     is_dragging: false
     * } */
});
