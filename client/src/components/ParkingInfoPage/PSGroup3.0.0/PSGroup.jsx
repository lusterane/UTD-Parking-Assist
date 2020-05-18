import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

import PSCard from './PSCard/PSCard';
import EmptyGroup from './EmptyGroup/EmptyGroup';

import './PSGroup.css';

class PSGroup extends Component {
	state = {
		permit: {
			ps1: {
				dataArr: [
					{ id: 'mongodbid0', structure: 'PS1', spots: 102, color: 'gold', level: '3' },
					{ id: 'mongodbid0', structure: 'PS1', spots: 200, color: 'purple', level: '2' },
					{ id: 'mongodbid0', structure: 'PS1', spots: 201, color: 'green', level: '5' },
				],
			},
			ps3: {
				dataArr: [
					{ id: 'mongodbid0', structure: 'PS3', spots: 5, color: 'purple', level: '2' },
				],
			},
			ps4: { dataArr: [] },
		},
		isLoaded: true,
		color: '',
	};

	componentDidMount() {
		const data = localStorage.getItem('color');
		if (data) {
			this.setState({ color: data });
		}
		//this.handleHTTPGetPermitColor(data);
	}

	componentDidUpdate() {
		// 63 64 65 66
		// inclusive
		const range = [62, 63];
		for (let i = range[0]; i <= range[1]; i++) {
			if (this.props.timeUpdated.ps1.elapsedTime === i) {
				//this.handleHTTPGetPermitColor(this.state.color);
			}
		}
	}

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

	getSortedDataArr = (dataArr, preference) => {
		let sortedDataArr = [...dataArr];

		// preference can be 'spots' or 'color'
		const spotsWeight = preference === 'spots' ? 0.75 : 0.25;
		const colorWeight = 1 - spotsWeight;

		// assign pref score
		sortedDataArr = sortedDataArr.map((element) => {
			const weightedSpots = (element.spots / 250) * spotsWeight;
			let weightedColor = 0;
			switch (element.color) {
				case 'purple':
					weightedColor = 1;
					break;
				case 'orange':
					weightedColor = 0.75;
					break;
				case 'gold':
					weightedColor = 0.5;
					break;
				case 'green':
					weightedColor = 0.25;
					break;
			}
			weightedColor *= colorWeight;
			return { ...element, score: weightedSpots + weightedColor };
		});

		// sort the array
		sortedDataArr.sort((a, b) => (a.score < b.score ? 1 : -1));

		return sortedDataArr;
	};

	render() {
		const { ps1, ps3, ps4 } = this.state.permit;
		const ps1DataArr = this.getSortedDataArr(ps1.dataArr, 'spots');
		const ps3DataArr = this.getSortedDataArr(ps3.dataArr, 'spots');
		const ps4DataArr = this.getSortedDataArr(ps4.dataArr, 'spots');

		return (
			<React.Fragment>
				{this.state.isLoaded ? (
					<div className='card-group-container'>
						<PSCard dataArr={ps1DataArr} />
						<PSCard dataArr={ps3DataArr} />
						<PSCard dataArr={ps4DataArr} />
					</div>
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

export default PSGroup;
