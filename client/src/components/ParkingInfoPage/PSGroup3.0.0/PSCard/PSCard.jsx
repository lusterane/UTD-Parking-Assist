import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

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

	componentDidUpdate(prevProps, prevState) {
		if (prevState.index !== this.state.index || prevProps !== this.props) {
			this.updateCurrentPermit();
		}

		// get color blind status
		const data = localStorage.getItem('color-blind-status') === 'true';
		if (this.state.colorBlindMode !== data) {
			this.setState({ colorBlindMode: data });
		}
	}

	handleIncrementIndex = () => {
		this.setState({ index: this.state.index + 1 });
	};

	handleDecrementIndex = () => {
		this.setState({ index: this.state.index - 1 });
	};

	updateCurrentPermit = () => {
		const { id, spots, structure, color, level, spot_change } =
			this.props.dataArr.length !== 0
				? this.props.dataArr[this.state.index]
				: { id: -1, spots: -1, color: 'green', level: -1 };

		this.setState({
			currentPermit: {
				id: id,
				spots: spots,
				structure: structure,
				color: color,
				level: level,
				spot_change: spot_change,
			},
		});
	};

	getSpotChangeJSX = (spot_change) => {
		if (spot_change === 0) {
			return (
				<div className='percent-change-container'>
					<p className='percent-change-text'>
						<span className='grey'>-</span>
					</p>
				</div>
			);
		} else if (spot_change > 0) {
			return (
				<div className='percent-change-container'>
					<p className='percent-change-text'>
						<span className='percent-change-green'>+{spot_change}%</span> SPACES
					</p>
				</div>
			);
		} else {
			return (
				<div className='percent-change-container'>
					<p className='percent-change-text'>
						<span className='percent-change-red'>-{spot_change}%</span> SPACES
					</p>
				</div>
			);
		}
	};

	render() {
		const { spots, structure, color, level, spot_change } = this.state.currentPermit;
		return (
			<React.Fragment>
				<Card className='ps-card'>
					{this.props.dataArr.length !== 0 ? (
						<Card.Body>
							{this.state.index === 0 ? (
								<div className='text-muted ps-card-header'>
									<i className='fas fa-star'></i> Recommended Choice
								</div>
							) : (
								''
							)}
							<div className='ps-card-body'>
								{this.state.index !== 0 ? (
									<div
										onClick={this.handleDecrementIndex}
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
									<p className='main-text'>{spots} SPOTS</p>
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
										onClick={this.handleIncrementIndex}
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
