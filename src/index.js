import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header.js";
import {Timeline} from "./timeline";
import css from './index.css';

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="container_header">
          <Header />
        </div>
        <div className="container_content" id="content">
          <Timeline />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
