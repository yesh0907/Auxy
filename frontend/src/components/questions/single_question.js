import React from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

export default class SingleQuestion extends React.Component {
	async clickAction(e) {
		e.preventDefault();
		const { question, history, d, diagnose } = this.props;
		const new_symptom = {id: question['items'][0]['id'], choice_id: 'present'};
		const evidence = [...d.symptoms, new_symptom];
		diagnose(evidence)
		window.setTimeout(() => {	
			history.push('/results', {});
		}, 1000);
	}

	render() {
		const { question } = this.props;

		return(
			<div className="col-md-8 question">
				<Card raised fluid>
	      			<Card.Content>
	       				<Card.Header>{question.text}</Card.Header>
	      			</Card.Content>
	      			<Card.Content extra>
	        			<Button.Group>
							<Button animated color='green' size='big' onClick={this.clickAction.bind(this)}>
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
