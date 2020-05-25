import React, { Component } from 'react';
import { Alert, UncontrolledTooltip } from 'reactstrap';

import './Time.css';

class Time extends Component {
	state = {
		updateClientTimerInterval: '',
		timerIsLoaded: false,
	};
	getTimeText = (elapsedTime) => {
		const maxTime = 63;
		if (elapsedTime > maxTime) {
			return <Alert color='danger'>Something went wrong. Try refreshing the page</Alert>;
		} else {
			const calculatedTime = maxTime - elapsedTime;
			const updateTimeText = this.standardizeSecondsToMinutes(calculatedTime);

			if (calculatedTime <= 3 || calculatedTime === 0 || calculatedTime >= 60) {
				return <Alert color='success'>Live update in {updateTimeText}</Alert>;
			} else {
				return <Alert color='warning'>Live update in {updateTimeText}</Alert>;
			}
		}
	};

	standardizeSecondsToMinutes = (calculatedTime) => {
		if (calculatedTime < 60) {
			return calculatedTime + ' seconds';
		} else if (calculatedTime === 0 || calculatedTime >= 60) {
			// better ux. change if update is many seconds over minute
			return 'less than 1 second';
		}
		return '-';
	};

	render() {
		const ps1TimeText = this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);
		// const ps3TimeText = this.getTimeText(this.props.timeUpdated.ps3.elapsedTime);
		// const ps4TimeText = this.getTimeText(this.props.timeUpdated.ps4.elapsedTime);

		return (
			<React.Fragment>
				<UncontrolledTooltip placement='top' target='timer'>
					Updates every minute instead of second to conserve server power
				</UncontrolledTooltip>
				<div className='time-text-container' id='timer'>
					<div className='time-text'>{ps1TimeText}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Time;
