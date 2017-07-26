import React, { Component } from 'react';
//Other Components
import Navbar from './Navbar';
import SymptomCard from './Symptom/SymptomCard';
import SymptomStepper from './Symptom/SymptomStepper';

class HomePage extends Component {
  render() {
    const { 
      user,
      diagnose,
      fetchAllSymptoms,
      symptoms,
      currentSymptoms,
      updateSymptoms,
      history
    } = this.props;
    return (
      <div className="Page">
        <Navbar></Navbar>
        <SymptomStepper active={this.props.active} />
        <br />
        <SymptomCard 
          user={user}
          diagnose={diagnose} 
          fetchAllSymptoms={fetchAllSymptoms}
          symptoms={symptoms}
          currentSymptoms={currentSymptoms}
          updateSymptoms={updateSymptoms}
          history={history}
        />
      </div>
    );
  }
}

export default HomePage;
