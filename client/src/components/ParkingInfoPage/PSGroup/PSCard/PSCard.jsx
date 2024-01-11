import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

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
			},
		}));
	};

	getFullGarageName = (garage) => {
		if (garage === 'PS1') {
			return 'PARKING GARAGE 1';
		}
		if (garage === 'PS3') {
			return 'PARKING GARAGE 3';
		}
		return 'PARKING GARAGE 4';
	};
	bestChoiceClassName = () => {
		return this.state.index === 0 ? 'best-choice' : '';
	};
	render() {
		const { spots, color, level } = this.state.currentPermit;

		return (
			<React.Fragment>
				<Card
					className={`ps-card round-corners dark-mode-off-hue-dark ${this.bestChoiceClassName()}`}
				>
					{this.props.dataArr.length !== 0 ? (
						<Card.Body>
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
