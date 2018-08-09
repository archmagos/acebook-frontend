import React from "react";
import {Post} from "./post";
import {NewPostForm} from "./newPostForm";

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
          <NewPostForm />
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
  return posts.map(function (post) {
    return <Post
        message={post.message}
        time={post.created_at}
    />
  })
}