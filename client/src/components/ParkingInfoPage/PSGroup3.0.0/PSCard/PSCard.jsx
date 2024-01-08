import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { UncontrolledTooltip } from 'reactstrap';

import FullPSCardBody from './FullPSCardBody/FullPSCardBody.jsx';

import './PSCard.css';
import '../../../../styles/shared/Colors.css';
import ParkingGarageButton from './ParkingGarageButton/ParkingGarageButton.jsx';

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
				<div className="percent-change-container">
					<p className="percent-change-text">
						<span className="grey">No activity for 10 minutes</span>
					</p>
				</div>
			);
		} else if (spot_change > 0) {
			return (
				<div className="percent-change-container">
					<p className="percent-change-text">
						<span className="percent-change-green">+{spot_change}%</span>{' '}
						<span className="grey">space availability</span>
					</p>
				</div>
			);
		} else {
			return (
				<div className="percent-change-container">
					<p className="percent-change-text">
						<span className="percent-change-red">{spot_change}%</span> space
						availability
					</p>
				</div>
			);
		}
	};

	getFullGarageName = (garage) => {
		if (garage === 'PS1') {
			return 'Parking Garage 1';
		}
		if (garage === 'PS3') {
			return 'Parking Garage 3';
		}
		return 'Parking Garage 4';
	};

	render() {
		const { spots, structure, color, level, spot_change } = this.state.currentPermit;
		const { colorBlindMode } = this.state;

		const bestChoiceCardBody = colorBlindMode
			? 'best-choice-body-color-blind'
			: 'best-choice-body';
		return (
			<React.Fragment>
				<Card className="ps-card round-corners dark-mode-off-hue-dark">
					{this.props.dataArr.length !== 0 ? (
						<Card.Body className={this.state.index === 0 ? bestChoiceCardBody : ''}>
							<UncontrolledTooltip placement="bottom" target="best-choice">
								Computed by weighting{' '}
								<span className="bold">
									parking trends, immediate spot availability,
								</span>{' '}
								and <span className="bold"> permit tier</span>
							</UncontrolledTooltip>
							<div className="text-muted ps-card-header">
								<div className="best-choice-container">
									{this.state.index === 0 ? (
										<span className="gold" id="best-choice">
											<i className="fas fa-star"></i> BEST CHOICE
										</span>
									) : (
										''
									)}
								</div>
							</div>

							<div className="ps-card-body">
								{this.state.index !== 0 ? (
									<div
										onClick={this.handleDecrementUpdate}
										className="pointer arrow-container"
									>
										<i className="arrow fas fa-angle-left"></i>
									</div>
								) : (
									<div className="arrow-container">
										<i className="grey arrow fas fa-angle-left"></i>
									</div>
								)}
								<div className="text">
									<p className="main-text">{spots} SPACES</p>
									<p className="sub-text">Level {level}</p>

									{this.state.colorBlindMode ? (
										<p className={'sub-text border-' + color}>
											{color.toUpperCase()}
										</p>
									) : (
										<p className="sub-text">
											Color <i className={'fas fa-circle ' + color}></i>
										</p>
									)}
									{this.getSpotChangeJSX(spot_change)}
								</div>
								{this.state.index !== this.props.dataArr.length - 1 ? (
									<div
										onClick={this.handleIncrementUpdate}
										className="arrow-container pointer"
									>
										<i className="arrow fas fa-angle-right"></i>
									</div>
								) : (
									<div className="arrow-container">
										<i className="grey arrow fas fa-angle-right"></i>
									</div>
								)}
							</div>
							<div className="ps-card-footer">
								<ParkingGarageButton
									name={this.getFullGarageName(this.props.structure)}
									color={color}
									structure={this.props.structure}
								></ParkingGarageButton>
								<p></p>
							</div>
						</Card.Body>
					) : (
						<FullPSCardBody structure={this.getFullGarageName(this.props.structure)} />
					)}
				</Card>
			</React.Fragment>
		);
	}
}

export default PSCard;
