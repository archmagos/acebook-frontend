import React from 'react';
import css from './footer.css';
import ReactDOM from "react-dom";

export class Footer extends React.Component {
  render(){
    return(
      <div id="footer">
        <p><b>Acebook</b> was a group project by <a href="https://github.com/Ben-893">Ben</a>, <a href="https://github.com/archmagos">Fred</a>, <a href="https://github.com/JohnForster">John</a>, <a href="https://github.com/laythq">Layth</a> & <a href="https://github.com/YvCodeHong">Yvonne</a>.</p>
        <p>Created during week nine of the <b>Makers Academy</b> bootcamp in August 2018.</p>
      </div>
    )
  }
}

ReactDOM.render(<Footer />, document.getElementById('footer'));