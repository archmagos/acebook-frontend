import React from "react";

function Post(props){
  return (
      <div className="post">
        {props.message} posted at {props.time}
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