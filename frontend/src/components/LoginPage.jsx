import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.jsx';
import LoginForm from './LoginForm.jsx';

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
