import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import './Time.css';

class Time extends Component {
	state = {
		updateClientTimerInterval: '',
		timerIsLoaded: false,
	};
	getTimeText = (elapsedTime) => {
		if (elapsedTime <= 1) {
			return 'Updated a second ago';
		} else if (elapsedTime > 1 && elapsedTime < 60) {
			return 'Updated ' + elapsedTime + ' seconds ago';
		} else if (elapsedTime === 60) {
			return 'Updated a minute ago';
		} else if (elapsedTime > 60 && elapsedTime < 119) {
			const calcElapsedTime = elapsedTime - 60;
			return 'Updated a minute and ' + calcElapsedTime + ' seconds ago';
		} else if (elapsedTime >= 120) {
			// 2 minutes
			return 'Updated a few minutes ago';
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
