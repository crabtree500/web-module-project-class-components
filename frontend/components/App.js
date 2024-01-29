import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    // Initial state to store todo items
    this.state = {
      todos: [],
    };

    // Binding methods to the class instance
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemoveCompleted = this.handleRemoveCompleted.bind(this);
  }
  
  handleToggle(todoID) {
    // Toggle the completed status of the todo with the given id
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  }

  handleTodoSubmit(newTodo) {
    // Add a new todo to the list
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }
  handleRemoveCompleted() {
    // Remove completed todos from the list
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.completed),
    }));  }
  render() {
    return (
      <div>
        <h1>Todo List App</h1>

        {/* Render the TodoForm component and pass down the submit handler */}
        <Form onTodoSubmit={this.handleTodoSubmit} />

        {/* Display the current todo list in the app */}
        <div>
          <h2>Todo List</h2>
          <ul>
            {this.state.todos.map((todo) => (
              <li
                key={todo.id}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => this.handleToggle(todo.id)}
                >
                {todo.name}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={this.handleRemoveCompleted}>Remove Completed</button>
      </div>
    );
  }
}

export default App;
