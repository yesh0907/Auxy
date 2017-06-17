import React from 'react';
import { Image, List, Icon, Card } from 'semantic-ui-react';

export default class ResultsList extends React.Component {
	render() {
		return(
			<div className="results col-md-8">
				<Card raised fluid>
					<Card.Content>
						<Card.Header>
							Results
						</Card.Header>
						<Card.Meta>
							Possible Diagnoses:
						</Card.Meta>
						<List celled animated>
			    			<List.Item>
			      				<List.Content>
			        				<List.Header>Result 1</List.Header>
			        				<List.Description>Strong evidence</List.Description>
			      				</List.Content>
			    			</List.Item>
			    			<List.Item>
			      				<List.Content>
			        				<List.Header>Result 2</List.Header>
			        				<List.Description>Moderate evidence</List.Description>
			      				</List.Content>
			    			</List.Item>
			    			<List.Item>
			      				<List.Content>
			        				<List.Header>Result 3</List.Header>
			        				<List.Description>Weak evidence</List.Description>
			      				</List.Content>
			    			</List.Item>
			  			</List>
			  		</Card.Content>
	  			</Card>
	  		</div>
		);
	}
}