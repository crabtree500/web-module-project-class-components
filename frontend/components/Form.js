
import React, { Component } from 'react';



 export default class Form extends Component {
  constructor(props) {
    super(props);

    // Initial state to store the new todo item
    this.state = {
    todos: []
    };

    // Binding methods to the class instance
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    // Update the state with the new todo input value
    this.setState({ newTodo: event.target.value });
  }
  


  handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Add an ID
    const todoID = Date.now();
    

    // Notify the parent component of the new todo item
    this.props.onTodoSubmit({ id: todoID, name: this.state.newTodo, completed: false });

    // Clear the input field after submission
    this.setState({ newTodo: '' });
   
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo:</label>
        <input
          type="text"
          id="newTodo"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}