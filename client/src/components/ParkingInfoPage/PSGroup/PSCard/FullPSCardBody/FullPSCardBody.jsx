import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './FullPSCardBody.css';
class FullPSCardBody extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Card.Body>
					<div className="ps-card-body">
						<div className="text">
							<p className="main-text">FULL</p>
							<p className="full-sub-text">Sorry, all the parking spots are taken!</p>
						</div>
					</div>
					<div className="ps-card-footer">
						<hr className="white-hr"></hr>
						<p>{this.props.structure}</p>
					</div>
				</Card.Body>
			</React.Fragment>
		);
	}
}

export default FullPSCardBody;
