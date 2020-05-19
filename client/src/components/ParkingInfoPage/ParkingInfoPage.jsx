import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

//import ParkingStructureGroup from './ParkingStructureGroupv2/ParkingStructureGroupv2';
import ParkingStructureGroup from './PSGroup3.0.0/PSGroup';
import Time from './Time/Time';
import OfflinePage from './OfflinePage/OfflinePage';
import ParkingInfoFooter from './ParkingInfoFooter/ParkingInfoFooter';
import Header from '../Header/Header';

import '../../styles/shared/LoadingSpinner.css';
import './ParkingInfoPage.css';

class ParkingInfo extends Component {
	state = {
		timeUpdated: {
			ps1: {
				utc_updated_time: '',
				elapsedTime: 0,
			},
			ps3: {
				utc_updated_time: '',
				elapsedTime: 0,
			},
			ps4: {
				utc_updated_time: '',
				elapsedTime: 0,
			},
		},
		isLoadedTimer: false,
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
		// 63 64 65 66
		// inclusive
		const range = [62, 63];
		// 63, 64 working well 4/14 7:30~
		// 62, 63 working well 4/14 7:30~
		// 61, 62 working for most part. extremely minor hiccup 4/14 8:00~
		// 80 requests: 2 hiccups
		// 62, 63 working well 4/14 8:40~
		// 80 requests: NO hiccups
		for (let i = range[0]; i <= range[1]; i++) {
			if (this.state.timeUpdated.ps1.elapsedTime === i) {
				this.handleResetElapsedTime();
				this.handleHTTPGetUpdateTime();
			}
		}
	}

	// updates elapsed time in state
	updateTimeUpdatedInState = () => {
		if (this.props.onlineStatus) {
			let timeUpdated = { ...this.state.timeUpdated };
			Object.entries(this.state.timeUpdated).forEach((value) => {
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
		console.log('HTTP CALL: GET /parkingStructures/timeUpdated');
		axios
			.get(`http://localhost:5000/parkingStructures/timeUpdated`)
			.then((res) => {
				if (res.status === 200) {
					this.updateTimeFromHTTPResponse(res);
				} else {
					console.log('GET /parkingStructures/timeUpdated ' + res.status);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// ran once in initial
	updateTimeFromHTTPResponse = (res) => {
		let timeUpdated = { ...this.state.timeUpdated };
		Object.entries(res.data).forEach((value) => {
			const structure = value[0];
			const time = new Date(value[1]);
			timeUpdated[structure].utc_updated_time = time;
		});
		this.setState({ timeUpdated: timeUpdated });
	};

	// avoid multiple API calls
	handleResetElapsedTime = () => {
		let timeUpdated = { ...this.state.timeUpdated };
		timeUpdated['ps1'].elapsedTime = 0;
		timeUpdated['ps3'].elapsedTime = 0;
		timeUpdated['ps4'].elapsedTime = 0;
		this.setState({ timeUpdated: timeUpdated });
	};

	render() {
		return (
			<React.Fragment>
				<div className='parking-info-page-container'>
					{this.props.isLoaded ? (
						this.props.onlineStatus ? (
							<React.Fragment>
								<div className='parking-info-container'>
									<i className='fas fa-chevron-left back-route-button'></i>
									<Time
										timeUpdated={this.state.timeUpdated}
										isLoadedTimer={this.state.isLoadedTimer}
									/>
									<ParkingStructureGroup
										timeUpdated={this.state.timeUpdated}
										onResetElapsedTime={this.handleResetElapsedTime}
									/>
									<ParkingInfoFooter />
								</div>
							</React.Fragment>
						) : (
							<OfflinePage />
						)
					) : (
						<div className='spinner-container'>
							<Spinner animation='border' role='status'>
								<span className='sr-only'>Loading...</span>
							</Spinner>
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default ParkingInfo;
