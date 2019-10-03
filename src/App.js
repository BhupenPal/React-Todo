import React, { Component } from 'react';
import Todos from "./Todos";
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario cart' }
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (content) => {
    content.id = Math.random();
    let todos = [...this.state.todos, content];
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
