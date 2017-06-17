import React, { Component } from 'react';
//Semantic-UI
import { Input, Grid, Header, Button, Form, Checkbox, Dropdown } from 'semantic-ui-react'

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
      ]
    }
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
            <input type="number" placeholder="Age" />
          </Form.Field>
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
