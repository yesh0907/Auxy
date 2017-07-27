import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import $ from 'jquery';

const YES = 'YES';
const NO = 'NO';
const DONT_KNOW = 'DONT_KNOW';

export default class SingleQuestion extends Component {
	clickAction(type) {
		const { question, history, currentDiagnosis, updateDiagnosis } = this.props;
		switch (type) {
			case YES: {
				const newSymptom = {id: question['items'][0]['id'], choice_id: 'present'};
				const evidence = [...currentDiagnosis.evidence, newSymptom];
				updateDiagnosis(evidence, currentDiagnosis.sex, currentDiagnosis.age);
				break;
			}

			case NO: {
				console.log("NO");
				break;
			}

			case DONT_KNOW: {

			}

			default: {
				break;
			}
		}
	}

	render() {
		const { question } = this.props;

		const dontKnowOption = () => {
			return (
				<Button animated size='big' onClick={() => this.clickAction(DONT_KNOW)}>
					<Button.Content visible>Don't know</Button.Content>
						<Button.Content hidden>
							<Icon name='right arrow' />
						</Button.Content>
				</Button>
			);
		}

		return(
			<div className="col-md-8 question">
				<Card raised fluid>
	      			<Card.Content>
	       				<Card.Header>{question.text}</Card.Header>
	      			</Card.Content>
	      			<Card.Content extra>
	        			<Button.Group>
							<Button animated color='green' size='big' onClick={() => this.clickAction(YES)}>
	      						<Button.Content visible>Yes</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='checkmark' />
	      						</Button.Content>
	    					</Button>
	    					<Button animated color='red' size='big' onClick={() => this.clickAction(NO)}>
	      						<Button.Content visible>No</Button.Content>
	      						<Button.Content hidden>
	        						<Icon name='remove' />
	      						</Button.Content>
	    					</Button>
							{question.items.length > 2 ? dontKnowOption() : undefined }
	        			</Button.Group>
	      			</Card.Content>
	    		</Card>
	    	</div>
		);
	}
}
