import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Divider } from 'semantic-ui-react';

import Navbar from '../components/navbar';
import ResultsStepper from '../components/Results/ResultsStepper';
import TriageDetail from '../components/Results/TriageDetail';
import ResultsList from '../components/Results/ResultsList';
import SymptomStepper from '../components/Symptom/SymptomStepper';

class Results extends Component {
	componentWillMount() {
		// this.props.actions.fetchDiagnosis(this.props.diagnose.currentDiagnosis);
	}

	render() {
		const { actions, diagnose } = this.props;
		return (
			<div className="Page">
				<Navbar></Navbar>
				<SymptomStepper active={'/results'} />
				<br/>
				<div className="App">
					<TriageDetail/>
				</div>
				<br/>
				<div className="App">
					<ResultsList results={diagnose.condition} />
				</div>
				<br/>
				<Divider/>
				<div className="App">
					<div className="col-md-8">
						<h1>Directions</h1>
						<p>Follow the directions to following hospital to receive the quickest care.</p>
					</div>
				</div>
				<br/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    user: state.user,
    diagnose: state.diagnose
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
