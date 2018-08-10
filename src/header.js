import React from 'react';
import css from './header.css';

export class Header extends React.Component {
  render(){
    return(
      <div id="header">
        <div id="header_title">
          <p>Acebook</p>
        </div>
        <div id="header_links">
          <p>View Posts | Sign Up | Log in</p>
        </div>
      </div>
    )
  }
}
