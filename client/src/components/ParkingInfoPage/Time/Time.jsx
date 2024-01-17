import React, { Component } from 'react';

import './Time.css';

class Time extends Component {
	state = {
		updateClientTimerInterval: '',
		timerIsLoaded: false,
	};
	getTimeText = (elapsedTime) => {
		if (elapsedTime > 120) {
			return '';
		} else {
			const calculatedTime = Math.min(60 - elapsedTime, 57);
			const updateTimeText = this.standardizeSeconds(calculatedTime);
			return `🚀 Refresh in ${updateTimeText}`;
		}
	};

	standardizeSeconds = (calculatedTime) => {
		if (calculatedTime < 1) {
			return 'less than 1s';
		}

		return calculatedTime + 's';
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
