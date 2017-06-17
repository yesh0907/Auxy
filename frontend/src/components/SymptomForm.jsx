import React, { Component } from 'react';
//Semantic-UI
import { Input, Grid, Header, Button, Form, Checkbox, Dropdown, Label, List, Icon } from 'semantic-ui-react';
//Imports Input Range Slider
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
//Self-made Styles for Form
import '../styles/symptomform.css';
//React-Router
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

import _ from 'lodash';

let algoliasearch = require('algoliasearch');
let axios = require('axios');
let baseUrl = 'https://auxy-ahsg.herokuapp.com/';

let client = algoliasearch('S2379UOSVF', '11d9d26a522ab9bde5f1078f71a2d68f');
let index = client.initIndex('symptoms');

class SymptomForm extends Component {
  constructor() {
    super();
    this.state = {
      genders: [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' }
      ],
      symptoms: [
        { key: 'a', text: 'Nyeah', value: 'nyeah' },
        { key: 'b', text: 'Sarthak', value: 'sarthak' },
      ],
      age: 35,
      symptomNames: [],
      value: "",
      isMaleBtnActive: false,
      isFemaleBtnActive: false
    }
  }

  isMaleActive(e) {
    e.preventDefault();
    if (this.state.isMaleBtnActive && !this.state.isFemaleBtnActive)
      this.setState({isMaleBtnActive: false});
    else {
      this.setState({isMaleBtnActive: true, isFemaleBtnActive: false});
    }
  }

  isFemaleActive(e) {
    e.preventDefault();
    if (this.state.isFemaleBtnActive && !this.state.isMaleBtnActive)
      this.setState({isFemaleBtnActive: false});
    else {
      this.setState({isMaleBtnActive: false, isFemaleBtnActive: true});
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

  handleChange(input) {
    index.search(input, function searchDone(err, content) {
      if(err) {
        console.err(err);
        return;
      };

      for (var h in content.hits) {
        console.log('Hit(' + content.hits[h].id + '): ' + content.hits[h].name.toString());
      }
    })
  }

  getOptions(input) {
    let outerThis = this;
    index.search(input, function searchDone(err, content) {
      if(err) {
        console.err(err);
        return;
      };
      let arrayOfHits = [];
      for (let h in content.hits) {
        console.log('Hit(' + content.hits[h].id + '): ' + content.hits[h].name.toString());
        console.log(content.hits[h].objectID);
        arrayOfHits.push({
          key: content.hits[h].objectID,
          text: content.hits[h].name.toString(),
          value: _.snakeCase(content.hits[h].name.toString())
        });
      };
      outerThis.setState({
        options: arrayOfHits,
        isFetching: false
      });
    });
  }

  componentWillMount() {
    this.setState({
      isFetching: false,
      multiple: true,
      search: true,
      searchQuery: null,
      savedSymptoms: [],
      options: this.getOptions('a'),
    })
  }
  //Handles List of Confirmed Symptoms
  handleChange = (e, { value }) => {
    let currentSymptoms = this.state.savedSymptoms;
    let alreadySymptom = false;
    let index = 0;
    let newVal = _.replace({value}.value, /\_/g, ' ');
    newVal = _.upperFirst(newVal);
    console.log(newVal);
    for (let symptom in currentSymptoms) {
      if (currentSymptoms[symptom].value == newVal) {
        alreadySymptom = true;
        index = symptom;
        break;
      }
    }
    if (!alreadySymptom) {
      currentSymptoms.push({
        value: newVal
      });
      this.setState({ savedSymptoms: currentSymptoms});
    }
    console.log(currentSymptoms);
  };
  //Constantly Updates
  handleSearchChange = (e, value) => {this.setState({ searchQuery: value }); this.fetchOptions(value)};

  fetchOptions = (input) => {
    this.setState({ isFetching: true })
    this.getOptions(input);
  }

  render() {
    const { multiple, options, isFetching, search, value } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Gender</label>
            <Button.Group size="massive" style={{marginLeft: '26px'}}>
              <Button color="blue" content="Male" icon='male' labelPosition="left" active={this.state.isMaleBtnActive} onClick={this.isMaleActive.bind(this)} inverted={this.state.isMaleBtnActive} />
              <Button.Or />
              <Button color="pink" content="Female" icon='female' labelPosition="right" active={this.state.isFemaleBtnActive} onClick={this.isFemaleActive.bind(this)} inverted={this.state.isFemaleBtnActive} />
            </Button.Group>
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
            <Dropdown
              fluid
              selection
              search={search}
              options={options}
              value={value}
              placeholder='Add Symptoms'
              onChange={this.handleChange}
              onSearchChange={this.handleSearchChange}
              disabled={isFetching}
              loading={isFetching}
              />
          </Form.Field>
          <Form.Field inline>
            <label>Selected Symptoms</label>
            <List selection>
              {this.state.savedSymptoms.map((symptom, index) => (<List.Item key={index} onClick={console.log(symptom.value)}><List.Content><List.Header>{symptom.value}</List.Header></List.Content></List.Item>))}
            </List>
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
