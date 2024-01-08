import React, { Component } from 'react';
import { Alert } from 'reactstrap';

import './Time.css';

class Time extends Component {
	state = {
		updateClientTimerInterval: '',
		timerIsLoaded: false,
	};
	getTimeText = (elapsedTime) => {
		if (elapsedTime > 120) {
			return (
				<Alert color="danger">Oops! Something went wrong, please refresh the page</Alert>
			);
		} else {
			const calculatedTime = Math.min(60 - elapsedTime, 57);

			const updateTimeText = this.standardizeSeconds(calculatedTime);
			if (calculatedTime <= 3 || calculatedTime === 0) {
				return (
					<Alert className="time-alert" color="success">
						Live update in {updateTimeText}
					</Alert>
				);
			} else {
				return (
					<Alert className="time-alert" color="primary">
						Live update in {updateTimeText}
					</Alert>
				);
			}
		}
	};

	standardizeSeconds = (calculatedTime) => {
		if (calculatedTime < 1) {
			return 'less than 1 second';
		}

		return calculatedTime + (calculatedTime === 1 ? ' second' : ' seconds');
	};

	render() {
		const ps1TimeText = this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);

		return (
			<React.Fragment>
				<div className="time-text-container">
					<div>{ps1TimeText}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Time;
