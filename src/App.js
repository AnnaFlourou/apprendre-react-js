import React, { Component } from 'react';
import List from './components/list';
import TodoForm from './components/todoForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }

  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
  }

  toggleTodoState(todo, index){
    let _todo = todo;
    _todo.done = !todo.done;
    let newTodos = this.state.todos;
    newTodos[index] = _todo;
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TodoApp</h2>
        </div>
        <div className="App-intro">
          <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
          <List todos={this.state.todos}
                onTodoToggle={this.toggleTodoState.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
