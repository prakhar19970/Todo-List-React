import React, { Component } from 'react';

import Todo from './components/Todo';
import Addelement from './components/Addelement';

class App extends Component {

  state = {
    todos: JSON.parse(localStorage.getItem('tasks')),
    newItem: ''
  }

  updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.todos));
  }

  addElement = async (obj) => {
    await this.setState({
      todos: [...this.state.todos, { title: obj, completed: false }]
    });
    this.updateLocalStorage()
  }


  markComplete = async (event) => {
    const id = Number(event.target.parentElement.parentElement.getAttribute('position'));
    await this.setState({
      todos: this.state.todos.map((data, index) => {
        if (index + 1 === id) {

          data.completed = !data.completed;
        }
        return data;
      })
    });
    this.updateLocalStorage();

  }


  delButton = async (event) => {
    const id = Number(event.target.parentElement.parentElement.getAttribute('position'));
    await this.setState({
      todos: [...this.state.todos.filter((data, index) => (index + 1) !== id)]
    });
    this.updateLocalStorage();
  }

  render() {

    return (
      <div className="App">
        <header className="header-area">
          <h1>To Do List</h1>
        </header>
        <div className="todo-box">
          < Addelement addElement={this.addElement} />
          <Todo todos={this.state.todos} markComplete={this.markComplete}
            delButton={this.delButton} />
        </div>
      </div>
    );
  }
}
export default App;
