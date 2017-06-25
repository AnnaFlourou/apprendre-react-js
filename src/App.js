import React, { Component } from 'react';
import './App.css';

class List extends Component {
  render(){
    return(
      <div className="liste">ici c'est ma liste</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Apprendre ReactJS</h2>
        </div>
        <p className="App-intro">
          <List />
        </p>
      </div>
    );
  }
}

export default App;
