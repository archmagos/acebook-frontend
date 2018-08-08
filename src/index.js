import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello from index.js');

function Post(props){
  return (
      <div className="post">
        {props.value}
      </div>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      post: 'aaa',
    }
  }
  render(){
    return(
      <div>{this.state.post}</div>
    )
  }

  componentDidMount() {
    console.log('API Called')
    fetch('http://localhost:3000/posts/test')
    .then(response => response.json())
    .then(data => this.setState({ post: data.body }))
  };
}

ReactDOM.render(<App />, document.getElementById('root'));

