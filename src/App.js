import React from 'react';
/* import logo from './logo.svg'; */
import {
    BrowserRouter as Router,
    Route,
    /* Link */
} from "react-router-dom";

import {
    AboutPage
} from './components/AboutPage/AboutPage.jsx'
import ResponsiveIframe from './components/ResponsiveIframe/ResponsiveIframe.jsx'

import WidthProvider from './components/react-grid-layout/components/WidthProvider.jsx'
import {
    IframeGridLayout
} from "./components/IframeGridLayout/IframeGridLayout.jsx"

import './App.css';

import {
    connect
} from 'react-redux';

import styles from './components/AboutPage/AboutPage.module.css';

/* const ResponsiveReactGridLayout = WidthProvider(Responsive); */
const ResponsiveReactGridLayout = WidthProvider(IframeGridLayout);
const originalLayouts = getFromLS("layouts") || {};

class ResponsiveLocalStorageLayout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts)),
            is_dragging: false,
            is_resizing: false,
        };
    }

    static get defaultProps() {
        return {
            className: "layout",
            cols: {
                lg: 12,
                md: 10,
                sm: 6,
                xs: 4,
                xss: 2
            },
            rowHeight: 30
        };
    }

    resetLayout() {
        this.setState({
            layouts: {}
        });
    }

    onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
        this.setState({
            layouts
        });
    }

    render() {
        return (
            <div>
                <button onClick=
                    {() =>
                    {
                    this.resetLayout();
                    console.log('click');
                    }
                    }> Reset </button>
                <ResponsiveReactGridLayout
                    className="layout"
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    rowHeight={30}
                    layouts={this.state.layouts}
                    onLayoutChange={(layout, layouts) =>
                        this.onLayoutChange(layout, layouts)
                    }
                >
                    <div key="1" data-grid={{ w: 6, h: 15, x: 0, y: 0, minW: 2, minH: 3}}>
                        <ResponsiveIframe title="about" src="/test">
                            <p>Your browser does not support iframes.</p>
                        </ResponsiveIframe>
                    </div>
                    {/* <div key="2" data-grid={{ w: 3, h: 10, x: 4, y: 0, minW: 2, minH: 3}}>
                        <ResponsiveIframe title="test" src="/test">
                        <p>Your browser does not support iframes.</p>
                        </ResponsiveIframe>
                        </div> */}
                    <div key="3" data-grid={{ w: 12, h: 15, x: 0, y: 15, minW: 2, minH: 3}}>
                        <ResponsiveIframe title="engelbart" src="http://dougengelbart.org/">
                            <p>Your browser does not support iframes.</p>
                        </ResponsiveIframe>
                    </div>
                    <div key="4" data-grid={{ w: 6, h: 15, x: 6, y: 0, minW: 2, minH: 3}}>
                        <ResponsiveIframe title="PG" src="http://paulgraham.com/articles.html">
                            <p>Your browser does not support iframes.</p>
                        </ResponsiveIframe>
                    </div>
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

/* module.exports = ResponsiveLocalStorageLayout; */

function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
        } catch (e) {
            /*Just ignore it*/
        }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key]: value
            })
        );
    }
}

function Test() {
    return (
    <div className={styles.about}>
        <h2> Test </h2>
        <p> I don't know how the fuck this shit. </p>
        <p> I don't know. Is it wrong for me to say I don't know. </p>
    </div>
    );
}

function PDF_Page(){
    return(
        <div className={styles.about}>
            <div className={styles['side-margins']}>
                <h1>PDF</h1>
                <p>huh</p>
                <p>ok</p>
            </div>
        </div>
    );
}

function PG(){
    return(
        <div className={styles.about}>
            <div className={styles['side-margins']}>
                <h1>PDF</h1>
                <a href='http://paulgraham.com/speak.html'>speak</a>
            </div>
        </div>
    )
}

function App() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ResponsiveLocalStorageLayout} />
        <Route path="/about" component={AboutPage} />
        <Route path="/test" component={Test} />
        <Route path="/pdf_page" component={PDF_Page} />
        <Route path="/PG" component={PG} />
      </div>
    </Router>
    );
}

export default App;
