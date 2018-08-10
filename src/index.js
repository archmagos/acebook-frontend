import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header.js";
import {Timeline} from "./timeline";
import {Footer} from "./footer";
import css from './index.css';

class App extends React.Component {
  render(){
    return(
      <div className="full_container">
        <div className="container">
          <div className="container_header">
            <Header />
          </div>
          <div className="container_content" id="content">
            <Timeline />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
