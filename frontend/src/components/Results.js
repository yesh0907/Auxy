import React, { Component } from 'react';
import Navbar from './navbar.jsx';
import { Divider } from 'semantic-ui-react';
import ResultsStepper from './ResultsStepper';
import TriageDetail from './results/triage_detail';
import ResultsList from './results/results_list';
import HospitalMap from './results/hospital_map';

export default class Results extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
				<ResultsStepper/>
				<br/>
				<div className="App">
					<TriageDetail/>
				</div>
				<br/>
				<div className="App">
					<ResultsList/>
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
				<HospitalMap/>
			</div>
		);
	}
}