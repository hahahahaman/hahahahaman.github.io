import GridItem from './react-grid-layout/GridItem.jsx'

export default class IframeGridItem extends GridItem {
    onDragStart = (e: Event, data : ReactDraggableCallbackData) => {
        console.log('IframeGridItem');
        return super.onDragStart(e, data);
    }
}
