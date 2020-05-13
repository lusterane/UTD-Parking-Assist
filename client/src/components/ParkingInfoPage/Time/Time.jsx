import React, { Component } from "react";

import "./Time.css";

class Time extends Component {
	state = {
		timeUpdated: {
			ps1: {
				utc_updated_time: "",
				elapsedTime: "",
			},
			ps3: {
				utc_updated_time: "",
				elapsedTime: "",
			},
			ps4: {
				utc_updated_time: "",
				elapsedTime: "",
			},
		},
		updateClientTimerInterval: "",
		onlineStatus: false,
	};

	componentDidMount() {}
	componentWillUnmount() {}

	static getDerivedStateFromProps(props) {
		return { onlineStatus: props.onlineStatus, timeUpdated: props.timeUpdated };
	}

	// checkGetNewData = () => {
	// 	if (this.state.onlineStatus) {
	// 		const timeUpdated = { ...this.state.timeUpdated };

	// 		const ret = Object.entries(timeUpdated).some((ps) => {
	// 			const elapsedTime = ps[1].elapsedTime;
	// 			if (elapsedTime == 60) {
	// 				return true;
	// 			}
	// 		});
	// 		return ret;
	// 	}
	// 	return false;
	// };

	getTimeText = (elapsedTime) => {
		if (!this.state.onlineStatus) {
			return "Server offline right now";
		} else if (elapsedTime <= 1) {
			return "Updated a second ago";
		} else if (elapsedTime >= 60) {
			return "Updated a minute ago";
		}
		return "Updated " + elapsedTime + " seconds ago";
	};

	render() {
		const ps1TimeText = this.getTimeText(this.state.timeUpdated.ps1.elapsedTime);
		const ps3TimeText = this.getTimeText(this.state.timeUpdated.ps3.elapsedTime);
		const ps4TimeText = this.getTimeText(this.state.timeUpdated.ps4.elapsedTime);

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
