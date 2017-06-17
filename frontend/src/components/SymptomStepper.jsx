import React, { Component } from 'react';
//Semantic-UI Components
import { Icon, Step } from 'semantic-ui-react'

class SymptomStepper extends Component {
  render() {
    return (
      <div>
        <Step.Group fluid>
          <Step active icon='info circle' title="Information Input" />
          <Step icon='comments' title="Questions" />
          <Step icon='file text outline' title="Results" />
        </Step.Group>
      </div>
    );
  }
}

export default SymptomStepper;
