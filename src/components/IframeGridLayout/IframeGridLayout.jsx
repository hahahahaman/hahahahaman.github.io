/* import React from "react"; */
import ResponsiveReactGridLayout from '../react-grid-layout/ResponsiveReactGridLayout';

import '../react-grid-layout/styles.css'
export class IframeGridLayout extends ResponsiveReactGridLayout {
    constructor(props){
        console.log('IframeGridLayout created');
        super(props);
    }

    onDragStart(i, x, y, _ref) {
        console.log('Start');
        return super.onDragStart(i, x, y, _ref);
    }
}

export default IframeGridLayout;
