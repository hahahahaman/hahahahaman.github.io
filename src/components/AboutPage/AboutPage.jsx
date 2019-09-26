import React, { Component } from 'react';
import styles from './AboutPage.module.css';

export class AboutPage extends Component {
  render () {
    console.log(styles);
    return (
      <div className={styles.about}>
        <div className={styles['side-margins']}>
          <h2> About </h2>
          <p>
            I've been reading Augmenting Human Intellect, by Douglas
            Engelbart. I wonder if there is still room to create tools
            to improve thought. I suspect there is, since the
            description of the memex, given by Vannevar Bush, in my
            mind, still has not been realized. Collaborative trails of
            thought seem like a tool which the web could support.
          </p>
          <a href="http://dougengelbart.org/content/view/138">Augment</a>
        </div>
      </div>
    );
  }
}

export default AboutPage;
