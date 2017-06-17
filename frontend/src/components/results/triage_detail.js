import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class TriageDetail extends React.Component {
	render() {
		return (
			<div className="triage col-md-8">
				<Card raised fluid>
	      			<Card.Content>
	        			<Card.Header>
	        				<Icon name="exclamation triangle" size="large"/> 
	        				Immediate Medical Care Required
	        			</Card.Header>
	        			
	        			<Card.Description>Your symptoms suggest that you are in urgent need of care.
	        			<br/><br/>Please go to the hospital listed below to received the 
	        			 fastest care.</Card.Description>
	      			</Card.Content>
	    		</Card>
	    	</div>
	    	
		);
	}
}