import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import './Time.css';

class Time extends Component {
	state = {
		updateClientTimerInterval: '',
		timerIsLoaded: false,
	};
	getTimeText = (elapsedTime) => {
		const maxTime = 63;
		if (elapsedTime > maxTime) {
			return 'Unknown problem, please refresh page';
		} else {
			return 'Live update in ' + this.standardizeSecondsToMinutes(elapsedTime, maxTime);
		}
	};

	standardizeSecondsToMinutes = (elapsedTime, maxTime) => {
		const calculatedTime = maxTime - elapsedTime;
		if (calculatedTime < 60) {
			const calculatedTime = maxTime - elapsedTime;
			return calculatedTime + ' seconds';
		} else if (calculatedTime === 0 || calculatedTime >= 60) {
			// better ux. change if update is many seconds over minute
			return 'less than 1 second';
		}
	};

	render() {
		const ps1TimeText = this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);
		// const ps3TimeText = this.getTimeText(this.props.timeUpdated.ps3.elapsedTime);
		// const ps4TimeText = this.getTimeText(this.props.timeUpdated.ps4.elapsedTime);

		return (
			<React.Fragment>
				<div className='time-text-container'>
					<div className='time-text'>{ps1TimeText}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Time;
