import React, { Component } from 'react';
//Semantic-UI
import { Input, Grid, Header, Button, Form, Checkbox, Dropdown, Label, List, Icon } from 'semantic-ui-react';
//Imports Input Range Slider
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
//Self-made Styles for Form
import '../../styles/symptomform.css';


import _ from 'lodash';

let algoliasearch = require('algoliasearch');
let axios = require('axios');

let client = algoliasearch('S2379UOSVF', '11d9d26a522ab9bde5f1078f71a2d68f');
let index = client.initIndex('symptoms');

class SymptomForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }

  isMale() {
    return (this.props.user.sex === 'male' ? true : false);
  }

  componentWillMount() {
    this.setState({
      isFetching: false,
      savedSymptoms: [],
      symptoms: [],
      allEvidence: [],
      options: this.getOptions('a'),
    })
  }

  handleChange(input) {
    index.search(input, function searchDone(err, content) {
      if(err) {
        console.err(err);
        return;
      };
    });
  }

  getOptions(input) {
    let outerThis = this;
    index.search(input, function searchDone(err, content) {
      if(err) {
        console.err(err);
        return;
      };
      let arrayOfHits = [];
      let allIds = {};
      for (let h in content.hits) {
        allIds[content.hits[h].id] = content.hits[h].name.toString();
        arrayOfHits.push({
          key: content.hits[h].objectID,
          text: content.hits[h].name.toString(),
          value: _.snakeCase(content.hits[h].name.toString()),
          id: content.hits[h].id
        });
      };
      outerThis.setState({
        options: arrayOfHits,
        isFetching: false,
        allEvidence: allIds
      });
    });
  }

  //Handles List of Confirmed Symptoms
  handleChange = (e, { value }) => {
    let currentSymptoms = this.state.savedSymptoms;
    let currentEvidence = this.state.symptoms;
    let alreadySymptom = false;
    let index = 0;
    let newVal = _.replace({value}.value, /\_/g, ' ');
    newVal = _.upperFirst(newVal);
    let all = this.state.allEvidence;
    // console.log(all);
    for (let x in all) {
      if ((all[x].replace(/,/i, "")) === newVal) {
        currentEvidence.push({
          id: x,
          choice_id: "present"
        });
      }
    }
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
      this.setState({ savedSymptoms: currentSymptoms });
    }
    this.setState({ symptoms: currentEvidence });
  };
  //Constantly Updates
  handleSearchChange = (e, value) => { this.fetchOptions(value) };

  fetchOptions = (input) => {
    this.setState({ isFetching: true })
    this.getOptions(input);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.diagnose(this.state.symptoms);
    console.log(this.props);
    this.props.history.push('/questions', {});
  }

  render() {
    const { options, isFetching, search, value } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Sex</label>
            <Button.Group size="massive" style={{marginLeft: '26px'}}>
              <Button color="blue" content="Male" icon='male' labelPosition="left" active={this.isMale()} inverted={this.isMale()} />
              <Button.Or />
              <Button color="pink" content="Female" icon='female' labelPosition="right" active={!this.isMale()} inverted={this.isMale()} />
            </Button.Group>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <InputRange
              maxValue={99}
              minValue={1}
              value={this.props.user.age}
              />
            <Label pointing>{this.props.user.age}</Label>
          </Form.Field>
          <br />
          <Form.Field>
            <label>Symptoms</label>
            <Dropdown
              fluid
              search={true}
              options={options}
              selection
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
              {this.state.savedSymptoms.map((symptom, index) => (<List.Item key={index}><List.Content><List.Header>{symptom.value}</List.Header></List.Content></List.Item>))}
            </List>
          </Form.Field>
          <br />
          <Button type="submit" size="big" color="teal">Diagnose</Button>
        </Form>
      </div>
    );
  }
}

export default SymptomForm;
