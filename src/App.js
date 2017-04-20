import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainEvents from './components/MainEvents'
import Search from './components/Search'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="Image">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DevConf</h2>
        </div>
        <Search />
        <MainEvents />
      </div>
    );
  }
}

export default App;
