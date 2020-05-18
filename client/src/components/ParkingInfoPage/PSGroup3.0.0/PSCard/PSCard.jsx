import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './PSCard.css';
import '../../../../styles/shared/Colors.css';

class PSCard extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Card className='ps-card'>
					<Card.Body>
						<Card.Title></Card.Title>
						<Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
						<div className='text-muted ps-card-header'>
							<i className='fas fa-star'></i> Recommended Choice
						</div>
						<div className='ps-card-body'>
							<div className='arrow-container'>
								<i className='grey arrow fas fa-angle-left'></i>
							</div>
							<div className='text'>
								<p className='main-text'>102 SPOTS</p>
								<p className='sub-text'>Level 3</p>
								<p className='sub-text'>
									Color <i className='fas fa-circle gold'></i>
								</p>
								<p className='sub-text'></p>
							</div>

							<div className='arrow-container'>
								<i className='arrow fas fa-angle-right'></i>
							</div>
						</div>
						<div className='ps-card-footer'>
							<hr></hr>
							<p>PS1</p>
						</div>
					</Card.Body>
				</Card>
			</React.Fragment>
		);
	}
}

export default PSCard;
