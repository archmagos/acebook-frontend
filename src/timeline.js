import React from "react";
import {Post} from "./post";
import {NewPostForm} from "./newPostForm";
import moment from "moment";

export class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  render() {
    const posts = this.state.posts;
    return (
      <div className="timeline_content">
        <div className="form_container">
          <NewPostForm updateParent={this.fetchPosts}/>
        </div>
        <div className="posts_content">
          {postsList(posts)}
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log('before')
    this.fetchPosts();
    const fetchPosts = this.fetchPosts.bind(this);
    this.intervalId = setInterval(fetchPosts, 2000);
  }
  componentWillUnmount() {
    console.log('will unmount')
    clearInterval(this.intervalId);
  }

  fetchPosts() {
    console.log('API Called');
    fetch('https://acebook2018.herokuapp.com/posts')
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
        user={post.user_name}
        message={post.message}
        time={moment(date).format('MMMM D') + ' at ' + moment(date).format('h:mma')}
        id={post.id}
    />
  })
}
