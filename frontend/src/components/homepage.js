import React, { Component } from 'react';
//Other Components
import Navbar from './Navbar';
import SymptomCard from './Symptom/SymptomCard';
import SymptomStepper from './Symptom/SymptomStepper';

class HomePage extends Component {
  render() {
    const { user, diagnose, history } = this.props;
    return (
      <div className="Page">
        <Navbar></Navbar>
        <SymptomStepper active={this.props.active} />
        <br />
        { user.name === "" ? undefined :  <SymptomCard user={user} diagnose={diagnose} history={history} /> }
      </div>
    );
  }
}

export default HomePage;
