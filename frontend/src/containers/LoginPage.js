import React, { Component } from 'react';
//Other Components
import Navbar from '../components/Navbar';
import LoginForm from '../components/Login/LoginForm';

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
