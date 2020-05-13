import React, { Component } from "react";

import "./Time.css";

class Time extends Component {
	state = {
		updateClientTimerInterval: "",
	};

	componentDidMount() {}
	componentWillUnmount() {}

	getTimeText = (elapsedTime) => {
		if (elapsedTime <= 1) {
			return "Updated a second ago";
		} else if (elapsedTime >= 60) {
			return "Updated a minute ago";
		}
		return "Updated " + elapsedTime + " seconds ago";
	};

	render() {
		const ps1TimeText = this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);
		const ps3TimeText = this.getTimeText(this.props.timeUpdated.ps3.elapsedTime);
		const ps4TimeText = this.getTimeText(this.props.timeUpdated.ps4.elapsedTime);

		return (
			<React.Fragment>
				<div className="time-text-container">
					<div className="time-text">{ps1TimeText}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Time;
