import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-browser-router';

import Home from './Components/home'
import Profile from './Components/profile'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route component={ Home } path='/' exact />
        <Route component={ Profile } path='/profile' />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
