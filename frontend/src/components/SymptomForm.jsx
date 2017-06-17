import React, { Component } from 'react';
//Semantic-UI
import { Input, Grid, Header, Button, Form, Checkbox, Dropdown, Label } from 'semantic-ui-react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../styles/symptomform.css'

class SymptomForm extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' }
      ],
      symptoms: [
        { key: 'a', text: 'Nyeah', value: 'nyeah' },
        { key: 'b', text: 'Sarthak', value: 'sarthak' },
      ],
      age: 35
    }
  }

  handleChange(event) {
    console.log(event);
    event => this.setState({age: event});
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <Form.Select label="Gender" options={this.state.options} placeholder="Gender" />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <InputRange
              maxValue={99}
              minValue={1}
              value={this.state.age}
              onChange={value => this.setState({age: value})}
              />
            <Label pointing>{this.state.age}</Label>
          </Form.Field>
          <br />
          <Form.Field>
            <label>Symptoms</label>
            <Dropdown placeholder='Select Symptoms' fluid multiple search selection options={this.state.symptoms} focus />
          </Form.Field>
          <br />
          <Form.Button color="teal">Check Symptoms</Form.Button>
        </Form>
      </div>
    );
  }
}

export default SymptomForm;
