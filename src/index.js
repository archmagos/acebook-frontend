import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello from index.js');

function Post(props){
  return (
      <div className="post">
        {props.message} posted at {props.time}
      </div>
  )
}

class Timeline extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
    }
  }
  render(){
    const posts = this.state.posts;
    let postsList = posts.map(function(post){
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
        // console.log(data)
        this.setState({ posts: data })
    )
  }
}

class App extends React.Component {
  render(){
     return(<Timeline />)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

