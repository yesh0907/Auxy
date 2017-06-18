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
			<div className="Page">
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
				<br/>
				<div className="App directions">
					<div className="col-md-8">
						<div style={{height: '0px', background: 'white'}}></div>
						<h1>Directions</h1>
						<p>Follow the directions to following hospital to receive the quickest care.</p> 
					</div>
				</div>
				<div style={{height: '10px', background: 'white'}}></div>
				<HospitalMap/>
			</div>
		);
	}
}