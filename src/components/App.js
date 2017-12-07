import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/index.css';
import {TodoForm, TodoList} from './todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from '../tests/todoHelpers.js'

class App extends Component {

  state = {
    todos: [{
      id: 1,
      name: "Learn React",
      isComplete: true
    }, {
      id: 2,
      name: "Build RestFul API",
      isComplete: false
    }, {
      id: 3,
      name: "Javascript basics",
      isComplete: false
    }],
    currentTodo: ""
  }

    handleToggle = (id) => {
      const todo = findById(id, this.state.todos)
      const toggled = toggleTodo(todo)
      const updatedTodos = updateTodo(this.state.todos, toggled)
      this.setState({todos: updatedTodos})
    } 

    handleSubmit = (e) => {
      e.preventDefault()
      const newId = generateId()
      const newToDo = {
        id: newId,
        name: this.state.currentTodo,
        isComplete: false
      }
      const updatedTodos = addTodo(this.state.todos, newToDo)
      this.setState({
        todos: updatedTodos,
        currentTodo: "",
        errorMessage: ""
      })
    }

    handleEmptySubmit = (e) => {
      e.preventDefault()
      this.setState({
        errorMessage: 'Please supply a todo name !'
      })
    }

    handleInputChange = (e) => {
      this.setState({ 
        currentTodo: e.target.value
      })
    }    

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="toDoApp">
            {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
            <TodoForm handleInputChange={this.handleInputChange}
                      currentTodo={this.state.currentTodo} 
                      handleSubmit={submitHandler}/>
            <TodoList 
                      todos={this.state.todos}
                      handleToggle={this.handleToggle}/>
        </div>
      </div>
    );
  }
}

export default App;
