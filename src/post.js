import React from "react";
import {Comment} from './comment';

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      time: props.time,
      comments:[],
    }
  }

  render() {
    const comments = this.state.comments;
    let message = this.state.message;
    let time = this.state.time
    return (
        <div className="post">
          {message} <br/> (posted at {time})
          {commentsList(comments)}
        </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/comments?post_id=1')
    .then(response => response.json())
    .then(data =>
      this.setState({comments: data})
    )
  }
}

  function commentsList(comments) {
    return comments.map(function(comment) {
      return <Comment
        body={comment.body}
        time={comment.created_at}
        user={comment.user}
        />
      })
    }
