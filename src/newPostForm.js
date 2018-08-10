import React from "react";
import axios from 'axios';

export class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {message: '', user_id:'1'},
      updateParent: props.updateParent
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let formFields = this.state.formFields;
    formFields[event.target.name] = event.target.value;
    this.setState({
      formFields
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let formFields = this.state.formFields;
    const updateParent = this.state.updateParent;
    axios.post('http://localhost:3000/posts/new', formFields)
    .then(function(response){
      updateParent();
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Write a new post:
          <input type="text" name="message" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}