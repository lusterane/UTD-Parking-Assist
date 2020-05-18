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
					{ id: 'mongodbid0', structure: 'PS1', spots: 5, color: 'purple', level: '2' },
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

	render() {
		return (
			<React.Fragment>
				{this.state.isLoaded ? (
					<div className='card-group-container'>
						<PSCard dataArr={this.state.permit.ps1.dataArr} />
						<PSCard dataArr={this.state.permit.ps3.dataArr} />
						<PSCard dataArr={this.state.permit.ps4.dataArr} />
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
