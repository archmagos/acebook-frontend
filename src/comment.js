import React from 'react'

export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.body,
      time: props.time,
      user: props.user_id
    }
  }

  render() {

    let body = this.state.body;
    let time = this.state.time;
    let user = this.state.user;
    return(
      <div> {body}
            {time}
            {user}
     </div>
    )
  }
}
