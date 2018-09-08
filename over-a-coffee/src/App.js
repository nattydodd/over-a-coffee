import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './appointment/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Work in Progress</h1>
        </header>
        <div className="appointment">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
