import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-browser-router';

import Home from './Components/home'
import Profile from './Components/profile'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Route component={ Home } path='/' exact />
        <Route component={ Profile } path='/profile' />
      </div>
      </HashRouter>
    );
  }
}

export default App;
