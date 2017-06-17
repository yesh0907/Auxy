import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
//Other Components
import SymptomForm from './SymptomForm';

class SymptomCard extends Component {
  render() {
    return (
      <div>
        <Grid columns={1} centered>
          <Grid.Row>
            <Grid.Column width={8} textAlign={'center'}>
              <Card fluid centered>
                <Card.Content>
                  <Card.Header style={{display: 'flex', justifyContent: 'center'}}>
                    Symptoms Checker
                  </Card.Header>
                  <Card.Description>
                    <SymptomForm />
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SymptomCard;
