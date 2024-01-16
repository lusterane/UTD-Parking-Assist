import React, { Component } from 'react';
import axios from 'axios';

import ParkingStructureGroup from './PSGroup/PSGroup';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

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
		structures: {
			ps1: {
				dataArr: [],
			},
			ps3: {
				dataArr: [],
			},
			ps4: {
				dataArr: [],
			},
		},
	};

	componentDidMount() {
		const data = localStorage.getItem('color');
		if (data) {
			this.setState({ color: data });
		}
		this.setState({
			updateTimeUpdatedInStateInterval: setInterval(this.updateTimeUpdatedInState, 1000),
		});
		this.handleHTTPGetUpdateTime();
		this.handleHTTPGetPS();
	}

	componentWillUnmount() {
		clearInterval(this.state.updateTimeUpdatedInStateInterval);
	}
	componentDidUpdate() {
		if (this.state.timeUpdated.ps1.elapsedTime === 62) {
			this.handleResetElapsedTime();
			this.handleHTTPGetUpdateTime();
			this.handleHTTPGetPS();
		}
	}

	// updates elapsed time in state
	updateTimeUpdatedInState = () => {
		let timeUpdated = { ...this.state.timeUpdated };
		Object.entries(this.state.timeUpdated).forEach((value) => {
			const structure = value[0];
			const time = new Date(value[1].utc_updated_time);
			timeUpdated[structure].elapsedTime = this.computeElapsedTime(time);
		});

		this.setState({ timeUpdated: timeUpdated, timerLoaded: true });
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

	handleHTTPGetPS = () => {
		console.log('HTTP CALL: GET /parkingStructures');

		axios
			.get(process.env.REACT_APP_API_ENDPOINT + `parkingStructures`)
			.then((res) => {
				if (res.status === 200) {
					this.updatePSFromHTTPResponse(res);
				} else {
					console.log('GET /parkingStructures/ ' + res.status);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	updatePSFromHTTPResponse = (res) => {
		let structures = { ...this.state.structures };
		// reset dataArr for each parking structure
		Object.entries(structures).forEach((element) => {
			element[1].dataArr = [];
		});

		res.data.forEach((element) => {
			element.permit_category.forEach((permit) => {
				const { id, level, spots } = permit;
				const color = this.standardizeColorLongToShort(permit.color);

				if (spots !== 0 && this.isRelevantColor(color)) {
					structures[element.structure].dataArr.push({
						id: id,
						color: color,
						level: level,
						spots: spots,
						structure: element.structure.toUpperCase(),
					});
				}
			});
		});
		this.setState({ structures: structures }, this.setPSGroupLoadedTrue);
	};

	isRelevantColor = (color) => {
		// cut array to relavent colors
		let colorArr = ['payBySpace', 'gold', 'orange', 'purple'];
		const index = colorArr.indexOf(this.state.color) + 1;
		colorArr = colorArr.slice(0, index);

		// check if color is in array
		return colorArr.indexOf(color) > -1;
	};

	// returns standardized color. 'Green Permit' -> 'green'
	standardizeColorLongToShort = (color) => {
		switch (color) {
			case 'Green Permit':
				return 'green';
			case 'Gold Permit':
				return 'gold';
			case 'Orange Permit':
				return 'orange';
			case 'Purple Permit':
				return 'purple';
			case 'Pay-By-Space':
				return 'payBySpace';
			default:
				return 'green';
		}
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
		const { color, timeUpdated, psGroupLoaded, structures, timerLoaded } = this.state;
		return (
			<React.Fragment>
				<div className="dark-mode parking-info-page">
					{timerLoaded && psGroupLoaded ? (
						<div>
							<div className="parking-info-content">
								<a
									href={process.env.PUBLIC_URL + '/'}
									className="remove-decoration"
								>
									<i className="fas fa-chevron-left back-route-button"></i>
								</a>
								<div className="parking-info-header">
									<div className="centered-header">
										<h1 className={color}>UTD Parking</h1>
										<div className="sub-title-greeting">
											<span>Park Smarter, Not Harder.</span>
										</div>
									</div>
								</div>
								<div className="parking-data">
									<ParkingStructureGroup
										color={color}
										structures={structures}
										timeUpdated={timeUpdated}
									/>
								</div>
							</div>
						</div>
					) : (
						<LoadingSpinner />
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default ParkingInfo;
