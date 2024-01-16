import React from 'react';
import PSCard from './PSCard/PSCard';
import './PSGroup.css';

const PSGroup = (props) => {
	const getSortedDataArr = (dataArr) => {
		let sortedDataArr = [...dataArr];

		// Assign pref score
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

		// Sort the array
		sortedDataArr.sort((a, b) => (a.score < b.score ? 1 : -1));

		return sortedDataArr;
	};

	const { ps1, ps3, ps4 } = props.structures;

	const ps1DataArr = getSortedDataArr(ps1.dataArr);
	const ps3DataArr = getSortedDataArr(ps3.dataArr);
	const ps4DataArr = getSortedDataArr(ps4.dataArr);

	return (
		<React.Fragment>
			<div className="card-group-container">
				<PSCard dataArr={ps1DataArr} timeUpdated={props.timeUpdated} structure={'PS1'} />
				<PSCard dataArr={ps3DataArr} timeUpdated={props.timeUpdated} structure={'PS3'} />
				<PSCard dataArr={ps4DataArr} timeUpdated={props.timeUpdated} structure={'PS4'} />
			</div>
		</React.Fragment>
	);
};

export default PSGroup;
