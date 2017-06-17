import React, { Component } from 'react';
//Semantic-UI Components
import { Icon, Step } from 'semantic-ui-react'

class ResultsStepper extends Component {
  render() {
    return (
      <div>
        <Step.Group fluid>
          <Step icon='info circle' title="Information Input" />
          <Step icon='comments' title="Questions" />
          <Step active icon='file text outline' title="Results" />
        </Step.Group>
      </div>
    );
  }
}

export default ResultsStepper;
