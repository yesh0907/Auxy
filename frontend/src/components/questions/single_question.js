import React from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

export default class SingleQuestion extends React.Component {
	render() {
		return(
			<div className="col-md-8">
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
	    		</Card>
	    	</div>
		);
	}
}