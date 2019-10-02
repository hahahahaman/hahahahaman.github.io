import React, {
    Component
} from 'react';
import styles from './ResponsiveIframe.module.css'
import {
    connect
} from 'react-redux';

class ResponsiveIframe extends Component {
    state = { is_resizing: false, is_dragging: false };
    /* constructor(props) {
     *     super(props);
     * } */
    render() {
        return (
            <div className={styles['iframe-container']}>
                <iframe className={styles.iframe}
                        style={{'pointer-events' : (this.props.is_resizing === true ||
                                                    this.props.is_dragging? 'none' : 'auto' ) }}
                        title={this.props.title}
                        src={this.props.src} allowFullScreen>
                </iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        is_dragging: state.is_dragging,
        is_resizing: state.is_resizing
    };
}

export default connect(mapStateToProps)(ResponsiveIframe);
