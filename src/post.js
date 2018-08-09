import React from "react";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      time: props.time
    }
  }

  render() {
    let message = this.state.message;
    let time = this.state.time
    return (
        <div className="post">
          {message} <br/> (posted at {time})
        </div>
    )
  }
}