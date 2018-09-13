import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
      let todoArray = [
          {
              username: "Ryan",
              todo: "Clean room",
              isDone: "is done"
          },
          {
              username: "Ryan",
              todo: "Dishes",
              isDone: "is not done"
          },
          {
              username: "Ryan",
              todo: "Garbage",
              isDone: "is done"
          }
      ];

      fetch('/api/todo/test')
          .then(data =>
          {
              // console.log(data);
              console.log(data.json);
              data.json();
          });


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <TodoList arr={todoArray}/>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
          {/*<p>{todoArray[0].todo}</p>*/}
      </div>
    );
  }
}

export default App;
