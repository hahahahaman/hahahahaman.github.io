import React, { Component } from 'react';
import styles from './AboutPage.css';


export class AboutPage extends Component {
  render () {
    console.log(styles);
    return (
      <div className={styles.test}>
        <h2> About </h2>
        <p> I am some dude.</p>
        <p> Eat my ass.</p>
      </div>
    );
  }
}

export default AboutPage;
