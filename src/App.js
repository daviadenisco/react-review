import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello',
      name: 'Dolly'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newState = {};
    if (this.state.greeting === 'Hello') {
      newState = {
        greeting: 'Hola', name: 'Dolores'
      }
    } else {
      newState = {
        greeting: 'Hello', name: 'Dolly'
      }
    }
    this.setState( newState );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.greeting}, {this.state.name}.</h1>
        </header>
        <Toggle handleClick={this.handleClick} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
