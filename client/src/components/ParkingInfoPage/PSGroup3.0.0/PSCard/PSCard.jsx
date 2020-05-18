import React, { Component } from 'react';
import { Card, ThemeProvider } from 'react-bootstrap';

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
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.index !== this.state.index || prevProps != this.props) {
			this.updateCurrentPermit();
		}
	}

	handleIncrementIndex = () => {
		this.setState({ index: this.state.index + 1 });
	};

	handleDecrementIndex = () => {
		this.setState({ index: this.state.index - 1 });
	};

	updateCurrentPermit = () => {
		const { id, spots, structure, color, level } =
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
			},
		});
	};

	render() {
		const { id, spots, structure, color, level } = this.state.currentPermit;
		return (
			<React.Fragment>
				{this.props.dataArr.length !== 0 ? (
					<Card className='ps-card'>
						<Card.Body>
							<Card.Title></Card.Title>
							<Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
							<div className='text-muted ps-card-header'>
								<i className='fas fa-star'></i> Recommended Choice
							</div>
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
									<p className='sub-text'>
										Color <i className={'fas fa-circle ' + color}></i>
									</p>
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
					</Card>
				) : (
					<h1>empty bro</h1>
				)}
			</React.Fragment>
		);
	}
}

export default PSCard;
