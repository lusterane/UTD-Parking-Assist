import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

import EmptyGroup from './EmptyGroup/EmptyGroup';
import PSCard from './PSCard/PSCard';

import './ParkingStructureGroup.css';

class ParkingStructureGroup extends Component {
	state = {
		permit: {
			green: {
				id: 'mongodbpermitid0',
				textStyle: 'light-text',
				expand: false,
				dataArr: [],
			},
			gold: {
				id: 'mongodbpermitid1',
				textStyle: 'light-text',
				expand: false,
				dataArr: [],
			},
			orange: {
				id: 'mongodbpermitid2',
				textStyle: 'light-text',
				expand: false,
				dataArr: [],
			},
			purple: {
				id: 'mongodbpermitid3',
				textStyle: 'light-text',
				expand: false,
				dataArr: [],
			},
			payBySpace: {
				id: 'mongodbpermitid4',
				textStyle: 'dark-text',
				expand: false,
				dataArr: [],
			},
		},
		isLoaded: false,
		color: '',
	};

	componentDidMount() {
		const data = localStorage.getItem('color');
		if (data) {
			this.setState({ color: data });
		}
		// don't know why I can't do this.handleHTTPGetPermitColor(this.state.color);
		this.handleHTTPGetPermitColor(data);
	}

	componentDidUpdate() {
		// 63 64 65 66
		// inclusive
		const range = [62, 63];
		for (let i = range[0]; i <= range[1]; i++) {
			if (this.props.timeUpdated.ps1.elapsedTime === i) {
				this.handleHTTPGetPermitColor(this.state.color);
			}
		}
	}

	updatePermitsFromHTTPResponse = (res) => {
		let permit = { ...this.state.permit };

		// reset dataArr for all colors
		Object.entries(permit).forEach((element) => {
			element[1].dataArr = [];
		});

		res.data.forEach((permit_entry) => {
			const { id, level, spots, structure } = permit_entry;
			const color = this.standardizeColorLongToShort(permit_entry.color);
			if (spots !== 0) {
				permit[color].dataArr.push({
					id: id,
					spots: spots,
					structure: structure,
					floor: level,
				});
			}
		});

		this.setState({ permit: permit });
		this.setState({ isLoaded: true });
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

	standardizeColorShortToLong = (color) => {
		switch (color) {
			case 'green':
				return 'Green%20Permit';
			case 'gold':
				return 'Gold%20Permit';
			case 'orange':
				return 'Orange%20Permit';
			case 'purple':
				return 'Purple%20Permit';
			case 'pay-by-space':
				return 'Pay-By-Space';
			default:
				return 'Green%20Permit';
		}
	};

	handleHTTPGetPermitColor = (color) => {
		console.log('HTTP CALL: GET /parkingStructures/color/:color');
		// standardize to form 'Green Permit'
		let standardizedColor = this.standardizeColorShortToLong(color);
		axios
			.get(`http://localhost:5000/parkingStructures/color/` + standardizedColor)
			.then((res) => {
				if (res.status === 200) {
					this.updatePermitsFromHTTPResponse(res);
				} else {
					console.log('GET /parkingStructures/color/:color ' + res.status);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleExpandCard = (color) => {
		const editedState = { ...this.state.permit };
		editedState[color].expand = !editedState[color].expand;
		this.setState({ permit: editedState });
	};

	checkEmpty = (permit) => {
		let empty = true;
		Object.values(permit).forEach((element) => {
			if (element.dataArr.length) {
				empty = false;
			}
		});
		return empty;
	};

	render() {
		const { permit } = this.state;
		let empty = this.checkEmpty(permit);
		return (
			<React.Fragment>
				{this.state.isLoaded ? (
					empty ? (
						<EmptyGroup />
					) : (
						<div className='card-container'>
							{Object.keys(permit).map((color, index) => {
								if (permit[color].dataArr.length !== 0) {
									return (
										<PSCard
											key={index}
											cardId={permit[color].id}
											dataArr={permit[color].dataArr}
											textStyle={permit[color].textStyle}
											color={color}
											expand={permit[color].expand}
											onExpandCard={this.handleExpandCard}
										/>
									);
								}
								return '';
							})}
						</div>
					)
				) : (
					<div className='spinner-container'>
						<Spinner animation='border' role='status'>
							<span className='sr-only'>Loading...</span>
						</Spinner>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default ParkingStructureGroup;
