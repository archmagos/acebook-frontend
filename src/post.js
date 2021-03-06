import React from "react";
import {Comment} from './comment';
import css from './post.css';
import moment from "moment";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      message: props.message,
      time: props.time,
      id: props.id,
      comments:[],
    }
  }

  render() {
    const comments = this.state.comments;
    let user = this.state.user;
    let message = this.state.message;
    let time = this.state.time
    return (
      <div className="post">
        <div className="post_header">
          <p id="post_username">{user}</p>
          <p id="post_time">{time}</p>
        </div>
        <div className="post_body">
          {message}
        </div>
        <div className="post_footer">
          {commentsList(comments)}
        </div>
      </div>
    )
  }

  componentDidMount() {
    let id = this.state.id
    fetch('https://acebook2018.herokuapp.com/comments?post_id=' + id)
    .then(response => response.json())
    .then(data =>
      this.setState({comments: data})
    )
  }
}

function commentsList(comments) {
  return comments.map(function(comment) {
    var date = new Date(comment.created_at)
    return <Comment
      user={comment.user_name}
      body={comment.body}
      time={moment(date).format('MMMM D') + ' at ' + moment(date).format('h:mma')}
      />
    })
}