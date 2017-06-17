import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.jsx';
import SymptomCard from './SymptomCard';
import SymptomStepper from './SymptomStepper';

class HomePage extends Component {
  render() {
    return (
      <div className="Page">
        <Navbar></Navbar>
        <SymptomStepper />
        <br />
        <SymptomCard />
      </div>
    );
  }
}

export default HomePage;
