import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './FullPSCardBody.css';
class FullPSCardBody extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="full-text-container">
					<p className="full-title">FULL</p>
					<p className="full-subtext">Sorry, this parking garage is unavailable!</p>
				</div>
			</React.Fragment>
		);
	}
}

export default FullPSCardBody;
