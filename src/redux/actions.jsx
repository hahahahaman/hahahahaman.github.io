import {
    DRAG_START,
    DRAG_END,
    RESIZE_START,
    RESIZE_END
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

export const resizeStart = () => ({
    type: RESIZE_START
});

export const resizeEnd = () => ({
    type: RESIZE_END
});
