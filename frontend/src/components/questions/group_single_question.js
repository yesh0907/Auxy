import React from 'react';
import SingleQuestion from './single_question';
import { Button, Card, Image, Icon, Grid } from 'semantic-ui-react';

export default class GroupSingleQuestion extends React.Component {
	render() {
		return(
			<div className="col-md-8 question">
				<Card raised fluid>
	      			<Card.Content>
	       				<Card.Header>
	          				Question
	        			</Card.Header>
	      			</Card.Content>
	      			<Card.Content extra>
	        			<Button.Group>
							<Button animated color='green' size='big'>
	      						<Button.Content visible>Yes</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='checkmark' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated color='red' size='big'>
	      						<Button.Content visible>No</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='remove' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated size='big'>
	      						<Button.Content visible>Don't know</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='right arrow' />
	      						</Button.Content>
	    					</Button>
	        			</Button.Group>
	      			</Card.Content>

	      			<Card.Content>
	       				<Card.Header>
	          				Question
	        			</Card.Header>
	      			</Card.Content>
	      			<Card.Content extra>
	        			<Button.Group>
							<Button animated color='green' size='big'>
	      						<Button.Content visible>Yes</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='checkmark' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated color='red' size='big'>
	      						<Button.Content visible>No</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='remove' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated size='big'>
	      						<Button.Content visible>Don't know</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='right arrow' />
	      						</Button.Content>
	    					</Button>
	        			</Button.Group>
	      			</Card.Content>

	      			<Card.Content>
	       				<Card.Header>
	          				Question
	        			</Card.Header>
	      			</Card.Content>
	      			<Card.Content extra>
	        			<Button.Group>
							<Button animated color='green' size='big'>
	      						<Button.Content visible>Yes</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='checkmark' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated color='red' size='big'>
	      						<Button.Content visible>No</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='remove' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated size='big'>
	      						<Button.Content visible>Don't know</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='right arrow' />
	      						</Button.Content>
	    					</Button>
	        			</Button.Group>
	      			</Card.Content>

	      			<Card.Content>
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
