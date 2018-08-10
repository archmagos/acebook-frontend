import React from "react";
import {Post} from "./post";
import {NewPostForm} from "./newPostForm";
import moment from "moment";

export class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  render() {
    const posts = this.state.posts;
    return (

        <div>
          <NewPostForm updateParent={this.fetchPosts}/>
          {postsList(posts)}
        </div>
    )
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    console.log('API Called');
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data =>
            this.setState({posts: data})
        )
  }
}

function postsList(posts) {
  return posts.map(function (post) {
    var date = new Date(post.created_at)
    return <Post
        message={post.message}
        time={moment(date).format('MMMM D') + ' at ' + moment(date).format('h:mma')}
        id={post.id}
    />
  })
}
