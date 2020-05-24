import React, { Component } from 'react';
import axios from 'axios';

//import ParkingStructureGroup from './ParkingStructureGroupv2/ParkingStructureGroupv2';
import ParkingStructureGroup from './PSGroup3.0.0/PSGroup';
import Time from './Time/Time';
import OfflinePage from './OfflinePage/OfflinePage';
import ColorBlindButton from '../ColorBlindButton/ColorBlindButton';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Footer from '../Footer/Footer';
import ParticlesPage from '../ParticlesPage/ParticlesPage';

import './ParkingInfoPage.css';

class ParkingInfo extends Component {
	state = {
		timeUpdated: {
			ps1: {
				utc_updated_time: '',
				elapsedTime: -1,
			},
			ps3: {
				utc_updated_time: '',
				elapsedTime: -1,
			},
			ps4: {
				utc_updated_time: '',
				elapsedTime: -1,
			},
		},
		timerLoaded: false,
		psGroupLoaded: false,
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
		const range = [62, 63];
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

			this.setState({ timeUpdated: timeUpdated, timerLoaded: true });
		}
	};

	computeElapsedTime = (time) => {
		const nowTime = new Date();
		return parseInt((nowTime - time) / 1000, 10);
	};

	handleHTTPGetUpdateTime = () => {
		console.log('HTTP CALL: GET /parkingStructures/timeUpdated');
		axios
			.get(process.env.REACT_APP_API_ENDPOINT + `parkingStructures/timeUpdated`)
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

	setPSGroupLoadedTrue = () => {
		this.setState({ psGroupLoaded: true });
	};

	render() {
		return (
			<React.Fragment>
				<ColorBlindButton />
				{this.props.onlineStatusLoaded &&
				this.state.timerLoaded &&
				this.state.psGroupLoaded ? (
					''
				) : (
					<LoadingSpinner />
				)}
				{this.props.onlineStatus ? (
					<>
						<div className='parking-info-container'>
							<ParticlesPage parent='ParkingInfoPage' />

							<a href={process.env.PUBLIC_URL + '/'} className='remove-decoration'>
								<i className='fas fa-chevron-left back-route-button'></i>
							</a>
							<div className='parking-info-header'>
								<div className='centered-header'>
									<h1 className={this.props.color + ' title-greeting'}>
										UTD Parking
									</h1>
									<div className='sub-title-greeting'>
										<span>Live parking data at your fingertips</span>
									</div>
								</div>
							</div>
							<div className='parking-data'>
								<Time timeUpdated={this.state.timeUpdated} />
								<ParkingStructureGroup
									setPSGroupLoadedTrue={this.setPSGroupLoadedTrue}
									timeUpdated={this.state.timeUpdated}
									onResetElapsedTime={this.handleResetElapsedTime}
								/>
							</div>
						</div>
						<div id='parking-info-footer-container' className='footer-container'>
							<Footer />
						</div>
					</>
				) : (
					<OfflinePage />
				)}
			</React.Fragment>
		);
	}
}

export default ParkingInfo;
