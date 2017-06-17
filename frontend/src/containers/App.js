import React, { Component } from 'react';
//Components
import HomePage from '../components/homepage.jsx';
import Navbar from '../components/navbar.jsx';
//CSS
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
