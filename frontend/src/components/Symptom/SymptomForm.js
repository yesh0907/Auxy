import React, { Component } from 'react';
import { Button, Form, Dropdown, Label, Icon } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import _ from 'lodash';
import $ from 'jquery';
import Fuse from 'fuse.js';

import 'react-input-range/lib/css/index.css';
import '../../styles/SymptomForm.css';


class SymptomForm extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            isMale: true,
            age: 30,
            allSymptoms: [],
            currentSymptoms: []
        }
    }
    
    componentWillMount() {
        this.props.fetchAllSymptoms()
        .then(() => {
            const { symptoms } = this.props;
            let allSymptoms = _.map(symptoms, (item) => {
                return {
                    value: item['id'],
                    key: item['id'],
                    text: item['common_name']
                }
            });
            allSymptoms = _.sortBy(allSymptoms, [o => o.text]);
            this.setState({
                isLoading: false,
                allSymptoms
            });
            this.fuse = new Fuse(allSymptoms, {keys: ['text']})
        });
    }

    changeGender(e) {
        e.preventDefault();
        this.setState({
            isMale: !this.state.isMale
        });
    }

    handleChange(_, value) {
        return this.fuse.search(value).splice(0, 6);
    }

    handleBlur() {
        const parent = $('div.dropdown');
        const selectedItems = parent.find('a.ui.label');
        const currentSymptoms = _.map(selectedItems, (item) => {
            return {
                id: $(item).attr('value'),
                choice_id: 'present'
            };
        });
        this.setState({ currentSymptoms });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const { diagnose, history } = this.props;
        const { currentSymptoms, isMale, age } = this.state;
        const evidence = currentSymptoms;
        const sex = isMale ? 'male' : 'female';
        diagnose(evidence, sex, age);
        history.push('/questions', {});
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field>
                        <label>Sex</label>
                        <Button.Group size="massive" style={{marginLeft: '26px'}}>
                            <Button 
                                color="blue"
                                content="Male"
                                icon="male"
                                labelPosition="left"
                                active={this.state.isMale}
                                inverted={!this.state.isMale}
                                onClick={this.changeGender.bind(this)}
                            />
                            <Button.Or />
                            <Button 
                                color="pink"
                                content="Female"
                                icon="female"
                                labelPosition="right"
                                active={!this.state.isMale}
                                inverted={this.state.isMale}
                                onClick={this.changeGender.bind(this)}
                            />
                        </Button.Group>
                    </Form.Field>
                    <Form.Field>
                        <label>Age</label>
                        <InputRange
                            minValue={1}
                            maxValue={99}
                            value={this.state.age}
                            onChange={age => this.setState({ age })}
                        />
                        <Label pointing>{this.state.age}</Label>
                    </Form.Field>
                    <br />
                    <Form.Field>
                        <label>Symptoms</label>
                        <Dropdown
                            placeholder="Select your symptoms"
                            fluid
                            multiple
                            selection
                            loading={this.state.isLoading}
                            options={this.state.allSymptoms}
                            onBlur={this.handleBlur.bind(this)}
                            search={this.handleChange.bind(this)}
                        />
                    </Form.Field>
                    <br />
                    <Button type="submit" size="big" color="teal">Diagnose</Button>
                </Form>
            </div>
        );
    }
}

export default SymptomForm;
