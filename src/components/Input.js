import React, { Component } from 'react';

class Input extends Component {
  onClick(evt){
    evt.preventDefault();
    const txt = this.todoTitle.value;
    this.todoTitle.value = '';

    this.props.onAction({
      title: txt,
      done: false,
      createdAt: new Date()
    });
  }

  render(){
    return(
      <div className='form'>
        <input type='text' ref={(input) => this.todoTitle = input}/>
        <button onClick={this.onClick.bind(this)}>{this.props.btnText}</button>
      </div>
    );
  }
}

export default Input ;
