import React, { Component } from 'react';

class TodoItem extends Component{
  render(){
    const todo = this.props.item;
    const idx  = this.props.idx;
    let str =
      todo.done ? 'marquer à faire' : 'marque comme fait';

    return(
          <div className="todo" key="todo-{todo.title}">
            <input type="checkbox"
              value={idx}
              onClick={(e) => this.props.addToList(idx, e.target.checked)}/>
            {todo.title}
            <button onClick={() => this.props.toggleTodo(todo, idx)}>
              {str}
            </button>
          </div>
    );
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  idx:  React.PropTypes.number.isRequired,
  addToList: React.PropTypes.func,
  toggleTodo: React.PropTypes.func,
};

export default TodoItem;
