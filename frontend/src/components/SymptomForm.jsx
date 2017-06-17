import React, { Component } from 'react';
//Semantic-UI
import { Input, Grid, Header, Button, Form, Checkbox, Dropdown, Label } from 'semantic-ui-react';
//Imports Input Range Slider
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
//Self-made Styles for Form
import '../styles/symptomform.css';
//React-Router
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

let algoliasearch = require('algoliasearch');
let axios = require('axios');
let baseUrl = 'https://auxy-ahsg.herokuapp.com/';

let client = algoliasearch('S2379UOSVF', '11d9d26a522ab9bde5f1078f71a2d68f');

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
      age: 35,
      symptomNames: [],
      value: ""
    }
  }


  handleSubmit(event) {

  }

  componentWillMount() {
    let allSymptoms = [];
    let outerThis = this;
    axios.get(baseUrl + 'diagnosis/symptoms')
      .then((response) => {
        const symptoms = response.data;
        for (let symptom in symptoms) {
          let symp = symptoms[symptom];
          allSymptoms.push({
            name: symp.common_name,
            id: symp.id,
            sex_filter: symp.sex_filter
          });
        }
      })
      .then((_) => {
        if (window.localStorage.getItem("allSymptoms") === null) {
          window.localStorage.setItem("allSymptoms", JSON.stringify(allSymptoms));
        }
        this.setState({symptoms: JSON.parse(window.localStorage.getItem("allSymptoms"))});
        let jsonNames = JSON.parse(window.localStorage.getItem("allSymptoms")).map(symptom => symptom.name);
        let symptomNames = [];
        jsonNames.map((symptom, index) => {
          // console.log(symptom, index)
            symptomNames.push({
              key: index,
              text: symptom,
              value: symptom
            });
          }
        );
        this.setState({symptomNames: symptomNames});
      });
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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

          </Form.Field>
          <Form.Field inline>
            <label>Selected Symptoms</label>
          </Form.Field>
          <br />
          <Button type="submit" color="teal" as={Link} to={'/questions'}>Diagnose</Button>
        </Form>
      </div>
    );
  }
}

//          <Dropdown placeholder='Select Symptoms' fluid multiple search selection options={this.state.symptomNames} />


export default SymptomForm;
