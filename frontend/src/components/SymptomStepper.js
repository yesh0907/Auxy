import React, { Component } from 'react';
//Semantic-UI Components
import { Icon, Step } from 'semantic-ui-react'

class SymptomStepper extends Component {
  render() {
    return (
      <div>
        <Step.Group fluid>
          <Step active={this.props.active == '/' ? true : false} icon='info circle' title="Information Input" />
          <Step active={this.props.active == '/questions' ? true : false} icon='comments' title="Questions" />
          <Step active={this.props.active == '/results' ? true : false} icon='file text outline' title="Results" />
        </Step.Group>
      </div>
    );
  }
}

export default SymptomStepper;
