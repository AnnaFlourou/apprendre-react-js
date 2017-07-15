import React, { Component } from 'react';
import TodoItem from './todoItem';

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
          <TodoItem item={todo}
                    idx={idx}
                    toggleTodo={this.toggleTodo.bind(this)}/>
        );
      })
    );
  }
}

export default List;
