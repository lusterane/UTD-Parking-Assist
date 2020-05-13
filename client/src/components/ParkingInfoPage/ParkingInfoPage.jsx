import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";

//import ParkingStructureGroup from "./ParkingStructureGroup/ParkingStructureGroup";
import ParkingStructureGroup from "./ParkingStructureGroupv2/ParkingStructureGroupv2";
import Time from "./Time/Time";

import "../../styles/shared/LoadingSpinner.css";

class ParkingInfo extends Component {
	state = {
		color: this.props.color,
		timeUpdated: {
			ps1: {
				utc_updated_time: "",
				elapsedTime: 0,
			},
			ps3: {
				utc_updated_time: "",
				elapsedTime: 0,
			},
			ps4: {
				utc_updated_time: "",
				elapsedTime: 0,
			},
		},
	};
	componentDidMount() {
		this.setState({
			updateTimeUpdatedInStateInterval: setInterval(this.updateTimeUpdatedInState, 1000),
		});
		this.handleHTTPGetUpdateTime();
	}

	componentWillUnmount() {
		clearInterval(this.state.updateTimeUpdatedInStateInterval);
	}

	componentDidUpdate() {
		if (this.state.timeUpdated.ps1.elapsedTime === 61) {
			this.handleHTTPGetUpdateTime();
		}
	}

	// updates elapsed time in state
	updateTimeUpdatedInState = () => {
		if (this.props.onlineStatus) {
			let timeUpdated = { ...this.state.timeUpdated };
			Object.entries(this.state.timeUpdated).map((value) => {
				const structure = value[0];
				const time = new Date(value[1].utc_updated_time);
				timeUpdated[structure].elapsedTime = this.computeElapsedTime(time);
			});

			this.setState({ timeUpdated: timeUpdated });
		}
	};

	computeElapsedTime = (time) => {
		const nowTime = new Date();
		return parseInt((nowTime - time) / 1000, 10);
	};

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

	// ran once in initial
	updateTimeFromHTTPResponse = (res) => {
		let timeUpdated = { ...this.state.timeUpdated };
		Object.entries(res.data).map((value) => {
			const structure = value[0];
			const time = new Date(value[1]);
			timeUpdated[structure].utc_updated_time = time;
		});
		this.handleResetElapsedTime();
		this.setState({ timeUpdated: timeUpdated });
	};

	// avoid multiple API calls
	handleResetElapsedTime = () => {
		let timeUpdated = { ...this.state.timeUpdated };
		timeUpdated["ps1"].elapsedTime = 0;
		timeUpdated["ps1"].elapsedTime = 0;
		timeUpdated["ps3"].elapsedTime = 0;
		this.setState({ timeUpdated: timeUpdated });
	};

	render() {
		return (
			<React.Fragment>
				{this.props.isLoaded ? (
					this.props.onlineStatus ? (
						<React.Fragment>
							<ParkingStructureGroup
								timeUpdated={this.state.timeUpdated}
								color={this.state.color}
								onResetElapsedTime={this.handleResetElapsedTime}
							/>
							<Time timeUpdated={this.state.timeUpdated} />
						</React.Fragment>
					) : (
						<h1>OFFLINE</h1>
					)
				) : (
					<div className="spinner-container">
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default ParkingInfo;
