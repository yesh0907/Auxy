import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.jsx';
import SymptomCard from './SymptomCard';
import SymptomStepper from './SymptomStepper';

class HomePage extends Component {
  render() {
    const { user, diagnose, history } = this.props;
    return (
      <div className="Page">
        <Navbar></Navbar>
        <SymptomStepper />
        <br />
        { user.name === "" ? undefined :  <SymptomCard user={user} diagnose={diagnose} history={history} /> }
      </div>
    );
  }
}

export default HomePage;
