import React, { Component } from "react";
import axios from "axios";

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
		updateDataInterval: "",
		onlineStatus: false,
	};

	componentDidMount() {
		this.handleHTTPGetUpdateTime();
		this.setState({
			updateClientTimerInterval: setInterval(this.updateClientTimer, 1000),
		});
	}

	static getDerivedStateFromProps(props) {
		return { onlineStatus: props.onlineStatus };
	}

	componentWillUnmount() {
		clearInterval(this.state.updateClientTimerInterval);
	}

	componentDidUpdate() {
		if (this.state.timeUpdated.ps1.elapsedTime === 61) {
			this.handleHTTPGetUpdateTime();
		}
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

	handleHTTPGetUpdateTime = () => {
		console.log("HTTP CALL: GET /parkingStructures/timeUpdated");
		axios
			.get(`http://localhost:5000/parkingStructures/timeUpdated`)
			.then((res) => {
				this.updateTimeFromHTTPResponse(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	updateTimeFromHTTPResponse = (res) => {
		let timeUpdated = { ...this.state.timeUpdated };
		Object.entries(res.data).map((value) => {
			const structure = value[0];
			const time = new Date(value[1]);
			timeUpdated[structure].utc_updated_time = time;
			timeUpdated[structure].elapsedTime = 0;
		});

		this.setState({ timeUpdated: timeUpdated });
	};
	updateClientTimer = () => {
		let timeUpdated = { ...this.state.timeUpdated };

		Object.entries(this.state.timeUpdated).map((value) => {
			const structure = value[0];
			const time = new Date(value[1].utc_updated_time);
			timeUpdated[structure].elapsedTime = this.getElapsedTime(time);
		});

		this.setState({ timeUpdated: timeUpdated });
	};

	getElapsedTime = (time) => {
		const nowTime = new Date();

		// seconds elapsed
		return parseInt((nowTime - time) / 1000, 10);
	};

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
