import React, { Component } from 'react';
import axios from 'axios';

import PSCard from './PSCard/PSCard';
import './PSGroup.css';

class PSGroup extends Component {
	state = {
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
		this.handleHTTPGetPS();
	}

	componentDidUpdate() {
		if (this.props.timeUpdated.ps1.elapsedTime === 62) {
			this.setState({ isFetching: true });
			this.handleHTTPGetPS();
		}
	}

	handleHTTPGetPS = () => {
		console.log('HTTP CALL: GET /parkingStructures/');

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
		this.setState({ structures: structures }, this.props.setPSGroupLoadedTrue);
	};

	isRelevantColor = (color) => {
		// cut array to relavent colors
		let colorArr = ['green', 'gold', 'orange', 'purple'];
		const index = colorArr.indexOf(this.props.color) + 1;
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

	getSortedDataArr = (dataArr) => {
		let sortedDataArr = [...dataArr];

		// assign pref score
		sortedDataArr = sortedDataArr.map((element) => {
			const weightedSpots = element.spots / 250;

			let weightedColor = 0;
			switch (element.color) {
				case 'purple':
					weightedColor = 20;
					break;
				case 'orange':
					weightedColor = 15;
					break;
				case 'gold':
					weightedColor = 10;
					break;
				case 'green':
					weightedColor = 5;
					break;
				default:
					weightedColor = 0;
					break;
			}
			return { ...element, score: weightedSpots + weightedColor };
		});

		// sort the array
		sortedDataArr.sort((a, b) => (a.score < b.score ? 1 : -1));

		return sortedDataArr;
	};

	render() {
		const { ps1, ps3, ps4 } = this.state.structures;

		const ps1DataArr = this.getSortedDataArr(ps1.dataArr);
		const ps3DataArr = this.getSortedDataArr(ps3.dataArr);
		const ps4DataArr = this.getSortedDataArr(ps4.dataArr);

		return (
			<React.Fragment>
				<div className="card-group-container">
					<PSCard dataArr={ps1DataArr} structure={'PS1'} />
					<PSCard dataArr={ps3DataArr} structure={'PS3'} />
					<PSCard dataArr={ps4DataArr} structure={'PS4'} />
				</div>
			</React.Fragment>
		);
	}
}

export default PSGroup;