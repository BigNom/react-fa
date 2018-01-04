import React, { Component } from 'react'
import { TodoForm, TodoList, Footer } from './todo/'
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from '../lib/todoHelpers'
import {pipe, partial} from '../lib/utils'

class Todos extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an Awesome App', isComplete: false},
      {id: 3, name: 'Ship It', isComplete: false}
    ],
    currentTodo: '',
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todo)
    this.setState({todos: updatedTodos})
}

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
    
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit :
    this.handleEmptySubmit
    return (
      <div className="Todo-App">
      {this.state.errorMessage && <span style={{color: 'red'}}>{this.state.errorMessage}</span>}
      <TodoForm handleInputChange={this.handleInputChange}
        currentTodo={this.state.currentTodo}
        handleSubmit={submitHandler}/>
      <TodoList 
        handleToggle={this.handleToggle} 
        todos={this.state.todos}
        handleRemove={this.handleRemove}
        />
        <Footer />
    </div>
    );
  }
}

export default Todos
