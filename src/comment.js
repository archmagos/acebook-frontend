import React from 'react'
import css from './comment.css';

export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.body,
      time: props.time,
      user: props.user
    }
  }

  render() {
    let body = this.state.body;
    let time = this.state.time;
    let user = this.state.user;
    return(
      <div className = "comment">
        <div className = "comment_header">
          <div className = "comment_header_username">
            {user}
          </div>
          <div className = "comment_header_body">
            {body}
          </div>
        </div>
        <div className = "comment_footer">
          {time}
        </div>
      </div>
    )
  }
}
