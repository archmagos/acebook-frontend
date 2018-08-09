import React from 'react';
import ReactDOM from 'react-dom';
import {Timeline} from "./timeline";

class App extends React.Component {
  render(){
    return(<Timeline />)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

