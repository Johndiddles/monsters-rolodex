import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    intro: 'My name is ',
    name: 'John',
    hobby: ' '
  };

  render () {
    return (
      <header className='App'>
        <h1 className='App-header'>Welcome to my react tutorial</h1>
        <h3>{this.state.intro}{this.state.name}</h3>
        <p>{this.state.hobby}</p>
        <button onClick={() => this.setState({intro: 'My nick name is ', name: 'John Diddles', hobby: 'I love programming'})}>Change Text</button>
      </header>
    )
  }
}

export default App;
