import React from 'react';

import { ResponsiveIframe } from '../ResponsiveIframe/ResponsiveIframe.jsx'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/* module.exports = ResponsiveLocalStorageLayout; */

function getFromLS(key){
  let ls = {};
  if(global.localStorage){
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch(e){
      /*Just ignore it*/
    }
  }
  return ls[key];
}

function saveToLS(key, value){
  if(global.localStorage){
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

class ResponsiveLocalStorageLayout extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts))
        };
    }

    static get defaultProps(){
        return {
            className: "layout",
            cols: { lg: 12, md:10, sm: 6, xs: 4, xss: 2},
            rowHeight: 30
        };
    }

    resetLayout(){
        this.setState({ layouts: {} });
    }

    onLayoutChange(layout, layouts){
        saveToLS("layouts", layouts);
        this.setState({ layouts });
    }

    render(){
        return (
            <div>
              {/* <button onClick= {() => this.resetLayout()}> Reset </button> */}
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

export default ResponsiveLocalStorageLayout;
