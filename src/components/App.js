import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/index.css';
import { TodoForm, TodoList } from './todo';
import {addTodo, generateId} from '../tests/todoHelpers.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, name : "Learn React", isComplete: true},
        {id: 2, name : "Build RestFul API", isComplete: false},
        {id: 3, name : "Javascript basics", isComplete: false}
      ],
      currentTodo: ""
    } 
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleSubmit(e) {
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
        currentTodo: ""
      })
    }

    handleInputChange(e) {
      this.setState({ 
        currentTodo: e.target.value
      })
    }    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="toDoApp">
            <TodoForm handleInputChange={this.handleInputChange}
                      currentTodo={this.state.currentTodo} 
                      handleSubmit={this.handleSubmit}/>
            <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
