import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header.js";
import {Timeline} from "./timeline";

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <Header />
        <Timeline />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

