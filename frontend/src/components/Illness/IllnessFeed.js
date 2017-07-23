import React, { Component } from 'react';
import { Item, Popup, Icon, Button } from 'semantic-ui-react';
import axios from 'axios';

let baseUrl = 'https://auxy-ahsg.herokuapp.com/';

let pastIllnesses = [
	{
		illnessName: 'Lymphoma Cancer',
		illnessDate: 'December 27, 2016',
		numberOfSymptoms: '4',
		symptoms: 'Fever, Night Sweats, Fatigue, Weight Loss'
	},
	{
		illnessName: 'Common Cold',
		illnessDate: 'January 6, 2016',
		numberOfSymptoms: '3',
		symptoms: 'Runny Nose, Sore Throat, Cough'
	},
	{
		illnessName: 'Diarrhea',
		illnessDate: 'March 15, 2015',
		numberOfSymptoms: '5',
		symptoms: 'Cramps, Watery Stools, Nausea, Throwing Up, Urgent Feelings of Bowel Movement'
	}
]

class IllnessFeed extends Component {
	render() {
		return (
			<div className="container" id="illnessFeed">
			<Item.Group>
			{pastIllnesses.map((illness) => (
				<Item>
				<Item.Content>
				<Item.Header>{illness.illnessName}</Item.Header>
				<Item.Meta>{illness.illnessDate}</Item.Meta>
				<Item.Description>
				<Popup
				trigger={<Button><Icon name="frown" />{illness.numberOfSymptoms}</Button>}
				content={illness.symptoms}
				position={'right center'}
				inverted
				/>
				</Item.Description>
				</Item.Content>
				</Item>
			))}
			</Item.Group>
			</div>
		);
	}
}

export default IllnessFeed;
