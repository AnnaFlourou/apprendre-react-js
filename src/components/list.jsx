import React, { Component } from 'react';

class List extends Component {
  render(){
    return(
      <div className="liste">
        Todos: [{this.props.todos.length}]
        { this.showTodos(this.props.todos) }
      </div>
    );
  }

  toggleTodo(todo, index){
    this.props.onTodoToggle(todo, index);
  }

  showTodos(todos){
    return(
      todos.map((todo, idx) => {
        return(
          <div className="todo"
            key="todo-{todo.title}"
            onClick={() => this.toggleTodo(todo, idx)}>
            {todo.title} {todo.done ? 'oui' : 'non'}
          </div>
        )
      })
    );
  }
}

export default List;
