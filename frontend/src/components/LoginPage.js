import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.js';
import LoginForm from './LoginForm.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoginForm />
      </div>
    );
  }
}

export default HomePage;
