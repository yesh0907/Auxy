import React from 'react';
import { Image, List, Icon, Card } from 'semantic-ui-react';

export default class ResultsList extends React.Component {
	render() {
		const { results } = this.props;
		const res = [{name: "Ischemic Heart Disease"}, {name: "Unstable Angina Pectoris"}, {name: "Anxiety Disorder"}];
		let listItems = () => {
			return (
				<List celled animated>
						<List.Item>
								<List.Content>
									<List.Header>{res[0]['name']}</List.Header>
									<List.Description>Strong evidence</List.Description>
								</List.Content>
						</List.Item>
						<List.Item>
								<List.Content>
									<List.Header>{res[1]['name']}</List.Header>
									<List.Description>Moderate evidence</List.Description>
								</List.Content>
						</List.Item>
						<List.Item>
								<List.Content>
									<List.Header>{res[2]['name']}</List.Header>
									<List.Description>Limited evidence</List.Description>
								</List.Content>
						</List.Item>
					</List>
			);
		}

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
						{listItems()}
			  		</Card.Content>
	  			</Card>
	  		</div>
		);
	}
}
