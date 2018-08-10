import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header.js";
import {Timeline} from "./timeline";
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

export class Footer extends React.Component {
  render(){
    return(
      <div className="container_footer">
        <p><b>Acebook</b> was a group project by <a href="https://github.com/Ben-893">Ben</a>, <a href="https://github.com/archmagos">Fred</a>, <a href="https://github.com/JohnForster">John</a>, <a href="https://github.com/laythq">Layth</a> & <a href="https://github.com/YvCodeHong">Yvonne</a>.</p>
        <p>Created during week nine of the <b>Makers Academy</b> bootcamp in August 2018.</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
