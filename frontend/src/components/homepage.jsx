import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.jsx';
import SymptomCard from './SymptomCard';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <br />
        <SymptomCard />
      </div>
    );
  }
}

export default HomePage;
