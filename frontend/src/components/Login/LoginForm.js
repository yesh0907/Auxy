import React, { Component } from 'react';
//Semantic-UI
import { Input, Grid, Header, Button, Form, Checkbox } from 'semantic-ui-react'


class LoginForm extends Component {
  constructor() {
    super();
    //Change to Redux
    this.state = {
      options: [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' }
      ]
    }
  }
  render() {
    return (
      <div className="container" style={{marginTop: '25px'}}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Log In</Header>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" />
                </Form.Field>
                <Form.Button color="teal">Login</Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1'>Sign Up</Header>
              <Form>
                <Form.Field>
                  <label>Full Name</label>
                  <input placeholder="Full Name" />
                </Form.Field>
                <Form.Field>
                  <Form.Select label="Gender" options={this.state.options} placeholder="Gender" />
                </Form.Field>
                <Form.Field>
                  <label>Age</label>
                  <input type="number" placeholder="Age" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" />
                </Form.Field>
                <Form.Button color="teal">Sign Up</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
