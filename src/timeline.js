import React from "react";
import {Post} from "./post";

export class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
    }
  }

  render() {
    const posts = this.state.posts;
    return (
        <div>
          {postsList(posts)}
        </div>
    )
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

function postsList(posts) {
  return posts.reverse().map(function (post) {
    return <Post
        message={post.message}
        time={post.created_at}
        id={post.id}
    />
  })
}
