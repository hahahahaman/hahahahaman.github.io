import React from 'react';
/* import logo from './logo.svg'; */
import {
    AboutPage
} from './components/AboutPage/AboutPage.jsx'
import {
    ResponsiveIframe
} from './components/ResponsiveIframe/ResponsiveIframe.jsx'

import WidthProvider from './components/react-grid-layout/components/WidthProvider.jsx'
import {
    BrowserRouter as Router,
    Route,
    /* Link */
} from "react-router-dom";
import {
    IframeGridLayout
} from "./components/IframeGridLayout/IframeGridLayout.jsx"

import './App.css';

/* const ResponsiveReactGridLayout = WidthProvider(Responsive); */
const ResponsiveReactGridLayout = WidthProvider(IframeGridLayout);
const originalLayouts = getFromLS("layouts") || {};

class ResponsiveLocalStorageLayout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts))
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
                    <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3}}>
                      <ResponsiveIframe title="about" src="/about">
                        <p>Your browser does not support iframes.</p>
                      </ResponsiveIframe>
                    </div>
                    <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3}}>
                      <ResponsiveIframe title="test" src="/test">
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
        <div>
      <h2> Test </h2>
      <p> I don't know how the fuck this shit. </p>
      <p> I don't know. Is it wrong for me to say I don't know. </p>
    </div>
    );
}

function App() {
    return (
        <Router>
      <div className="App">
        <Route exact path="/" component={ResponsiveLocalStorageLayout} />
        <Route path="/about" component={AboutPage} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
    );
}

export default App;
