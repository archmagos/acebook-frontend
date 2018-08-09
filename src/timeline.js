import React from "react";
import css from './timeline.css';

function Post(props){
  return (
      <div className="post">
        <div className="post_header">
          <p id="post_username">Username</p>
          <p id="post_time">Posted at {props.time}</p>
        </div>
        <div className="post_body">
          {props.message}
        </div>
        <div className="post_footer">
        </div>
      </div>
  )
}

export class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
    }
  }

  render() {
    const posts = this.state.posts;
    let postsList = posts.map(function (post) {
      return <Post
          message={post.message}
          time={post.created_at}
      />
    });
    return postsList
  }

  componentDidMount() {
    console.log('API Called')
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data =>
      this.setState({posts: data})
    )
  }
}