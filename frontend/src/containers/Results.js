import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Divider } from 'semantic-ui-react';

import Navbar from '../components/navbar';
import ResultsStepper from '../components/ResultsStepper';
import TriageDetail from '../components/results/triage_detail';
import ResultsList from '../components/results/results_list';
import HospitalMap from '../components/results/hospital_map';

class Results extends Component {
	componentWillMount() {
		// this.props.actions.fetchDiagnosis(this.props.diagnose.currentDiagnosis);
	}

	render() {
		const { actions, diagnose } = this.props;
		// console.log(diagnose);

		return (
			<div className="Page">
				<Navbar></Navbar>
				<ResultsStepper/>
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
				<HospitalMap />
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
