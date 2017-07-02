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

  toggleTodo(todo){
    console.log("todo clicked", todo);
  }

  showTodos(todos){
    return(
      todos.map((todo) => {
        return(
          <div className="todo"
            key="todo-{todo.title}"
            onClick={() => this.toggleTodo(todo)}>
            {todo.title} {todo.done ? 'oui' : 'non'}
          </div>
        )
      })
    );
  }
}

export default List;
