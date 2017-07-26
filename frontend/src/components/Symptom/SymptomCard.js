import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
//Other Components
import SymptomForm from './SymptomForm';

class SymptomCard extends Component {
    render() {
        const { 
            user,
            diagnose,
            fetchAllSymptoms,
            symptoms,
            currentSymptoms,
            updateSymptoms,
            history 
        } = this.props;
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
                                        <SymptomForm 
                                        user={user} 
                                        diagnose={diagnose}
                                        fetchAllSymptoms={fetchAllSymptoms}
                                        symptoms={symptoms}
                                        currentSymptoms={currentSymptoms}
                                        updateSymptoms={updateSymptoms}
                                        history={history}
                                        />
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
