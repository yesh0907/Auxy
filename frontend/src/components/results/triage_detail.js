import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import $ from 'jquery';
import Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

export default class TriageDetail extends React.Component {
	scrollToBottom() {
    	scroll.scrollToBottom();
  	}

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
	        			<br/><br/>Please go to the hospital listed below to receive the
	        			 fastest care.</Card.Description>
	        			 <br/>
	        			<Button onClick={event => this.scrollToBottom()} animated='vertical'>
      						<Button.Content visible>Directions</Button.Content>
      						<Button.Content hidden>
        						<Icon name='down arrow' />
      						</Button.Content>
   						</Button>
	      			</Card.Content>
	    		</Card>
	    	</div>
		);
	}
}
