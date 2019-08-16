import React, {Component} from 'react';
import styles from './ResponsiveIframe.module.css'

export class ResponsiveIframe extends Component {
  render() {
    return (
      <div className={styles['iframe-container']}>
        <iframe className={styles.iframe}
                title={this.props.title}
            src={this.props.src} allowFullScreen>
          </iframe>
      </div>
    );
  }
}
export default ResponsiveIframe;
