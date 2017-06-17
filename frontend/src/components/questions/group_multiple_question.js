import React from 'react';
import { Button, Card, Image, Icon, Form, Radio, Divider, Grid } from 'semantic-ui-react';

export default class GroupMultipleQuestions extends React.Component {
	render() {
		return (
			<div className="col-md-8">
				<Card raised fluid>
					<Card.Content>
	       				<Card.Header>
	          				Question
	        			</Card.Header>
	      			</Card.Content>
	      			<Card.Content extra>
						<Form>
			        		<Form.Field>
			          			<Radio
			            			label='Choice 1'
			            			name='radioGroup'/>
			        		</Form.Field>
			        		<Divider/>
			        		<Form.Field>
			          			<Radio
			            			label='Choice 2'
			            			name='radioGroup'/>
			        		</Form.Field>
			      		</Form>
			      		<Divider/>
			      		<Button floated='right' animated color='green' size='big'>
	      					<Button.Content visible>Next</Button.Content>
	      					<Button.Content hidden>
	       						<Icon name='right arrow' />
	   						</Button.Content>
	    				</Button>
			      	</Card.Content>
			     </Card>
			</div>
		);
	}
}