import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { UncontrolledTooltip } from 'reactstrap';

import FullPSCardBody from './FullPSCardBody/FullPSCardBody.jsx';

import './PSCard.css';
import '../../../../styles/shared/Colors.css';

class PSCard extends Component {
	state = {
		index: 0,
		currentPermit: {
			id: -1,
			spots: -1,
			structure: 'ps1',
			color: 'green',
			level: -1,
		},
		colorBlindMode: false,
	};

	componentDidUpdate() {
		// initialize current permit
		if (this.state.currentPermit.id === -1 && this.props.dataArr.length > 0) {
			this.setState((state, props) => ({
				currentPermit: {
					id: props.dataArr[0].id,
					spots: props.dataArr[0].spots,
					structure: props.dataArr[0].structure,
					color: props.dataArr[0].color,
					level: props.dataArr[0].level,
					spot_change: props.dataArr[0].spot_change,
				},
			}));
		}

		// get color blind status
		const data = localStorage.getItem('color-blind-status') === 'true';
		if (this.state.colorBlindMode !== data) {
			this.setState({ colorBlindMode: data });
		}
	}

	handleIncrementUpdate = () => {
		this.setState((state, props) => ({
			index: state.index + 1,
			currentPermit: {
				id: props.dataArr[state.index + 1].id,
				spots: props.dataArr[state.index + 1].spots,
				structure: props.dataArr[state.index + 1].structure,
				color: props.dataArr[state.index + 1].color,
				level: props.dataArr[state.index + 1].level,
				spot_change: props.dataArr[state.index + 1].spot_change,
			},
		}));
	};

	handleDecrementUpdate = () => {
		this.setState((state, props) => ({
			index: state.index - 1,
			currentPermit: {
				id: props.dataArr[state.index - 1].id,
				spots: props.dataArr[state.index - 1].spots,
				structure: props.dataArr[state.index - 1].structure,
				color: props.dataArr[state.index - 1].color,
				level: props.dataArr[state.index - 1].level,
				spot_change: props.dataArr[state.index - 1].spot_change,
			},
		}));
	};

	getSpotChangeJSX = (spot_change) => {
		if (isNaN(spot_change) || spot_change === 0) {
			return (
				<div className='percent-change-container'>
					<p className='percent-change-text'>
						<span className='grey'>No activity for 10 minutes</span>
					</p>
				</div>
			);
		} else if (spot_change > 0) {
			return (
				<div className='percent-change-container'>
					<p className='percent-change-text'>
						<span className='percent-change-green'>+{spot_change}%</span>{' '}
						<span className='grey'>space availability</span>
					</p>
				</div>
			);
		} else {
			return (
				<div className='percent-change-container'>
					<p className='percent-change-text'>
						<span className='percent-change-red'>{spot_change}%</span> space
						availability
					</p>
				</div>
			);
		}
	};

	getParkingStructureLink = (structure) => {
		if (structure === 'PS1') {
			return 'https://goo.gl/maps/KHvbiG6WtTbbTKSa9';
		} else if (structure === 'PS3') {
			return 'https://goo.gl/maps/kFAHUwgEb1NwTAbv5';
		} else {
			// 'ps4
			return 'https://goo.gl/maps/jcU9wcRKYS6MoVuY8';
		}
	};

	render() {
		const { spots, structure, color, level, spot_change } = this.state.currentPermit;

		return (
			<React.Fragment>
				<Card className='ps-card'>
					{this.props.dataArr.length !== 0 ? (
						<Card.Body>
							<UncontrolledTooltip placement='bottom' target='best-choice'>
								Calculated by weighting Spot Change Trend, # Of Current Spots, and
								Permit Color
							</UncontrolledTooltip>

							<div className='text-muted ps-card-header'>
								<div className='best-choice-container' id='best-choice'>
									{this.state.index === 0 ? (
										<span>
											<i className='fas fa-star'></i> BEST CHOICE
										</span>
									) : (
										''
									)}
								</div>
								<div className='icon-container'>
									<a
										rel='noopener noreferrer'
										target='_blank'
										href={this.getParkingStructureLink(structure)}
									>
										<i className='fas fa-map-marked-alt fa-lg'></i>
									</a>
								</div>
							</div>

							<div className='ps-card-body'>
								{this.state.index !== 0 ? (
									<div
										onClick={this.handleDecrementUpdate}
										className='pointer arrow-container'
									>
										<i className='arrow fas fa-angle-left'></i>
									</div>
								) : (
									<div className='arrow-container'>
										<i className='grey arrow fas fa-angle-left'></i>
									</div>
								)}
								<div className='text'>
									<p className='main-text'>{spots} SPACES</p>
									<p className='sub-text'>Level {level}</p>

									{this.state.colorBlindMode ? (
										<p className={'sub-text border-' + color}>
											{color.charAt(0).toUpperCase() + color.slice(1)}
										</p>
									) : (
										<p className='sub-text'>
											Color <i className={'fas fa-circle ' + color}></i>
										</p>
									)}
									{this.getSpotChangeJSX(spot_change)}
								</div>
								{this.state.index !== this.props.dataArr.length - 1 ? (
									<div
										onClick={this.handleIncrementUpdate}
										className='arrow-container pointer'
									>
										<i className='arrow fas fa-angle-right'></i>
									</div>
								) : (
									<div className='arrow-container'>
										<i className='grey arrow fas fa-angle-right'></i>
									</div>
								)}
							</div>
							<div className='ps-card-footer'>
								<hr className='ps-card-hr'></hr>
								<p>{structure}</p>
							</div>
						</Card.Body>
					) : (
						<FullPSCardBody structure={this.props.structure} />
					)}
				</Card>
			</React.Fragment>
		);
	}
}

export default PSCard;
